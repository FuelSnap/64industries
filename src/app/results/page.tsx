import Link from "next/link";

export default function Results() {
  return (
    <>
      {/* Hero (Dark) */}
      <header className="pt-32 pb-20 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-headline font-black text-6xl md:text-[10vw] tracking-tighter uppercase leading-[0.85] mb-8 text-white">
            RESULTS
            <br />
            <span className="text-brand-red">DROPPING SOON</span>
          </h1>
          <p className="text-neutral-400 font-light text-lg max-w-2xl leading-relaxed">
            Our first creator partnerships are in progress. We don&apos;t ship
            average. We ship results. Real numbers from real launches coming
            soon.
          </p>
        </div>
      </header>

      {/* Status + Preview (Light) */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Status Card */}
            <div className="bg-white border border-neutral-200 p-10 shadow-sm">
              <div className="font-data text-brand-red text-xs uppercase tracking-widest mb-6">
                Status Update
              </div>
              <p className="text-neutral-600 font-light leading-relaxed mb-8">
                We are currently scaling our first creator partnerships. Data is
                being collected. Results are being documented. Check back soon
                for the full breakdown.
              </p>
              <h3 className="font-headline font-black text-2xl uppercase tracking-tight mb-6 text-neutral-900">
                WANT TO BE ONE OF OUR FIRST CASE STUDIES?
              </h3>
              <Link
                href="/audit"
                className="inline-block bg-brand-red text-white font-headline font-bold tracking-tight px-8 py-4 uppercase hover:bg-brand-red-hover transition-colors"
              >
                APPLY FOR A FREE AUDIT
              </Link>
            </div>

            {/* Preview Card */}
            <div className="bg-white border border-neutral-200 p-10 shadow-sm">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 bg-neutral-100 flex items-center justify-center font-headline font-black text-xl text-neutral-300">
                  ?
                </div>
                <div>
                  <div className="font-data text-[10px] text-neutral-400 uppercase tracking-widest">
                    Niche
                  </div>
                  <div className="font-headline font-black text-xl uppercase tracking-tight text-neutral-900">
                    Coming Soon
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-neutral-50 p-4 border border-neutral-200">
                  <div className="font-data text-[10px] text-neutral-400 uppercase tracking-widest mb-1">
                    Before
                  </div>
                  <div className="font-data text-lg text-neutral-300">
                    $&mdash;/mo
                  </div>
                </div>
                <div className="bg-neutral-50 p-4 border border-neutral-200">
                  <div className="font-data text-[10px] text-neutral-400 uppercase tracking-widest mb-1">
                    After
                  </div>
                  <div className="font-data text-lg text-neutral-300">
                    $&mdash;/mo
                  </div>
                </div>
              </div>

              <div className="font-data text-neutral-300 text-xs uppercase tracking-widest">
                Case study in progress...
              </div>
            </div>
          </div>

          {/* Placeholder Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white border border-neutral-200 p-8 min-h-[200px] flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="font-data text-neutral-300 text-xs uppercase tracking-widest">
                    Case Study {String(i).padStart(2, "0")}
                  </div>
                  <div className="font-headline font-black text-neutral-300 text-lg uppercase mt-2">
                    Coming Soon
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
