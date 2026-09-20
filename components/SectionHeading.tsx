import Reveal from "./Reveal";

type Props = { eyebrow: string; title: string; id?: string; center?: boolean };

export default function SectionHeading({ eyebrow, title, id, center = true }: Props) {
  return (
    <Reveal className={center ? "text-center" : ""}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-soft">{eyebrow}</p>
      <h2 id={id} className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
    </Reveal>
  );
}