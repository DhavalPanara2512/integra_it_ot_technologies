import SectionHeading from "./SectionHeading";

export default function DataFlow({ content }) {
  return (
    <section className="section-space">
      <div className="shell">
        <SectionHeading eyebrow={content.eyebrow} title={content.title} body={content.body} />
        <div className="panel mt-10 overflow-hidden bg-[#0e1726]/90 text-white shadow-2xl border border-white/15 p-2 sm:p-4 relative">
          {/* BACKGROUND ANIMATED STREAM GRAPH */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(14,165,233,0.08),transparent_50%)] pointer-events-none" />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 relative z-10">
            {content.stages.map((stage, index) => (
              <div key={stage.id} className="relative p-5 rounded-xl border border-white/5 bg-white/[0.03] transition-all duration-300 hover:border-sky-500/40 hover:bg-sky-500/10 group flex flex-col justify-between">
                {/* Connecting arrow indicator for desktop */}
                {index < content.stages.length - 1 ? (
                  <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 lg:flex items-center justify-center h-6 w-6 rounded-full bg-[#0e1726] border border-sky-400/40 text-sky-400 z-20 text-[10px] font-mono shadow-md">
                    →
                  </div>
                ) : null}

                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-500/10 font-mono text-xs font-bold text-sky-400 transition-transform duration-300 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white">
                      {stage.id}
                    </div>
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <h3 className="font-display text-base font-bold text-white group-hover:text-sky-300 transition-colors duration-200">{stage.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-300">{stage.description}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-400 flex items-center justify-between">
                  <span>STAGE 0{stage.id}</span>
                  <span className="text-sky-400 font-semibold uppercase">ACTIVE</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


