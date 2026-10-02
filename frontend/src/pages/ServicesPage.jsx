import { useState } from "react";
import PageHero from "../components/sections/PageHero";
import SectionHeading from "../components/sections/SectionHeading";
import { servicesContent, homeContent } from "../data/siteContent";
import TimeSeriesVisualization from "../components/visualizations/TimeSeriesVisualization";
import OTNetworkDiagram from "../components/visualizations/OTNetworkDiagram";
import useScrollReveal from "../hooks/useScrollReveal";

export default function ServicesPage() {
  const [activeIdx, setActiveIdx] = useState(0);

  const selectedService = servicesContent.services[activeIdx];
  const selectedImage = homeContent.services[activeIdx]?.image || "/legacy-assets/images/pi-system.jpg";

  const [showcaseRef, showcaseVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <>
      <PageHero {...servicesContent.hero} bgImage="/legacy-assets/images/pi-system.jpg" />

      {/* 2-COLUMN INTERACTIVE SERVICE SHOWCASE */}
      <section className="section-space">
        <div className="shell">
          <SectionHeading eyebrow={servicesContent.intro.eyebrow} title={servicesContent.intro.title} body={servicesContent.intro.body} />
          
          <div className="mt-8 sm:mt-10 grid gap-6 lg:gap-8 lg:grid-cols-2 lg:items-stretch">
            {/* LEFT COLUMN: VERTICAL SERVICE NAVIGATION SELECTOR */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              {servicesContent.services.map((svc, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <button
                    key={svc.title}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-full text-left p-3.5 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                      isActive
                        ? "bg-gradient-to-r from-sky-950/80 via-slate-900 to-slate-900/90 border-sky-400/50 text-white shadow-xl shadow-sky-500/10 scale-[1.01]"
                        : "bg-[#0e1726]/60 border-white/10 text-slate-400 hover:bg-[#0e1726]/90 hover:border-white/20 hover:text-slate-200"
                    }`}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className={`font-mono text-[11px] sm:text-xs font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md border ${
                        isActive 
                          ? "bg-sky-500/20 text-sky-400 border-sky-400/40" 
                          : "bg-white/5 text-slate-500 border-white/10 group-hover:text-slate-300"
                      }`}>
                        0{idx + 1}
                      </span>
                      <h3 className={`font-display text-xs sm:text-base font-bold transition-colors ${
                        isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                      }`}>
                        {svc.title}
                      </h3>
                    </div>
                    
                    <div className={`h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full flex-shrink-0 transition-all duration-300 ${
                      isActive ? "bg-sky-400 shadow-[0_0_12px_#38bdf8]" : "bg-white/10 group-hover:bg-white/30"
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* RIGHT COLUMN: FEATURE SPOTLIGHT VIEWPORT */}
            <div className="panel overflow-hidden border border-white/15 bg-[#0e1726] shadow-2xl relative flex flex-col justify-between">
              {/* IMAGE HEADER */}
              <div className="relative h-48 sm:h-64 lg:h-80 overflow-hidden">
                <img 
                  src={selectedImage} 
                  alt={selectedService.title} 
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1726] via-[#0e1726]/40 to-transparent" />
                
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex gap-2">
                  <span className="rounded-full bg-sky-500/20 border border-sky-400/40 px-2.5 sm:px-3.5 py-1 font-mono text-[9px] sm:text-[11px] font-bold text-sky-300 backdrop-blur-md">
                    SERVICE FOCUS 0{activeIdx + 1}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-6 sm:right-6">
                  <h2 className="font-display text-xl sm:text-3xl font-bold text-white drop-shadow-md">
                    {selectedService.title}
                  </h2>
                </div>
              </div>

              {/* SERVICE CONTENT & CAPABILITIES */}
              <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                <p className="text-xs sm:text-base leading-6 sm:leading-7 text-slate-300">
                  {selectedService.description}
                </p>

                <div className="border-t border-white/10 pt-4 sm:pt-6">
                  <div className="mb-3 sm:mb-4 flex items-center justify-between">
                    <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-sky-400">
                      Core Engineering Capabilities
                    </span>
                    <span className="font-mono text-[9px] sm:text-[10px] text-slate-400">
                      {selectedService.items.length} Specs Included
                    </span>
                  </div>

                  <div className="grid gap-2.5 sm:gap-3 grid-cols-1 sm:grid-cols-2">
                    {selectedService.items.map((item) => (
                      <div key={item} className="flex gap-2.5 items-start bg-white/[0.03] border border-white/5 rounded-xl p-3 transition-colors hover:border-sky-500/30 hover:bg-white/[0.06]">
                        <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-400 border border-sky-400/30">
                          <svg className="h-2.5 w-2.5 fill-current" viewBox="0 0 12 12"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/></svg>
                        </span>
                        <span className="text-xs sm:text-sm leading-5 sm:leading-6 text-slate-200">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* HOW WE DEPLOY SOLUTIONS — CONNECTED TIMELINE PIPELINE */}
      <section className="section-space">
        <div className="shell">
          <SectionHeading eyebrow={servicesContent.delivery.eyebrow} title={servicesContent.delivery.title} body={servicesContent.delivery.body} />
          
          <div className="mt-12 relative">
            {/* Connecting animated glowing bar */}
            <div className="absolute top-7 left-8 right-8 hidden lg:block h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-full bg-gradient-to-r from-sky-500 via-emerald-400 to-integra-orange opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent h-full w-1/3 animate-flow-pulse" />
            </div>
            
            <div className="grid gap-8 lg:grid-cols-3 relative z-10">
              {servicesContent.delivery.items.map((item, idx) => (
                <div key={item.title} className="group relative flex flex-col items-start bg-[#0e1726] border border-white/10 rounded-2xl p-6 lg:bg-transparent lg:p-0 lg:border-none">
                  {/* Step Circle */}
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-sky-400 bg-[#08101d] text-white font-display text-lg font-bold shadow-lg shadow-sky-500/20 transition-transform duration-300 group-hover:scale-110 group-hover:bg-sky-500">
                    0{idx + 1}
                  </div>
                  
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-sky-400 mb-1">
                    {item.phase}
                  </span>
                  
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-sky-300 transition-colors duration-200">
                    {item.title}
                  </h3>
                  
                  <p className="mt-3 text-xs sm:text-sm leading-6 text-slate-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space border-t border-white/10 bg-[#060c17] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,165,233,0.15),transparent_60%)]" />
        <div className="shell relative space-y-4 py-4">
          <h2 className="font-display text-3xl font-bold tracking-tight">{servicesContent.cta.title}</h2>
          <p className="max-w-4xl text-sm sm:text-base leading-7 text-slate-300">{servicesContent.cta.body}</p>
        </div>
      </section>
    </>
  );
}



