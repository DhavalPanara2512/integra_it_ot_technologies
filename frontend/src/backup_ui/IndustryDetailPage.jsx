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
      <PageHero eyebrow="Industry Projects" title={content.title} body={content.subtitle} dark />

      <section className="section-space">
        <div className="shell space-y-6">
          {content.projects.map((project) => (
            <article key={project.title} className="panel p-6">
              <h2 className="font-display text-2xl text-integra-navy">{project.title}</h2>
              {project.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-sm leading-7 text-integra-slate">
                  {paragraph}
                </p>
              ))}
              <ul className="mt-5 space-y-3 border-t border-integra-line pt-5 text-sm leading-7 text-integra-slate">
                {project.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-integra-orange" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}

          {content.technologies?.length ? (
            <article className="panel p-6">
              <h2 className="font-display text-2xl text-integra-navy">{content.technologiesTitle}</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {content.technologies.map((item) => (
                  <span key={item} className="rounded-full border border-integra-line bg-integra-cloud px-4 py-2 text-sm font-semibold text-integra-blue">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ) : null}

          <article className="panel bg-integra-navy p-6 text-white">
            <h3 className="font-display text-2xl">{brand.companyName}</h3>
            <p className="mt-3 text-sm leading-7 text-white/75">{content.footer}</p>
            <Link to="/industries" className="action-link mt-6 border-white/15 bg-white/5 text-white hover:border-white hover:text-white">
              Back to Industries
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}

