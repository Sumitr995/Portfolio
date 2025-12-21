import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function WorkExperience() {
  return (
    <section className="max-w-4xl mx-auto">
      <Accordion type="single" collapsible className="w-full">
        
        {/* ================= UPSURGE ================= */}
        <AccordionItem value="upsurge">
          <AccordionTrigger>
            <div className="flex w-full items-start gap-4  ">
              
              {/* Logo */}
              <div className="h-10 w-10 rounded-3xl bg-zinc-500 flex items-center justify-center text-white">
                <img width={30} src="/GDGC-Logo-bg.png" alt="" />
              </div>

              {/* Role + Company */}
              <div className="flex-1">
                <h3 className="font-semibold text-base ">
                  Google Developers Group OnCampus
                </h3>
                <p className="text-sm text-muted-foreground">
                  Core Team Member & Cloud Team Member
                </p>
              </div>

              {/* Date + Location */}
              <div className="hidden sm:block text-right text-sm text-muted-foreground">
                <p>Sep 2025 - Present</p>
                <p>Malad West, Mumbai</p>
              </div>

            </div>
          </AccordionTrigger>

          <AccordionContent>
            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {["NestJS", "Postman", "TypeScript", "Express"].map((tech) => (
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
              <li>
                Backend development for <b>Bhindi.io</b>, focusing on core
                infrastructure and agent development.
              </li>
              <li>
                Engineered and deployed high-performance agents improving user
                experience.
              </li>
              <li>
                Tested agent functionality, authentication, automation, and
                system stability.
              </li>
              <li>
                Streamlined workflows and maintained detailed technical
                documentation.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* ================= PREPEASY ================= */}
        <AccordionItem value="prepeasy">
          <AccordionTrigger>
            <div className="flex w-full items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-black flex items-center justify-center text-white">
                P
              </div>

              <div className="flex-1">
                <h3 className="font-semibold">Prepeasy</h3>
                <p className="text-sm text-muted-foreground">
                  Founding Engineer
                </p>
              </div>

              <div className="hidden sm:block text-right text-sm text-muted-foreground">
                <p>April 2025 - June 2025</p>
                <p>Remote (India)</p>
              </div>
            </div>
          </AccordionTrigger>

          <AccordionContent>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
              <li>Built MVP features and core product architecture.</li>
              <li>Worked closely with founders on technical decisions.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    </section>
  );
}
