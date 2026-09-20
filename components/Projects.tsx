"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects, type Project } from "../data/content";

function Thumb({ p, index }: { p: Project; index: number }) {
  return (
    <div
      className="relative aspect-[16/10] overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${p.color}, #0c1226 75%)` }}
    >
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
        {p.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={p.image} alt={`Screenshot of ${p.name}`} loading="lazy" className="size-full object-cover object-top" />
        ) : (
          <div aria-hidden className="absolute inset-5 flex flex-col gap-2.5 rounded-lg border border-white/15 bg-black/30 p-3.5 backdrop-blur-sm">
            <span className="h-2 w-1/3 rounded bg-white/70" />
            <span className="h-1.5 w-2/3 rounded bg-white/30" />
            <div className="mt-1 grid flex-1 grid-cols-3 gap-2">
              <span className="rounded bg-white/15" />
              <span className="rounded bg-white/10" />
              <span className="rounded bg-white/15" />
            </div>
          </div>
        )}
      </div>
      <span className="absolute left-3 top-3 rounded-md bg-black/50 px-2 py-0.5 text-xs font-medium backdrop-blur">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

export default function Projects() {
  const track = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [scrollable, setScrollable] = useState(true);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setScrollable(max > 4);
    setActive(max <= 0 ? 0 : Math.round((el.scrollLeft / max) * (projects.length - 1)));
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  function goTo(i: number) {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    el.scrollTo({ left: (i / (projects.length - 1)) * max, behavior: "smooth" });
  }

  function step(dir: 1 | -1) {
    const el = track.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 320) + 24), behavior: "smooth" });
  }

  return (
    <section id="projects" aria-labelledby="projects-title" className="border-t border-line py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading id="projects-title" eyebrow="Featured projects" title="Some of My Recent Work" />

        <Reveal delay={0.1} className="mt-14">
          <ul
            ref={track}
            onScroll={update}
            aria-label="Projects"
            className="no-scrollbar -mx-1 flex snap-x snap-mandatory gap-6 overflow-x-auto px-1 pb-4 pt-2"
          >
            {projects.map((p, i) => (
              <motion.li
                key={p.name}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group w-[85%] shrink-0 snap-start sm:w-[calc(50%-0.75rem)] lg:w-[calc((100%-3rem)/3)]"
              >
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-[border-color,box-shadow] duration-300 group-hover:border-brand/60 group-hover:shadow-[0_20px_50px_rgba(124,92,255,0.18)]">
                  <Thumb p={p} index={i} />
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-semibold leading-snug">{p.name}</h3>
                    <p className="mt-2 text-sm text-muted">{p.description}</p>
                    <p className="mt-3 text-xs text-soft">{p.stack.join(" · ")}</p>
                    <div className="mt-auto flex items-center justify-between gap-3 pt-5 text-sm">
                      <span
                        className={
                          p.upcoming ? "rounded-full bg-brand/15 px-3 py-1 text-xs text-soft" : "text-xs text-muted"
                        }
                      >
                        {p.status}
                      </span>
                      <span className="flex items-center gap-4">
                        {p.code && (
                          <a
                            href={p.code}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${p.name} source code`}
                            className="text-muted transition-colors hover:text-fg"
                          >
                            <FaGithub size={18} aria-hidden />
                          </a>
                        )}
                        {p.live && (
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-soft transition-colors hover:text-fg"
                          >
                            View Project <ArrowUpRight size={15} aria-hidden />
                          </a>
                        )}
                      </span>
                    </div>
                  </div>
                </article>
              </motion.li>
            ))}
          </ul>

          {scrollable && (
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous projects"
                className="grid size-10 place-items-center rounded-full border border-line transition-colors hover:bg-white/5"
              >
                <ArrowLeft size={18} aria-hidden />
              </button>
              <div className="flex items-center gap-2">
                {projects.map((p, i) => (
                  <button
                    key={p.name}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Go to project ${i + 1}`}
                    aria-current={i === active}
                    className="grid h-6 place-items-center px-0.5"
                  >
                    <span
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === active ? "w-6 bg-brand" : "w-2 bg-white/20"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next projects"
                className="grid size-10 place-items-center rounded-full border border-line transition-colors hover:bg-white/5"
              >
                <ArrowRight size={18} aria-hidden />
              </button>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}