"use client";

import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem, HoverScale, SlideIn } from "@/components/Motion";

const services = [
  {
    title: "Content Strategy & Planning",
    desc: "We build custom content calendars tailored to your niche, audience behavior, and platform algorithms.",
    items: ["Monthly content calendar with themes and hooks", "Platform-specific formatting", "Trend monitoring and rapid-response content", "Content pillar development"],
  },
  {
    title: "Daily Management & Execution",
    desc: "We handle the grind — scheduling, posting, caption writing, hashtag research — all done for you.",
    items: ["Daily posting across all platforms", "Caption writing and hashtag optimization", "Story creation and scheduling", "Cross-platform content repurposing"],
  },
  {
    title: "Community & Engagement",
    desc: "Growth isn't just about posting — it's about building relationships. We manage your community.",
    items: ["Comment responses and engagement", "DM management and lead qualification", "Community building and interaction", "Audience sentiment monitoring"],
  },
  {
    title: "Analytics & Growth",
    desc: "Data drives everything we do. Monthly reports show what's working and where the growth opportunities are.",
    items: ["Monthly performance reports", "Follower growth tracking and benchmarks", "Engagement rate optimization", "Competitor analysis and positioning"],
  },
];

export default function SocialMedia() {
  return (
    <>
      {/* Hero (White) */}
      <header className="pt-32 pb-24 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="font-mono text-[10px] text-[#44474A] uppercase tracking-[0.2em] mb-6">
              Social Intelligence
            </div>
            <h1 className="font-display font-800 text-[clamp(2.2rem,5vw,4rem)] leading-[1.1] tracking-[-0.02em] text-brand-black max-w-3xl mb-6">
              Grow your audience while you focus on creating
            </h1>
            <p className="text-[#44474A] text-[17px] max-w-2xl mb-10 leading-relaxed">
              Growing and maintaining a social media presence takes hours every
              day. Our team handles the strategy, the posting, and the engagement
              — so your accounts grow while you focus on what matters.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Link
              href="/audit"
              className="inline-block bg-brand-black text-white font-display font-600 text-[15px] tracking-wide px-8 py-4 rounded-btn hover:bg-brand-charcoal transition-all duration-300"
            >
              Get Started
            </Link>
          </FadeIn>
        </div>
      </header>

      {/* Stats */}
      <section className="py-20 px-8 bg-brand-black">
        <div className="max-w-[900px] mx-auto">
          <StaggerContainer className="grid grid-cols-3 gap-8 text-center" staggerDelay={0.15}>
            {[
              { value: "73%", label: "Of creators say inconsistent posting holds them back" },
              { value: "20hrs", suffix: "/week", label: "Average time creators spend on social media management" },
              { value: "3x", label: "Growth potential with dedicated strategy & execution" },
            ].map((stat) => (
              <StaggerItem key={stat.value}>
                <div>
                  <div className="font-display font-800 text-4xl md:text-5xl text-white mb-2">
                    {stat.value}
                    {stat.suffix && <span className="text-lg text-[#9CA3AF]">{stat.suffix}</span>}
                  </div>
                  <p className="text-[#9CA3AF] text-[13px] leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32 px-8 bg-surface-light">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="mb-12">
              <div className="font-mono text-[10px] text-[#44474A] uppercase tracking-[0.2em] mb-3">
                What&apos;s Included
              </div>
              <h2 className="font-display font-800 text-[clamp(1.8rem,4vw,2.8rem)] tracking-[-0.02em] text-brand-black">
                Full-Service Management
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <HoverScale scale={1.02}>
                  <div className="bg-white p-8 hover:bg-surface-muted transition-colors duration-300 h-full">
                    <h3 className="font-display font-700 text-lg text-brand-black mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[#44474A] text-[14px] leading-relaxed mb-5">
                      {service.desc}
                    </p>
                    <ul className="space-y-2">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[#44474A] text-[13px]">
                          <span className="text-[#9CA3AF] mt-0.5 shrink-0 text-xs">&bull;</span>
                          {item}
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

      {/* Platforms */}
      <section className="py-20 px-8 bg-brand-black">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="text-center mb-10">
              <div className="font-mono text-[10px] text-[#9CA3AF] uppercase tracking-[0.2em] mb-3">
                Platforms
              </div>
              <h2 className="font-display font-800 text-2xl md:text-3xl tracking-[-0.02em] text-white">
                We Manage All Major Platforms
              </h2>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4" staggerDelay={0.08}>
            {[
              { name: "Instagram", desc: "Reels, Stories, Carousels, Feed" },
              { name: "TikTok", desc: "Short-form video strategy" },
              { name: "YouTube", desc: "Shorts, Community, Thumbnails" },
              { name: "X / Twitter", desc: "Threads, engagement, growth" },
            ].map((p) => (
              <StaggerItem key={p.name}>
                <HoverScale scale={1.03}>
                  <div className="bg-white/5 p-6 text-center hover:bg-white/8 transition-colors duration-300">
                    <h3 className="font-display font-700 text-[15px] text-white mb-1">{p.name}</h3>
                    <p className="text-[#9CA3AF] text-[12px]">{p.desc}</p>
                  </div>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 lg:py-32 px-8 bg-white relative overflow-hidden">
        <div className="max-w-[900px] mx-auto relative z-10">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="font-mono text-[10px] text-[#44474A] uppercase tracking-[0.2em] mb-3">
                Pricing
              </div>
              <h2 className="font-display font-800 text-[clamp(1.8rem,4vw,2.8rem)] tracking-[-0.02em] text-brand-black">
                Simple Pricing
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            <SlideIn direction="left">
              <div className="bg-surface-light p-8 h-full flex flex-col">
                <div className="font-mono text-[10px] text-[#9CA3AF] uppercase tracking-widest mb-2">Growth</div>
                <div className="font-display font-800 text-3xl text-brand-black mb-1">
                  $1,500<span className="text-lg text-[#9CA3AF]">/mo</span>
                </div>
                <p className="text-[#44474A] text-[14px] mb-5">Perfect for creators getting started with professional management.</p>
                <ul className="space-y-2 text-[#44474A] text-[13px] mb-8 flex-1">
                  <li>2 platforms</li>
                  <li>Content calendar & posting</li>
                  <li>Basic engagement management</li>
                  <li>Monthly analytics report</li>
                </ul>
                <Link
                  href="/audit"
                  className="block bg-surface-muted text-brand-black font-display font-600 text-[14px] tracking-wide py-3.5 rounded-btn hover:bg-surface-dim transition-colors text-center"
                >
                  Get Started
                </Link>
              </div>
            </SlideIn>

            <SlideIn direction="right" delay={0.15}>
              <div className="bg-brand-black p-8 relative h-full flex flex-col">
                <div className="absolute top-4 right-4 bg-white text-brand-black font-mono text-[10px] px-3 py-1 rounded-btn tracking-widest uppercase font-bold">
                  Most Popular
                </div>
                <div className="font-mono text-[10px] text-[#9CA3AF] uppercase tracking-widest mb-2">Scale</div>
                <div className="font-display font-800 text-3xl text-white mb-1">
                  $3,000<span className="text-lg text-[#9CA3AF]">/mo</span>
                </div>
                <p className="text-[#9CA3AF] text-[14px] mb-5">Full-service management for creators ready to grow fast.</p>
                <ul className="space-y-2 text-[#9CA3AF] text-[13px] mb-8 flex-1">
                  <li>All platforms</li>
                  <li>Full content strategy & creation</li>
                  <li>Community & DM management</li>
                  <li>Weekly performance reports</li>
                  <li>Trend monitoring & rapid response</li>
                </ul>
                <Link
                  href="/audit"
                  className="block bg-white text-brand-black font-display font-600 text-[14px] tracking-wide py-3.5 rounded-btn hover:bg-surface-dim transition-colors text-center"
                >
                  Get Started
                </Link>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-8 bg-surface-light">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display font-800 text-3xl md:text-4xl tracking-[-0.02em] text-brand-black mb-4">
              Let us handle your social media
            </h2>
            <p className="text-[#44474A] text-[15px] mb-8 max-w-lg mx-auto leading-relaxed">
              Start with a free audit to see where your social presence stands and what growth looks like with a team behind you.
            </p>
            <Link
              href="/audit"
              className="inline-block bg-brand-black text-white font-display font-600 text-[15px] tracking-wide px-10 py-4 rounded-btn hover:bg-brand-charcoal transition-all duration-300"
            >
              Get Your Free Audit
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
