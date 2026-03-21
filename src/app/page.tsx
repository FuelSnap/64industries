import Link from "next/link";
import RevenueCalculator from "@/components/RevenueCalculator";
import FAQ from "@/components/FAQ";
import AuditForm from "@/components/AuditForm";

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <header className="relative min-h-screen flex flex-col justify-center px-6 pt-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(225,25,0,0.08)_0%,_transparent_50%)]" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="font-data text-[#E11900] text-xs tracking-[0.3em] mb-6 uppercase">
            Creator Monetization Agency
          </div>

          <h1 className="text-[11vw] md:text-[7vw] font-black font-headline leading-[0.85] tracking-tighter uppercase mb-10 max-w-5xl">
            YOUR AUDIENCE IS{" "}
            <span className="text-[#E11900]">WORTH MORE</span> THAN YOU THINK
          </h1>

          <p className="text-neutral-500 font-light text-lg max-w-xl mb-10 leading-relaxed">
            We partner with creators who have 10K-100K followers and help them
            launch digital products, courses, and communities — so they can
            finally make real money from the audience they&apos;ve already built.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              href="/audit"
              className="bg-[#E11900] text-white font-headline font-black text-xl tracking-tighter px-12 py-5 uppercase hover:bg-white hover:text-black transition-all duration-200 text-center"
            >
              GET YOUR FREE AUDIT
            </Link>
            <Link
              href="/how-it-works"
              className="border border-white/20 text-white font-headline font-black text-xl tracking-tighter px-12 py-5 uppercase hover:bg-white/5 transition-all duration-200 text-center"
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

      {/* ===== PROBLEM SECTION ===== */}
      <section className="py-32 px-6 bg-surface-dim">
        <div className="max-w-7xl mx-auto">
          <div className="font-data text-[#E11900] text-xs uppercase tracking-[0.3em] mb-4">
            The Problem
          </div>
          <h2 className="font-headline font-black text-5xl md:text-7xl tracking-tighter uppercase mb-16">
            YOU&apos;RE LEAVING
            <br />
            <span className="text-[#E11900]">MONEY ON THE TABLE</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-px bg-white/5">
            {/* Brand Deals */}
            <div className="bg-surface-container-low p-10 md:p-12">
              <div className="font-headline font-black text-2xl mb-6 uppercase tracking-tight text-neutral-400">
                Standard Brand Deals
              </div>
              <ul className="space-y-4 text-neutral-500 font-light text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-[#E11900] mt-0.5">&#x2717;</span>
                  One-time payouts, inconsistent income
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#E11900] mt-0.5">&#x2717;</span>
                  Zero ownership of the customer relationship
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#E11900] mt-0.5">&#x2717;</span>
                  You promote their brand, not yours
                </li>
              </ul>
              <div className="mt-10 font-data text-3xl text-neutral-700">
                $0 Recurring
              </div>
            </div>

            {/* 64 Industries */}
            <div className="bg-surface-container-high p-10 md:p-12 relative">
              <div className="absolute top-0 right-0 bg-[#E11900] text-white font-data text-[10px] px-4 py-1 tracking-widest uppercase">
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

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-32 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <div className="font-data text-[#E11900] text-xs uppercase tracking-[0.3em] mb-4">
                The Process
              </div>
              <h2 className="font-headline font-black text-5xl md:text-7xl tracking-tighter uppercase">
                HOW IT WORKS
              </h2>
            </div>
            <div className="font-data text-neutral-600 uppercase tracking-widest text-xs">
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
                <div className="font-data text-6xl text-[#E11900] mb-4 opacity-30 group-hover:opacity-100 transition-opacity">
                  {step.num}
                </div>
                <div className="font-headline font-black text-xl uppercase mb-3 tracking-tight">
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

      {/* ===== YOU CREATE / WE HANDLE ===== */}
      <section className="py-32 px-6 bg-surface-dim">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-headline font-black text-5xl md:text-7xl tracking-tighter uppercase mb-3">
              YOU CREATE.
            </h2>
            <h2 className="font-headline font-black text-3xl md:text-5xl tracking-tighter uppercase text-neutral-600">
              WE HANDLE EVERYTHING ELSE.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-white/5">
            <div className="bg-surface p-10 md:p-12">
              <div className="font-data text-[#E11900] text-xs mb-8 uppercase tracking-widest">
                Your Focus
              </div>
              <div className="space-y-6">
                {[
                  "Keep creating content you love",
                  "Engage with your audience",
                  "Record course content (we give you the outline)",
                  "Post launch sequences we write for you",
                  "Cash the checks",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="text-[#00C853] text-sm">&#x2713;</span>
                    <span className="font-headline font-bold text-lg uppercase tracking-tight text-neutral-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface-container-lowest p-10 md:p-12">
              <div className="font-data text-[#E11900] text-xs mb-8 uppercase tracking-widest">
                What Our Team Handles
              </div>
              <div className="space-y-5">
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
                    <span className="font-data text-[#E11900] group-hover:translate-x-1 transition-transform">
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

      {/* ===== SERVICES ===== */}
      <section className="py-32 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="font-data text-[#E11900] text-xs uppercase tracking-[0.3em] mb-4">
            What We Offer
          </div>
          <h2 className="font-headline font-black text-5xl md:text-6xl tracking-tighter uppercase mb-16">
            SERVICES
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-surface-container-high p-8 border-l-4 border-[#E11900] group hover:bg-surface-container-highest transition-colors">
              <div className="font-data text-[10px] text-[#E11900] uppercase tracking-widest mb-4">
                Core Service
              </div>
              <h3 className="font-headline font-black text-2xl uppercase tracking-tight mb-4">
                PRODUCT LAUNCH
                <br />
                PARTNERSHIP
              </h3>
              <p className="text-neutral-500 font-light text-sm leading-relaxed mb-6">
                We build and launch your digital product — course, coaching
                program, or community. You pay $0 upfront. We take a cut of
                sales.
              </p>
              <div className="font-data text-xs text-neutral-600 uppercase tracking-widest mb-4">
                Revenue Share: 70/30 to 50/50
              </div>
              <ul className="space-y-2 text-neutral-400 text-sm font-light">
                <li>Full product creation</li>
                <li>Tech setup & checkout</li>
                <li>Sales copy & landing page</li>
                <li>14-day launch strategy</li>
                <li>Ongoing evergreen sales</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-surface-container p-8 group hover:bg-surface-container-high transition-colors">
              <div className="font-data text-[10px] text-neutral-500 uppercase tracking-widest mb-4">
                Add-On
              </div>
              <h3 className="font-headline font-black text-2xl uppercase tracking-tight mb-4">
                SOCIAL MEDIA
                <br />
                MANAGEMENT
              </h3>
              <p className="text-neutral-500 font-light text-sm leading-relaxed mb-6">
                We manage your content strategy, posting schedule, and audience
                growth. Bigger audience means bigger launches.
              </p>
              <div className="font-data text-xs text-neutral-600 uppercase tracking-widest mb-4">
                $1,500 - $3,000/mo Retainer
              </div>
              <ul className="space-y-2 text-neutral-400 text-sm font-light">
                <li>Content strategy & scheduling</li>
                <li>Engagement management</li>
                <li>Growth tactics & trends</li>
                <li>Monthly analytics reports</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-surface-container p-8 group hover:bg-surface-container-high transition-colors">
              <div className="font-data text-[10px] text-neutral-500 uppercase tracking-widest mb-4">
                Add-On
              </div>
              <h3 className="font-headline font-black text-2xl uppercase tracking-tight mb-4">
                BRAND DEAL
                <br />
                BROKERING
              </h3>
              <p className="text-neutral-500 font-light text-sm leading-relaxed mb-6">
                We find brand partnerships, negotiate your rates, and handle the
                deals. Most micro-creators undercharge by 50-200%.
              </p>
              <div className="font-data text-xs text-neutral-600 uppercase tracking-widest mb-4">
                15-20% Commission
              </div>
              <ul className="space-y-2 text-neutral-400 text-sm font-light">
                <li>Brand outreach & pitching</li>
                <li>Rate negotiation</li>
                <li>Contract management</li>
                <li>Deliverable coordination</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RESULTS PREVIEW ===== */}
      <section className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="font-data text-[#E11900] text-xs uppercase tracking-[0.3em] mb-4">
            Results
          </div>
          <h2 className="font-headline font-black text-5xl md:text-6xl tracking-tighter uppercase mb-6">
            RESULTS DROPPING SOON
          </h2>
          <p className="text-neutral-500 font-light text-lg mb-12 max-w-xl">
            Our first creator partnerships are in progress. Real numbers from
            real launches coming soon.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-surface-container border border-white/5 p-8 flex items-center justify-center min-h-[200px]"
              >
                <div className="text-center">
                  <div className="font-data text-neutral-700 text-xs uppercase tracking-widest">
                    Case Study {String(i).padStart(2, "0")}
                  </div>
                  <div className="font-headline font-black text-neutral-700 text-lg uppercase mt-2">
                    Coming Soon
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/audit"
              className="inline-block bg-[#E11900] text-white font-headline font-black tracking-tighter px-10 py-4 uppercase hover:bg-white hover:text-black transition-all text-lg"
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
