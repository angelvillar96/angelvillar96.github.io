type Props = {
  eyebrow: string;
  title: string;
  copy?: string;
};

export default function SectionHeading({ eyebrow, title, copy }: Props) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <div>
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
      </div>
    </div>
  );
}
