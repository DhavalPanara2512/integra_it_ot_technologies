export default function SectionHeading({ eyebrow, title, body, align = "left" }) {
  return (
    <div className={`space-y-3 ${align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-5xl"}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="section-title">{title}</h2>
      {body ? <p className="section-copy">{body}</p> : null}
    </div>
  );
}

