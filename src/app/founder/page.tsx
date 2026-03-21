import Link from "next/link";

export default function Founder() {
  return (
    <>
      {/* Hero (Dark) */}
      <header className="pt-32 pb-20 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="font-data text-brand-red text-xs uppercase tracking-[0.3em] mb-6">
            Founder
          </div>
          <h1 className="font-headline font-black text-6xl md:text-8xl tracking-tighter uppercase leading-[0.85] mb-8 text-white">
            THE
            <br />
            <span className="text-brand-red">FOUNDER</span>
          </h1>
        </div>
      </header>

      {/* Story (Light) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start">
            {/* Photo placeholder */}
            <div className="bg-neutral-100 border border-neutral-200 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="font-headline font-black text-4xl text-neutral-300">
                  64
                </div>
                <div className="font-data text-[10px] text-neutral-400 uppercase tracking-widest mt-2">
                  Photo Coming Soon
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <h2 className="font-headline font-black text-3xl md:text-4xl tracking-tighter uppercase mb-6 text-neutral-900">
                BUILDING 64 INDUSTRIES
              </h2>

              <div className="space-y-6 text-neutral-600 font-light leading-relaxed">
                <p>
                  I started in the creative world — building brands, designing
                  websites, and creating content for businesses and creators.
                  Over the years, I worked with dozens of creators and kept
                  seeing the same pattern.
                </p>
                <p>
                  Talented people with real audiences, making almost nothing from
                  them. They&apos;d get a $300 brand deal here, a $500 affiliate
                  commission there, and think that was the ceiling. Meanwhile,
                  their audience was begging for more — more depth, more access,
                  more ways to learn from them.
                </p>
                <p>
                  That gap between what creators earn and what they could earn is
                  what led me to build 64 Industries. Not another agency that
                  charges retainers and delivers PowerPoint decks. A real
                  partnership where we build the product, run the launch, and
                  split the revenue. If we don&apos;t make money for the creator,
                  we don&apos;t make money. Simple.
                </p>
                <p>
                  I believe the creator economy is the biggest wealth-building
                  opportunity of this generation. But most creators are leaving
                  90% of their potential revenue on the table because they
                  don&apos;t have the team or the systems to capture it.
                  That&apos;s what we provide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy (Light alternate) */}
      <section className="py-28 px-6 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <div className="font-data text-brand-red text-xs uppercase tracking-[0.3em] mb-4">
            Philosophy
          </div>
          <h2 className="font-headline font-black text-4xl md:text-5xl tracking-tighter uppercase mb-12 text-neutral-900">
            HOW I THINK ABOUT THIS BUSINESS
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 border border-neutral-200 shadow-sm">
              <h3 className="font-headline font-black text-xl uppercase tracking-tight mb-4 text-neutral-900">
                ALIGNED INCENTIVES
              </h3>
              <p className="text-neutral-500 font-light text-sm leading-relaxed">
                If our incentives aren&apos;t aligned with the creator&apos;s,
                the partnership won&apos;t last. Revenue share forces us to
                deliver results. We can&apos;t hide behind vanity metrics or
                vague reports. Either the product sells or it doesn&apos;t.
              </p>
            </div>

            <div className="bg-white p-8 border border-neutral-200 shadow-sm">
              <h3 className="font-headline font-black text-xl uppercase tracking-tight mb-4 text-neutral-900">
                FEWER, DEEPER
              </h3>
              <p className="text-neutral-500 font-light text-sm leading-relaxed">
                We don&apos;t want 100 clients. We want 10 incredible
                partnerships where we can go deep, build real businesses, and
                create compounding revenue. Quality over quantity, always.
              </p>
            </div>

            <div className="bg-white p-8 border border-neutral-200 shadow-sm">
              <h3 className="font-headline font-black text-xl uppercase tracking-tight mb-4 text-neutral-900">
                EXECUTION OVER STRATEGY
              </h3>
              <p className="text-neutral-500 font-light text-sm leading-relaxed">
                Everyone has ideas. Nobody executes. We don&apos;t deliver
                strategy decks — we deliver products, launches, and revenue. The
                value is in the doing, not the planning.
              </p>
            </div>

            <div className="bg-white p-8 border border-neutral-200 shadow-sm">
              <h3 className="font-headline font-black text-xl uppercase tracking-tight mb-4 text-neutral-900">
                CREATORS DESERVE BETTER
              </h3>
              <p className="text-neutral-500 font-light text-sm leading-relaxed">
                The creator economy is worth $250 billion, but most individual
                creators see almost none of it. They get exploited by platforms,
                underpaid by brands, and overwhelmed by the business side. We
                exist to change that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA (Dark) */}
      <section className="py-24 px-6 bg-brand-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline font-black text-4xl md:text-5xl tracking-tighter uppercase mb-6 text-white">
            LET&apos;S BUILD SOMETHING TOGETHER
          </h2>
          <p className="text-neutral-500 font-light mb-10 max-w-lg mx-auto leading-relaxed">
            If you&apos;re a creator sitting on untapped potential, I want to
            talk to you.
          </p>
          <Link
            href="/audit"
            className="inline-block bg-brand-red text-white font-headline font-bold tracking-tight px-12 py-5 uppercase hover:bg-brand-red-hover transition-colors text-xl"
          >
            GET YOUR FREE AUDIT
          </Link>
        </div>
      </section>
    </>
  );
}
