import { Link } from "react-router-dom";
import { brand, navigation } from "../../data/siteContent";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#060c17] text-white">
      <div className="shell grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5">
          <div className="flex items-center gap-4">
            <div className="bg-white/95 p-2 rounded-2xl shadow-md">
              <img src={brand.logo} alt={brand.logoAlt} className="h-12 sm:h-14 w-auto" />
            </div>
            <div>
              <div className="font-display text-xl sm:text-2xl font-bold text-white">{brand.companyName}</div>
              <div className="text-xs font-mono font-bold uppercase tracking-[0.24em] text-sky-400">{brand.tagline}</div>
            </div>
          </div>
          <p className="max-w-3xl text-xs sm:text-sm leading-6 text-slate-300">{brand.footerTagline}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-3">
            <h2 className="font-display text-base font-bold text-white uppercase tracking-wider font-mono">Navigation</h2>
            <div className="flex flex-col gap-2 text-xs sm:text-sm text-slate-300">
              {navigation.map((item) => (
                <Link key={item.to} to={item.to} className="hover:text-sky-300 transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-3 text-xs sm:text-sm text-slate-300">
            <h2 className="font-display text-base font-bold text-white uppercase tracking-wider font-mono">Contact</h2>
            <a className="block hover:text-sky-300 transition-colors" href={brand.emailHref}>
              Email: {brand.email}
            </a>
            <a className="block hover:text-sky-300 transition-colors" href={brand.websiteUrl} target="_blank" rel="noreferrer">
              Website: {brand.websiteLabel}
            </a>
            <p>Location: {brand.location}</p>
            <a className="block hover:text-sky-300 transition-colors" href={brand.linkedinUrl} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


