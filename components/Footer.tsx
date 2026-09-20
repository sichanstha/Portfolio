import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 text-sm text-muted sm:flex-row sm:justify-between sm:px-8">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p>Built with React and Tailwind CSS.</p>
      </div>
    </footer>
  );
}