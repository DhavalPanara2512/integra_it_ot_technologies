import { Link } from "react-router-dom";
import { homeContent } from "../data/siteContent";
import DataFlow from "../components/sections/DataFlow";
import SectionHeading from "../components/sections/SectionHeading";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-integra-line bg-integra-navy text-white">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(18,98,176,0.45),transparent_50%),url('/legacy-assets/images/industrial-bg.jpg')] bg-cover bg-center opacity-30" />
        <div className="shell relative py-12 sm:py-16 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-6">
            <span className="eyebrow border-white/15 bg-white/10 text-white/90">{homeContent.hero.eyebrow}</span>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-[1.15]">
              Turn raw plant data into <span className="text-integra-orange">real-time intelligence</span>
            </h1>
            <p className="max-w-3xl text-base sm:text-lg leading-7 text-white/80">{homeContent.hero.body}</p>
          </div>
          <div className="panel bg-white/95 p-6 text-integra-navy shadow-2xl backdrop-blur-md transition-transform duration-300 hover:-translate-y-1">
            <div className="mb-5 flex items-center justify-between text-xs font-bold uppercase tracking-[0.2em] text-integra-blue">
              <span>Industrial Focus</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-integra-blue/10 px-2.5 py-1 text-[10px] text-integra-blue font-mono">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Active Engine
              </span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {homeContent.hero.stats.map((item) => (
                <div key={item} className="flex items-center gap-2.5 rounded-xl border border-integra-line bg-integra-cloud/80 px-4 py-3.5 text-sm font-semibold text-integra-navy transition-all duration-200 hover:border-integra-blue/40 hover:bg-white hover:shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-integra-blue flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DataFlow content={homeContent.dataFlow} />

      <section className="section-space">
        <div className="shell">
          <SectionHeading
            eyebrow={homeContent.servicesIntro.eyebrow}
            title={homeContent.servicesIntro.title}
            body={homeContent.servicesIntro.body}
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homeContent.services.map((service) => (
              <article key={service.title} className="panel group overflow-hidden flex flex-col justify-between">
                <div className="relative h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  <span className="absolute bottom-3 left-3 rounded-md bg-white/90 px-2.5 py-1 font-mono text-[10px] font-bold text-integra-navy backdrop-blur-sm uppercase tracking-wider">
                    {service.title.split(' ')[0]}
                  </span>
                </div>
                <div className="space-y-2.5 p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-integra-navy group-hover:text-integra-blue transition-colors duration-200">{service.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm leading-6 text-integra-slate">{service.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-integra-line bg-white">
        <div className="shell">
          <SectionHeading
            eyebrow={homeContent.industriesIntro.eyebrow}
            title={homeContent.industriesIntro.title}
            body={homeContent.industriesIntro.body}
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homeContent.industries.map((industry) => {
              const Tag = industry.href ? Link : "article";
              return (
                <Tag
                  key={industry.title}
                  to={industry.href}
                  className="panel group block overflow-hidden"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img src={industry.image} alt={industry.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>
                  <div className="space-y-2 p-5">
                    <h3 className="font-display text-lg font-bold text-integra-navy group-hover:text-integra-blue transition-colors duration-200">{industry.title}</h3>
                    <p className="text-xs sm:text-sm leading-6 text-integra-slate">{industry.description}</p>
                  </div>
                </Tag>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="shell">
          <SectionHeading eyebrow={homeContent.whyPartner.eyebrow} title={homeContent.whyPartner.title} body={homeContent.whyPartner.body} />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homeContent.whyPartner.items.map((item, idx) => (
              <article key={item.title} className="panel p-6 relative group overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-integra-blue to-integra-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-integra-blue/10 text-integra-blue font-mono text-sm font-bold">
                  0{idx + 1}
                </div>
                <h3 className="font-display text-lg font-bold text-integra-navy">{item.title}</h3>
                <p className="mt-2 text-xs sm:text-sm leading-6 text-integra-slate">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
