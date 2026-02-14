import Link from "next/link";

export function NavigationBar() {
  return (
    <header className="w-full items-center text-sm">
      <nav className="flex gap-6 items-center justify-start">
        <Link href="/" className="link">
          Experience
        </Link>
        <Link href="/projects" className="link active:text-black">
          Projects
        </Link>
        <Link href="/thoughts" className="link">
          Thoughts
        </Link>
        /
        <Link href={`mailto:${process.env.EMAIL_ADDRESS}`} className="link">
          Email
        </Link>
        <Link
          href="https://www.linkedin.com/in/johanbphilip/"
          target="_blank"
          className="link"
        >
          Linkedin
        </Link>
        <Link
          href="https://github.com/johanbphilip"
          target="_blank"
          className="link"
        >
          Github
        </Link>
      </nav>
    </header>
  );
}
