import Link from "next/link";
import RevenueCalculator from "@/components/RevenueCalculator";
import FAQ from "@/components/FAQ";
import AuditForm from "@/components/AuditForm";

const painPoints = [
  "You have 10K+ followers but make less than $1K/mo from your content",
  "Brand deals are inconsistent and pay less than you deserve",
  "You know you could sell a course or product but don't know where to start",
  "The business side of being a creator overwhelms you",
  "You've thought about coaching or mentorship but never launched it",
  "You spend hours creating content but barely see any return",
];

export default function ForCreators() {
  return (
    <>
      {/* Hero (Dark) */}
      <header className="pt-32 pb-20 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="font-data text-brand-red text-xs uppercase tracking-[0.3em] mb-6">
            For Creators
          </div>
          <h1 className="font-headline font-black text-5xl md:text-7xl tracking-tighter uppercase leading-[0.85] max-w-5xl mb-8 text-white">
            BUILT FOR CREATORS WHO ARE TIRED OF{" "}
            <span className="text-brand-red">LEAVING MONEY</span> ON THE TABLE
          </h1>
          <p className="text-neutral-400 font-light text-lg max-w-2xl mb-10 leading-relaxed">
            We don&apos;t do &quot;consulting.&quot; We partner with you, build
            the product, run the launch, and handle everything behind the scenes
            so you can focus on what you do best — creating.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/audit"
              className="bg-brand-red text-white font-headline font-bold tracking-tight px-10 py-4 uppercase hover:bg-brand-red-hover transition-colors text-lg text-center"
            >
              GET YOUR FREE AUDIT
            </Link>
            <Link
              href="/how-it-works"
              className="border border-white/20 text-white font-headline font-bold tracking-tight px-10 py-4 uppercase hover:bg-white/5 transition-all text-lg text-center"
            >
              SEE THE PROCESS
            </Link>
          </div>
        </div>
      </header>

      {/* Is This You? (Light) */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="font-data text-brand-red text-xs uppercase tracking-[0.3em] mb-4">
            Sound Familiar?
          </div>
          <h2 className="font-headline font-black text-4xl md:text-5xl tracking-tighter uppercase mb-16 text-neutral-900">
            IS THIS YOU?
          </h2>

          <div className="space-y-3">
            {painPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-4 p-5 bg-neutral-50 border border-neutral-200"
              >
                <div className="w-5 h-5 border border-brand-red shrink-0 flex items-center justify-center">
                  <span className="text-brand-red text-xs">&#x2713;</span>
                </div>
                <span className="text-neutral-700 font-light text-sm">
                  {point}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-10 text-neutral-500 font-light text-sm">
            If you checked even one of these, you&apos;re sitting on untapped
            revenue. Let us show you exactly how much.
          </p>
        </div>
      </section>

      {/* What We Do (Light alternate) */}
      <section className="py-28 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="font-data text-brand-red text-xs uppercase tracking-[0.3em] mb-4">
            Our Services
          </div>
          <h2 className="font-headline font-black text-4xl md:text-5xl tracking-tighter uppercase mb-16 text-neutral-900">
            WHAT WE DO FOR YOU
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 border-l-4 border-brand-red shadow-sm">
              <h3 className="font-headline font-black text-2xl uppercase tracking-tight mb-4 text-neutral-900">
                PRODUCT LAUNCH PARTNERSHIP
              </h3>
              <p className="text-neutral-500 font-light text-sm leading-relaxed mb-4">
                We build your digital product from scratch — the strategy, the
                tech, the copy, the launch plan. You focus on your content and
                your audience. We handle the business side.
              </p>
              <div className="font-data text-xs text-brand-red uppercase tracking-widest">
                Revenue Share &mdash; You Pay $0 Upfront
              </div>
            </div>

            <div className="bg-white p-8 border border-neutral-200 shadow-sm">
              <h3 className="font-headline font-black text-2xl uppercase tracking-tight mb-4 text-neutral-900">
                SOCIAL MEDIA MANAGEMENT
              </h3>
              <p className="text-neutral-500 font-light text-sm leading-relaxed mb-4">
                We manage your social media strategy, content scheduling, and
                audience growth. A bigger audience means bigger launches means
                more money for both of us.
              </p>
              <div className="font-data text-xs text-neutral-400 uppercase tracking-widest">
                Monthly Retainer
              </div>
            </div>

            <div className="bg-white p-8 border border-neutral-200 shadow-sm">
              <h3 className="font-headline font-black text-2xl uppercase tracking-tight mb-4 text-neutral-900">
                BRAND DEAL BROKERING
              </h3>
              <p className="text-neutral-500 font-light text-sm leading-relaxed mb-4">
                We source brand partnerships, negotiate better rates, and manage
                the deals. Most micro-creators undercharge by 50-200% — we fix
                that.
              </p>
              <div className="font-data text-xs text-neutral-400 uppercase tracking-widest">
                Commission Based
              </div>
            </div>

            <div className="bg-white p-8 border border-neutral-200 shadow-sm">
              <h3 className="font-headline font-black text-2xl uppercase tracking-tight mb-4 text-neutral-900">
                LONG-TERM PARTNERSHIP
              </h3>
              <p className="text-neutral-500 font-light text-sm leading-relaxed mb-4">
                We&apos;re not a one-launch vendor. We&apos;re your long-term
                business partner. We plan the next product, optimize what&apos;s
                working, and keep growing your revenue over time.
              </p>
              <div className="font-data text-xs text-neutral-400 uppercase tracking-widest">
                Ongoing Partnership
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <RevenueCalculator />

      {/* FAQ */}
      <FAQ />

      {/* Audit Form */}
      <AuditForm />
    </>
  );
}
