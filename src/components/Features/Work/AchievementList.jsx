const AchievementList = ({ achievements }) => {
  return (
    <div>
      <p className="text-xs font-semibold text-zinc-700  dark:text-zinc-300 mb-2">
        What I've done
      </p>

      <ul className="space-y-2">
        {achievements.map((item, i) => (
          <li
            key={i}
            className="flex gap-2 text-xs text-zinc-400 leading-relaxed"
          >
            <span className="text-zinc-600 mt-1.25 text-[8px]">▪</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AchievementList;