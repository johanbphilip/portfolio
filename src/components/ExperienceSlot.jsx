import { CompanyBadge } from "./CompanyBadge";

export function ExperienceSlot({ job }) {
  return (
    <section
      className="flex flex-col gap-2.5 py-4 w-full"
      id={job.company.replace(/\s/g, "-")}
    >
      <div className="flex flex-col gap-2.5">
        <div className="flex flex-row justify-between items-center">
          <h3 className="font-semibold text-xl">{job.title}</h3>
          <p className="text-sm text-muted-foreground">{job.date}</p>
        </div>
        <CompanyBadge company={job.company} icon={job.icon} />
        <ul className="text-sm">
          {job.description.map((description) => description)}
        </ul>
      </div>
    </section>
  );
}
