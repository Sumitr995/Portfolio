import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { workData } from "@/Data/WorkData";
import { contrastClassFor } from "@/Utils/techIconUtils";

export default function WorkExperience() {

  const workExperiences = workData;

  return (<>
    <div className='text-sm font-semibold dark:text-zinc-700 text-zinc-300'>Featured</div>
    <div className='text-zinc-500 dark:text-zinc-300 font-bold text-2xl '>Experience</div>
    <section className="max-w-4xl mx-auto">
      <Accordion type="single" collapsible className="w-full">

        {workExperiences.map((experience, index) => (
          <AccordionItem
            key={`${experience.company}-${experience.role}-${index}`}
            value={`${experience.company}-${experience.role}-${index}`}
          >
            <AccordionTrigger>
              <div className="flex w-full items-start gap-4">
                {/* Logo */}
                <div className="h-10 w-10 rounded-3xl border flex items-center justify-center overflow-hidden">
                  {experience.imageUrl ? (
                    <img width={30} src={experience.imageUrl} alt={`${experience.company} Logo`} />
                  ) : (
                    <span className="text-xs font-semibold text-muted-foreground">
                      {(experience.company || "").split(" ").slice(0, 2).map((w) => w[0]).join("")}
                    </span>
                  )}
                </div>

                {/* Role + Company */}
                <div className="flex-1">
                  <h3 className="font-semibold text-base">
                    {experience.company}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {experience.role}
                  </p>
                </div>

                {/* Date + Location */}
                <div className="hidden sm:block text-right text-sm text-muted-foreground">
                  <p>{experience.period}</p>
                  <p>{experience.location}</p>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {(experience.technologies || []).map((tech) => (
                  <span
                    key={tech.name}
                    className="flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium"
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className={`w-4 h-4 object-contain ${contrastClassFor(tech.name)}`}
                    />
                    {tech.name}
                  </span>
                ))}
              </div>

              {/* Bullet points */}
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                {(experience.achievements || []).map((achievement, achievementIndex) => (
                  <li key={achievementIndex}>{achievement}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}

      </Accordion>
    </section>
  </>
  );
}
