"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, Download } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Magnetic from "./Magnetic";
import { techIcons } from "./icons";
import { codeCard, heroTech, profile } from "../data/content";

const ease = [0.2, 0.7, 0.2, 1] as const;
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease },
});

const outlineBtn =
  "inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-medium transition-colors hover:bg-white/5";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  // The purple spotlight follows the mouse (mouse only).
  function onMove(e: React.PointerEvent<HTMLElement>) {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <section
      id="top"
      ref={ref}
      onPointerMove={onMove}
      aria-label="Introduction"
      className="relative isolate overflow-hidden pb-20 pt-12 md:pb-28 md:pt-20"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="spotlight absolute inset-0" />
        <div className="blob -left-24 top-10 size-96" />
        <div className="blob -right-20 bottom-0 size-[26rem] bg-brand2" style={{ animationDelay: "-8s" }} />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        {/* Text */}
        <div>
          <motion.p
            {...rise(0.05)}
            className="inline-block rounded-md border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-soft"
          >
            {profile.badge}
          </motion.p>

          <motion.h1
            {...rise(0.15)}
            className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
            <span className="mt-3 block text-3xl sm:text-4xl">{profile.headline}</span>
          </motion.h1>

          <motion.p {...rise(0.3)} className="mt-6 max-w-xl text-lg text-muted">
            {profile.intro}
          </motion.p>

          <motion.div {...rise(0.42)} className="mt-8 flex flex-wrap gap-3">
            <Magnetic>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-brand to-brand2 px-6 py-3 font-medium text-white shadow-[0_8px_30px_rgba(124,92,255,0.4)] transition-shadow hover:shadow-[0_8px_40px_rgba(124,92,255,0.65)]"
              >
                View My Work <ArrowUpRight size={18} aria-hidden />
              </a>
            </Magnetic>
            <Magnetic>
              {profile.resumeUrl ? (
                <a href={profile.resumeUrl} download className={outlineBtn}>
                  Download CV <Download size={18} aria-hidden />
                </a>
              ) : (
                <a href={profile.github} target="_blank" rel="noreferrer" className={outlineBtn}>
                  <FaGithub size={18} aria-hidden /> GitHub
                </a>
              )}
            </Magnetic>
          </motion.div>

          <motion.div {...rise(0.55)} className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Technologies I work with</p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-4">
              {heroTech.map((key, i) => {
                const t = techIcons[key];
                if (!t) return null;
                return (
                  <motion.li
                    key={key}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.06, type: "spring", stiffness: 300, damping: 18 }}
                    whileHover={{ y: -5, scale: 1.15 }}
                  >
                    <t.Icon size={30} color={t.color} title={t.label} aria-label={t.label} />
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </div>

        {/* Photo + code card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="relative mx-auto aspect-square w-full max-w-[26rem] lg:max-w-[30rem]"
        >
          <div aria-hidden className="orbit absolute inset-0 rounded-full border border-dashed border-soft/30" />
          <div aria-hidden className="dots absolute -right-2 top-0 h-20 w-24 opacity-60" />

          <div className="absolute inset-[9%] overflow-hidden rounded-full bg-linear-to-br from-brand to-brand2 shadow-[0_0_120px_rgba(124,92,255,0.45)]">
            {profile.photo ? (
              <Image
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                sizes="(min-width: 1024px) 420px, 80vw"
                className="object-cover object-top"
              />
            ) : (
              <svg viewBox="0 0 200 200" aria-hidden className="absolute inset-0 size-full">
                <circle cx="100" cy="82" r="34" fill="#0b1030" opacity="0.85" />
                <path d="M30 200c0-44 30-70 70-70s70 26 70 70z" fill="#0b1030" opacity="0.85" />
              </svg>
            )}
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 right-0 w-[21rem] max-w-full rounded-xl border border-line bg-surface/90 shadow-2xl backdrop-blur sm:w-[24rem]"
          >
            <div className="flex items-center justify-between border-b border-line px-4 py-2 text-xs text-muted">
              <span>&lt;/&gt; Code</span>
              <span aria-hidden className="size-2 rounded-full bg-green-400" />
            </div>
            <pre className="overflow-hidden px-4 py-3 font-mono text-[11px] leading-relaxed sm:text-xs">
              <code>
                <span className="text-soft">const</span> developer = {"{"}
                {"\n  "}name: <span className="text-amber-300">&quot;{codeCard.name}&quot;</span>,
                {"\n  "}skills: [
                {codeCard.skills.map((s, i) => (
                  <span key={s}>
                    {i > 0 && ", "}
                    <span className="text-amber-300">&quot;{s}&quot;</span>
                  </span>
                ))}
                ],
                {"\n  "}passion: <span className="text-amber-300">&quot;{codeCard.passion}&quot;</span>
                {"\n"}
                {"};"}
              </code>
            </pre>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}