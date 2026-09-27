import { Link } from "react-router-dom";
import PageHero from "../components/sections/PageHero";
import { brand, industryProjects } from "../data/siteContent";

export default function IndustryDetailPage({ slug }) {
  const content = industryProjects[slug];

  if (!content) {
    return null;
  }

  return (
    <>
      <PageHero eyebrow="Industry Projects" title={content.title} body={content.subtitle} />

      <section className="section-space">
        <div className="shell space-y-8">
          {content.projects.map((project) => (
            <article key={project.title} className="panel p-6 sm:p-8 border border-white/10 bg-[#0e1726]/80">
              <h2 className="font-display text-2xl font-bold text-white">{project.title}</h2>
              {project.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-xs sm:text-sm leading-7 text-slate-300">
                  {paragraph}
                </p>
              ))}
              <ul className="mt-6 space-y-3.5 border-t border-white/10 pt-6 text-xs sm:text-sm leading-6 text-slate-300">
                {project.items.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="mt-1 h-2 w-2 rounded-full bg-integra-orange flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}

          {content.technologies?.length ? (
            <article className="panel p-6 sm:p-8 border border-white/10 bg-[#0e1726]/80">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-white">{content.technologiesTitle}</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {content.technologies.map((item) => (
                  <span key={item} className="rounded-xl border border-sky-400/20 bg-sky-500/10 px-4 py-2.5 text-xs sm:text-sm font-semibold text-sky-300 backdrop-blur-md">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ) : null}

          <article className="panel bg-[#060c17] border border-white/15 p-6 sm:p-8 text-white shadow-2xl">
            <h3 className="font-display text-2xl font-bold">{brand.companyName}</h3>
            <p className="mt-3 text-xs sm:text-sm leading-7 text-slate-300">{content.footer}</p>
            <Link to="/industries" className="action-link mt-6 border-white/15 bg-white/5 text-white hover:border-sky-400 hover:bg-sky-500/10 hover:text-sky-300">
              ← Back to Industries
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}


