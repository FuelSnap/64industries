import Link from "next/link";
import RevenueCalculator from "@/components/RevenueCalculator";
import FAQ from "@/components/FAQ";
import AuditForm from "@/components/AuditForm";

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <header className="relative min-h-screen flex flex-col justify-center px-8 pt-24 pb-20 overflow-hidden bg-brand-dark">
        {/* Large 64 watermark */}
        <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 font-display font-800 text-[40vw] leading-none text-white/[0.03] select-none pointer-events-none">
          64
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <div className="font-mono text-[11px] text-brand-red uppercase tracking-[0.2em] mb-6">
            64 Industries
          </div>

          <h1 className="font-display font-800 text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] tracking-tight text-white max-w-3xl mb-8">
            We turn creator audiences into revenue machines
          </h1>

          <p className="text-zinc-400 text-[17px] max-w-xl mb-10 leading-relaxed">
            We partner with creators who have 10K-100K followers and help them
            launch digital products, courses, and communities — so they can
            finally make real money from the audience they&apos;ve already built.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
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
              See How It Works
            </Link>
          </div>

          <div className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
            $0 Upfront &mdash; Performance Partnership &mdash; No Risk To You
          </div>
        </div>
      </header>

      {/* ===== COMPARISON ===== */}
      <section className="py-24 lg:py-32 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <div className="font-mono text-[11px] text-brand-red uppercase tracking-[0.2em] mb-3">
              The Problem
            </div>
            <h2 className="font-display font-800 text-3xl md:text-4xl tracking-tight text-zinc-900 max-w-2xl">
              Brand deals pay you once. We build you revenue streams.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Standard Brand Deals */}
            <div className="bg-surface-muted rounded-card p-8 lg:p-10 border border-surface-border">
              <h3 className="font-display font-700 text-xl mb-6 text-zinc-400">
                Standard Brand Deals
              </h3>
              <ul className="space-y-4 mb-8">
                {[
                  "One-time payouts, inconsistent income",
                  "Zero ownership of the customer relationship",
                  "You promote their brand, not yours",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-zinc-500 text-[15px]">
                    <span className="text-brand-red mt-0.5 shrink-0">&#x2717;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="font-display font-800 text-3xl text-zinc-300">$0 Recurring</div>
            </div>

            {/* 64 Industries */}
            <div className="bg-brand-dark rounded-card p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-brand-red text-white font-mono text-[10px] px-3 py-1 rounded-btn tracking-widest uppercase">
                Our Model
              </div>
              <h3 className="font-display font-700 text-xl mb-6 text-white">
                64 Industries Product Launches
              </h3>
              <ul className="space-y-4 mb-8">
                {[
                  "Build assets that generate revenue long-term",
                  "You own the product and the customer data",
                  "Your brand, your audience, your empire",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-zinc-300 text-[15px]">
                    <span className="text-[#00C853] mt-0.5 shrink-0">&#x2713;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="font-display font-800 text-3xl text-[#00C853]">6-Figure Potential</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-24 lg:py-32 px-8 bg-surface-light">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="font-mono text-[11px] text-brand-red uppercase tracking-[0.2em] mb-3">
                The Process
              </div>
              <h2 className="font-display font-800 text-3xl md:text-4xl tracking-tight text-zinc-900">
                How It Works
              </h2>
            </div>
            <div className="font-mono text-[11px] text-zinc-400 uppercase tracking-widest">
              From first conversation to first dollar
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Audit", desc: "We analyze your content, audience, and engagement to find exactly how much revenue you're leaving on the table." },
              { num: "02", title: "Build", desc: "Our team builds your product — course, coaching program, or community. We handle the tech, the copy, everything." },
              { num: "03", title: "Launch", desc: "We craft a launch strategy and write the scripts. You post to your audience. We handle the rest behind the scenes." },
              { num: "04", title: "Get Paid", desc: "Revenue splits automatically at point of sale. You get your share instantly. No invoices, no chasing payments." },
            ].map((step) => (
              <div key={step.num} className="bg-white rounded-card border border-surface-border p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] group hover:shadow-md transition-shadow">
                <div className="font-mono text-4xl text-brand-red/20 mb-4 group-hover:text-brand-red/60 transition-colors">
                  {step.num}
                </div>
                <h3 className="font-display font-700 text-lg mb-3 text-zinc-900">
                  {step.title}
                </h3>
                <p className="text-zinc-500 text-[14px] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REVENUE CALCULATOR ===== */}
      <RevenueCalculator />

      {/* ===== SMM TEASER (Dark) ===== */}
      <section className="py-24 lg:py-32 px-8 bg-brand-dark">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="font-mono text-[11px] text-brand-red uppercase tracking-[0.2em] mb-3">
                Social Media Management
              </div>
              <h2 className="font-display font-800 text-3xl md:text-4xl tracking-tight text-white mb-6 leading-tight">
                Dominate Social Media with Data-Driven Growth
              </h2>
              <p className="text-zinc-400 text-[15px] leading-relaxed mb-8">
                Growing an audience takes consistency, strategy, and time you
                don&apos;t have. Our social media managers handle the day-to-day so
                your accounts keep growing while you focus on creating.
              </p>
              <Link
                href="/social-media"
                className="inline-block bg-brand-red text-white font-display font-600 text-[14px] tracking-wide px-7 py-3.5 rounded-btn hover:bg-brand-red-hover transition-colors"
              >
                Learn More
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Content Strategy", desc: "Custom calendars and themes tailored to your brand" },
                { label: "Daily Posting", desc: "Consistent scheduling across all platforms" },
                { label: "Community", desc: "DM responses, engagement, and audience interaction" },
                { label: "Analytics", desc: "Monthly reports and growth tracking" },
              ].map((item) => (
                <div key={item.label} className="bg-white/5 rounded-card p-6 border border-white/8">
                  <h3 className="font-display font-600 text-[14px] text-white mb-2">
                    {item.label}
                  </h3>
                  <p className="text-zinc-500 text-[13px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-24 lg:py-32 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <div className="font-mono text-[11px] text-brand-red uppercase tracking-[0.2em] mb-3">
              Services
            </div>
            <h2 className="font-display font-800 text-3xl md:text-4xl tracking-tight text-zinc-900">
              What We Offer
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Core */}
            <div className="bg-white rounded-card border-2 border-brand-red p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] relative">
              <div className="absolute top-4 right-4 bg-brand-red text-white font-mono text-[10px] px-3 py-1 rounded-btn tracking-widest uppercase">
                Core
              </div>
              <h3 className="font-display font-700 text-lg mb-3 text-zinc-900">
                Product Launch Partnership
              </h3>
              <p className="text-zinc-500 text-[14px] leading-relaxed mb-5">
                We build and launch your digital product — course, coaching
                program, or community. You pay $0 upfront.
              </p>
              <div className="font-mono text-[11px] text-brand-red uppercase tracking-widest mb-4">
                Revenue Share: 70/30 to 50/50
              </div>
              <ul className="space-y-2 text-zinc-500 text-[13px]">
                <li>Full product creation</li>
                <li>Tech setup & checkout</li>
                <li>Sales copy & landing page</li>
                <li>14-day launch strategy</li>
                <li>Ongoing evergreen sales</li>
              </ul>
            </div>

            {/* SMM */}
            <div className="bg-white rounded-card border border-surface-border p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <h3 className="font-display font-700 text-lg mb-3 text-zinc-900">
                Social Media Management
              </h3>
              <p className="text-zinc-500 text-[14px] leading-relaxed mb-5">
                We manage your content strategy, posting schedule, and audience
                growth. Bigger audience means bigger launches.
              </p>
              <div className="font-mono text-[11px] text-zinc-400 uppercase tracking-widest mb-4">
                $1,500 - $3,000/mo Retainer
              </div>
              <ul className="space-y-2 text-zinc-500 text-[13px]">
                <li>Content strategy & scheduling</li>
                <li>Engagement management</li>
                <li>Growth tactics & trends</li>
                <li>Monthly analytics reports</li>
              </ul>
            </div>

            {/* Brand Deals */}
            <div className="bg-white rounded-card border border-surface-border p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <h3 className="font-display font-700 text-lg mb-3 text-zinc-900">
                Brand Deal Brokering
              </h3>
              <p className="text-zinc-500 text-[14px] leading-relaxed mb-5">
                We find brand partnerships, negotiate your rates, and handle the
                deals. Most micro-creators undercharge by 50-200%.
              </p>
              <div className="font-mono text-[11px] text-zinc-400 uppercase tracking-widest mb-4">
                15-20% Commission
              </div>
              <ul className="space-y-2 text-zinc-500 text-[13px]">
                <li>Brand outreach & pitching</li>
                <li>Rate negotiation</li>
                <li>Contract management</li>
                <li>Deliverable coordination</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <FAQ />

      {/* ===== AUDIT FORM ===== */}
      <AuditForm />
    </>
  );
}
