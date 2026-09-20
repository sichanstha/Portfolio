"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "motion/react";
import SectionHeading from "./SectionHeading";
import { techIcons } from "./icons";
import { skills } from "../data/content";

type Skill = (typeof skills)[number];

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);
  const delay = (index % 3) * 0.12;
  const t = techIcons[skill.icon];

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, skill.level, {
      duration: 1.3,
      delay,
      ease: [0.2, 0.7, 0.2, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, skill.level, delay]);

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-3 font-medium">
          {t && <t.Icon size={22} color={t.color} aria-hidden />}
          {skill.name}
        </span>
        <span className="text-sm tabular-nums text-muted">{n}%</span>
      </div>
      <div
        role="progressbar"
        aria-label={`${skill.name} level`}
        aria-valuenow={skill.level}
        aria-valuemin={0}
        aria-valuemax={100}
        className="mt-3 h-2 overflow-hidden rounded-full bg-white/10"
      >
        <motion.div
          className="h-full rounded-full bg-linear-to-r from-brand to-brand2"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.level}%` : 0 }}
          transition={{ duration: 1.3, delay, ease: [0.2, 0.7, 0.2, 1] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="border-t border-line py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading id="skills-title" eyebrow="My skills" title="Technologies I Master" />
        <div className="mt-14 grid gap-x-12 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <SkillBar key={s.name} skill={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}