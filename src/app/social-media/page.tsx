"use client";

import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem, HoverScale, SlideIn, GradientOrb } from "@/components/Motion";

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
      {/* Hero (Dark Navy) */}
      <header className="pt-32 pb-24 px-8 bg-brand-navy relative overflow-hidden">
        <GradientOrb color="rgba(225, 25, 0, 0.06)" size="700px" position="top-right" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <FadeIn>
            <div className="font-mono text-[11px] text-brand-red uppercase tracking-[0.2em] mb-6">
              Social Media Management
            </div>
            <h1 className="font-display font-800 text-[clamp(2.2rem,5vw,4rem)] leading-[1.1] tracking-tight text-white max-w-3xl mb-6">
              Grow your audience while you focus on creating
            </h1>
            <p className="text-zinc-400 text-[17px] max-w-2xl mb-10 leading-relaxed">
              Growing and maintaining a social media presence takes hours every
              day. Our team handles the strategy, the posting, and the engagement
              — so your accounts grow while you focus on what matters.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Link
              href="/audit"
              className="inline-block bg-brand-red text-white font-display font-600 text-[15px] tracking-wide px-8 py-4 rounded-btn hover:bg-brand-red-hover hover:shadow-[0_8px_30px_rgba(225,25,0,0.3)] transition-all duration-300"
            >
              Get Started
            </Link>
          </FadeIn>
        </div>
      </header>

      {/* Stats */}
      <section className="py-20 px-8 bg-[#0D1323]">
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
                    {stat.suffix && <span className="text-lg text-zinc-500">{stat.suffix}</span>}
                  </div>
                  <p className="text-zinc-500 text-[13px] leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32 px-8 bg-brand-navy">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="mb-12">
              <div className="font-mono text-[11px] text-brand-red uppercase tracking-[0.2em] mb-3">
                What&apos;s Included
              </div>
              <h2 className="font-display font-800 text-3xl md:text-4xl tracking-tight text-white">
                Full-Service Management
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <HoverScale scale={1.02}>
                  <div className="bg-white/5 rounded-card border border-white/8 p-8 hover:bg-white/10 transition-colors duration-300 h-full">
                    <h3 className="font-display font-700 text-lg text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 text-[14px] leading-relaxed mb-5">
                      {service.desc}
                    </p>
                    <ul className="space-y-2">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-zinc-500 text-[13px]">
                          <span className="text-brand-red mt-0.5 shrink-0 text-xs">&bull;</span>
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
      <section className="py-20 px-8 bg-[#0D1323]">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="text-center mb-10">
              <div className="font-mono text-[11px] text-brand-red uppercase tracking-[0.2em] mb-3">
                Platforms
              </div>
              <h2 className="font-display font-800 text-2xl md:text-3xl tracking-tight text-white">
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
                  <div className="bg-white/5 rounded-card border border-white/8 p-6 text-center hover:bg-white/10 transition-colors duration-300">
                    <h3 className="font-display font-700 text-[15px] text-white mb-1">{p.name}</h3>
                    <p className="text-zinc-500 text-[12px]">{p.desc}</p>
                  </div>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 lg:py-32 px-8 bg-brand-navy relative overflow-hidden">
        <GradientOrb color="rgba(225, 25, 0, 0.04)" size="500px" position="bottom-left" />
        <div className="max-w-[900px] mx-auto relative z-10">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="font-mono text-[11px] text-brand-red uppercase tracking-[0.2em] mb-3">
                Pricing
              </div>
              <h2 className="font-display font-800 text-3xl md:text-4xl tracking-tight text-white">
                Simple Pricing
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            <SlideIn direction="left">
              <div className="bg-white/5 rounded-card border border-white/8 p-8 h-full flex flex-col">
                <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-2">Growth</div>
                <div className="font-display font-800 text-3xl text-white mb-1">
                  $1,500<span className="text-lg text-zinc-500">/mo</span>
                </div>
                <p className="text-zinc-400 text-[14px] mb-5">Perfect for creators getting started with professional management.</p>
                <ul className="space-y-2 text-zinc-400 text-[13px] mb-8 flex-1">
                  <li>2 platforms</li>
                  <li>Content calendar & posting</li>
                  <li>Basic engagement management</li>
                  <li>Monthly analytics report</li>
                </ul>
                <Link
                  href="/audit"
                  className="block bg-white/10 text-white font-display font-600 text-[14px] tracking-wide py-3.5 rounded-btn hover:bg-white/20 transition-colors text-center"
                >
                  Get Started
                </Link>
              </div>
            </SlideIn>

            <SlideIn direction="right" delay={0.15}>
              <div className="bg-brand-red rounded-card p-8 relative h-full flex flex-col">
                <div className="absolute top-4 right-4 bg-white text-brand-red font-mono text-[10px] px-3 py-1 rounded-btn tracking-widest uppercase font-bold">
                  Most Popular
                </div>
                <div className="font-mono text-[10px] text-white/60 uppercase tracking-widest mb-2">Scale</div>
                <div className="font-display font-800 text-3xl text-white mb-1">
                  $3,000<span className="text-lg text-white/60">/mo</span>
                </div>
                <p className="text-white/80 text-[14px] mb-5">Full-service management for creators ready to grow fast.</p>
                <ul className="space-y-2 text-white/80 text-[13px] mb-8 flex-1">
                  <li>All platforms</li>
                  <li>Full content strategy & creation</li>
                  <li>Community & DM management</li>
                  <li>Weekly performance reports</li>
                  <li>Trend monitoring & rapid response</li>
                </ul>
                <Link
                  href="/audit"
                  className="block bg-white text-brand-red font-display font-600 text-[14px] tracking-wide py-3.5 rounded-btn hover:bg-zinc-100 transition-colors text-center"
                >
                  Get Started
                </Link>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-8 bg-[#0D1323]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display font-800 text-3xl md:text-4xl tracking-tight text-white mb-4">
              Let us handle your social media
            </h2>
            <p className="text-zinc-400 text-[15px] mb-8 max-w-lg mx-auto leading-relaxed">
              Start with a free audit to see where your social presence stands and what growth looks like with a team behind you.
            </p>
            <Link
              href="/audit"
              className="inline-block bg-brand-red text-white font-display font-600 text-[15px] tracking-wide px-10 py-4 rounded-btn hover:bg-brand-red-hover hover:shadow-[0_8px_30px_rgba(225,25,0,0.3)] transition-all duration-300"
            >
              Get Your Free Audit
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
