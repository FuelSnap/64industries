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
            $0 Upfront &mdash; Performance Partnership &mdash; Limited to 10 Creators Per Month
          </motion.div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/10 to-transparent" />
      </header>

      {/* ===== PLATFORMS ===== */}
      <section className="py-12 px-8 bg-white border-b border-surface-border">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn>
            <div className="text-center mb-6">
              <div className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                Platforms & Tools We Work With
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14 opacity-40">
              {[
                { name: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                { name: "TikTok", path: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.11v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 005.58 2.18V2.44a4.84 4.84 0 01-.01 4.25z" },
                { name: "YouTube", path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
                { name: "Stripe", path: "M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-7.076-2.19l-.893 5.575C4.746 22.901 7.614 24 11.435 24c2.607 0 4.709-.652 6.178-1.872 1.62-1.348 2.387-3.315 2.387-5.737 0-4.128-2.508-5.789-6.024-7.241z" },
                { name: "Shopify", path: "M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104zm-1.635-17.371l-.801 2.425s-.883-.417-1.913-.417c-1.546 0-1.624.97-1.624 1.215 0 1.334 3.478 1.845 3.478 4.974 0 2.461-1.56 4.044-3.666 4.044-2.524 0-3.813-1.571-3.813-1.571l.675-2.229s1.327 1.14 2.446 1.14c.732 0 1.03-.576 1.03-1 0-1.744-2.854-1.822-2.854-4.684 0-2.41 1.732-4.742 5.227-4.742 1.344 0 2.015.384 2.015.384v.461z" },
              ].map((platform) => (
                <div key={platform.name} className="flex items-center gap-2 group" title={platform.name}>
                  <svg className="w-6 h-6 fill-zinc-900" viewBox="0 0 24 24">
                    <path d={platform.path} />
                  </svg>
                  <span className="font-display font-600 text-[13px] text-zinc-900 hidden sm:inline">{platform.name}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

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
                pricing: "Revenue Share — You Keep 70-80%",
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
