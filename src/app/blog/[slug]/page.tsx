"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { FadeIn } from "@/components/Motion";

const posts: Record<string, { title: string; category: string; date: string; readTime: string; content: string[] }> = {
  "why-brand-deals-are-killing-your-revenue": {
    title: "Why Brand Deals Are Killing Your Revenue",
    category: "Monetization",
    date: "March 2026",
    readTime: "5 min read",
    content: [
      "Brand deals feel like validation. A company sees your audience, reaches out, and offers to pay you money just to mention their product. It feels like you've made it.",
      "But here's the problem: brand deals are designed to extract value from your audience, not to build value for you. The brand gets customers. You get a one-time payment. And then it's over.",
      "Let's run the numbers. A creator with 50,000 followers might land a brand deal for $500-$2,000. That same audience, with the right product, could generate $50,000-$100,000 in a single launch. The gap between what creators earn and what they could earn is staggering.",
      "The real issue isn't that brand deals exist — they can be part of a healthy revenue strategy. The issue is when they're your only strategy. You're renting out your audience instead of building something you own.",
      "Here's what we recommend instead: use your audience to sell products you own. Courses, coaching programs, communities, digital tools. Products where you keep 70-80% of revenue and build long-term value instead of taking a one-time payout.",
      "The creators who build real wealth aren't the ones with the most brand deals. They're the ones who own the product, own the customer relationship, and compound their revenue over time.",
      "Brand deals should be the side income. Your product should be the main event.",
    ],
  },
  "creator-product-launch-playbook": {
    title: "The Creator Product Launch Playbook",
    category: "Strategy",
    date: "March 2026",
    readTime: "8 min read",
    content: [
      "Most creators think launching a product requires months of preparation, a massive audience, and a team of developers. None of that is true.",
      "At 64 Industries, we've developed a 35-day launch framework specifically designed for creators with engaged audiences of 10K-100K followers. Here's how it works.",
      "Days 1-7: The Audit. We analyze your audience — demographics, engagement patterns, pain points, and purchasing behavior. This tells us exactly what product to build and how to price it. No guessing.",
      "Days 8-21: The Build. We handle product creation, tech setup, checkout systems, and sales copy. The creator's only job during this phase is to keep creating content. We build everything else.",
      "Days 22-28: The Warm-Up. This is where most creators fail on their own. We craft a content sequence that builds anticipation without being salesy. Story-driven posts, behind-the-scenes content, and strategic reveals.",
      "Days 29-35: The Launch. We provide scripts, timelines, and every piece of content needed. The creator posts to their audience. We manage the backend — email sequences, retargeting, customer support.",
      "The results? A 2.5% average conversion rate on your audience, with products priced at $47-$297 depending on the niche. For a creator with 50K followers, that's $58,000-$370,000 in launch revenue.",
      "And here's the part most people miss: the launch is just the beginning. With an evergreen sales funnel, that product continues to generate revenue every single month. The launch creates momentum. The funnel creates freedom.",
      "You don't need to be a business expert to launch a product. You need to partner with people who are.",
    ],
  },
  "how-much-should-creators-charge": {
    title: "How Much Should Creators Actually Charge?",
    category: "Pricing",
    date: "March 2026",
    readTime: "6 min read",
    content: [
      "If you've ever wondered whether you're charging enough, the answer is almost certainly no. Most micro-creators undercharge by 50-200%, and it's not because they're greedy — it's because nobody teaches them how to price.",
      "Here's a simple framework we use at 64 Industries to help creators price their products and services correctly.",
      "Step 1: Understand your audience's purchasing power. A fitness creator's audience and a B2B SaaS creator's audience have wildly different willingness to pay. Know your niche's price tolerance before you set a number.",
      "Step 2: Price based on transformation, not time. A $97 course that teaches someone to land freelance clients worth $5,000/month is absurdly underpriced. Price based on the outcome your audience gets, not the hours you spent building it.",
      "Step 3: Don't compete on price. If you're the cheapest option, you attract the worst customers — the ones who complain the most, request refunds, and leave bad reviews. Price with confidence and let quality speak for itself.",
      "For digital products, here are some benchmarks by audience size: 10K-25K followers, price at $27-$97. 25K-100K followers, price at $97-$197. 100K+, you can comfortably charge $197-$497.",
      "For brand deals, a common formula is: $100 per 10,000 followers for an Instagram post, and $200-$500 per 10,000 subscribers for a YouTube integration. But these are minimums — negotiation is where the real money is.",
      "The bottom line: most creators leave money on the table because they price based on what they think they're worth instead of what their audience values. Flip that script, and everything changes.",
    ],
  },
};

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const post = posts[slug];

  if (!post) {
    return (
      <div className="pt-32 pb-24 px-8 bg-white text-center">
        <h1 className="font-display font-800 text-3xl text-zinc-900 mb-4">Post not found</h1>
        <Link href="/blog" className="text-brand-red hover:underline font-display font-600">
          &larr; Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <header className="pt-32 pb-12 px-8 bg-brand-dark">
        <div className="max-w-[700px] mx-auto">
          <FadeIn>
            <Link
              href="/blog"
              className="inline-block font-mono text-[11px] text-zinc-500 uppercase tracking-widest mb-6 hover:text-white transition-colors"
            >
              &larr; Back to Blog
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-mono text-[10px] text-brand-red uppercase tracking-widest">
                {post.category}
              </span>
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                {post.date}
              </span>
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                {post.readTime}
              </span>
            </div>
            <h1 className="font-display font-800 text-[clamp(2rem,5vw,3rem)] leading-[1.1] tracking-tight text-white">
              {post.title}
            </h1>
          </FadeIn>
        </div>
      </header>

      <article className="py-16 px-8 bg-white">
        <div className="max-w-[700px] mx-auto">
          <FadeIn>
            <div className="space-y-6 text-zinc-600 text-[16px] leading-[1.8]">
              {post.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>

          <div className="mt-16 pt-8 border-t border-surface-border">
            <FadeIn>
              <div className="bg-surface-light rounded-card border border-surface-border p-8 text-center">
                <div className="font-mono text-[10px] text-brand-red uppercase tracking-widest mb-3">
                  Ready to Stop Leaving Money on the Table?
                </div>
                <h3 className="font-display font-700 text-xl text-zinc-900 mb-4">
                  Get your free creator audit
                </h3>
                <p className="text-zinc-500 text-[14px] mb-6 max-w-md mx-auto">
                  We&apos;ll analyze your audience and show you exactly how much revenue you&apos;re missing — with real numbers.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/audit"
                    className="bg-brand-red text-white font-display font-600 text-[14px] tracking-wide px-8 py-3.5 rounded-btn hover:bg-brand-red-hover transition-all duration-300"
                  >
                    Get Your Free Audit
                  </Link>
                  <a
                    href="https://calendly.com/64industries/intro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-surface-border text-zinc-600 font-display font-600 text-[14px] tracking-wide px-8 py-3.5 rounded-btn hover:border-brand-red/30 hover:text-brand-red transition-all duration-300"
                  >
                    Book a Call
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </article>
    </>
  );
}
