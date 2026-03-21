import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function Results() {
  return (
    <>
      {/* Hero (Dark) */}
      <header className="pt-32 pb-20 px-8 bg-brand-dark">
        <div className="max-w-[1400px] mx-auto text-center">
          <h1 className="font-display font-800 text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] tracking-tight text-white mb-6">
            Results dropping soon
          </h1>
          <p className="text-zinc-400 text-[17px] max-w-2xl mx-auto leading-relaxed">
            Our creator partnerships are in progress and the first results are
            being compiled. Check back for full case studies.
          </p>
        </div>
      </header>

      {/* Content (Light) */}
      <section className="py-24 lg:py-32 px-8 bg-surface-light">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Status Card */}
            <div className="bg-white rounded-card border border-surface-border p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <div className="font-mono text-[11px] text-brand-red uppercase tracking-widest mb-4">
                Status: Actively Compiling
              </div>
              <p className="text-zinc-600 text-[15px] leading-relaxed mb-6">
                We are finalizing the performance data and narrative for our most
                recent social media campaigns. Anticipate a detailed showcase
                shortly.
              </p>
              <h3 className="font-display font-700 text-xl text-zinc-900 mb-5">
                Want to be one of our first case studies?
              </h3>
              <Link
                href="/audit"
                className="inline-block bg-brand-red text-white font-display font-600 text-[14px] tracking-wide px-7 py-3.5 rounded-btn hover:bg-brand-red-hover transition-colors"
              >
                Apply for a Free Audit
              </Link>
            </div>

            {/* Case Study Template */}
            <div className="bg-white rounded-card border border-surface-border p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <div className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest mb-4">
                Case Study Template
              </div>
              <div className="bg-surface-muted rounded-card border border-surface-border aspect-video flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="font-display font-700 text-2xl text-zinc-300">Coming Soon</div>
                  <div className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest mt-1">Photo Placeholder</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-surface-muted rounded p-3 border border-surface-border">
                  <div className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest mb-1">Before</div>
                  <div className="font-display font-700 text-lg text-zinc-300">$&mdash;/mo</div>
                </div>
                <div className="bg-surface-muted rounded p-3 border border-surface-border">
                  <div className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest mb-1">After</div>
                  <div className="font-display font-700 text-lg text-zinc-300">$&mdash;/mo</div>
                </div>
              </div>
            </div>
          </div>

          {/* Placeholder Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-card border border-surface-border p-8 min-h-[180px] flex items-center justify-center shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
              >
                <div className="text-center">
                  <div className="font-mono text-zinc-300 text-[11px] uppercase tracking-widest">
                    Case Study {String(i).padStart(2, "0")}
                  </div>
                  <div className="font-display font-700 text-zinc-300 text-lg mt-1">
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
