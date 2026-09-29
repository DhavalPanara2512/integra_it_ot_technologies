import useScrollReveal from "../../hooks/useScrollReveal";

export default function SectionHeading({ eyebrow, title, body, align = "left", revealType = "mask" }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`space-y-3 ${
        align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-5xl"
      }`}
    >
      {eyebrow ? (
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="eyebrow">{eyebrow}</span>
        </div>
      ) : null}

      <div className="overflow-hidden py-1">
        <h2
          className={`section-title relative inline-block transition-all duration-1000 ${
            revealType === "horizontal"
              ? isVisible
                ? "opacity-100 [clip-path:inset(0_0_0_0)]"
                : "opacity-0 [clip-path:inset(0_100%_0_0)]"
              : revealType === "blur"
              ? isVisible
                ? "opacity-100 blur-0 translate-y-0"
                : "opacity-0 blur-md translate-y-4"
              : isVisible
              ? "opacity-100 translate-y-0 [clip-path:inset(0_0_0_0)]"
              : "opacity-0 translate-y-full [clip-path:inset(100%_0_0_0)]"
          }`}
        >
          {title}
          <span
            className={`block h-[2px] bg-gradient-to-r from-sky-400 to-transparent mt-2 rounded-full transition-all duration-1000 delay-300 ${
              isVisible ? "w-20 opacity-100" : "w-0 opacity-0"
            }`}
          />
        </h2>
      </div>

      {body ? (
        <p
          className={`section-copy transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}

