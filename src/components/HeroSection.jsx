import { NavigationBar } from "./NavigationBar";
import { ProfilePicture } from "./ProfilePicture";

export function HeroSection() {
  return (
    <section className="flex flex-col gap-6 w-full">
      <p className="text-muted-foreground text-xs">12345 views</p>
      <div className="flex gap-6 w-full items-center">
        <ProfilePicture />
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold">Johan Philip</h1>
          <p className="text-sm text-muted-foreground">
            Software Engineer, Drummer and an Avid Sports Fanatic
          </p>
        </div>
      </div>
      <p className="text-sm">
        Currently the Director of Frontend Engineering at{" "}
        <span className="font-bold"> &lt; TMU BYTE &gt;</span>. Joining{" "}
        <span className="font-bold"> &lt; SOTI &gt;</span> as a Software
        Engineer in May 2026. Studying Computer Science at{" "}
        <span className="font-bold">
          &lt; Toronto Metropolitan University &gt;
        </span>
      </p>
      <NavigationBar />
    </section>
  );
}
