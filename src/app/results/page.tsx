import Link from "next/link";

export default function Results() {
  return (
    <>
      {/* Hero */}
      <header className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-headline font-black text-6xl md:text-[10vw] tracking-tighter uppercase leading-[0.85] mb-8">
            RESULTS
            <br />
            <span className="text-[#E11900]">DROPPING SOON</span>
          </h1>
          <p className="text-neutral-500 font-light text-lg max-w-2xl">
            Our first creator partnerships are in progress. We don&apos;t ship
            average. We ship results. Real numbers from real launches coming
            soon.
          </p>
        </div>
      </header>

      {/* Status + Preview */}
      <section className="py-20 px-6 bg-surface-dim">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Status Card */}
            <div className="bg-surface-container border border-white/5 p-10">
              <div className="font-data text-[#E11900] text-xs uppercase tracking-widest mb-6">
                Status Update
              </div>
              <p className="text-neutral-300 font-light leading-relaxed mb-8">
                We are currently scaling our first creator partnerships. Data is
                being collected. Results are being documented. Check back soon
                for the full breakdown.
              </p>
              <h3 className="font-headline font-black text-2xl uppercase tracking-tight mb-6">
                WANT TO BE ONE OF OUR FIRST CASE STUDIES?
              </h3>
              <Link
                href="/audit"
                className="inline-block bg-[#E11900] text-white font-headline font-black tracking-tighter px-8 py-4 uppercase hover:bg-white hover:text-black transition-all"
              >
                APPLY FOR A FREE AUDIT
              </Link>
            </div>

            {/* Preview Card */}
            <div className="bg-surface-container-high border border-white/5 p-10">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 bg-surface-container-highest flex items-center justify-center font-headline font-black text-xl text-neutral-600">
                  ?
                </div>
                <div>
                  <div className="font-data text-[10px] text-neutral-600 uppercase tracking-widest">
                    Niche
                  </div>
                  <div className="font-headline font-black text-xl uppercase tracking-tight">
                    Coming Soon
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-surface-container p-4">
                  <div className="font-data text-[10px] text-neutral-600 uppercase tracking-widest mb-1">
                    Before
                  </div>
                  <div className="font-data text-lg text-neutral-600">
                    $—/mo
                  </div>
                </div>
                <div className="bg-surface-container p-4">
                  <div className="font-data text-[10px] text-neutral-600 uppercase tracking-widest mb-1">
                    After
                  </div>
                  <div className="font-data text-lg text-neutral-600">
                    $—/mo
                  </div>
                </div>
              </div>

              <div className="font-data text-neutral-700 text-xs uppercase tracking-widest">
                Case study in progress...
              </div>
            </div>
          </div>

          {/* Placeholder Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-surface-container border border-white/5 p-8 min-h-[200px] flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="font-data text-neutral-800 text-xs uppercase tracking-widest">
                    Case Study {String(i).padStart(2, "0")}
                  </div>
                  <div className="font-headline font-black text-neutral-800 text-lg uppercase mt-2">
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
