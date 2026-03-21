"use client";

import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem, HoverScale } from "@/components/Motion";

const phases = [
  {
    num: "01",
    days: "Days 1-3",
    title: "Discovery",
    desc: "We dive into your content, audience demographics, and engagement patterns to identify exactly where the monetization gaps are.",
    details: [
      "Deep analysis of your content and audience behavior",
      "Engagement rate and growth trend review",
      "Competitor and niche landscape mapping",
      "Initial monetization opportunity assessment",
    ],
  },
  {
    num: "02",
    days: "Days 3-7",
    title: "Audit",
    desc: "We build your personalized Creator Monetization Audit — a full breakdown of your revenue potential with real numbers.",
    details: [
      "Revenue potential calculations with your real numbers",
      "Product-market fit analysis for your niche",
      "Audience segmentation and buying intent signals",
      "Recommended product type and pricing strategy",
    ],
  },
  {
    num: "03",
    days: "Days 7-10",
    title: "Agreement",
    desc: "If the numbers make sense for both of us, we lock in the partnership. Revenue split, scope, and terms — all defined clearly.",
    details: [
      "Revenue split negotiation (always in your favor to start)",
      "Clear scope — what we handle vs what you handle",
      "Partnership agreement with defined terms",
      "Onboarding and kickoff",
    ],
  },
  {
    num: "04",
    days: "Days 10-21",
    title: "Build",
    desc: "Our team builds your product, sets up the tech, writes all the sales copy, and creates the launch strategy.",
    details: [
      "Product packaging (course, community, or coaching framework)",
      "Full tech setup — storefront, checkout, payments",
      "Sales page copy, landing page, and email sequences",
      "Complete launch strategy and story scripts",
    ],
  },
  {
    num: "05",
    days: "Days 21-35",
    title: "Launch",
    desc: "The 14-day launch sequence goes live. You post the content, engage your audience, and watch the sales come in.",
    details: [
      "5-day warm-up phase (build anticipation)",
      "5-day pre-launch (reveal and generate excitement)",
      "4-day open cart (drive urgency and close sales)",
      "Real-time optimization and performance tracking",
    ],
  },
  {
    num: "06",
    days: "Day 35+",
    title: "Ongoing",
    desc: "After launch, your product continues selling on autopilot. We monitor performance and plan the next product.",
    details: [
      "Evergreen sales optimization",
      "Monthly performance reports and analytics",
      "Next product planning and roadmap",
      "Optional: social media management and brand deal brokering",
    ],
  },
];

export default function HowItWorks() {
  return (
    <>
      {/* Hero (White) */}
      <header className="pt-32 pb-24 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="font-mono text-[10px] text-[#44474A] uppercase tracking-[0.2em] mb-6">
              Methodology
            </div>
            <h1 className="font-display font-800 text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] tracking-[-0.02em] text-brand-black max-w-3xl mb-6">
              From first conversation to first dollar
            </h1>
            <p className="text-[#44474A] text-[17px] max-w-2xl mb-10 leading-relaxed">
              Six phases. Zero guesswork. Zero wasted time.
              Our team follows a proven process built from years of real launches.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Link
              href="/audit"
              className="inline-block bg-brand-black text-white font-display font-600 text-[15px] tracking-wide px-8 py-4 rounded-btn hover:bg-brand-charcoal transition-all duration-300"
            >
              Start With a Free Audit
            </Link>
          </FadeIn>
        </div>
      </header>

      {/* Timeline */}
      <section className="py-24 lg:py-32 px-8 bg-surface-light">
        <div className="max-w-[1100px] mx-auto">
          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {phases.map((phase) => (
              <StaggerItem key={phase.num}>
                <HoverScale>
                  <div className="bg-white p-8 h-full hover:bg-surface-muted transition-colors duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="font-mono text-3xl text-[#C4C8CC] font-bold leading-none">
                        {phase.num}
                      </span>
                      <div>
                        <h3 className="font-display font-700 text-xl text-brand-black">
                          {phase.title}
                        </h3>
                        <span className="font-mono text-[10px] text-[#9CA3AF] uppercase tracking-widest">
                          {phase.days}
                        </span>
                      </div>
                    </div>
                    <p className="text-[#44474A] text-[14px] leading-relaxed mb-5">
                      {phase.desc}
                    </p>
                    <ul className="space-y-2">
                      {phase.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-[#44474A] text-[13px]">
                          <span className="text-[#9CA3AF] mt-0.5 shrink-0 text-xs">&bull;</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA (Charcoal) */}
      <section className="py-20 px-8 bg-brand-black">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display font-800 text-3xl md:text-4xl tracking-[-0.02em] text-white mb-6">
              Ready to get started?
            </h2>
            <p className="text-[#6B7280] text-[15px] mb-8 max-w-lg mx-auto leading-relaxed">
              Skip the guesswork. Let our team audit your creator business and show you the missing revenue.
            </p>
            <Link
              href="/audit"
              className="inline-block bg-white text-brand-black font-display font-600 text-[15px] tracking-wide px-10 py-4 rounded-btn hover:bg-surface-dim transition-colors"
            >
              Start With a Free Audit
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
