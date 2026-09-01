import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { MorphingText } from "@/components/ui/morphing-text";

const HomeHeading = () => {
  const headingText =
    "I build full-stack web applications with React and Node.js, Express, MongoDB, PostgreSQL focused on clean UI, secure authentication, and cloud-deployed systems that solve real problems end-to-end.";

  return (
    <div>
      <h1 className="mt-0 text-2xl leading-tight font-bold text-transparent bg-linear-to-b from-gray-600 via-gray-700 to-primary dark:from-gray-300 dark:via-gray-200 dark:to-primary bg-clip-text sm:mt-2.5 sm:text-3xl md:text-[3.8rem]">
        {"Hi, I'm Sumit"}
        {" ! "}
        <MorphingText
          texts={[
            "Full Stack Developer.",
            "Software Engineer.",
            "Cloud/DevOps Engineer.",
            "Backend Engineer.",
            "Frontend Engineer.",
          ]}
          className="relative inline-block h-[1.15em] w-[13em] max-w-full translate-y-[0.12em] bg-none bg-clip-border text-left text-2xl leading-tight font-bold text-zinc-500 align-baseline filter-[url(#threshold)_blur(0.6px)] mx-0 sm:text-3xl md:h-[1.15em] md:text-[3.8rem] lg:text-[3.8rem]"
        />
      </h1>

      <TextGenerateEffect
        words={headingText}
        className="mt-0 text-base font-semibold text-justify text-zinc-400 dark:text-zinc-300 sm:mt-5 sm:text-lg"
      />
    </div>
  );
};

export default HomeHeading;
