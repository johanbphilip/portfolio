import { ExperienceSlot } from "@/components/ExperienceSlot";
import { ProjectSlot } from "@/components/ProjectSlot";

export default function Projects() {
  const projects = [
    {
      title: "Clip-It",
      date: "December 2025 - Present",
      stackItems: [
        { name: "OpenAI Whisper", icon: "/icons/tech/openai.png" },
        { name: "ElevenLabs API", icon: "/icons/tech/eleven-labs.png" },
        { name: "Amazon Web Services", icon: "/icons/tech/aws.png" },
        { name: "TypeScript", icon: "/icons/tech/typescript.png" },
        { name: "Supabase", icon: "/icons/tech/supabase.png" },
        { name: "FastAPI", icon: "" },
        { name: "Tailwind", icon: "/icons/tech/tailwind.png" },
      ],
      description: [
        <p key={1}>
          &minus; A project description placeholder that can describe the key
          features or summary of the project and encourage user to check it out.
        </p>,
        <p key={2}>
          &minus; A project description placeholder that can describe the key
          features or summary of the project and encourage user to check it out.
        </p>,
        <p key={3}>
          &minus; A project description placeholder that can describe the key
          features or summary of the project and encourage user to check it out.
        </p>,
      ],
    },
    {
      title: "Quantify - Inventory Management System",
      date: "October 2024 - February 2025",
      stackItems: [
        { name: "NextJS", icon: "/icons/tech/nextjs.png" },
        { name: "TypeScript", icon: "/icons/tech/typescript.png" },
        { name: "Supabase", icon: "/icons/tech/supabase.png" },
        { name: "ExpressJS", icon: "/icons/tech/express.png" },
        { name: "NodeJS", icon: "/icons/tech/nodejs.png" },
        { name: "Tailwind", icon: "/icons/tech/tailwind.png" },
      ],
      description: [
        <p key={1}>
          &minus; Developed a full-stack inventory management system for small
          businesses, cutting administrative work by 50% through real-time stock
          tracking and automated alerts.
        </p>,
        <p key={2}>
          &minus; Implemented a RESTful API with 15+ endpoints using Express and
          Supabase, enabling seamless CRUD operations and robust data
          management.
        </p>,
        <p key={3}>
          &minus; Integrated Supabase authentication with HTTP-only cookies and
          row-level security, ensuring data integrity and security.
        </p>,
        <p key={4}>
          &minus; Helped users improve administrative efficiency by over 100%
          through the creation of a free, open-source solution
        </p>,
      ],
    },
    {
      title: "Ebenezer Duct Cleaning Website",
      date: "May 2025",
      stackItems: [
        { name: "NextJS", icon: "/icons/tech/nextjs.png" },
        { name: "Google Maps API", icon: "/icons/tech/google.png" },
        { name: "Google Reviews API", icon: "/icons/tech/google.png" },
        { name: "Tailwind", icon: "/icons/tech/tailwind.png" },
      ],
      description: [
        <p key={1}>
          &minus; Delivered a high-performance website that improved customer
          engagement by 40% through responsive design and 100% SEO using Server
          Side Rendering.
        </p>,
        <p key={2}>
          &minus; Developed an API endpoint to enable real-time service quote
          submissions, improving conversion rates and lead capture.
        </p>,
        <p key={3}>
          &minus; Integrated Google Reviews API to build credibility and drive
          customer acquisition.
        </p>,
      ],
    },
  ];
  return (
    <main className="flex flex-col w-full">
      {projects.map((project, index) => (
        <ProjectSlot key={index} project={project} />
      ))}
    </main>
  );
}
