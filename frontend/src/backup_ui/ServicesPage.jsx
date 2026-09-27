import PageHero from "../components/sections/PageHero";
import SectionHeading from "../components/sections/SectionHeading";
import { servicesContent, homeContent } from "../data/siteContent";

export default function ServicesPage() {
  return (
    <>
      <PageHero {...servicesContent.hero} dark />

      <section className="section-space">
        <div className="shell">
          <SectionHeading eyebrow={servicesContent.intro.eyebrow} title={servicesContent.intro.title} body={servicesContent.intro.body} />
          
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {servicesContent.services.map((service, idx) => {
              const matchingImg = homeContent.services[idx]?.image || "/legacy-assets/images/pi-system.jpg";
              return (
                <article key={service.title} className="panel group overflow-hidden flex flex-col justify-between border border-integra-line/80 hover:border-integra-blue/40 shadow-card hover:shadow-xl transition-all duration-300">
                  <div className="relative h-56 overflow-hidden">
                    <img src={matchingImg} alt={service.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-integra-navy/90 via-integra-navy/30 to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
                      <span className="font-display text-xl font-bold text-white drop-shadow-sm">{service.title}</span>
                      <span className="rounded-full bg-integra-blue/80 px-3 py-1 font-mono text-[10px] font-bold text-white backdrop-blur-sm">
                        0{idx + 1}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                    <p className="text-sm leading-7 text-integra-slate">{service.description}</p>
                    
                    <div className="border-t border-integra-line/80 pt-5">
                      <div className="mb-3 text-xs font-bold uppercase tracking-wider text-integra-blue font-mono">Key Capabilities</div>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-integra-slate">
                        {service.items.map((item) => (
                          <li key={item} className="flex gap-3 items-start">
                            <span className="mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-integra-blue/10 text-integra-blue">
                              <svg className="h-2.5 w-2.5 fill-current" viewBox="0 0 12 12"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/></svg>
                            </span>
                            <span className="leading-6">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* THE INTEGRA ADVANTAGE — 2-COLUMN SPLIT FEATURE GRID */}
      <section className="section-space border-y border-integra-line bg-white">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <div className="space-y-4">
            <span className="eyebrow">{servicesContent.advantage.eyebrow}</span>
            <h2 className="section-title">{servicesContent.advantage.title}</h2>
            <p className="section-copy">{servicesContent.advantage.body}</p>
            
            <div className="pt-3 flex flex-wrap gap-4">
              <div className="inline-flex items-center gap-2 rounded-xl bg-integra-blue/10 px-4 py-2.5 text-xs font-bold text-integra-blue font-mono">
                <span className="h-2 w-2 rounded-full bg-integra-blue" />
                Specialist Engineers
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl bg-amber-500/10 px-4 py-2.5 text-xs font-bold text-amber-700 font-mono">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                Zero Unplanned Downtime
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {servicesContent.advantage.items.map((item, idx) => {
              const icons = [
                <path key="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
                <path key="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
                <path key="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
                <path key="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />,
              ];

              return (
                <div key={item} className="group rounded-2xl border border-integra-line/80 bg-integra-cloud/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-integra-blue/40 hover:bg-white hover:shadow-lg">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-integra-blue/10 text-integra-blue transition-colors group-hover:bg-integra-blue group-hover:text-white">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {icons[idx]}
                      </svg>
                    </div>
                    <span className="font-mono text-xs font-bold text-integra-slate/50">0{idx + 1}</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-6 text-integra-slate group-hover:text-integra-navy transition-colors duration-200">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW WE DEPLOY SOLUTIONS — STEPPER TIMELINE FLOW (NO CARDS) */}
      <section className="section-space">
        <div className="shell">
          <SectionHeading eyebrow={servicesContent.delivery.eyebrow} title={servicesContent.delivery.title} body={servicesContent.delivery.body} />
          
          <div className="mt-12 relative">
            {/* Connecting line */}
            <div className="absolute top-7 left-8 right-8 hidden lg:block h-0.5 bg-gradient-to-r from-integra-blue via-integra-blue/40 to-integra-orange" />
            
            <div className="grid gap-8 lg:grid-cols-3 relative z-10">
              {servicesContent.delivery.items.map((item, idx) => (
                <div key={item.title} className="group relative flex flex-col items-start bg-integra-cloud/40 rounded-2xl p-6 lg:bg-transparent lg:p-0 border border-integra-line/60 lg:border-none">
                  {/* Step Circle */}
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-integra-blue bg-white text-integra-navy font-display text-lg font-bold shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-integra-blue group-hover:text-white">
                    0{idx + 1}
                  </div>
                  
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-integra-blue mb-1">
                    {item.phase}
                  </span>
                  
                  <h3 className="font-display text-xl font-bold text-integra-navy group-hover:text-integra-blue transition-colors duration-200">
                    {item.title}
                  </h3>
                  
                  <p className="mt-3 text-xs sm:text-sm leading-6 text-integra-slate">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space border-t border-integra-line bg-integra-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(18,98,176,0.3),transparent_60%)]" />
        <div className="shell relative space-y-4 py-4">
          <h2 className="font-display text-3xl font-bold tracking-tight">{servicesContent.cta.title}</h2>
          <p className="max-w-4xl text-sm sm:text-base leading-7 text-white/80">{servicesContent.cta.body}</p>
        </div>
      </section>
    </>
  );
}

