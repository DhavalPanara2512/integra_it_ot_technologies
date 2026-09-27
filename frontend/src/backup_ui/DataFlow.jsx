import SectionHeading from "./SectionHeading";

export default function DataFlow({ content }) {
  return (
    <section className="section-space">
      <div className="shell">
        <SectionHeading eyebrow={content.eyebrow} title={content.title} body={content.body} />
        <div className="panel mt-8 overflow-hidden bg-integra-navy text-white shadow-2xl border-white/10">
          <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-5">
            {content.stages.map((stage, index) => (
              <div key={stage.id} className="relative px-6 py-7 group transition-colors duration-300 hover:bg-white/[0.03]">
                {index < content.stages.length - 1 ? (
                  <div className="absolute right-0 top-1/2 hidden h-px w-full translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-integra-blue/50 to-transparent lg:block" />
                ) : null}
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-integra-blue/30 bg-integra-blue/10 font-mono text-xs font-bold text-integra-blue transition-transform duration-300 group-hover:scale-110 group-hover:bg-integra-blue group-hover:text-white">
                  {stage.id}
                </div>
                <h3 className="font-display text-lg font-bold text-white group-hover:text-integra-orange transition-colors duration-200">{stage.title}</h3>
                <p className="mt-2 text-xs leading-6 text-white/70">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

