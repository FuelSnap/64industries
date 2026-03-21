"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import RevenueCalculator from "@/components/RevenueCalculator";
import FAQ from "@/components/FAQ";
import AuditForm from "@/components/AuditForm";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  HoverScale,
  SlideIn,
  GradientOrb,
} from "@/components/Motion";

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <header className="relative min-h-screen flex flex-col justify-center px-8 pt-24 pb-20 overflow-hidden bg-brand-dark">
        <GradientOrb color="rgba(225, 25, 0, 0.06)" size="800px" position="top-right" />
        <GradientOrb color="rgba(225, 25, 0, 0.04)" size="600px" position="bottom-left" />

        {/* Large 64 watermark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute right-[-5%] top-1/2 -translate-y-1/2 font-display font-800 text-[40vw] leading-none text-white/[0.03] select-none pointer-events-none"
        >
          64
        </motion.div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-[11px] text-brand-red uppercase tracking-[0.2em] mb-6"
          >
            Creator Monetization Agency
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-display font-800 text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] tracking-tight text-white max-w-3xl mb-8"
          >
            We turn creator audiences into revenue machines
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-zinc-400 text-[17px] max-w-xl mb-10 leading-relaxed"
          >
            We partner with creators who have 10K-100K followers and help them
            launch digital products, courses, and communities — so they can
            finally make real money from the audience they&apos;ve already built.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <Link
              href="/audit"
              className="bg-brand-red text-white font-display font-600 text-[15px] tracking-wide px-8 py-4 rounded-btn hover:bg-brand-red-hover hover:shadow-[0_8px_30px_rgba(225,25,0,0.3)] transition-all duration-300 text-center"
            >
              Get Your Free Audit
            </Link>
            <Link
              href="/how-it-works"
              className="border border-white/20 text-white font-display font-600 text-[15px] tracking-wide px-8 py-4 rounded-btn hover:bg-white/5 hover:border-white/40 transition-all duration-300 text-center"
            >
              See How It Works
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest"
          >
            $0 Upfront &mdash; Performance Partnership &mdash; No Risk To You
          </motion.div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </header>

      {/* ===== COMPARISON ===== */}
      <section className="py-24 lg:py-32 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="mb-12">
              <div className="font-mono text-[11px] text-brand-red uppercase tracking-[0.2em] mb-3">
                The Problem
              </div>
              <h2 className="font-display font-800 text-3xl md:text-4xl tracking-tight text-zinc-900 max-w-2xl">
                Brand deals pay you once. We build you revenue streams.
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.15}>
            <StaggerItem>
              <div className="bg-surface-muted rounded-card p-8 lg:p-10 border border-surface-border h-full">
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
            </StaggerItem>

            <StaggerItem>
              <div className="bg-brand-dark rounded-card p-8 lg:p-10 relative overflow-hidden h-full">
                <GradientOrb color="rgba(225, 25, 0, 0.06)" size="400px" position="top-right" />
                <div className="relative z-10">
                  <div className="absolute top-0 right-0 bg-brand-red text-white font-mono text-[10px] px-3 py-1 rounded-btn tracking-widest uppercase">
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
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-24 lg:py-32 px-8 bg-surface-light">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
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
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {[
              { num: "01", title: "Audit", desc: "We analyze your content, audience, and engagement to find exactly how much revenue you're leaving on the table." },
              { num: "02", title: "Build", desc: "Our team builds your product — course, coaching program, or community. We handle the tech, the copy, everything." },
              { num: "03", title: "Launch", desc: "We craft a launch strategy and write the scripts. You post to your audience. We handle the rest behind the scenes." },
              { num: "04", title: "Get Paid", desc: "Revenue splits automatically at point of sale. You get your share instantly. No invoices, no chasing payments." },
            ].map((step) => (
              <StaggerItem key={step.num}>
                <HoverScale>
                  <div className="bg-white rounded-card border border-surface-border p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] h-full">
                    <div className="font-mono text-4xl text-brand-red/20 mb-4">
                      {step.num}
                    </div>
                    <h3 className="font-display font-700 text-lg mb-3 text-zinc-900">
                      {step.title}
                    </h3>
                    <p className="text-zinc-500 text-[14px] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== REVENUE CALCULATOR ===== */}
      <RevenueCalculator />

      {/* ===== SMM TEASER (Dark) ===== */}
      <section className="py-24 lg:py-32 px-8 bg-brand-dark relative overflow-hidden">
        <GradientOrb color="rgba(225, 25, 0, 0.05)" size="700px" position="bottom-right" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideIn direction="left">
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
                  className="inline-block bg-brand-red text-white font-display font-600 text-[14px] tracking-wide px-7 py-3.5 rounded-btn hover:bg-brand-red-hover hover:shadow-[0_8px_30px_rgba(225,25,0,0.3)] transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </SlideIn>

            <SlideIn direction="right" delay={0.2}>
              <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.1}>
                {[
                  { label: "Content Strategy", desc: "Custom calendars and themes tailored to your brand" },
                  { label: "Daily Posting", desc: "Consistent scheduling across all platforms" },
                  { label: "Community", desc: "DM responses, engagement, and audience interaction" },
                  { label: "Analytics", desc: "Monthly reports and growth tracking" },
                ].map((item) => (
                  <StaggerItem key={item.label}>
                    <HoverScale scale={1.03}>
                      <div className="bg-white/5 rounded-card p-6 border border-white/8 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                        <h3 className="font-display font-600 text-[14px] text-white mb-2">
                          {item.label}
                        </h3>
                        <p className="text-zinc-500 text-[13px] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </HoverScale>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-24 lg:py-32 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="mb-12">
              <div className="font-mono text-[11px] text-brand-red uppercase tracking-[0.2em] mb-3">
                Services
              </div>
              <h2 className="font-display font-800 text-3xl md:text-4xl tracking-tight text-zinc-900">
                What We Offer
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.12}>
            {[
              {
                title: "Product Launch Partnership",
                desc: "We build and launch your digital product — course, coaching program, or community. You pay $0 upfront.",
                pricing: "Revenue Share: 70/30 to 50/50",
                features: ["Full product creation", "Tech setup & checkout", "Sales copy & landing page", "14-day launch strategy", "Ongoing evergreen sales"],
                highlight: true,
                badge: "Core",
              },
              {
                title: "Social Media Management",
                desc: "We manage your content strategy, posting schedule, and audience growth. Bigger audience means bigger launches.",
                pricing: "$1,500 - $3,000/mo Retainer",
                features: ["Content strategy & scheduling", "Engagement management", "Growth tactics & trends", "Monthly analytics reports"],
                highlight: false,
                badge: null,
              },
              {
                title: "Brand Deal Brokering",
                desc: "We find brand partnerships, negotiate your rates, and handle the deals. Most micro-creators undercharge by 50-200%.",
                pricing: "15-20% Commission",
                features: ["Brand outreach & pitching", "Rate negotiation", "Contract management", "Deliverable coordination"],
                highlight: false,
                badge: null,
              },
            ].map((service) => (
              <StaggerItem key={service.title}>
                <HoverScale>
                  <div className={`rounded-card p-8 h-full relative shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow duration-300 ${
                    service.highlight ? "border-2 border-brand-red bg-white" : "border border-surface-border bg-white"
                  }`}>
                    {service.badge && (
                      <div className="absolute top-4 right-4 bg-brand-red text-white font-mono text-[10px] px-3 py-1 rounded-btn tracking-widest uppercase">
                        {service.badge}
                      </div>
                    )}
                    <h3 className="font-display font-700 text-lg mb-3 text-zinc-900">
                      {service.title}
                    </h3>
                    <p className="text-zinc-500 text-[14px] leading-relaxed mb-5">
                      {service.desc}
                    </p>
                    <div className={`font-mono text-[11px] uppercase tracking-widest mb-4 ${
                      service.highlight ? "text-brand-red" : "text-zinc-400"
                    }`}>
                      {service.pricing}
                    </div>
                    <ul className="space-y-2 text-zinc-500 text-[13px]">
                      {service.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <FAQ />

      {/* ===== AUDIT FORM ===== */}
      <AuditForm />
    </>
  );
}
