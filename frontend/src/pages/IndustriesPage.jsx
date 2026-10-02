import { Link } from "react-router-dom";
import PageHero from "../components/sections/PageHero";
import SectionHeading from "../components/sections/SectionHeading";
import { industriesContent } from "../data/siteContent";
import useScrollReveal from "../hooks/useScrollReveal";

export default function IndustriesPage() {
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 });
  const [ctaRef, ctaVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <>
      <PageHero {...industriesContent.hero} bgImage="/legacy-assets/images/power.jpg" />

      {/* 11. INDUSTRIES SECTION — ALTERNATING EDITORIAL REVEAL */}
      <section className="section-space">
        <div className="shell">
          <SectionHeading 
            eyebrow={industriesContent.intro.eyebrow} 
            title={industriesContent.intro.title} 
            body={industriesContent.intro.body} 
            revealType="horizontal"
          />
          
          <div ref={gridRef} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industriesContent.industries.map((industry, idx) => {
              const Tag = industry.href ? Link : "article";
              // Alternating directional entrance per card (Left -> Right -> Left -> Right)
              const altMotion = idx % 2 === 0 ? "-translate-x-10" : "translate-x-10";

              return (
                <Tag
                  key={industry.title}
                  to={industry.href}
                  style={{ transitionDelay: `${idx * 120}ms` }}
                  className={`panel group overflow-hidden flex flex-col justify-between border border-white/10 bg-[#0e1726]/80 hover:border-sky-500/40 shadow-2xl transition-all duration-700 ${
                    gridVisible ? "opacity-100 translate-x-0" : `opacity-0 ${altMotion}`
                  }`}
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

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <p className="text-xs sm:text-sm leading-6 text-slate-300">{industry.description}</p>
                  </div>
                </Tag>
              );
            })}
          </div>
        </div>
      </section>

      {/* CINEMATIC CTA REVEAL */}
      <section ref={ctaRef} className="section-space border-t border-white/10 bg-[#060c17] text-white relative overflow-hidden">
        <div className={`absolute inset-0 bg-[linear-gradient(135deg,rgba(14,165,233,0.15),transparent_60%)] transition-transform duration-1000 ${
          ctaVisible ? "scale-100 opacity-100" : "scale-105 opacity-0"
        }`} />
        <div className="shell relative space-y-4 py-4">
          <h2 className={`font-display text-3xl font-bold tracking-tight transition-all duration-700 ${
            ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}>
            {industriesContent.cta.title}
          </h2>
          <p className={`max-w-4xl text-sm sm:text-base leading-7 text-slate-300 transition-all duration-700 delay-150 ${
            ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}>
            {industriesContent.cta.body}
          </p>
        </div>
      </section>
    </>
  );
}

