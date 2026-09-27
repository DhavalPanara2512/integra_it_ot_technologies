export default function PageHero({ eyebrow, title, body, tags = [], dark = false }) {
  return (
    <section
      className={`relative overflow-hidden border-b ${dark ? "border-white/10 bg-integra-navy text-white" : "border-integra-line bg-white"}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(18,98,176,0.35),transparent_50%),url('/legacy-assets/images/industrial-bg.jpg')] bg-cover bg-center opacity-20" />
      <div className="shell relative py-12 sm:py-16">
        <div className="max-w-4xl space-y-5">
          <span className={dark ? "eyebrow border-white/15 bg-white/10 text-white/90" : "eyebrow"}>{eyebrow}</span>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-[1.15]">{title}</h1>
          <p className={`max-w-3xl text-base sm:text-lg leading-7 ${dark ? "text-white/80" : "text-integra-slate"}`}>{body}</p>
          {tags.length > 0 ? (
            <div className="flex flex-wrap gap-2.5 pt-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className={`rounded-full border px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 hover:scale-105 ${dark ? "border-white/15 bg-white/10 text-white/90 hover:border-white/30" : "border-integra-line bg-integra-cloud text-integra-blue hover:border-integra-blue/30"}`}
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

