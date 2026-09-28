import { useState } from "react";
import { Link } from "react-router-dom";
import { homeContent } from "../data/siteContent";
import DataFlow from "../components/sections/DataFlow";
import SectionHeading from "../components/sections/SectionHeading";

const purdueLevels = [
  { id: 0, level: "LEVEL 0", name: "Field Sensors & Actuators", tech: "Temperature, Pressure, Flow Meters, Vibration Transmitters", focus: "Process Sensing" },
  { id: 1, level: "LEVEL 1", name: "Direct Control Systems", tech: "PLCs (Allen-Bradley, Siemens), RTUs, Safety Instrumented Systems", focus: "Control Loops" },
  { id: 2, level: "LEVEL 2", name: "Supervisory Control & SCADA", tech: "SCADA HMIs, Alarm Management, Shift Operations Telemetry", focus: "Plant Supervisory" },
  { id: 3, level: "LEVEL 3", name: "Operations & Historian", tech: "AVEVA PI System, Asset Framework (AF), Historian Archives", focus: "Data Infrastructure" },
  { id: 4, level: "LEVEL 4", name: "Enterprise Analytics & BI", tech: "Power BI Analytics, ERP / MES Interfaces, Executive Reports", focus: "Business Intelligence" },
];

export default function HomePage() {
  const [activeLevel, setActiveLevel] = useState(3);

  return (
    <>
      {/* HERO SECTION WITH CINEMATIC INDUSTRIAL VIDEO BACKGROUND */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#08101d] text-white">
        {/* CINEMATIC INDUSTRIAL BACKGROUND IMAGE / OVERLAY */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.25),transparent_60%),url('/legacy-assets/images/hero.png')] bg-cover bg-center opacity-30 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08101d]/80 via-transparent to-[#08101d]" />

        <div className="shell relative py-16 sm:py-20 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className="eyebrow">{homeContent.hero.eyebrow}</span>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-[1.15] text-white">
              Turn raw plant data into <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-integra-orange">real-time intelligence</span>
            </h1>
            <p className="max-w-3xl text-base sm:text-lg leading-7 text-slate-300">{homeContent.hero.body}</p>
            
            <div className="pt-2 flex flex-wrap gap-2.5">
              {homeContent.hero.stats.map((tag) => (
                <span key={tag} className="rounded-full border border-sky-400/20 bg-sky-500/10 px-4 py-2 font-mono text-xs font-semibold text-sky-300 backdrop-blur-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* INTERACTIVE PURDUE MODEL ARCHITECTURE SELECTOR */}
          <div className="panel bg-[#0e1726]/90 border border-white/15 p-6 text-white shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sky-400 animate-ping" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">PURDUE MODEL ARCHITECTURE (ISA-95)</span>
              </div>
              <span className="font-mono text-[10px] text-sky-400 bg-sky-500/15 px-2.5 py-1 rounded-md border border-sky-400/30 font-semibold uppercase">
                Interactive Map
              </span>
            </div>

            {/* LEVEL SELECTOR BUTTONS */}
            <div className="flex justify-between gap-1 mb-4 border-b border-white/10 pb-4">
              {purdueLevels.map((lvl) => (
                <button
                  key={lvl.id}
                  onClick={() => setActiveLevel(lvl.id)}
                  className={`flex-1 py-2.5 px-1 rounded-xl font-mono text-[11px] font-bold transition-all duration-200 text-center ${
                    activeLevel === lvl.id
                      ? "bg-sky-500 text-white shadow-lg shadow-sky-500/30 scale-105"
                      : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  L{lvl.id}
                </button>
              ))}
            </div>

            {/* ACTIVE LEVEL DISPLAY CARD */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-integra-orange">{purdueLevels[activeLevel].level}</span>
                <span className="font-mono text-[10px] text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded font-semibold border border-sky-400/20">
                  {purdueLevels[activeLevel].focus}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">{purdueLevels[activeLevel].name}</h3>
              <div className="text-xs text-slate-300 leading-5">
                <strong className="text-slate-200 font-mono text-[11px] block mb-1">Key Systems & Technologies:</strong>
                {purdueLevels[activeLevel].tech}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Standard: ISA/IEC 62443 Security</span>
              <span className="text-emerald-400 font-semibold">✓ Zero-Risk Integration</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONNECTED PIPELINE SECTION */}
      <DataFlow content={homeContent.dataFlow} />

      {/* SERVICES OVERVIEW GRID (DARK GLASS CARDS) */}
      <section className="section-space border-t border-white/10 bg-[#060c17]/60">
        <div className="shell">
          <SectionHeading
            eyebrow={homeContent.servicesIntro.eyebrow}
            title={homeContent.servicesIntro.title}
            body={homeContent.servicesIntro.body}
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homeContent.services.map((service, idx) => (
              <article key={service.title} className="panel group overflow-hidden flex flex-col justify-between border border-white/10 bg-[#0e1726]/80 hover:border-sky-500/40">
                <div className="relative h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
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
                  
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs font-mono font-semibold text-sky-400 group-hover:text-sky-300">
                    <span>Explore Service</span>
                    <span>→</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES SPOTLIGHT (HIGH DENSITY PHOTOGRAPHIC CAROUSEL GRID) */}
      <section className="section-space border-y border-white/10 bg-[#060c17]">
        <div className="shell">
          <SectionHeading
            eyebrow={homeContent.industriesIntro.eyebrow}
            title={homeContent.industriesIntro.title}
            body={homeContent.industriesIntro.body}
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homeContent.industries.map((industry) => {
              const Tag = industry.href ? Link : "article";
              return (
                <Tag
                  key={industry.title}
                  to={industry.href}
                  className="panel group block overflow-hidden border border-white/10 bg-[#0e1726]/80 hover:border-sky-500/40"
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

      {/* WHY PARTNER WITH US — CREATIVE SPLIT-SCREEN FEATURE SHOWCASE */}
      <section className="section-space border-t border-white/10 bg-[#060c17]/60">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <div className="space-y-4">
            <SectionHeading eyebrow={homeContent.whyPartner.eyebrow} title={homeContent.whyPartner.title} body={homeContent.whyPartner.body} />
            
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

          <div className="grid gap-4 sm:grid-cols-2">
            {homeContent.whyPartner.items.map((item, idx) => {
              const icons = [
                <path key="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.6 15.118a2 2 0 01-1.385-1.92V6.155a2 2 0 011.022-1.745l2.387-.796a6 6 0 013.86.517l.318.158a6 6 0 003.86.517l2.387-.796a2 2 0 012.387 1.92v7.039a2 2 0 01-1.022 1.745z" />,
                <path key="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
                <path key="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
                <path key="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />,
              ];

              return (
                <article key={item.title} className="panel group p-5 relative overflow-hidden border border-white/10 bg-[#0e1726] hover:border-sky-400/50 hover:bg-[#121e33] transition-all duration-300">
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
    </>
  );
}

