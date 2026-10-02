import { useState } from "react";
import { Link } from "react-router-dom";
import { homeContent } from "../data/siteContent";
import DataFlow from "../components/sections/DataFlow";
import SectionHeading from "../components/sections/SectionHeading";
import useScrollReveal from "../hooks/useScrollReveal";

const purdueLevels = [
  { id: 0, level: "LEVEL 0", name: "Field Sensors & Actuators", tech: "Temperature, Pressure, Flow Meters, Vibration Transmitters", focus: "Process Sensing" },
  { id: 1, level: "LEVEL 1", name: "Direct Control Systems", tech: "PLCs (Allen-Bradley, Siemens), RTUs, Safety Instrumented Systems", focus: "Control Loops" },
  { id: 2, level: "LEVEL 2", name: "Supervisory Control & SCADA", tech: "SCADA HMIs, Alarm Management, Shift Operations Telemetry", focus: "Plant Supervisory" },
  { id: 3, level: "LEVEL 3", name: "Operations & Historian", tech: "AVEVA PI System, Asset Framework (AF), Historian Archives", focus: "Data Infrastructure" },
  { id: 4, level: "LEVEL 4", name: "Enterprise Analytics & BI", tech: "Power BI Analytics, ERP / MES Interfaces, Executive Reports", focus: "Business Intelligence" },
];

export default function HomePage() {
  const [activeLevel, setActiveLevel] = useState(0);

  const [heroRef, heroVisible] = useScrollReveal({ threshold: 0.05 });
  const [heroVisualRef, heroVisualVisible] = useScrollReveal({ threshold: 0.1 });
  const [servicesRef, servicesVisible] = useScrollReveal({ threshold: 0.1 });
  const [industriesRef, industriesVisible] = useScrollReveal({ threshold: 0.1 });
  const [partnerRef, partnerVisible] = useScrollReveal({ threshold: 0.1 });
  const [ctaRef, ctaVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <>
      {/* 2. HERO SECTION — CINEMATIC MULTI-STAGE MASK REVEAL */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#08101d] text-white">
        {/* Subtle Parallax Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.25),transparent_60%),url('/legacy-assets/images/hero.png')] bg-cover bg-center opacity-30 mix-blend-luminosity transition-transform duration-1000 ease-out hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08101d]/80 via-transparent to-[#08101d]" />

        <div ref={heroRef} className="shell py-10 sm:py-16 md:py-20 flex justify-start">
          <div className="space-y-4 sm:space-y-6 max-w-4xl text-left w-full">
            {/* STEP 1: Eyebrow */}
            <div className={`transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <span className="eyebrow text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.25em]">{homeContent.hero.eyebrow}</span>
            </div>

            {/* STEP 2: Fluid typography headline */}
            <h1 className="font-display text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.2] sm:leading-[1.15] text-white">
              <span className="block overflow-hidden py-0.5">
                <span className={`block transition-all duration-1000 delay-100 ${
                  heroVisible ? "opacity-100 translate-y-0 [clip-path:inset(0_0_0_0)]" : "opacity-0 translate-y-full [clip-path:inset(100%_0_0_0)]"
                }`}>
                  Turn raw plant data into
                </span>
              </span>
              <span className="block overflow-hidden py-0.5">
                <span className={`block transition-all duration-1000 delay-200 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-integra-orange ${
                  heroVisible ? "opacity-100 translate-y-0 [clip-path:inset(0_0_0_0)]" : "opacity-0 translate-y-full [clip-path:inset(100%_0_0_0)]"
                }`}>
                  real-time intelligence
                </span>
              </span>
            </h1>

            {/* STEP 3: Supporting paragraph */}
            <p className={`max-w-3xl text-sm sm:text-base md:text-lg leading-6 sm:leading-7 text-slate-300 transition-all duration-700 delay-300 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              {homeContent.hero.body}
            </p>

            {/* STEP 4: Responsive technology chips */}
            <div className={`pt-2 flex flex-wrap gap-2 sm:gap-2.5 transition-all duration-700 delay-400 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              {homeContent.hero.stats.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-sky-400/20 bg-sky-500/10 px-3 sm:px-4 py-1.5 sm:py-2 font-mono text-[11px] sm:text-xs font-semibold text-sky-300 backdrop-blur-md transition-all duration-300 hover:border-sky-400/50 hover:bg-sky-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. SERVICES OVERVIEW GRID — VARIED DIRECTIONAL ENTRANCE */}
      <section className="section-space border-t border-white/10 bg-[#060c17]/60">
        <div className="shell">
          <SectionHeading
            title={homeContent.servicesIntro.title}
            body={homeContent.servicesIntro.body}
            revealType="mask"
          />
          <div ref={servicesRef} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homeContent.services.map((service, idx) => {
              // Varied entrance direction per card (Left, Bottom, Right, Bottom-Left)
              const directions = [
                "-translate-x-10 translate-y-0", // Card 1: from Left
                "translate-y-12 translate-x-0",   // Card 2: from Bottom
                "translate-x-10 translate-y-0",  // Card 3: from Right
                "-translate-x-8 translate-y-8"   // Card 4: from Bottom-Left
              ];
              const cardMotion = directions[idx % directions.length];

              return (
                <article
                  key={service.title}
                  style={{ transitionDelay: `${idx * 110}ms` }}
                  className={`panel group overflow-hidden flex flex-col justify-between border border-white/10 bg-[#0e1726]/80 hover:border-sky-500/40 transition-all duration-700 ${
                    servicesVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${cardMotion}`
                  }`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={service.image} alt={service.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e1726] via-transparent to-transparent opacity-80" />
                    <span className="absolute bottom-3 left-3 rounded-md bg-sky-500/20 border border-sky-400/30 px-2.5 py-1 font-mono text-[10px] font-bold text-sky-300 backdrop-blur-md uppercase tracking-wider">
                      0{idx + 1} // {service.title.split(' ')[0]}
                    </span>
                  </div>
                  <div className="space-y-3 p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-lg font-bold text-white group-hover:text-sky-300 transition-colors duration-200">{service.title}</h3>
                      <p className="mt-2 text-xs sm:text-sm leading-6 text-slate-300">{service.description}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. INDUSTRIES SPOTLIGHT — ALTERNATING EDITORIAL REVEAL */}
      <section className="section-space border-y border-white/10 bg-[#060c17]">
        <div className="shell">
          <SectionHeading
            eyebrow={homeContent.industriesIntro.eyebrow}
            title={homeContent.industriesIntro.title}
            body={homeContent.industriesIntro.body}
            revealType="horizontal"
          />
          <div ref={industriesRef} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homeContent.industries.map((industry, idx) => {
              const Tag = industry.href ? Link : "article";
              // Alternating directional reveal (Left -> Right -> Left -> Right)
              const altDirection = idx % 2 === 0 ? "-translate-x-8" : "translate-x-8";

              return (
                <Tag
                  key={industry.title}
                  to={industry.href}
                  style={{ transitionDelay: `${idx * 120}ms` }}
                  className={`panel group block overflow-hidden border border-white/10 bg-[#0e1726]/80 hover:border-sky-500/40 transition-all duration-700 ${
                    industriesVisible ? "opacity-100 translate-x-0" : `opacity-0 ${altDirection}`
                  }`}
                >
                  <div className="relative h-44 overflow-hidden">
                    <img src={industry.image} alt={industry.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e1726] via-[#0e1726]/30 to-transparent" />
                    <span className="absolute top-3 right-3 rounded-full bg-white/10 px-2.5 py-0.5 font-mono text-[10px] font-bold text-white backdrop-blur-md">
                      SECTOR
                    </span>
                  </div>
                  <div className="space-y-2 p-5">
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-sky-300 transition-colors duration-200">{industry.title}</h3>
                    <p className="text-xs sm:text-sm leading-6 text-slate-300">{industry.description}</p>
                  </div>
                </Tag>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY PARTNER WITH US — CONVERGENCE MOVEMENT */}
      <section className="section-space border-t border-white/10 bg-[#060c17]/60">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <div className="space-y-4">
            <SectionHeading 
              eyebrow={homeContent.whyPartner.eyebrow} 
              title={homeContent.whyPartner.title} 
              body={homeContent.whyPartner.body}
              revealType="blur"
            />
            
            <div className="pt-2 flex flex-wrap gap-3 font-mono text-xs font-bold">
              <span className="inline-flex items-center gap-2 rounded-xl bg-sky-500/10 border border-sky-400/30 px-3.5 py-2 text-sky-400">
                <span className="h-2 w-2 rounded-full bg-sky-400 animate-ping" />
                Plant Operations First
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl bg-integra-orange/10 border border-integra-orange/30 px-3.5 py-2 text-integra-orange">
                <span className="h-2 w-2 rounded-full bg-integra-orange" />
                24/7 SLA Engineering
              </span>
            </div>
          </div>

          <div ref={partnerRef} className="grid gap-4 sm:grid-cols-2">
            {homeContent.whyPartner.items.map((item, idx) => {
              const icons = [
                <path key="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.6 15.118a2 2 0 01-1.385-1.92V6.155a2 2 0 011.022-1.745l2.387-.796a6 6 0 013.86.517l.318.158a6 6 0 003.86.517l2.387-.796a2 2 0 012.387 1.92v7.039a2 2 0 01-1.022 1.745z" />,
                <path key="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
                <path key="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
                <path key="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />,
              ];

              return (
                <article
                  key={item.title}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                  className={`panel group p-5 relative overflow-hidden border border-white/10 bg-[#0e1726] hover:border-sky-400/50 hover:bg-[#121e33] transition-all duration-700 ${
                    partnerVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"
                  }`}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 border border-sky-400/30 transition-colors group-hover:bg-sky-500 group-hover:text-white">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {icons[idx]}
                      </svg>
                    </div>
                    <span className="font-mono text-xs font-bold text-sky-400/60 group-hover:text-sky-400">0{idx + 1}</span>
                  </div>
                  <h3 className="font-display text-base font-bold text-white group-hover:text-sky-300 transition-colors">{item.title}</h3>
                  <p className="mt-2 text-xs leading-6 text-slate-300">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. CTA / CONTACT SECTION — CINEMATIC FINAL REVEAL */}
      <section ref={ctaRef} className="section-space border-t border-white/10 bg-[#060c17] text-white relative overflow-hidden">
        <div className={`absolute inset-0 bg-[linear-gradient(135deg,rgba(14,165,233,0.15),transparent_60%)] transition-transform duration-1000 ${
          ctaVisible ? "scale-100 opacity-100" : "scale-105 opacity-0"
        }`} />
        <div className="shell relative space-y-4 py-4">
          <div className="overflow-hidden">
            <h2 className={`font-display text-3xl font-bold tracking-tight transition-all duration-700 ${
              ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}>
              Bridge the Gap Between Plant Control & Enterprise Analytics
            </h2>
          </div>
          <p className={`max-w-4xl text-sm sm:text-base leading-7 text-slate-300 transition-all duration-700 delay-150 ${
            ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}>
            Schedule an architectural review with our industrial IT-OT integration specialists to transform raw telemetry into high-value executive intelligence.
          </p>
          <div className={`pt-2 transition-all duration-700 delay-300 ${
            ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}>
            <Link to="/contact" className="action-link bg-sky-500 border-sky-400 text-white hover:bg-sky-400 hover:text-white shadow-lg shadow-sky-500/25">
              Contact Our Team →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

