import { Link } from "react-router-dom";
import PageHero from "../components/sections/PageHero";
import SectionHeading from "../components/sections/SectionHeading";
import { industriesContent } from "../data/siteContent";

export default function IndustriesPage() {
  return (
    <>
      <PageHero {...industriesContent.hero} bgImage="/legacy-assets/images/power.jpg" />

      <section className="section-space">
        <div className="shell">
          <SectionHeading eyebrow={industriesContent.intro.eyebrow} title={industriesContent.intro.title} body={industriesContent.intro.body} />
          
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industriesContent.industries.map((industry, idx) => {
              const Tag = industry.href ? Link : "article";
              return (
                <Tag
                  key={industry.title}
                  to={industry.href}
                  className="panel group overflow-hidden flex flex-col justify-between border border-white/10 bg-[#0e1726]/80 hover:border-sky-500/40 shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img src={industry.image} alt={industry.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e1726] via-[#0e1726]/30 to-transparent" />
                    
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                      <span className="font-display text-lg font-bold text-white drop-shadow-md group-hover:text-sky-300 transition-colors duration-200">
                        {industry.title}
                      </span>
                      <span className="rounded-md bg-sky-500/20 border border-sky-400/30 px-2 py-0.5 font-mono text-[10px] font-bold text-sky-300 backdrop-blur-md">
                        0{idx + 1}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                    <p className="text-xs sm:text-sm leading-6 text-slate-300">{industry.description}</p>
                    
                    <div className="border-t border-white/10 pt-3.5">
                      <div className="flex flex-wrap gap-1.5">
                        {industry.tags.map((tag) => (
                          <span key={tag} className="rounded-lg border border-sky-400/20 bg-sky-500/10 px-2.5 py-1 font-mono text-[10px] font-semibold text-sky-300 transition-colors group-hover:border-sky-400/40 group-hover:bg-sky-500/20">
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

      <section className="section-space border-t border-white/10 bg-[#060c17] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,165,233,0.15),transparent_60%)]" />
        <div className="shell relative space-y-4 py-4">
          <h2 className="font-display text-3xl font-bold tracking-tight">{industriesContent.cta.title}</h2>
          <p className="max-w-4xl text-sm sm:text-base leading-7 text-slate-300">{industriesContent.cta.body}</p>
        </div>
      </section>
    </>
  );
}

