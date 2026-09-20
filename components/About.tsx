"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";
import { CalendarDays, Code, Layers, User, Users, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import { about } from "../data/content";

const icons: Record<string, LucideIcon> = { calendar: CalendarDays, code: Code, users: Users, layers: Layers };

/** Counts up from 0 when it scrolls into view. */
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, { duration: 1.4, ease: "easeOut", onUpdate: (v) => setN(Math.round(v)) });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-line bg-alt py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-soft">About me</p>
          <h2 id="about-title" className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {about.title}
          </h2>
          <p className="mt-5 max-w-lg text-muted">{about.text}</p>
          <a href="#experience"
            className="mt-7 inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-white/5"
          >
            Learn More About Me <User size={16} aria-hidden />
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="grid grid-cols-2 divide-x divide-y divide-line rounded-2xl border border-line">
            {about.stats.map((s) => {
              const Icon = icons[s.icon] ?? Code;
              return (
                <div key={s.label} className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:p-7">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand/20 text-soft">
                    <Icon size={22} aria-hidden />
                  </span>
                  <div>
                    <dd className="text-3xl font-semibold tabular-nums">
                      <Counter value={s.value} suffix={s.suffix} />
                    </dd>
                    <dt className="text-sm text-muted">{s.label}</dt>
                  </div>
                </div>
              );
            })}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}