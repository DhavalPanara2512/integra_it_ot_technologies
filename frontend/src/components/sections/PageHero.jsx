import useScrollReveal from "../../hooks/useScrollReveal";

export default function PageHero({ eyebrow, title, body, tags = [], bgImage = "/legacy-assets/images/industrial-bg.jpg" }) {
  const [heroRef, heroVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#08101d] text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity transition-all duration-700" 
        style={{ backgroundImage: `radial-gradient(ellipse at top right, rgba(14, 165, 233, 0.25), transparent 60%), url('${bgImage}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#08101d]/70 via-[#08101d]/50 to-[#08101d]" />

      <div ref={heroRef} className="shell relative py-14 sm:py-20">
        <div className="max-w-4xl space-y-5">
          {eyebrow ? (
            <div className={`transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <span className="eyebrow">{eyebrow}</span>
            </div>
          ) : null}

          <div className="overflow-hidden py-1">
            <h1 className={`font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15] transition-all duration-1000 delay-100 ${
              heroVisible ? "opacity-100 translate-y-0 [clip-path:inset(0_0_0_0)]" : "opacity-0 translate-y-full [clip-path:inset(100%_0_0_0)]"
            }`}>
              {title}
            </h1>
          </div>

          {body ? (
            <p className={`max-w-3xl text-base sm:text-lg leading-7 text-slate-300 transition-all duration-700 delay-200 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              {body}
            </p>
          ) : null}

          {tags.length > 0 ? (
            <div className={`flex flex-wrap gap-2.5 pt-2 transition-all duration-700 delay-300 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-sky-400/20 bg-sky-500/10 px-4 py-2 text-xs sm:text-sm font-semibold text-sky-300 backdrop-blur-md transition-all duration-200 hover:border-sky-400/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}


