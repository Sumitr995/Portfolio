import TechStack from "./TechStack"
import AchievementList from "./AchievementList"

const WorkCard = ({ job }) => {
  return (
    <div className="py-10 border-b border-zinc-800">

      {/* Header */}
      <div className="flex justify-between flex-wrap gap-2">
        <h2 className="text-lg font-semibold text-white">
          {job.company}
        </h2>

        <div className="text-right text-xs text-zinc-500">
          <p>{job.period}</p>
          <p className="text-zinc-600">{job.location}</p>
        </div>
      </div>

      {/* Role */}
      <p className="text-xs text-zinc-500 mt-1 mb-5">
        {job.role}
      </p>

      {/* Divider */}
      <div className="border-t border-zinc-800 mb-5" />

      {/* Tech */}
      <TechStack technologies={job.technologies} />

      {/* Achievements */}
      <AchievementList achievements={job.achievements} />
    </div>
  )
}

export default WorkCard;