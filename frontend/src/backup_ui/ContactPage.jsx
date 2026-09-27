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
      <PageHero {...contactContent.hero} dark />

      <section className="section-space">
        <div className="shell grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            {contactContent.infoCards.map((item) => (
              <article key={item.title} className="panel p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-integra-blue">{item.title}</div>
                {item.href ? (
                  <a href={item.href} className="mt-3 block text-lg font-medium text-integra-navy hover:text-integra-blue">
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-3 text-lg font-medium text-integra-navy">{item.value}</p>
                )}
              </article>
            ))}

            <article className="panel bg-integra-navy p-6 text-white">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-integra-orange">{contactContent.brochure.title}</div>
              <p className="mt-3 text-sm leading-7 text-white/75">{contactContent.brochure.body}</p>
              <a href={contactContent.brochure.href} className="action-link mt-5 border-white/15 bg-white/5 text-white hover:border-white hover:text-white">
                Download PDF
              </a>
            </article>
          </div>

          <article className="panel p-6 sm:p-8">
            <div className="space-y-3">
              <h2 className="font-display text-3xl text-integra-navy">{contactContent.form.title}</h2>
              <p className="text-sm leading-7 text-integra-slate">{contactContent.form.subtitle}</p>
            </div>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-medium text-integra-navy">
                  <span>Full Name</span>
                  <input
                    className="w-full rounded-2xl border border-integra-line bg-white px-4 py-3 outline-none transition focus:border-integra-blue focus:ring-2 focus:ring-integra-blue/20"
                    value={form.name}
                    onChange={(event) => setForm({ ...form, name: event.target.value })}
                    required
                  />
                </label>
                <label className="space-y-2 text-sm font-medium text-integra-navy">
                  <span>Corporate Email</span>
                  <input
                    type="email"
                    className="w-full rounded-2xl border border-integra-line bg-white px-4 py-3 outline-none transition focus:border-integra-blue focus:ring-2 focus:ring-integra-blue/20"
                    value={form.email}
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                    required
                  />
                </label>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-medium text-integra-navy">
                  <span>Phone</span>
                  <input
                    className="w-full rounded-2xl border border-integra-line bg-white px-4 py-3 outline-none transition focus:border-integra-blue focus:ring-2 focus:ring-integra-blue/20"
                    value={form.phone}
                    onChange={(event) => setForm({ ...form, phone: event.target.value })}
                    required
                  />
                </label>
                <label className="space-y-2 text-sm font-medium text-integra-navy">
                  <span>Company</span>
                  <input
                    className="w-full rounded-2xl border border-integra-line bg-white px-4 py-3 outline-none transition focus:border-integra-blue focus:ring-2 focus:ring-integra-blue/20"
                    value={form.company}
                    onChange={(event) => setForm({ ...form, company: event.target.value })}
                  />
                </label>
              </div>
              <label className="space-y-2 text-sm font-medium text-integra-navy">
                <span>Project Context / Technical Needs</span>
                <textarea
                  rows="6"
                  className="w-full rounded-3xl border border-integra-line bg-white px-4 py-3 outline-none transition focus:border-integra-blue focus:ring-2 focus:ring-integra-blue/20"
                  value={form.message}
                  onChange={(event) => setForm({ ...form, message: event.target.value })}
                  required
                />
              </label>

              {state.error ? <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">{state.error}</p> : null}
              {state.success ? <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{state.success}</p> : null}

              <button
                type="submit"
                disabled={state.loading}
                className="inline-flex rounded-full bg-integra-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-integra-navy focus:outline-none focus:ring-2 focus:ring-integra-blue focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
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

