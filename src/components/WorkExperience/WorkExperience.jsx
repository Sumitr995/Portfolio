import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import data from "@/Data/Data.json";

export default function WorkExperience() {

  const workExperiences = data.workExperience;
  console.log(workExperiences[0].techStack);
  return (
    <section className="max-w-4xl mx-auto">
      <Accordion type="single" collapsible className="w-full">
        
        {/* ================= GDGC CLOUD ================= */}  
        <AccordionItem value="GDGC Cloud">
          <AccordionTrigger>
            <div className="flex w-full items-start gap-4  ">
              
              {/* Logo */}
              <div className="h-10 w-10 rounded-3xl border flex items-center justify-center">
                <img width={30} src={workExperiences[0].imageUrl} alt="GDGC Logo" />
              </div>

              {/* Role + Company */}
              <div className="flex-1">
                <h3 className="font-semibold text-base ">
                  {workExperiences[0].organization}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {workExperiences[0].role}
                </p>
              </div>

              {/* Date + Location */}
              <div className="hidden sm:block text-right text-sm text-muted-foreground">
                <p>{workExperiences[0].startDate} - {workExperiences[0].endDate}</p>
                <p>{workExperiences[0].location}</p>
              </div>

            </div>
          </AccordionTrigger>

          <AccordionContent>
            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {Object.entries(workExperiences[0].techStack).map(([tech, icon]) => (
                <span
                  key={tech}
                  className="rounded-full border px-3 py-1 text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Bullet points */}
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
              {Object.entries(workExperiences[0].work).map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        {/* ================= GDGC WEB ================= */}
        <AccordionItem value="GDGC web">
          <AccordionTrigger>
            <div className="flex w-full items-start gap-4">
              <div className="h-10 w-10 rounded-3xl border flex items-center justify-center">
                <img width={30} src={workExperiences[1].imageUrl} alt="GDGC Logo" />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold">{workExperiences[1].organization}</h3>
                <p className="text-sm text-muted-foreground">
                  {workExperiences[1].role}
                </p>
              </div>

              <div className="hidden sm:block text-right text-sm text-muted-foreground">
                <p>{workExperiences[1].startDate} - {workExperiences[1].endDate}</p>
                <p>{workExperiences[1].location}</p>
              </div>
            </div>
          </AccordionTrigger>

          <AccordionContent>

            {/* TechStack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {Object.entries(workExperiences[1].techStack).map(([tech, icon]) => (
                <span
                  key={tech}
                  className="rounded-full border px-3 py-1 text-xs font-medium"
                >
                  <img src={icon} alt={tech} className="w-4 h-4" />
                  {tech}
                </span>
              ))}
            </div>

            {/* Bullet points */}
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
              {Object.entries(workExperiences[1].highlights).map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    </section>
  );
}
