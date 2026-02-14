import { ExperienceSlot } from "@/components/ExperienceSlot";

export default function Home() {
  const jobExperience = [
    {
      title: "Incoming Software Engineer",
      company: "SOTI",
      icon: "/icons/experience/soti.png",
      date: "May 2026 - May 2027",
      description: [<p key={1}>&minus; X-Sight Team</p>],
    },
    {
      title: "Director of Frontend Engineering",
      company: "TMU BYTE",
      icon: "/icons/experience/byte.png",
      date: "July 2025 - Present",
      description: [
        <p key={1}>
          &minus; Led a cross-functional team of 4 engineers and 7 open-source
          contributors, reducing development time by 30% through effective
          coordination and modular frontend architecture.
        </p>,
        <p key={2}>
          &minus; Architected and implemented a scalable React, Tailwind, and
          ShadcnUI frontend for an AI-powered code analysis platform.
        </p>,
        <p key={3}>
          &minus; Streamlined cross-team integration by defining API contracts
          with backend and AI engineers, reducing integration bugs.
        </p>,
        <p key={4}>
          &minus; Built and maintained CI/CD pipelines, and deployment time
          through workflow automation and version control optimization.
        </p>,
        <p key={5}>
          &minus; Mentored junior developers, improving on-boarding efficiency
          by 50% through code review practices and standardized documentation.
        </p>,
      ],
    },
    {
      title: "Vice President of Events",
      company: "TMU AIML Association",
      icon: "/icons/experience/aimla.png",
      date: "October 2024 - June 2025",
      description: [
        <p key={1}>
          &minus; Planned and executed over 10+ AI-focused events, increasing
          student participation by 45% through structured logistics and outreach
          coordination.
        </p>,
        <p key={2}>
          &minus; Streamlined event planning operations using collaborative
          tools and role delegation, cutting preparation time by 20%.
        </p>,
        <p key={3}>
          &minus; Partnered with industry professionals to organize technical
          panels and workshops, boosting member engagement and professional
          networking opportunities.
        </p>,
      ],
    },
  ];
  return (
    <main className="flex flex-col w-full">
      {jobExperience.map((job, index) => (
        <ExperienceSlot key={index} job={job} />
      ))}
    </main>
  );
}
