import Link from "next/link";
import RevenueCalculator from "@/components/RevenueCalculator";
import FAQ from "@/components/FAQ";
import AuditForm from "@/components/AuditForm";

export default function Home() {
  return (
    <>
      {/* ===== HERO (Dark) ===== */}
      <header className="relative min-h-screen flex flex-col justify-center px-6 pt-24 overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(225,25,0,0.08)_0%,_transparent_50%)]" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="font-data text-brand-red text-xs tracking-[0.3em] mb-6 uppercase">
            Creator Monetization Agency
          </div>

          <h1 className="text-[11vw] md:text-[7vw] font-black font-headline leading-[0.85] tracking-tighter uppercase mb-10 max-w-5xl text-white">
            YOUR AUDIENCE IS{" "}
            <span className="text-brand-red">WORTH MORE</span> THAN YOU THINK
          </h1>

          <p className="text-neutral-400 font-light text-lg max-w-xl mb-10 leading-relaxed">
            We partner with creators who have 10K-100K followers and help them
            launch digital products, courses, and communities — so they can
            finally make real money from the audience they&apos;ve already built.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              href="/audit"
              className="bg-brand-red text-white font-headline font-bold text-xl tracking-tight px-12 py-5 uppercase hover:bg-brand-red-hover transition-colors text-center"
            >
              GET YOUR FREE AUDIT
            </Link>
            <Link
              href="/how-it-works"
              className="border border-white/20 text-white font-headline font-bold text-xl tracking-tight px-12 py-5 uppercase hover:bg-white/5 transition-all text-center"
            >
              SEE HOW IT WORKS
            </Link>
          </div>

          <div className="font-data text-[10px] text-neutral-600 uppercase tracking-widest">
            $0 Upfront &mdash; Performance-Only Partnership &mdash; No Risk To
            You
          </div>
        </div>
      </header>

      {/* ===== PROBLEM SECTION (Light) ===== */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="font-data text-brand-red text-xs uppercase tracking-[0.3em] mb-4">
            The Problem
          </div>
          <h2 className="font-headline font-black text-4xl md:text-6xl tracking-tighter uppercase mb-16 text-neutral-900">
            YOU&apos;RE LEAVING
            <br />
            <span className="text-brand-red">MONEY ON THE TABLE</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Brand Deals */}
            <div className="bg-neutral-50 p-10 md:p-12 border border-neutral-200">
              <div className="font-headline font-black text-2xl mb-6 uppercase tracking-tight text-neutral-400">
                Standard Brand Deals
              </div>
              <ul className="space-y-4 text-neutral-500 font-light text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-brand-red mt-0.5">&#x2717;</span>
                  One-time payouts, inconsistent income
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-red mt-0.5">&#x2717;</span>
                  Zero ownership of the customer relationship
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-red mt-0.5">&#x2717;</span>
                  You promote their brand, not yours
                </li>
              </ul>
              <div className="mt-10 font-data text-3xl text-neutral-300">
                $0 Recurring
              </div>
            </div>

            {/* 64 Industries */}
            <div className="bg-brand-dark p-10 md:p-12 relative">
              <div className="absolute top-0 right-0 bg-brand-red text-white font-data text-[10px] px-4 py-1 tracking-widest uppercase">
                Our Model
              </div>
              <div className="font-headline font-black text-2xl mb-6 uppercase tracking-tight text-white">
                64 Industries Product Launches
              </div>
              <ul className="space-y-4 text-neutral-300 font-light text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-[#00C853] mt-0.5">&#x2713;</span>
                  Build assets that generate revenue long-term
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00C853] mt-0.5">&#x2713;</span>
                  You own the product and the customer data
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00C853] mt-0.5">&#x2713;</span>
                  Your brand, your audience, your empire
                </li>
              </ul>
              <div className="mt-10 font-data text-3xl text-[#00C853]">
                6-Figure Potential
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS (Light) ===== */}
      <section className="py-28 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <div className="font-data text-brand-red text-xs uppercase tracking-[0.3em] mb-4">
                The Process
              </div>
              <h2 className="font-headline font-black text-4xl md:text-6xl tracking-tighter uppercase text-neutral-900">
                HOW IT WORKS
              </h2>
            </div>
            <div className="font-data text-neutral-400 uppercase tracking-widest text-xs">
              From first conversation to first dollar
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                num: "01",
                title: "AUDIT",
                desc: "We analyze your content, audience, and engagement to find exactly how much revenue you're leaving on the table.",
              },
              {
                num: "02",
                title: "BUILD",
                desc: "Our team builds your product — course, coaching program, or community. We handle the tech, the copy, the sales page. Everything.",
              },
              {
                num: "03",
                title: "LAUNCH",
                desc: "We craft a launch strategy and write the scripts. You post to your audience. We handle the rest behind the scenes.",
              },
              {
                num: "04",
                title: "GET PAID",
                desc: "Revenue splits automatically at the point of sale. You get your share instantly. No invoices, no chasing payments.",
              },
            ].map((step) => (
              <div key={step.num} className="group">
                <div className="font-data text-6xl text-brand-red mb-4 opacity-20 group-hover:opacity-100 transition-opacity">
                  {step.num}
                </div>
                <div className="font-headline font-black text-xl uppercase mb-3 tracking-tight text-neutral-900">
                  {step.title}
                </div>
                <p className="text-neutral-500 font-light text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REVENUE CALCULATOR ===== */}
      <RevenueCalculator />

      {/* ===== YOU CREATE / WE HANDLE (Light) ===== */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-headline font-black text-4xl md:text-6xl tracking-tighter uppercase mb-3 text-neutral-900">
              YOU CREATE.
            </h2>
            <h2 className="font-headline font-black text-2xl md:text-4xl tracking-tighter uppercase text-neutral-400">
              WE HANDLE EVERYTHING ELSE.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-50 p-10 md:p-12 border border-neutral-200">
              <div className="font-data text-brand-red text-xs mb-8 uppercase tracking-widest">
                Your Focus
              </div>
              <div className="space-y-5">
                {[
                  "Keep creating content you love",
                  "Engage with your audience",
                  "Record course content (we give you the outline)",
                  "Post launch sequences we write for you",
                  "Cash the checks",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="text-[#00C853] text-sm">&#x2713;</span>
                    <span className="font-headline font-bold text-base uppercase tracking-tight text-neutral-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-dark p-10 md:p-12">
              <div className="font-data text-brand-red text-xs mb-8 uppercase tracking-widest">
                What Our Team Handles
              </div>
              <div className="space-y-4">
                {[
                  "Product strategy & packaging",
                  "Full tech setup (store, checkout, delivery)",
                  "Sales page & landing page copy",
                  "Email sequences & launch campaigns",
                  "Revenue split configuration",
                  "Analytics & performance reporting",
                  "Social media management (optional)",
                  "Brand deal sourcing (optional)",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 group">
                    <span className="font-data text-brand-red group-hover:translate-x-1 transition-transform text-xs">
                      &gt;&gt;
                    </span>
                    <span className="text-neutral-400 group-hover:text-white transition-colors text-sm font-light">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES (Light) ===== */}
      <section className="py-28 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="font-data text-brand-red text-xs uppercase tracking-[0.3em] mb-4">
            What We Offer
          </div>
          <h2 className="font-headline font-black text-4xl md:text-5xl tracking-tighter uppercase mb-16 text-neutral-900">
            SERVICES
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="bg-white p-8 border-l-4 border-brand-red shadow-sm hover:shadow-md transition-shadow">
              <div className="font-data text-[10px] text-brand-red uppercase tracking-widest mb-4">
                Core Service
              </div>
              <h3 className="font-headline font-black text-2xl uppercase tracking-tight mb-4 text-neutral-900">
                PRODUCT LAUNCH
                <br />
                PARTNERSHIP
              </h3>
              <p className="text-neutral-500 font-light text-sm leading-relaxed mb-6">
                We build and launch your digital product — course, coaching
                program, or community. You pay $0 upfront. We take a cut of
                sales.
              </p>
              <div className="font-data text-xs text-brand-red uppercase tracking-widest mb-4">
                Revenue Share: 70/30 to 50/50
              </div>
              <ul className="space-y-2 text-neutral-500 text-sm font-light">
                <li>Full product creation</li>
                <li>Tech setup & checkout</li>
                <li>Sales copy & landing page</li>
                <li>14-day launch strategy</li>
                <li>Ongoing evergreen sales</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="font-data text-[10px] text-neutral-400 uppercase tracking-widest mb-4">
                Add-On
              </div>
              <h3 className="font-headline font-black text-2xl uppercase tracking-tight mb-4 text-neutral-900">
                SOCIAL MEDIA
                <br />
                MANAGEMENT
              </h3>
              <p className="text-neutral-500 font-light text-sm leading-relaxed mb-6">
                We manage your content strategy, posting schedule, and audience
                growth. Bigger audience means bigger launches.
              </p>
              <div className="font-data text-xs text-neutral-400 uppercase tracking-widest mb-4">
                $1,500 - $3,000/mo Retainer
              </div>
              <ul className="space-y-2 text-neutral-500 text-sm font-light">
                <li>Content strategy & scheduling</li>
                <li>Engagement management</li>
                <li>Growth tactics & trends</li>
                <li>Monthly analytics reports</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="font-data text-[10px] text-neutral-400 uppercase tracking-widest mb-4">
                Add-On
              </div>
              <h3 className="font-headline font-black text-2xl uppercase tracking-tight mb-4 text-neutral-900">
                BRAND DEAL
                <br />
                BROKERING
              </h3>
              <p className="text-neutral-500 font-light text-sm leading-relaxed mb-6">
                We find brand partnerships, negotiate your rates, and handle the
                deals. Most micro-creators undercharge by 50-200%.
              </p>
              <div className="font-data text-xs text-neutral-400 uppercase tracking-widest mb-4">
                15-20% Commission
              </div>
              <ul className="space-y-2 text-neutral-500 text-sm font-light">
                <li>Brand outreach & pitching</li>
                <li>Rate negotiation</li>
                <li>Contract management</li>
                <li>Deliverable coordination</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SOCIAL MEDIA MANAGEMENT (Dark accent) ===== */}
      <section className="py-28 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="font-data text-brand-red text-xs uppercase tracking-[0.3em] mb-4">
                Social Media Management
              </div>
              <h2 className="font-headline font-black text-4xl md:text-5xl tracking-tighter uppercase mb-6 text-white">
                WE RUN YOUR
                <br />
                <span className="text-brand-red">SOCIAL MEDIA</span>
              </h2>
              <p className="text-neutral-400 font-light leading-relaxed mb-8">
                Growing an audience takes consistency, strategy, and time you
                don&apos;t have. Our social media managers handle the day-to-day so
                your accounts keep growing while you focus on creating.
              </p>
              <Link
                href="/audit"
                className="inline-block bg-brand-red text-white font-headline font-bold tracking-tight px-10 py-4 uppercase hover:bg-brand-red-hover transition-colors text-lg"
              >
                LEARN MORE
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Content Strategy", desc: "Custom calendars and themes tailored to your brand and niche" },
                { label: "Daily Posting", desc: "Consistent scheduling across Instagram, TikTok, X, and YouTube" },
                { label: "Community Management", desc: "DM responses, comment engagement, and audience interaction" },
                { label: "Growth & Analytics", desc: "Monthly reports, trend optimization, and follower growth tracking" },
              ].map((item) => (
                <div key={item.label} className="bg-white/5 p-6 border border-white/10">
                  <h3 className="font-headline font-bold text-sm uppercase tracking-tight text-white mb-2">
                    {item.label}
                  </h3>
                  <p className="text-neutral-500 text-xs font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== RESULTS PREVIEW (Light) ===== */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="font-data text-brand-red text-xs uppercase tracking-[0.3em] mb-4">
            Results
          </div>
          <h2 className="font-headline font-black text-4xl md:text-5xl tracking-tighter uppercase mb-6 text-neutral-900">
            RESULTS DROPPING SOON
          </h2>
          <p className="text-neutral-500 font-light text-lg mb-12 max-w-xl">
            Our first creator partnerships are in progress. Real numbers from
            real launches coming soon.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-neutral-50 border border-neutral-200 p-8 flex items-center justify-center min-h-[200px]"
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

          <div className="mt-12 text-center">
            <Link
              href="/audit"
              className="inline-block bg-brand-red text-white font-headline font-bold tracking-tight px-10 py-4 uppercase hover:bg-brand-red-hover transition-colors text-lg"
            >
              BE ONE OF OUR FIRST CASE STUDIES
            </Link>
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
