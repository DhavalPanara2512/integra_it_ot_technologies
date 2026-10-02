import { Link } from "react-router-dom";
import { brand, navigation } from "../../data/siteContent";

export default function Footer() {
  return (
    <footer className="mt-12 sm:mt-16 lg:mt-20 border-t border-white/10 bg-[#060c17] text-white">
      <div className="shell grid gap-8 sm:gap-10 py-10 sm:py-14 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4 sm:space-y-5">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="bg-white/95 p-1.5 sm:p-2 rounded-2xl shadow-md flex-shrink-0">
              <img src={brand.logo} alt={brand.logoAlt} className="h-10 sm:h-12 lg:h-14 w-auto max-w-[110px] sm:max-w-none object-contain" />
            </div>
            <div>
              <div className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-white">{brand.companyName}</div>
              <div className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.2em] sm:tracking-[0.24em] text-sky-400">{brand.tagline}</div>
            </div>
          </div>
          <p className="max-w-3xl text-xs sm:text-sm leading-6 text-slate-300">{brand.footerTagline}</p>
        </div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 xs:grid-cols-2">
          <div className="space-y-3">
            <h2 className="font-display text-xs sm:text-base font-bold text-white uppercase tracking-wider font-mono">Navigation</h2>
            <div className="flex flex-col gap-2 text-xs sm:text-sm text-slate-300">
              {navigation.map((item) => (
                <Link key={item.to} to={item.to} className="hover:text-sky-300 transition-colors py-0.5">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-3 text-xs sm:text-sm text-slate-300">
            <h2 className="font-display text-xs sm:text-base font-bold text-white uppercase tracking-wider font-mono">Contact</h2>
            <a className="block hover:text-sky-300 transition-colors break-words" href={brand.emailHref}>
              Email: {brand.email}
            </a>
            <a className="block hover:text-sky-300 transition-colors break-words" href={brand.websiteUrl} target="_blank" rel="noreferrer">
              Website: {brand.websiteLabel}
            </a>
            <p className="break-words">Location: {brand.location}</p>
            <a className="inline-block hover:text-sky-300 transition-colors font-mono text-sky-400 font-semibold" href={brand.linkedinUrl} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


