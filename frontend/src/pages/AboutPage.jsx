import PageHero from "../components/sections/PageHero";
import SectionHeading from "../components/sections/SectionHeading";
import { aboutContent } from "../data/siteContent";

export default function AboutPage() {
  return (
    <>
      <PageHero {...aboutContent.hero} dark />

      {/* OVERVIEW SECTION */}
      <section className="section-space">
        <div className="shell grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <div className="panel bg-[#0e1726]/80 border border-white/10 p-6 sm:p-8 flex flex-col justify-between space-y-5">
            <SectionHeading eyebrow={aboutContent.overview.eyebrow} title={aboutContent.overview.title} />
            <div className="space-y-4 text-xs sm:text-sm leading-7 text-slate-300">
              {aboutContent.overview.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          
          <div className="panel bg-[#0e1726]/90 border border-white/15 p-6 sm:p-8 text-white shadow-2xl backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="mb-6 flex items-center justify-between font-mono text-xs font-bold uppercase tracking-[0.2em] text-integra-orange border-b border-white/10 pb-4">
                <span>Approved Focus Areas</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-integra-orange/10 px-2.5 py-1 text-[10px] text-integra-orange font-mono border border-integra-orange/30">
                  <span className="h-2 w-2 rounded-full bg-integra-orange animate-pulse" />
                  Verified
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {aboutContent.overview.cards.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-xs sm:text-sm font-semibold text-slate-200 transition-all duration-200 hover:border-sky-400/40 hover:bg-white/10">
                    <span className="h-2 w-2 rounded-full bg-sky-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>Standard: ISA-95 & ISA/IEC 62443</span>
              <span className="text-emerald-400 font-semibold">100% Plant Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section-space border-y border-white/10 bg-[#060c17]">
        <div className="shell">
          <SectionHeading eyebrow={aboutContent.missionVision.eyebrow} title={aboutContent.missionVision.title} body={aboutContent.missionVision.body} />
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {aboutContent.missionVision.items.map((item) => (
              <article key={item.title} className="panel group overflow-hidden flex flex-col justify-between border border-white/10 bg-[#0e1726]/80 hover:border-sky-500/40">
                <div className="relative h-60 overflow-hidden">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1726] via-[#0e1726]/40 to-transparent" />
                  <span className="absolute bottom-4 left-5 rounded-md bg-sky-500/20 border border-sky-400/30 px-3 py-1 font-mono text-[11px] font-bold text-sky-300 backdrop-blur-md uppercase tracking-wider">
                    {item.title}
                  </span>
                </div>
                <div className="space-y-3 p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white group-hover:text-sky-300 transition-colors duration-200">{item.title}</h3>
                    <p className="mt-3 text-xs sm:text-sm leading-7 text-slate-300">{item.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section-space">
        <div className="shell">
          <SectionHeading eyebrow={aboutContent.values.eyebrow} title={aboutContent.values.title} body={aboutContent.values.body} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aboutContent.values.items.map((value, idx) => (
              <article key={value.title} className="panel p-6 relative group overflow-hidden border border-white/10 bg-[#0e1726]/80 hover:border-sky-500/40">
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

      {/* EXPERTISE MATRIX */}
      <section className="section-space border-y border-white/10 bg-[#060c17]">
        <div className="shell">
          <SectionHeading eyebrow={aboutContent.expertise.eyebrow} title={aboutContent.expertise.title} />
          <div className="mt-8 flex flex-wrap gap-3">
            {aboutContent.expertise.items.map((item) => (
              <span key={item} className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-xs sm:text-sm font-semibold text-sky-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-400/40 hover:bg-sky-500/10 hover:shadow-lg">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGE — NON-CARD EDITORIAL SPLIT-SCREEN FEATURE SHOWCASE */}
      <section className="section-space border-t border-white/10 bg-[#060c17]/60">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_1.3.fr] lg:items-center">
          <div className="space-y-5">
            <SectionHeading eyebrow={aboutContent.advantage.eyebrow} title={aboutContent.advantage.title} body={aboutContent.advantage.body} />
            
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

          <div className="grid gap-5 sm:grid-cols-2">
            {aboutContent.advantage.items.map((item, idx) => {
              const icons = [
                <path key="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.6 15.118a2 2 0 01-1.385-1.92V6.155a2 2 0 011.022-1.745l2.387-.796a6 6 0 013.86.517l.318.158a6 6 0 003.86.517l2.387-.796a2 2 0 012.387 1.92v7.039a2 2 0 01-1.022 1.745z" />,
                <path key="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
                <path key="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
                <path key="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />,
              ];

              return (
                <div key={item} className="group relative rounded-2xl border border-white/10 bg-[#0e1726] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/50 hover:bg-[#121e33] flex flex-col justify-between">
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 border border-sky-400/30 transition-colors group-hover:bg-sky-500 group-hover:text-white">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {icons[idx]}
                        </svg>
                      </div>
                      <span className="font-mono text-xs font-bold text-integra-orange">0{idx + 1}</span>
                    </div>
                    <p className="text-xs sm:text-sm leading-6 text-slate-300 group-hover:text-white transition-colors duration-200">{item}</p>
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


