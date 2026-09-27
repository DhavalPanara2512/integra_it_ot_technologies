export default function PageHero({ eyebrow, title, body, tags = [] }) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#08101d] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.18),transparent_50%),url('/legacy-assets/images/industrial-bg.jpg')] bg-cover bg-center opacity-25 mix-blend-luminosity" />
      <div className="shell relative py-12 sm:py-16">
        <div className="max-w-4xl space-y-5">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
            {title}
          </h1>
          {body ? <p className="max-w-3xl text-base sm:text-lg leading-7 text-slate-300">{body}</p> : null}
          {tags.length > 0 ? (
            <div className="flex flex-wrap gap-2.5 pt-2">
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


