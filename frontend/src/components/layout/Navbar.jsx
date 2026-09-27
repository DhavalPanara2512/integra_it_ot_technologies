import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { brand, navigation } from "../../data/siteContent";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08101d]/90 backdrop-blur-md shadow-2xl">
      <div className="shell flex items-center justify-between gap-6 py-3.5">
        <Link to="/" className="flex items-center gap-3.5" onClick={() => setOpen(false)}>
          <div className="bg-white/95 p-1.5 rounded-xl shadow-md flex items-center justify-center">
            <img src={brand.logo} alt={brand.logoAlt} className="h-10 sm:h-11 w-auto" />
          </div>
          <div className="hidden sm:block">
            <div className="font-display text-base sm:text-lg font-bold text-white tracking-tight">{brand.companyName}</div>
            <div className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-sky-400">{brand.tagline}</div>
          </div>
        </Link>

        <button
          type="button"
          className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-mono font-bold text-slate-200 md:hidden hover:border-sky-400 hover:text-white"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>

        <div className={`${open ? "flex" : "hidden"} absolute left-0 top-full w-full border-b border-white/10 bg-[#08101d] md:static md:flex md:w-auto md:border-0 md:bg-transparent`}>
          <nav className="shell flex flex-col gap-2 py-4 md:w-auto md:flex-row md:items-center md:gap-3 md:p-0">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive 
                      ? "bg-sky-500 text-white shadow-lg shadow-sky-500/20 font-bold" 
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={brand.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-sky-400/30 bg-sky-500/10 px-4 py-2 text-xs sm:text-sm font-semibold font-mono text-sky-300 transition-all hover:border-sky-400 hover:bg-sky-500/20 hover:text-white"
            >
              LinkedIn ↗
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}


