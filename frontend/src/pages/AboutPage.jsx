import PageHero from "../components/sections/PageHero";
import SectionHeading from "../components/sections/SectionHeading";
import { aboutContent } from "../data/siteContent";
import useScrollReveal from "../hooks/useScrollReveal";

export default function AboutPage() {
  const [overviewRef, overviewVisible] = useScrollReveal({ threshold: 0.1 });
  const [missionRef, missionVisible] = useScrollReveal({ threshold: 0.15 });
  const [valuesRef, valuesVisible] = useScrollReveal({ threshold: 0.1 });
  const [expertiseRef, expertiseVisible] = useScrollReveal({ threshold: 0.1 });
  const [advantageRef, advantageVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <>
      <PageHero {...aboutContent.hero} bgImage="/legacy-assets/images/about-banner.jpg" />

      {/* 5. ABOUT OVERVIEW SECTION — LAYERED DEPTH / PARALLAX */}
      <section className="section-space relative overflow-hidden">
        {/* Very subtle background parallax layer */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(14,165,233,0.15),transparent_60%),url('/legacy-assets/images/about-banner.jpg')] bg-cover bg-center opacity-15 mix-blend-luminosity pointer-events-none transition-transform duration-1000 ease-out hover:scale-[1.02]" />
        
        <div ref={overviewRef} className="shell grid gap-8 lg:grid-cols-2 lg:items-stretch relative z-10">
          <div className={`panel bg-[#0e1726]/80 border border-white/10 p-6 sm:p-8 flex flex-col justify-between space-y-5 transition-all duration-800 ${
            overviewVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}>
            <SectionHeading eyebrow={aboutContent.overview.eyebrow} title={aboutContent.overview.title} revealType="mask" />
            <div className="space-y-4 text-xs sm:text-sm leading-7 text-slate-300">
              {aboutContent.overview.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          
          <div className={`panel bg-[#0e1726]/90 border border-white/15 p-6 sm:p-8 text-white shadow-2xl backdrop-blur-md flex flex-col justify-between transition-all duration-800 delay-150 ${
            overviewVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}>
            <div>
              <div className="mb-6 flex items-center justify-between font-mono text-xs font-bold uppercase tracking-[0.2em] text-integra-orange border-b border-white/10 pb-4">
                <span>Approved Focus Areas</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-integra-orange/10 px-2.5 py-1 text-[10px] text-integra-orange font-mono border border-integra-orange/30">
                  <span className="h-2 w-2 rounded-full bg-integra-orange animate-pulse" />
                  Verified
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {aboutContent.overview.cards.map((item, idx) => (
                  <div
                    key={item}
                    style={{ transitionDelay: `${idx * 80}ms` }}
                    className={`flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-xs sm:text-sm font-semibold text-slate-200 transition-all duration-500 hover:border-sky-400/40 hover:bg-white/10 ${
                      overviewVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                  >
                    <span className="h-2 w-2 rounded-full bg-sky-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* 4. MISSION & VISION — 2-ROW EDITORIAL LAYOUT (MISSION: TEXT LEFT/IMAGE RIGHT, VISION: TEXT RIGHT/IMAGE LEFT) */}
      <section className="section-space border-y border-white/10 bg-[#060c17]">
        <div className="shell space-y-12">
          <SectionHeading 
            eyebrow={aboutContent.missionVision.eyebrow} 
            title={aboutContent.missionVision.title} 
            body={aboutContent.missionVision.body} 
            align="center"
            revealType="horizontal"
          />

          <div ref={missionRef} className="space-y-12 sm:space-y-16">
            {aboutContent.missionVision.items.map((item, idx) => {
              const isMission = idx === 0; // Mission = row 0, Vision = row 1

              return (
                <div
                  key={item.title}
                  className="grid gap-8 lg:grid-cols-2 lg:items-center"
                >
                  {/* TEXT CONTENT COLUMN */}
                  <div
                    className={`space-y-4 transition-all duration-1000 ease-out ${
                      isMission ? "lg:order-1" : "lg:order-2"
                    } ${
                      isMission
                        ? missionVisible ? "opacity-100 translate-x-0 blur-0" : "opacity-0 -translate-x-16 blur-sm"
                        : missionVisible ? "opacity-100 translate-x-0 blur-0" : "opacity-0 translate-x-16 blur-sm"
                    }`}
                  >
                    <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-sky-400">
                      0{idx + 1} // {item.title}
                    </div>
                    <h3 className={`font-display text-2xl sm:text-3xl font-bold ${
                      isMission ? "text-sky-300" : "text-amber-400"
                    }`}>
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </div>

                  {/* IMAGE COLUMN WITH STAGGERED OPPOSITE ENTRANCE */}
                  <div
                    className={`panel overflow-hidden border border-white/15 bg-[#0e1726] shadow-2xl relative transition-all duration-1000 ease-out ${
                      isMission ? "lg:order-2" : "lg:order-1"
                    } ${
                      isMission
                        ? missionVisible ? "opacity-100 translate-x-0 blur-0" : "opacity-0 translate-x-16 blur-sm"
                        : missionVisible ? "opacity-100 translate-x-0 blur-0" : "opacity-0 -translate-x-16 blur-sm"
                    }`}
                  >
                    <div className="relative h-64 sm:h-80 overflow-hidden group">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        loading="lazy" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0e1726] via-[#0e1726]/20 to-transparent" />
                      <span className="absolute bottom-4 left-4 rounded-md bg-sky-500/20 border border-sky-400/30 px-3 py-1 font-mono text-[10px] font-bold text-sky-300 backdrop-blur-md uppercase tracking-widest">
                        {item.title.toUpperCase()} ARCHITECTURE
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CORE VALUES — STAGGERED ELEVATION GRID */}
      <section className="section-space">
        <div className="shell">
          <SectionHeading eyebrow={aboutContent.values.eyebrow} title={aboutContent.values.title} body={aboutContent.values.body} revealType="blur" />
          <div ref={valuesRef} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aboutContent.values.items.map((value, idx) => (
              <article
                key={value.title}
                style={{ transitionDelay: `${idx * 120}ms` }}
                className={`panel p-6 relative group overflow-hidden border border-white/10 bg-[#0e1726]/80 hover:border-sky-500/40 transition-all duration-700 ${
                  valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-integra-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 font-mono text-xs font-bold border border-sky-400/20">
                  0{idx + 1}
                </div>
                <h3 className="font-display text-xl font-bold text-white group-hover:text-sky-300 transition-colors duration-200">{value.title}</h3>
                <p className="mt-2 text-xs sm:text-sm leading-6 text-slate-300">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE MATRIX — HIGH-DENSITY POP REVEAL */}
      <section className="section-space border-y border-white/10 bg-[#060c17]">
        <div className="shell">
          <SectionHeading eyebrow={aboutContent.expertise.eyebrow} title={aboutContent.expertise.title} revealType="mask" />
          <div ref={expertiseRef} className="mt-8 flex flex-wrap gap-3">
            {aboutContent.expertise.items.map((item, idx) => (
              <span
                key={item}
                style={{ transitionDelay: `${idx * 45}ms` }}
                className={`rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-xs sm:text-sm font-semibold text-sky-300 transition-all duration-500 hover:-translate-y-0.5 hover:border-sky-400/40 hover:bg-sky-500/10 hover:shadow-lg ${
                  expertiseVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-90"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGE — EDITORIAL FEATURE SHOWCASE */}
      <section className="section-space border-t border-white/10 bg-[#060c17]/60">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <div className="space-y-5">
            <SectionHeading eyebrow={aboutContent.advantage.eyebrow} title={aboutContent.advantage.title} body={aboutContent.advantage.body} revealType="mask" />
            
            <div className="pt-2 flex flex-wrap gap-3 font-mono text-xs font-bold">
              <div className="inline-flex items-center gap-2 rounded-xl bg-sky-500/10 border border-sky-400/30 px-4 py-2.5 text-sky-400">
                <span className="h-2 w-2 rounded-full bg-sky-400 animate-ping" />
                Named Engineering Support
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl bg-amber-500/10 border border-amber-500/30 px-4 py-2.5 text-amber-400">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                Zero Unplanned Downtime
              </div>
            </div>
          </div>

          <div ref={advantageRef} className="grid gap-5 sm:grid-cols-2">
            {aboutContent.advantage.items.map((item, idx) => {
              const icons = [
                <path key="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />,
                <path key="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
                <path key="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />,
                <path key="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />,
              ];

              return (
                <div
                  key={item.title}
                  style={{ transitionDelay: `${idx * 120}ms` }}
                  className={`group relative rounded-2xl border border-white/10 bg-[#0e1726] p-6 transition-all duration-700 hover:-translate-y-1 hover:border-sky-400/50 hover:bg-[#121e33] flex flex-col justify-between ${
                    advantageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 border border-sky-400/30 transition-colors group-hover:bg-sky-500 group-hover:text-white">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {icons[idx]}
                        </svg>
                      </div>
                      <span className="font-mono text-xs font-bold text-integra-orange">0{idx + 1}</span>
                    </div>
                    <h3 className="font-display text-base font-bold text-white mb-2 group-hover:text-sky-300 transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-6 text-slate-300 group-hover:text-slate-200 transition-colors duration-200">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-white/5 font-mono text-[10px] text-sky-400/70 group-hover:text-sky-300 flex items-center justify-between">
                    <span>ADVANTAGE 0{idx + 1}</span>
                    <span>✓ VERIFIED</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space border-t border-white/10 bg-[#060c17] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,165,233,0.15),transparent_60%)]" />
        <div className="shell relative space-y-4 py-4">
          <h2 className="font-display text-3xl font-bold tracking-tight">{aboutContent.cta.title}</h2>
          <p className="max-w-4xl text-sm sm:text-base leading-7 text-slate-300">{aboutContent.cta.body}</p>
        </div>
      </section>
    </>
  );
}


