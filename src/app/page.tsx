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
} from "@/components/Motion";

export default function Home() {
  return (
    <>
      {/* ===== HERO (White / Editorial) ===== */}
      <header className="relative min-h-screen flex flex-col justify-center px-8 pt-24 pb-20 overflow-hidden bg-white">
        {/* Large 64 watermark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute right-[-5%] top-1/2 -translate-y-1/2 font-display font-800 text-[40vw] leading-none text-[#E4E6E9] select-none pointer-events-none"
        >
          64
        </motion.div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-[11px] text-[#44474A] uppercase tracking-[0.2em] mb-6"
          >
            Institutional Grade Infrastructure
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-display font-800 text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] tracking-[-0.02em] text-brand-black max-w-4xl mb-8"
          >
            Your audience is an institutional asset
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-[#44474A] text-[17px] max-w-xl mb-10 leading-relaxed"
          >
            We architect the financial infrastructure that turns influence into
            scalable revenue. Zero upfront investment. Performance-aligned
            partnerships for creators with 10K-100K+ followers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <Link
              href="/audit"
              className="bg-brand-black text-white font-display font-600 text-[14px] tracking-wide px-8 py-4 rounded-btn hover:bg-brand-charcoal transition-all duration-300 text-center"
            >
              Begin Your Audit
            </Link>
            <Link
              href="/how-it-works"
              className="bg-surface-muted text-brand-black font-display font-600 text-[14px] tracking-wide px-8 py-4 rounded-btn hover:bg-surface-dim transition-all duration-300 text-center"
            >
              View Methodology
            </Link>
            <a
              href="https://calendly.com/64industries/intro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#44474A] font-display font-600 text-[14px] tracking-wide px-8 py-4 hover:text-brand-black transition-all duration-300 text-center"
            >
              Book a Call
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="font-mono text-[10px] text-[#9CA3AF] uppercase tracking-[0.15em]"
          >
            $0 Upfront &mdash; Performance Partnership &mdash; Limited to 10 Creators Per Quarter
          </motion.div>
        </div>
      </header>

      {/* ===== THE INVISIBLE REVENUE GAP ===== */}
      <section className="py-24 lg:py-32 px-8 bg-surface-light">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="mb-16">
              <div className="font-mono text-[10px] text-[#44474A] uppercase tracking-[0.2em] mb-3">
                The Problem
              </div>
              <h2 className="font-display font-800 text-[clamp(1.8rem,4vw,2.8rem)] tracking-[-0.02em] text-brand-black max-w-2xl leading-[1.15]">
                Brand deals pay you once. We build you revenue streams.
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.15}>
            <StaggerItem>
              <div className="bg-white p-8 lg:p-10 h-full">
                <h3 className="font-display font-700 text-xl mb-6 text-[#9CA3AF]">
                  Standard Brand Deals
                </h3>
                <ul className="space-y-4 mb-8">
                  {[
                    "One-time payouts, inconsistent income",
                    "Zero ownership of the customer relationship",
                    "You promote their brand, not yours",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#44474A] text-[15px]">
                      <span className="text-[#9CA3AF] mt-0.5 shrink-0">&#x2717;</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="font-display font-800 text-3xl text-[#C4C8CC]">$0 Recurring</div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-brand-black p-8 lg:p-10 relative overflow-hidden h-full">
                <div className="relative z-10">
                  <div className="absolute top-0 right-0 bg-accent-emerald text-white font-mono text-[10px] px-3 py-1 tracking-[0.15em] uppercase">
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
                      <li key={item} className="flex items-start gap-3 text-[#9CA3AF] text-[15px]">
                        <span className="text-accent-emerald mt-0.5 shrink-0">&#x2713;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="font-display font-800 text-3xl text-accent-emerald">6-Figure Potential</div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ===== THE ARCHITECTURE ===== */}
      <section className="py-24 lg:py-32 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <div className="font-mono text-[10px] text-[#44474A] uppercase tracking-[0.2em] mb-3">
                  The Architecture
                </div>
                <h2 className="font-display font-800 text-[clamp(1.8rem,4vw,2.8rem)] tracking-[-0.02em] text-brand-black">
                  How It Works
                </h2>
              </div>
              <div className="font-mono text-[10px] text-[#9CA3AF] uppercase tracking-[0.15em]">
                From first conversation to first dollar
              </div>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {[
              { num: "01", title: "Audit", desc: "Comprehensive assessment of your content, audience, and engagement to quantify the revenue you are currently forgoing." },
              { num: "02", title: "Build", desc: "Our team constructs your product — course, coaching program, or community. We handle technology, copy, and infrastructure." },
              { num: "03", title: "Launch", desc: "We engineer a launch strategy and provide all assets. You deploy to your audience. We manage backend operations." },
              { num: "04", title: "Scale", desc: "Revenue splits automatically at point of sale. Evergreen funnels continue generating revenue long after launch." },
            ].map((step) => (
              <StaggerItem key={step.num}>
                <HoverScale scale={1.01}>
                  <div className="bg-surface-light p-8 h-full">
                    <div className="font-mono text-4xl text-[#C4C8CC] mb-4">
                      {step.num}
                    </div>
                    <h3 className="font-display font-700 text-lg mb-3 text-brand-black">
                      {step.title}
                    </h3>
                    <p className="text-[#44474A] text-[14px] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== YIELD PROJECTION (Calculator) ===== */}
      <RevenueCalculator />

      {/* ===== SOCIAL INTELLIGENCE ===== */}
      <section className="py-24 lg:py-32 px-8 bg-brand-black relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideIn direction="left">
              <div>
                <div className="font-mono text-[10px] text-[#9CA3AF] uppercase tracking-[0.2em] mb-3">
                  Social Intelligence
                </div>
                <h2 className="font-display font-800 text-[clamp(1.8rem,4vw,2.8rem)] tracking-[-0.02em] text-white mb-6 leading-[1.15]">
                  Data-driven audience growth infrastructure
                </h2>
                <p className="text-[#9CA3AF] text-[15px] leading-relaxed mb-8">
                  Growing an audience requires consistency, strategy, and operational
                  bandwidth. Our social media operators handle the execution so your
                  accounts scale while you focus on creating.
                </p>
                <Link
                  href="/social-media"
                  className="inline-block bg-white text-brand-black font-display font-600 text-[14px] tracking-wide px-7 py-3.5 rounded-btn hover:bg-surface-light transition-all duration-300"
                >
                  View Capabilities
                </Link>
              </div>
            </SlideIn>

            <SlideIn direction="right" delay={0.2}>
              <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.1}>
                {[
                  { label: "Content Strategy", desc: "Custom calendars and themes tailored to your brand" },
                  { label: "Daily Operations", desc: "Consistent scheduling across all platforms" },
                  { label: "Community", desc: "DM responses, engagement, and audience interaction" },
                  { label: "Analytics", desc: "Monthly performance intelligence reports" },
                ].map((item) => (
                  <StaggerItem key={item.label}>
                    <div className="bg-white/5 p-6 hover:bg-white/8 transition-colors duration-300">
                      <h3 className="font-display font-600 text-[14px] text-white mb-2">
                        {item.label}
                      </h3>
                      <p className="text-[#9CA3AF] text-[13px] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ===== STRATEGIC CAPABILITIES ===== */}
      <section className="py-24 lg:py-32 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="mb-16">
              <div className="font-mono text-[10px] text-[#44474A] uppercase tracking-[0.2em] mb-3">
                Strategic Capabilities
              </div>
              <h2 className="font-display font-800 text-[clamp(1.8rem,4vw,2.8rem)] tracking-[-0.02em] text-brand-black">
                What We Offer
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.12}>
            {[
              {
                title: "Product Launch Partnership",
                desc: "We build and launch your digital product — course, coaching program, or community. Zero upfront investment required.",
                pricing: "Revenue Share — You Keep 70-80%",
                features: ["Full product creation", "Tech setup & checkout", "Sales copy & landing page", "14-day launch strategy", "Ongoing evergreen sales"],
                highlight: true,
              },
              {
                title: "Social Intelligence",
                desc: "We manage your content strategy, posting schedule, and audience growth. Larger audience compounds into larger launches.",
                pricing: "$1,500 - $3,000/mo Retainer",
                features: ["Content strategy & scheduling", "Engagement management", "Growth tactics & trends", "Monthly analytics reports"],
                highlight: false,
              },
              {
                title: "Capital Brokerage",
                desc: "We source brand partnerships, negotiate premium rates, and manage deal flow. Most micro-creators undervalue by 50-200%.",
                pricing: "15-20% Commission",
                features: ["Brand outreach & pitching", "Rate negotiation", "Contract management", "Deliverable coordination"],
                highlight: false,
              },
            ].map((service) => (
              <StaggerItem key={service.title}>
                <HoverScale scale={1.01}>
                  <div className={`p-8 h-full transition-all duration-300 ${
                    service.highlight ? "bg-brand-black text-white" : "bg-surface-light"
                  }`}>
                    <h3 className={`font-display font-700 text-lg mb-3 ${service.highlight ? "text-white" : "text-brand-black"}`}>
                      {service.title}
                    </h3>
                    <p className={`text-[14px] leading-relaxed mb-5 ${service.highlight ? "text-[#9CA3AF]" : "text-[#44474A]"}`}>
                      {service.desc}
                    </p>
                    <div className={`font-mono text-[11px] uppercase tracking-[0.12em] mb-4 ${
                      service.highlight ? "text-accent-emerald" : "text-[#9CA3AF]"
                    }`}>
                      {service.pricing}
                    </div>
                    <ul className={`space-y-2 text-[13px] ${service.highlight ? "text-[#9CA3AF]" : "text-[#44474A]"}`}>
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
