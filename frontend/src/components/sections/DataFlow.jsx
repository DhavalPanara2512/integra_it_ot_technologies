import SectionHeading from "./SectionHeading";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function DataFlow({ content }) {
  const [containerRef, isVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="section-space">
      <div className="shell">
        <SectionHeading 
          eyebrow={content.eyebrow} 
          title={content.title} 
          body={content.body} 
          revealType="horizontal"
        />
        <div
          ref={containerRef}
          className={`panel mt-10 overflow-hidden bg-[#0e1726]/90 text-white shadow-2xl border border-white/15 p-3 sm:p-5 relative transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Animated Background Pulse Graph */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(14,165,233,0.12),transparent_60%)] pointer-events-none" />

          {/* Sequential Animated Connectors & Nodes */}
          <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 relative z-10">
            {content.stages.map((stage, index) => {
              const stepDelay = index * 120;

              return (
                <div
                  key={stage.id}
                  style={{ transitionDelay: `${stepDelay}ms` }}
                  className={`relative p-4 sm:p-5 rounded-xl border bg-white/[0.03] transition-all duration-700 group flex flex-col justify-between ${
                    isVisible 
                      ? "opacity-100 translate-y-0 border-white/10 hover:border-sky-500/50 hover:bg-sky-500/10" 
                      : "opacity-0 translate-y-6 border-transparent"
                  }`}
                >
                  {/* Connecting Animated Arrow Line Indicator */}
                  {index < content.stages.length - 1 ? (
                    <div 
                      style={{ transitionDelay: `${stepDelay + 120}ms` }}
                      className={`absolute -right-3.5 top-1/2 hidden lg:flex items-center justify-center h-6 w-6 rounded-full bg-[#0e1726] border text-sky-400 z-20 text-[10px] font-mono shadow-lg transition-all duration-500 ${
                        isVisible ? "opacity-100 scale-100 border-sky-400/50" : "opacity-0 scale-50 border-white/10"
                      }`}
                    >
                      →
                    </div>
                  ) : null}

                  <div>
                    <div className="mb-2.5 flex items-center justify-between">
                      <div 
                        style={{ transitionDelay: `${stepDelay + 60}ms` }}
                        className={`inline-flex h-8 sm:h-9 w-8 sm:w-9 items-center justify-center rounded-xl border font-mono text-xs font-bold transition-all duration-500 ${
                          isVisible 
                            ? "bg-sky-500/20 text-sky-400 border-sky-400/40 group-hover:bg-sky-500 group-hover:text-white" 
                            : "bg-white/5 text-slate-500 border-white/10"
                        }`}
                      >
                        {stage.id}
                      </div>
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <h3 className="font-display text-base font-bold text-white group-hover:text-sky-300 transition-colors duration-200">
                      {stage.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-5 text-slate-300">
                      {stage.description}
                    </p>
                  </div>

                  <div className="mt-3.5 pt-2.5 border-t border-white/5 font-mono text-[10px] text-slate-400 flex items-center justify-between">
                    <span>STAGE 0{stage.id}</span>
                    <span className="text-sky-400 font-semibold uppercase tracking-wider">ACTIVE PIPELINE</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


