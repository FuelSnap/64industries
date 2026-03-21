import Link from "next/link";

const values = [
  {
    title: "PERFORMANCE ONLY",
    desc: "We don't charge retainers for launches. We take a revenue share. If we don't make you money, we don't make money. Period.",
  },
  {
    title: "CREATOR FIRST",
    desc: "Your brand stays your brand. Your audience, your name, your reputation. We work behind the scenes so you stay in the spotlight.",
  },
  {
    title: "NO BULLSHIT",
    desc: "Transparent numbers. Real projections. No hidden fees, no vague promises. We show you the math before we start.",
  },
  {
    title: "LONG TERM",
    desc: "We're not looking to do one launch and disappear. We build lasting partnerships that compound in value over time.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero (Dark) */}
      <header className="pt-32 pb-20 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="font-data text-brand-red text-xs uppercase tracking-[0.3em] mb-6">
            Our Story
          </div>
          <h1 className="font-headline font-black text-6xl md:text-8xl tracking-tighter uppercase leading-[0.85] mb-8 text-white">
            WHO WE
            <br />
            <span className="text-brand-red">ARE</span>
          </h1>
          <p className="text-neutral-400 font-light text-lg max-w-2xl leading-relaxed">
            We are the team behind the internet&apos;s most undervalued
            creators. We don&apos;t build brands — we build revenue engines.
          </p>
        </div>
      </header>

      {/* Origin Story (Light) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12">
            <div>
              <h2 className="font-headline font-black text-4xl md:text-5xl tracking-tighter uppercase leading-[0.85] text-neutral-900">
                FROM AGENCY
                <br />
                TO
                <br />
                <span className="text-brand-red">PARTNER.</span>
              </h2>
            </div>

            <div className="space-y-6 text-neutral-600 font-light leading-relaxed">
              <p>
                We spent years inside the standard agency model. We saw the
                bloated retainers, the focus on &quot;impressions&quot; over
                income, and the misalignment of incentives. The agency gets paid
                regardless of whether the creator wins.
              </p>
              <p>
                We realized that creators don&apos;t need another agency. They
                need a partner who only wins when they win. A team that treats
                their business like a revenue engine, where every action is
                measured by its impact on the bottom line.
              </p>
              <p>
                So we built 64 Industries. We moved away from the masses to
                focus on a handful of creator partnerships. We stopped being a
                vendor and started being the engine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values (Light alternate) */}
      <section className="py-28 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="font-data text-brand-red text-xs uppercase tracking-[0.3em] mb-4">
            What We Stand For
          </div>
          <h2 className="font-headline font-black text-4xl md:text-5xl tracking-tighter uppercase mb-16 text-neutral-900">
            OUR
            <br />
            <span className="text-brand-red">VALUES</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white p-8 border border-neutral-200 shadow-sm"
              >
                <h3 className="font-headline font-black text-lg uppercase tracking-tight mb-4 text-neutral-900">
                  {value.title}
                </h3>
                <p className="text-neutral-500 font-light text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA (Red) */}
      <section className="py-24 px-6 bg-brand-red">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline font-black text-4xl md:text-6xl tracking-tighter uppercase mb-6 text-white">
            WANT TO WORK WITH US?
          </h2>
          <p className="text-white/80 font-light mb-10 max-w-lg mx-auto leading-relaxed">
            Start with a free audit. We&apos;ll show you what your audience is
            really worth.
          </p>
          <Link
            href="/audit"
            className="inline-block bg-white text-neutral-900 font-headline font-bold tracking-tight px-12 py-5 uppercase hover:bg-neutral-900 hover:text-white transition-all text-xl"
          >
            GET YOUR FREE AUDIT
          </Link>
        </div>
      </section>
    </>
  );
}
