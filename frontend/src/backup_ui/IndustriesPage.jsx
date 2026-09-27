import { Link } from "react-router-dom";
import PageHero from "../components/sections/PageHero";
import SectionHeading from "../components/sections/SectionHeading";
import { industriesContent } from "../data/siteContent";

export default function IndustriesPage() {
  return (
    <>
      <PageHero {...industriesContent.hero} dark />

      <section className="section-space">
        <div className="shell">
          <SectionHeading eyebrow={industriesContent.intro.eyebrow} title={industriesContent.intro.title} body={industriesContent.intro.body} />
          
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industriesContent.industries.map((industry, idx) => {
              const Tag = industry.href ? Link : "article";
              return (
                <Tag
                  key={industry.title}
                  to={industry.href}
                  className="panel group overflow-hidden flex flex-col justify-between border border-integra-line/80 hover:border-integra-blue/40 shadow-card hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={industry.image} alt={industry.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-integra-navy/90 via-integra-navy/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300" />
                    
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="font-display text-lg font-bold text-white drop-shadow-md group-hover:text-integra-orange transition-colors duration-200">
                        {industry.title}
                      </span>
                      <span className="rounded-md bg-white/90 px-2 py-0.5 font-mono text-[10px] font-bold text-integra-navy backdrop-blur-sm">
                        0{idx + 1}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                    <p className="text-xs sm:text-sm leading-6 text-integra-slate">{industry.description}</p>
                    
                    <div className="border-t border-integra-line/80 pt-3.5">
                      <div className="flex flex-wrap gap-1.5">
                        {industry.tags.map((tag) => (
                          <span key={tag} className="rounded-lg border border-integra-blue/10 bg-integra-cloud px-2.5 py-1 font-mono text-[10px] font-semibold text-integra-blue transition-colors group-hover:border-integra-blue/30 group-hover:bg-integra-blue/10">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Tag>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space border-t border-integra-line bg-integra-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(18,98,176,0.3),transparent_60%)]" />
        <div className="shell relative space-y-4 py-4">
          <h2 className="font-display text-3xl font-bold tracking-tight">{industriesContent.cta.title}</h2>
          <p className="max-w-4xl text-sm sm:text-base leading-7 text-white/80">{industriesContent.cta.body}</p>
        </div>
      </section>
    </>
  );
}
