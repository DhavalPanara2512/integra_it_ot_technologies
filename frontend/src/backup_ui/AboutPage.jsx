import PageHero from "../components/sections/PageHero";
import SectionHeading from "../components/sections/SectionHeading";
import { aboutContent } from "../data/siteContent";

export default function AboutPage() {
  return (
    <>
      <PageHero {...aboutContent.hero} dark />

      <section className="section-space">
        <div className="shell grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-4">
            <SectionHeading eyebrow={aboutContent.overview.eyebrow} title={aboutContent.overview.title} />
            <div className="space-y-4 text-sm sm:text-base leading-7 text-integra-slate">
              {aboutContent.overview.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="panel bg-integra-navy p-6 text-white shadow-2xl backdrop-blur-md">
            <div className="mb-5 flex items-center justify-between font-mono text-xs font-bold uppercase tracking-[0.2em] text-integra-orange">
              <span>Approved Focus Areas</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-integra-orange/10 px-2.5 py-1 text-[10px] text-integra-orange font-mono">
                <span className="h-2 w-2 rounded-full bg-integra-orange animate-pulse" />
                Verified
              </span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {aboutContent.overview.cards.map((item) => (
                <div key={item} className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-xs sm:text-sm font-semibold text-white/90 transition-all duration-200 hover:border-integra-orange/40 hover:bg-white/10">
                  <span className="h-2 w-2 rounded-full bg-integra-orange flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space border-y border-integra-line bg-white">
        <div className="shell">
          <SectionHeading eyebrow={aboutContent.missionVision.eyebrow} title={aboutContent.missionVision.title} body={aboutContent.missionVision.body} />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {aboutContent.missionVision.items.map((item) => (
              <article key={item.title} className="panel group overflow-hidden flex flex-col justify-between">
                <div className="relative h-56 overflow-hidden">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  <span className="absolute bottom-3 left-3 rounded-md bg-white/90 px-3 py-1 font-mono text-[10px] font-bold text-integra-navy backdrop-blur-sm uppercase tracking-wider">
                    {item.title}
                  </span>
                </div>
                <div className="space-y-3 p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-integra-navy group-hover:text-integra-blue transition-colors duration-200">{item.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm leading-6 text-integra-slate">{item.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="shell">
          <SectionHeading eyebrow={aboutContent.values.eyebrow} title={aboutContent.values.title} body={aboutContent.values.body} />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aboutContent.values.items.map((value, idx) => (
              <article key={value.title} className="panel p-6 relative group overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-integra-blue to-integra-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-integra-blue/10 text-integra-blue font-mono text-xs font-bold">
                  0{idx + 1}
                </div>
                <h3 className="font-display text-xl font-bold text-integra-navy group-hover:text-integra-blue transition-colors duration-200">{value.title}</h3>
                <p className="mt-2 text-xs sm:text-sm leading-6 text-integra-slate">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-integra-line bg-white">
        <div className="shell">
          <SectionHeading eyebrow={aboutContent.expertise.eyebrow} title={aboutContent.expertise.title} />
          <div className="mt-8 flex flex-wrap gap-2.5">
            {aboutContent.expertise.items.map((item) => (
              <span key={item} className="rounded-xl border border-integra-line bg-integra-cloud px-4 py-2.5 text-xs sm:text-sm font-semibold text-integra-blue transition-all duration-200 hover:-translate-y-0.5 hover:border-integra-blue/40 hover:bg-white hover:shadow-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="shell">
          <SectionHeading eyebrow={aboutContent.advantage.eyebrow} title={aboutContent.advantage.title} body={aboutContent.advantage.body} />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aboutContent.advantage.items.map((item, idx) => (
              <article key={item} className="panel p-6 relative group overflow-hidden">
                <div className="mb-3 font-mono text-xs font-bold text-integra-orange">KEY ADVANTAGE 0{idx + 1}</div>
                <p className="text-xs sm:text-sm leading-6 text-integra-slate group-hover:text-integra-navy transition-colors duration-200">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-t border-integra-line bg-integra-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(18,98,176,0.3),transparent_60%)]" />
        <div className="shell relative space-y-4 py-4">
          <h2 className="font-display text-3xl font-bold tracking-tight">{aboutContent.cta.title}</h2>
          <p className="max-w-4xl text-sm sm:text-base leading-7 text-white/80">{aboutContent.cta.body}</p>
        </div>
      </section>
    </>
  );
}

