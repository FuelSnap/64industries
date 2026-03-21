"use client";

import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem, HoverScale } from "@/components/Motion";

const posts = [
  {
    slug: "why-brand-deals-are-killing-your-revenue",
    title: "Why Brand Deals Are Killing Your Revenue",
    excerpt:
      "Most creators think brand deals are the path to financial freedom. Here's why they're actually capping your income — and what to do instead.",
    category: "Monetization",
    date: "March 2026",
    readTime: "5 min read",
  },
  {
    slug: "creator-product-launch-playbook",
    title: "The Creator Product Launch Playbook",
    excerpt:
      "A step-by-step breakdown of how creators with 10K-100K followers can launch a digital product and generate six figures in 35 days.",
    category: "Strategy",
    date: "March 2026",
    readTime: "8 min read",
  },
  {
    slug: "how-much-should-creators-charge",
    title: "How Much Should Creators Actually Charge?",
    excerpt:
      "Most micro-creators undercharge by 50-200%. Here's a data-backed framework for pricing your products, services, and brand partnerships.",
    category: "Pricing",
    date: "March 2026",
    readTime: "6 min read",
  },
];

export default function Blog() {
  return (
    <>
      <header className="pt-32 pb-16 px-8 bg-white">
        <div className="max-w-[900px] mx-auto text-center">
          <FadeIn>
            <div className="font-mono text-[10px] text-[#44474A] uppercase tracking-[0.2em] mb-4">
              Insights
            </div>
            <h1 className="font-display font-800 text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.02em] text-brand-black">
              Creator Revenue Insights
            </h1>
            <p className="text-[#44474A] text-[16px] max-w-lg mx-auto mt-4 leading-relaxed">
              Strategies, frameworks, and real talk about turning audiences into sustainable businesses.
            </p>
          </FadeIn>
        </div>
      </header>

      <section className="py-24 px-8 bg-surface-light">
        <div className="max-w-[900px] mx-auto">
          <StaggerContainer className="space-y-6" staggerDelay={0.1}>
            {posts.map((post) => (
              <StaggerItem key={post.slug}>
                <HoverScale scale={1.01}>
                  <Link href={`/blog/${post.slug}`} className="block">
                    <article className="bg-white p-8 hover:bg-surface-muted transition-all duration-300">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="font-mono text-[10px] text-brand-black uppercase tracking-widest bg-surface-muted px-3 py-1">
                          {post.category}
                        </span>
                        <span className="font-mono text-[10px] text-[#9CA3AF] uppercase tracking-widest">
                          {post.date}
                        </span>
                        <span className="font-mono text-[10px] text-[#9CA3AF] uppercase tracking-widest">
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="font-display font-700 text-xl md:text-2xl tracking-[-0.02em] text-brand-black mb-3">
                        {post.title}
                      </h2>
                      <p className="text-[#44474A] text-[15px] leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 font-display font-600 text-[14px] text-brand-black">
                        Read more &rarr;
                      </div>
                    </article>
                  </Link>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
