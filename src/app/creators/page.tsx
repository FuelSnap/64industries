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

const services = [
  {
    title: "Product Launch Partnership",
    desc: "We build your digital product from scratch — the strategy, the tech, the copy, the launch plan. You focus on your content.",
    pricing: "Revenue Share — $0 Upfront",
    highlight: true,
  },
  {
    title: "Social Media Management",
    desc: "We manage your social media strategy, content scheduling, and audience growth. A bigger audience means bigger launches.",
    pricing: "$1,500 - $3,000/mo",
    highlight: false,
  },
  {
    title: "Brand Deal Brokering",
    desc: "We source brand partnerships, negotiate better rates, and manage the deals. Most micro-creators undercharge by 50-200%.",
    pricing: "15-20% Commission",
    highlight: false,
  },
  {
    title: "Long-Term Partnership",
    desc: "We're not a one-launch vendor. We plan the next product, optimize what's working, and keep growing your revenue.",
    pricing: "Ongoing Partnership",
    highlight: false,
  },
];

export default function ForCreators() {
  return (
    <>
      {/* Hero (Dark) */}
      <header className="pt-32 pb-24 px-8 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(225,25,0,0.08)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="font-mono text-[11px] text-brand-red uppercase tracking-[0.2em] mb-6">
            For Creators
          </div>
          <h1 className="font-display font-800 text-[clamp(2.2rem,5vw,4rem)] leading-[1.1] tracking-tight text-white max-w-4xl mb-6">
            Built for creators who are tired of leaving money on the table
          </h1>
          <p className="text-zinc-400 text-[17px] max-w-2xl mb-10 leading-relaxed">
            We don&apos;t do &quot;consulting.&quot; We partner with you, build
            the product, run the launch, and handle everything so you can focus
            on what you do best — creating.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/audit"
              className="bg-brand-red text-white font-display font-600 text-[15px] tracking-wide px-8 py-4 rounded-btn hover:bg-brand-red-hover transition-colors text-center"
            >
              Get Your Free Audit
            </Link>
            <Link
              href="/how-it-works"
              className="border border-white/20 text-white font-display font-600 text-[15px] tracking-wide px-8 py-4 rounded-btn hover:bg-white/5 transition-all text-center"
            >
              See The Process
            </Link>
          </div>
        </div>
      </header>

      {/* Is This You? */}
      <section className="py-24 lg:py-32 px-8 bg-white">
        <div className="max-w-[900px] mx-auto">
          <div className="mb-12">
            <div className="font-mono text-[11px] text-brand-red uppercase tracking-[0.2em] mb-3">
              Sound Familiar?
            </div>
            <h2 className="font-display font-800 text-3xl md:text-4xl tracking-tight text-zinc-900">
              Is This You?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {painPoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 p-5 bg-surface-muted rounded-card border border-surface-border"
              >
                <div className="w-5 h-5 rounded border border-brand-red shrink-0 flex items-center justify-center mt-0.5">
                  <span className="text-brand-red text-[10px]">&#x2713;</span>
                </div>
                <span className="text-zinc-600 text-[14px] leading-relaxed">
                  {point}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-zinc-400 text-[14px]">
            If you checked even one of these, you&apos;re sitting on untapped
            revenue. Let us show you exactly how much.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32 px-8 bg-surface-light">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <div className="font-mono text-[11px] text-brand-red uppercase tracking-[0.2em] mb-3">
              Our Services
            </div>
            <h2 className="font-display font-800 text-3xl md:text-4xl tracking-tight text-zinc-900">
              What We Do For You
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className={`bg-white rounded-card p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] ${
                  service.highlight
                    ? "border-2 border-brand-red"
                    : "border border-surface-border"
                }`}
              >
                <h3 className="font-display font-700 text-lg mb-3 text-zinc-900">
                  {service.title}
                </h3>
                <p className="text-zinc-500 text-[14px] leading-relaxed mb-4">
                  {service.desc}
                </p>
                <div className={`font-mono text-[11px] uppercase tracking-widest ${
                  service.highlight ? "text-brand-red" : "text-zinc-400"
                }`}>
                  {service.pricing}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RevenueCalculator />
      <FAQ />
      <AuditForm />
    </>
  );
}
