import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { brand, navigation } from "../../data/siteContent";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Handle scroll state and progress line
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/15 bg-[#08101d]/95 backdrop-blur-md shadow-2xl py-2.5 sm:py-3"
          : "border-white/10 bg-[#08101d]/85 backdrop-blur-sm py-3 sm:py-4"
      }`}
    >
      {/* Scroll Progress Indicator Line */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="shell flex items-center justify-between gap-4 sm:gap-6">
        {/* LOGO & BRANDING */}
        <Link
          to="/"
          className="flex items-center gap-2.5 sm:gap-3.5 group min-w-0"
          onClick={() => setOpen(false)}
        >
          <div className="bg-white/95 p-1 sm:p-1.5 rounded-xl shadow-md flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <img
              src={brand.logo}
              alt={brand.logoAlt}
              className="h-8 sm:h-10 md:h-11 w-auto max-w-[120px] sm:max-w-none object-contain"
            />
          </div>
          <div className="truncate">
            <div className="font-display text-sm sm:text-base md:text-lg font-bold text-white tracking-tight truncate">
              {brand.companyName}
            </div>
            <div className="hidden xs:block text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-sky-400 truncate">
              {brand.tagline}
            </div>
          </div>
        </Link>

        {/* ACCESSIBLE MOBILE HAMBURGER BUTTON (Min 44x44px Touch Target) */}
        <button
          type="button"
          className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-200 md:hidden hover:border-sky-400/50 hover:bg-white/10 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-[#08101d]"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="relative h-4 w-5 flex flex-col justify-between">
            <span
              className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 origin-top-left ${
                open ? "rotate-45 translate-x-0.5 -translate-y-0.5" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-current transition-all duration-200 ${
                open ? "opacity-0 scale-x-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 origin-bottom-left ${
                open ? "-rotate-45 translate-x-0.5 translate-y-0.5" : ""
              }`}
            />
          </div>
        </button>

        {/* DESKTOP NAVIGATION LINKS */}
        <nav className="hidden md:flex md:items-center md:gap-2 lg:gap-3">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-xl px-3.5 py-2 text-xs lg:text-sm font-semibold transition-all duration-200 ${
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
            className="rounded-xl border border-sky-400/30 bg-sky-500/10 px-3.5 py-2 text-xs lg:text-sm font-semibold font-mono text-sky-300 transition-all hover:border-sky-400 hover:bg-sky-500/20 hover:text-white"
          >
            LinkedIn ↗
          </a>
        </nav>
      </div>

      {/* MOBILE NAVIGATION OVERLAY & STABLE FULL-SCREEN DRAWER */}
      {open && (
        <div
          className="fixed inset-0 top-[61px] sm:top-[69px] z-50 bg-[#08101d] md:hidden flex flex-col justify-between overflow-y-auto animate-fadeIn"
          style={{ height: "calc(100dvh - 61px)" }}
        >
          {/* Backdrop blur effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#08101d] via-[#08101d]/98 to-[#060c17] pointer-events-none" />

          <div className="shell relative z-10 py-6 flex flex-col justify-between flex-1 min-h-full">
            {/* ALL NAVIGATION LINKS AT ONCE */}
            <nav className="flex flex-col gap-2.5">
              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-2xl px-5 py-4 text-base font-bold transition-all ${
                      isActive
                        ? "bg-sky-500/20 text-sky-400 border border-sky-400/50 shadow-lg shadow-sky-500/10"
                        : "bg-white/[0.03] text-slate-200 border border-white/10 hover:border-sky-400/30 hover:bg-white/10 hover:text-white"
                    }`
                  }
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-sky-400">→</span>
                </NavLink>
              ))}
            </nav>

            {/* BOTTOM SECTION */}
            <div className="pt-6 mt-6 border-t border-white/10 space-y-4">
              <a
                href={brand.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between w-full rounded-2xl border border-sky-400/40 bg-sky-500/10 px-5 py-3.5 text-sm font-bold font-mono text-sky-300 transition-all hover:bg-sky-500/20"
              >
                <span>Connect on LinkedIn</span>
                <span>↗</span>
              </a>

              <div className="px-2 text-center text-xs font-mono text-slate-400">
                {brand.companyName} • Plant Operations & Analytics
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


