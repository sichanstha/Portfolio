import { Briefcase, GraduationCap, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/content";

const icons: Record<string, LucideIcon> = { briefcase: Briefcase, graduation: GraduationCap };

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="border-t border-line bg-alt py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading id="experience-title" eyebrow="My journey" title="Experience and Education" />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {experience.map((e, i) => {
            const Icon = icons[e.icon] ?? Briefcase;
            return (
              <Reveal key={e.title} delay={i * 0.12}>
                <article className="h-full rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-brand/60 sm:p-8">
                  <div className="flex items-start gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand/20 text-soft">
                      <Icon size={22} aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm text-muted">{e.period}</p>
                      <h3 className="text-xl font-semibold">{e.title}</h3>
                      <p className="text-soft">{e.org}</p>
                    </div>
                  </div>
                  <ul className="mt-5 list-disc space-y-2 pl-5 text-muted marker:text-brand">
                    {e.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}