import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full flex justify-between">
      <p className="font-bold text-3xl">Johan Philip</p>
      <div className="flex gap-6 items-center text-sm">
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
      </div>
    </footer>
  );
}
