import { useState } from "react";
import PageHero from "../components/sections/PageHero";
import { contactContent } from "../data/siteContent";
import { submitContactForm } from "../services/api";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [state, setState] = useState({ loading: false, error: "", success: "" });

  async function handleSubmit(event) {
    event.preventDefault();
    setState({ loading: true, error: "", success: "" });

    try {
      const result = await submitContactForm(form);
      setState({ loading: false, error: "", success: result.message || "Contact request submitted successfully." });
      setForm(initialForm);
    } catch (error) {
      setState({ loading: false, error: error.message, success: "" });
    }
  }

  return (
    <>
      <PageHero {...contactContent.hero} bgImage="/legacy-assets/images/company-bg.jpg" />

      <section className="section-space">
        <div className="shell grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            {contactContent.infoCards.map((item) => (
              <article key={item.title} className="panel p-6 border border-white/10 bg-[#0e1726]/80">
                <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-sky-400">{item.title}</div>
                {item.href ? (
                  <a href={item.href} className="mt-3 block text-lg font-bold text-white hover:text-sky-300 transition-colors">
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-3 text-lg font-bold text-white">{item.value}</p>
                )}
              </article>
            ))}

            <article className="panel bg-gradient-to-br from-[#0e1726] to-[#08101d] border border-white/15 p-6 text-white shadow-2xl">
              <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-integra-orange">{contactContent.brochure.title}</div>
              <p className="mt-3 text-xs sm:text-sm leading-6 text-slate-300">{contactContent.brochure.body}</p>
              <a href={contactContent.brochure.href} className="action-link mt-5 border-white/15 bg-white/5 text-white hover:border-sky-400 hover:bg-sky-500/10 hover:text-sky-300">
                Download PDF
              </a>
            </article>
          </div>

          <article className="panel p-6 sm:p-8 border border-white/15 bg-[#0e1726]/90 shadow-2xl backdrop-blur-md">
            <div className="space-y-3">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">{contactContent.form.title}</h2>
              <p className="text-xs sm:text-sm leading-6 text-slate-300">{contactContent.form.subtitle}</p>
            </div>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                  <span>Full Name</span>
                  <input
                    className="w-full rounded-xl border border-white/15 bg-[#08101d] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(event) => setForm({ ...form, name: event.target.value })}
                    required
                  />
                </label>
                <label className="space-y-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                  <span>Corporate Email</span>
                  <input
                    type="email"
                    className="w-full rounded-xl border border-white/15 bg-[#08101d] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                    placeholder="name@company.com"
                    value={form.email}
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                    required
                  />
                </label>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                  <span>Phone</span>
                  <input
                    className="w-full rounded-xl border border-white/15 bg-[#08101d] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                    placeholder="+91 99999 99999"
                    value={form.phone}
                    onChange={(event) => setForm({ ...form, phone: event.target.value })}
                    required
                  />
                </label>
                <label className="space-y-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                  <span>Company</span>
                  <input
                    className="w-full rounded-xl border border-white/15 bg-[#08101d] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                    placeholder="Company name"
                    value={form.company}
                    onChange={(event) => setForm({ ...form, company: event.target.value })}
                  />
                </label>
              </div>
              <label className="space-y-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-300 block">
                <span>Project Context / Technical Needs</span>
                <textarea
                  rows="5"
                  className="w-full rounded-2xl border border-white/15 bg-[#08101d] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                  placeholder="Describe your operational requirement or technology stack..."
                  value={form.message}
                  onChange={(event) => setForm({ ...form, message: event.target.value })}
                  required
                />
              </label>

              {state.error ? <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-xs font-semibold text-red-400">{state.error}</p> : null}
              {state.success ? <p className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-xs font-semibold text-emerald-400">{state.success}</p> : null}

              <button
                type="submit"
                disabled={state.loading}
                className="inline-flex rounded-xl bg-sky-500 px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider text-white transition-all hover:bg-sky-400 shadow-lg shadow-sky-500/25 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {state.loading ? "Submitting..." : "Submit Specification Request"}
              </button>
            </form>
          </article>
        </div>
      </section>
    </>
  );
}


