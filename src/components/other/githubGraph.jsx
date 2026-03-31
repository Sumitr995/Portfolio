import { useEffect, useMemo, useState } from "react";
import data from "@/Data/Data.json";

export default function GitHubGraph({ username, accessToken, className = "" }) {
  const [contributions, setContributions] = useState([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [streak, setStreak] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const githubProfile = data.basics.profiles.github;

  const DAYS = ["Mon", "", "Wed", "", "Fri", ""];
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const LEVEL_FILL_CLASSES = useMemo(
    () => [
      "fill-zinc-300 dark:fill-zinc-800",
      "fill-primary/25",
      "fill-primary/45",
      "fill-primary/70",
      "fill-primary",
    ],
    []
  );

  const LEVEL_BG_CLASSES = useMemo(
    () => [
      "bg-zinc-300 dark:bg-zinc-800",
      "bg-primary/25",
      "bg-primary/45",
      "bg-primary/70",
      "bg-primary",
    ],
    []
  );

  const CELL_STROKE_CLASS = useMemo(
    () => "stroke-zinc-500/25 dark:stroke-zinc-700/60",
    []
  );

  const getMonthLabels = () => {
    const labels = [];
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 364);

    let currentMonth = "";
    for (let i = 0; i < 53; i++) {
      const weekDate = new Date(startDate);
      weekDate.setDate(startDate.getDate() + i * 7);
      const month = MONTHS[weekDate.getMonth()];

      if (month !== currentMonth) {
        labels.push({ month, index: i });
        currentMonth = month;
      }
    }
    return labels;
  };

  const getLevel = (count) => {
    if (count === 0) return 0;
    if (count <= 2) return 1;
    if (count <= 5) return 2;
    if (count <= 8) return 3;
    return 4;
  };

  const calculateStreak = (weeks) => {
    const allDays = [];
    weeks.forEach((week) => {
      allDays.push(...week.contributionDays);
    });

    const sorted = allDays.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    let streak = 0;
    for (const day of sorted) {
      if (day.contributionCount > 0) streak++;
      else break;
    }

    return streak;
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!accessToken) {
        setError("GitHub token required");
        setIsLoading(false);
        return;
      }

      try {
        const res = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            Authorization: `bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `
              query($login: String!) {
                user(login: $login) {
                  contributionsCollection {
                    contributionCalendar {
                      totalContributions
                      weeks {
                        contributionDays {
                          date
                          contributionCount
                          color
                        }
                      }
                    }
                  }
                }
              }
            `,
            variables: { login: username },
          }),
        });

        const json = await res.json();

        const calendar =
          json?.data?.user?.contributionsCollection?.contributionCalendar;

        if (!calendar) throw new Error("No data");

        setContributions(calendar.weeks);
        setTotalContributions(calendar.totalContributions);
        setStreak(calculateStreak(calendar.weeks));
      } catch (err) {
        console.error(err);
        setError("Failed to load contributions");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [username, accessToken]);

  const monthLabels = getMonthLabels();

  const cellSize = 10;
  const gap = 2;
  const totalWidth = cellSize + gap;
  const left = 30;
  const top = 20;

  const width = contributions.length * totalWidth + left;
  const height = 7 * cellSize + 6 * gap + 30;

  const skeletonWeeks = useMemo(() => {
    const WEEKS = 53;
    const DAYS = 7;

    return Array.from({ length: WEEKS }, (_, wi) => ({
      contributionDays: Array.from({ length: DAYS }, (_, di) => ({
        date: `s-${wi}-${di}`,
        contributionCount: (wi * 3 + di * 2) % 10,
      })),
    }));
  }, []);

  const renderCalendarSvg = (weeks, { showTitle = true } = {}) => {
    const svgWidth = weeks.length * totalWidth + left;
    const svgHeight = 7 * cellSize + 6 * gap + 30;
    const labels = getMonthLabels();

    return (
      <svg width="100%" height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
        <g transform={`translate(${left}, ${top})`}>
          {/* Days */}
          {DAYS.map((d, i) => (
            <text
              key={i}
              x={-6}
              y={i * (cellSize + gap) + cellSize / 1.5}
              textAnchor="end"
              className="text-[10px] fill-zinc-400 dark:fill-zinc-500"
            >
              {d}
            </text>
          ))}

          {/* Months */}
          {labels.map((m, i) => (
            <text
              key={i}
              x={m.index * totalWidth}
              y={-6}
              className="text-[10px] fill-zinc-400 dark:fill-zinc-500"
            >
              {m.month}
            </text>
          ))}

          {/* Grid */}
          {weeks.map((week, wi) => (
            <g key={wi} transform={`translate(${wi * totalWidth},0)`}>
              {week.contributionDays.map((day, di) => {
                const level = getLevel(day.contributionCount);
                const fillClass = LEVEL_FILL_CLASSES[level] ?? LEVEL_FILL_CLASSES[0];

                return (
                  <rect
                    key={day.date}
                    x={0}
                    y={di * (cellSize + gap)}
                    width={cellSize}
                    height={cellSize}
                    rx={2}
                    strokeWidth={0.75}
                    className={`${fillClass} ${CELL_STROKE_CLASS}`}
                  >
                    {showTitle ? (
                      <title>
                        {day.date}: {day.contributionCount}
                      </title>
                    ) : null}
                  </rect>
                );
              })}
            </g>
          ))}
        </g>
      </svg>
    );
  };

  if (isLoading) {
    return (
      <div className={`w-full ${className}`}>
        <div className="relative rounded-xl p-4 overflow-hidden">
          {/* Soft background so the skeleton doesn't feel empty */}
          <div className="absolute inset-0 bg-zinc-100/70 dark:bg-zinc-900/20" />

          {/* Stat placeholders (match final positions) */}
          <div className="absolute top-0 right-4 h-4 w-40 bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
          <div className="absolute bottom-3 right-4 h-3 w-24 bg-zinc-200 dark:bg-zinc-800 animate-pulse" />

          <div className="relative">
            {/* Calendar skeleton */}
            <div className="animate-pulse opacity-80">
              {renderCalendarSvg(skeletonWeeks, { showTitle: false })}
            </div>

            {/* Legend (keep same as final for layout stability) */}
            <div className="flex items-center gap-2 mt-3 text-xs text-zinc-500">
              <span>Less</span>
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-sm ${LEVEL_BG_CLASSES[i] ?? LEVEL_BG_CLASSES[0]}`}
                />
              ))}
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`w-full ${className}`}>
        <div className="rounded-3xl  p-4">
          <div className="h-24 flex items-center justify-center text-sm text-zinc-500">
            {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      <div className="relative rounded-xl p-4">
        {renderCalendarSvg(contributions)}

        {/* Footer */}
        <div className="flex items-center gap-2 mt-3 text-xs text-zinc-500">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-sm ${LEVEL_BG_CLASSES[i] ?? LEVEL_BG_CLASSES[0]}`}
            />
          ))}
          <span>More</span>
        </div>

        {/* Stats */}
        <div className="absolute top-0 right-4 text-sm text-zinc-500">
          {totalContributions} <a href={githubProfile} target="_blank" rel="noopener noreferrer" className=" cursor-pointer hover:underline">contributions</a>
        </div>

        <div className="absolute bottom-3 right-4 text-xs text-zinc-500">
          {streak > 0 ? `${streak} day streak` : "No streak"}
        </div>
      </div>
    </div>
  );
}