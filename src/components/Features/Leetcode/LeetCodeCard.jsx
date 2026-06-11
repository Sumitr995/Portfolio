import { useEffect, useMemo, useState } from "react";
import { getLeetCodeData } from "@/Utils/LeetCodeInfo";

function stripHtml(value) {
	return String(value ?? "")
		.replace(/<[^>]*>/g, " ")
		.replace(/\s+/g, " ")
		.trim();
}

export default function LeetCodeCard({ username = "Sumitr995", className = "" }) {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		let cancelled = false;

		const load = async () => {
			setIsLoading(true);
			setError(null);

			try {
				const result = await getLeetCodeData(username);
				if (!cancelled) setData(result);
			} catch (err) {
				console.error(err);
				if (!cancelled) setError("Failed to load LeetCode profile");
			} finally {
				if (!cancelled) setIsLoading(false);
			}
		};

		load();
		return () => {
			cancelled = true;
		};
	}, [username]);

	const profile = data?.profile;
	const solved = data?.solved;
	const contest = data?.contest;
	const badges = data?.badges;
	const submissions = data?.submissions;
	const skills = data?.skills;
	const languages = data?.languages;

	const about = useMemo(() => stripHtml(profile?.about || profile?.aboutMe), [profile?.about, profile?.aboutMe]);

	const solvedStats = useMemo(() => {
		const easy = Number(solved?.easySolved ?? solved?.easy ?? solved?.Easy ?? 0) || 0;
		const medium = Number(solved?.mediumSolved ?? solved?.medium ?? solved?.Medium ?? 0) || 0;
		const hard = Number(solved?.hardSolved ?? solved?.hard ?? solved?.Hard ?? 0) || 0;
		const total = Number(solved?.totalSolved ?? solved?.total ?? solved?.Total ?? easy + medium + hard) || 0;
		return { total, easy, medium, hard };
	}, [solved]);

	const contestStats = useMemo(() => {
		const rating = contest?.contestRating ?? contest?.rating ?? null;
		const globalRank = contest?.contestGlobalRanking ?? contest?.globalRanking ?? contest?.globalRank ?? null;
		const attended = contest?.attendedContestsCount ?? contest?.attended ?? contest?.attendedContests ?? null;
		return {
			rating: rating ?? "—",
			globalRank: globalRank ?? "—",
			attended: attended ?? "—",
		};
	}, [contest]);

	const badgeList = useMemo(() => {
		if (Array.isArray(badges)) return badges;
		if (Array.isArray(badges?.badges)) return badges.badges;
		return [];
	}, [badges]);

	const recentSubmissions = useMemo(() => {
		if (Array.isArray(submissions)) return submissions;
		if (Array.isArray(submissions?.submission)) return submissions.submission;
		if (Array.isArray(submissions?.submissions)) return submissions.submissions;
		return [];
	}, [submissions]);

	const skillList = useMemo(() => {
		if (Array.isArray(skills)) return skills;
		if (Array.isArray(skills?.skills)) return skills.skills;
		return [];
	}, [skills]);

	const languageList = useMemo(() => {
		if (Array.isArray(languages)) return languages;
		if (Array.isArray(languages?.languages)) return languages.languages;
		return [];
	}, [languages]);

	const displayName = profile?.name || profile?.realName || profile?.username || "LeetCode";
	const avatar = profile?.avatar || profile?.userAvatar || profile?.profile?.userAvatar || null;
	const ranking = profile?.ranking ?? profile?.rank ?? "—";
	const reputation = profile?.reputation ?? "—";
	const stars = profile?.starRating ?? profile?.stars ?? "—";

	return (
		<section
			className={
				"mt-2 rounded-3xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-4 sm:p-5 " +
				className
			}
		>
			<div className="flex items-start justify-between gap-4">
				<div className="flex items-center gap-3 min-w-0">
					<div className="h-11 w-11 rounded-2xl border border-zinc-200 dark:border-zinc-700 overflow-hidden bg-zinc-100 dark:bg-zinc-800 shrink-0">
						{avatar ? (
							<img src={avatar} alt={displayName} className="h-full w-full object-cover" loading="lazy" />
						) : null}
					</div>

					<div className="min-w-0">
						<div className="font-semibold text-zinc-900 dark:text-zinc-100 truncate">{displayName}</div>
						<a
							className="text-xs text-zinc-500 hover:underline dark:text-zinc-400 truncate block"
							href={`https://leetcode.com/u/${username}/`}
							target="_blank"
							rel="noreferrer"
							title={`@${username}`}
						>
							@{username}
						</a>
					</div>
				</div>

				<div className="text-right">
					<div className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Ranking</div>
					<div className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">{ranking}</div>
				</div>
			</div>

			{isLoading ? (
				<div className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">Loading LeetCode profile…</div>
			) : error ? (
				<div className="mt-4 text-sm text-red-500">{error}</div>
			) : (
				<>
					{about ? (
						<p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">{about}</p>
					) : null}

					<div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
						<div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 px-3 py-2">
							<div className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Total</div>
							<div className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">{solvedStats.total}</div>
						</div>
						<div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 px-3 py-2">
							<div className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Easy</div>
							<div className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">{solvedStats.easy}</div>
						</div>
						<div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 px-3 py-2">
							<div className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Medium</div>
							<div className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">{solvedStats.medium}</div>
						</div>
						<div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 px-3 py-2">
							<div className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Hard</div>
							<div className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">{solvedStats.hard}</div>
						</div>
					</div>

					<div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-600 dark:text-zinc-300">
						<span className="rounded-full border border-zinc-200 dark:border-zinc-700 px-3 py-1">
							Contest rating: <span className="font-semibold">{contestStats.rating}</span>
						</span>
						<span className="rounded-full border border-zinc-200 dark:border-zinc-700 px-3 py-1">
							Global rank: <span className="font-semibold">{contestStats.globalRank}</span>
						</span>
						<span className="rounded-full border border-zinc-200 dark:border-zinc-700 px-3 py-1">
							Contests: <span className="font-semibold">{contestStats.attended}</span>
						</span>
						<span className="rounded-full border border-zinc-200 dark:border-zinc-700 px-3 py-1">
							Reputation: <span className="font-semibold">{reputation}</span>
						</span>
						<span className="rounded-full border border-zinc-200 dark:border-zinc-700 px-3 py-1">
							Stars: <span className="font-semibold">{stars}</span>
						</span>
					</div>

					{badgeList.length > 0 ? (
						<div className="mt-4">
							<div className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Badges</div>
							<div className="mt-2 flex flex-wrap gap-2">
								{badgeList.slice(0, 10).map((badge, idx) => (
									<div
										key={badge?.id ?? badge?.name ?? badge?.displayName ?? idx}
										className="flex items-center gap-2 rounded-2xl border border-zinc-200 dark:border-zinc-700 px-3 py-2"
										title={badge?.displayName ?? badge?.name ?? "Badge"}
									>
										{badge?.icon ? (
											<img
												src={badge.icon}
												alt={badge?.displayName ?? badge?.name ?? "Badge"}
												className="h-6 w-6 object-contain"
												loading="lazy"
											/>
										) : null}
										<div className="text-xs text-zinc-700 dark:text-zinc-200 max-w-55 truncate">
											{badge?.displayName ?? badge?.name ?? "Badge"}
										</div>
									</div>
								))}
							</div>
						</div>
					) : null}

					{recentSubmissions.length > 0 ? (
						<div className="mt-5">
							<div className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Recent submissions</div>
							<div className="mt-2 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-700">
								<div className="divide-y divide-zinc-200 dark:divide-zinc-700">
									{recentSubmissions.slice(0, 10).map((item, idx) => {
										const title = item?.title || item?.problemTitle || item?.questionTitle || item?.name || "Submission";
										const status = item?.statusDisplay || item?.status || item?.result || "—";
										const lang = item?.lang || item?.language || "";
										const timestamp = item?.timestamp || item?.time || item?.date || null;

										return (
											<div key={item?.id ?? item?.submissionId ?? idx} className="px-3 py-2 sm:px-4 sm:py-3">
												<div className="flex items-start justify-between gap-3">
													<div className="min-w-0">
														<div className="text-sm font-medium text-zinc-800 dark:text-zinc-100 truncate">{title}</div>
														<div className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400 truncate">
															{[status, lang].filter(Boolean).join(" • ")}
														</div>
													</div>
													{timestamp ? (
														<div className="text-xs text-zinc-400 dark:text-zinc-500 shrink-0">{String(timestamp)}</div>
													) : null}
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					) : null}

					{skillList.length > 0 || languageList.length > 0 ? (
						<div className="mt-5">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
								<div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 p-3">
									<div className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Skills</div>
									<div className="mt-2 flex flex-wrap gap-2">
										{skillList.slice(0, 12).map((s, idx) => {
											const label = s?.tagName || s?.name || s?.skill || String(s ?? "");
											return (
												<span
													key={s?.id ?? label ?? idx}
													className="rounded-full border border-zinc-200 dark:border-zinc-700 px-3 py-1 text-xs text-zinc-700 dark:text-zinc-200"
												>
													{label}
												</span>
											);
										})}
									</div>
								</div>

								<div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 p-3">
									<div className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Languages</div>
									<div className="mt-2 flex flex-wrap gap-2">
										{languageList.slice(0, 12).map((l, idx) => {
											const label = l?.languageName || l?.name || l?.lang || String(l ?? "");
											return (
												<span
													key={l?.id ?? label ?? idx}
													className="rounded-full border border-zinc-200 dark:border-zinc-700 px-3 py-1 text-xs text-zinc-700 dark:text-zinc-200"
												>
													{label}
												</span>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					) : null}
				</>
			)}
		</section>
	);
}
