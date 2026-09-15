type Props = { eyebrow: string; title: string; description: string };

export default function PageIntro({ eyebrow, title, description }: Props) {
  return (
    <section className="page-intro shell">
      <p className="eyebrow reveal">{eyebrow}</p>
      <h1 className="reveal reveal-delay-1">{title}</h1>
      <p className="page-intro-copy reveal reveal-delay-2">{description}</p>
    </section>
  );
}
