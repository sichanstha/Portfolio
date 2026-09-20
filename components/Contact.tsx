"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Check, Mail, Phone, Quote, Send } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import { profile, testimonial } from "../data/content";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-xl border border-line bg-bg px-4 py-3 text-fg placeholder:text-muted/60 transition focus:border-brand focus:ring-4 focus:ring-brand/20";

const socials = [
  { href: profile.github, label: "GitHub", Icon: FaGithub },
  { href: profile.linkedin, label: "LinkedIn", Icon: FaLinkedinIn },
  { href: profile.instagram, label: "Instagram", Icon: FaInstagram },
].filter((s) => s.href);

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(profile.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden border-t border-line bg-alt py-20 md:py-24">
      <div aria-hidden className="blob left-[15%] top-[-8rem] size-[26rem] opacity-20" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Three-column band */}
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          <Reveal className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-soft">Let&apos;s work together</p>
            <h2 id="contact-title" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mt-4 text-muted">
              I&apos;m always open to discussing new projects and opportunities. Let&apos;s create something amazing together!
            </p>
            <div className="mt-6">
              <Magnetic>
                <a
                  href="#send-message"
                  className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-brand to-brand2 px-6 py-3 font-medium text-white shadow-[0_8px_30px_rgba(124,92,255,0.4)] transition-shadow hover:shadow-[0_8px_40px_rgba(124,92,255,0.65)]"
                >
                  Get In Touch <ArrowUpRight size={18} aria-hidden />
                </a>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-line bg-surface p-6 sm:p-7">
              {testimonial.quote ? (
                <>
                  <Quote size={30} className="text-brand" aria-hidden />
                  <p className="mt-3 text-muted">{testimonial.quote}</p>
                  <p className="mt-5 font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted">{testimonial.role}</p>
                </>
              ) : (
                <>
                  <span className="relative flex size-3">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-70" />
                    <span className="relative inline-flex size-3 rounded-full bg-green-400" />
                  </span>
                  <p className="mt-4 text-xl font-semibold">Open to work</p>
                  <p className="mt-2 text-muted">
                    Available for internships and freelance MERN stack projects. Send a message and let&apos;s talk.
                  </p>
                </>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Follow me</p>
            <ul className="mt-4 flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <motion.a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    whileHover={{ y: -4 }}
                    className="grid size-11 place-items-center rounded-full border border-line text-soft transition-colors hover:border-brand hover:bg-brand/15"
                  >
                    <Icon size={18} aria-hidden />
                  </motion.a>
                </li>
              ))}
            </ul>
            <a href={`mailto:${profile.email}`} className="mt-6 flex items-center gap-3 break-all text-muted transition-colors hover:text-fg">
              <Mail size={18} className="shrink-0 text-brand" aria-hidden />
              {profile.email}
            </a>
            {profile.phone && (
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="mt-3 flex items-center gap-3 text-muted transition-colors hover:text-fg">
                <Phone size={18} className="shrink-0 text-brand" aria-hidden />
                {profile.phone}
              </a>
            )}
          </Reveal>
        </div>

        {/* Form */}
        <Reveal delay={0.1} className="mt-14">
          <div id="send-message" className="scroll-mt-24 rounded-2xl border border-line bg-surface p-6 sm:p-10">
            <h3 className="text-2xl font-semibold">Send a message</h3>
            <form onSubmit={onSubmit} className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                    Name
                  </label>
                  <input id="name" name="name" type="text" required autoComplete="name" className={field} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                    Email
                  </label>
                  <input id="email" name="email" type="email" required autoComplete="email" className={field} />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  Message
                </label>
                <textarea id="message" name="message" rows={5} required className={`${field} resize-y`} />
              </div>
              {/* Spam trap: real visitors never see or fill this. */}
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-brand to-brand2 px-6 py-3 font-medium text-white shadow-[0_8px_30px_rgba(124,92,255,0.4)] transition-shadow hover:shadow-[0_8px_40px_rgba(124,92,255,0.65)] disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send message"} <Send size={18} aria-hidden />
              </button>

              <div aria-live="polite">
                <AnimatePresence mode="wait">
                  {status === "sent" && (
                    <motion.p
                      key="sent"
                      role="status"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-3 rounded-xl border border-green-400/30 bg-green-400/10 px-4 py-3"
                    >
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 14, delay: 0.1 }}
                        className="grid size-6 place-items-center rounded-full bg-green-400 text-black"
                      >
                        <Check size={14} aria-hidden />
                      </motion.span>
                      Message sent. I&apos;ll reply as soon as I can.
                    </motion.p>
                  )}
                  {status === "error" && (
                    <motion.p
                      key="error"
                      role="alert"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3"
                    >
                      The message did not send. Email me at{" "}
                      <a className="font-medium text-soft underline" href={`mailto:${profile.email}`}>
                        {profile.email}
                      </a>{" "}
                      instead.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}