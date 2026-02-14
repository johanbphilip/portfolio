import Image from "next/image";
import { CompanyBadge } from "./CompanyBadge";
import { TechStackBadge } from "./TechStackBadge";

export function ProjectSlot({ project }) {
  return (
    <section className="flex flex-col gap-2.5 py-4 w-full">
      <div className="flex flex-row gap-8 object-cover">
        <Image
          src="/profilepic.png"
          alt="Preview image of the project"
          height={350}
          width={450}
        />
        <div className="flex flex-col gap-2.5">
          <div className="flex flex-col gap-1.5">
            <p className="text-sm text-muted-foreground">{project.date}</p>
            <h3 className="font-semibold text-3xl">{project.title}</h3>
            <div className="flex flex-wrap gap-1.5">
              {project.stackItems.map((stack, index) => (
                <TechStackBadge
                  key={index}
                  icon={stack.icon}
                  stackItem={stack.name}
                />
              ))}
            </div>
          </div>
          <ul className="text-sm">
            {project.description.map((description) => description)}
          </ul>
        </div>
      </div>
    </section>
  );
}
