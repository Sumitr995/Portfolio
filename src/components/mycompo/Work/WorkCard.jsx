import TechStack from "./TechStack"
import AchievementList from "./AchievementList"

const WorkCard = ({ job }) => {
    return (
        <div className="py-5  border-zinc-800">

            {/* Header */}
            <div className="flex justify-between flex-row flex-wrap gap-2">
                <h2 className="text-lg font-semibold dark:text-zinc-200 text-zinc-700">
                    {job.company}
                </h2>

                <div className="text-right text-xs text-zinc-600">
                    <p>{job.period}</p>
                </div>
            </div>

            {/* Role */}

            <div className="flex  items-center justify-between gap-1 md:flex-row md:items-center md:justify-between">
                <p className="text-xs font-semibold text-zinc-600 mt-1 md:mb-2.5">
                    {job.role}
                </p>

                <p className="text-xs text-left text-zinc-600 md:mt-0">{job.location}</p>
            </div>

            {/* Divider */}
            <div className="border-t dark:border-zinc-800 border-zinc-600  mb-5" />

            {/* Tech */}
            <TechStack technologies={job.technologies} />

            {/* Achievements */}
            <AchievementList achievements={job.achievements} />
        </div>
    )
}

export default WorkCard;