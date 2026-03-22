"use client";

import { useState } from "react";
import Link from "next/link";
import { FadeIn, SlideIn } from "@/components/Motion";

export default function RevenueCalculator() {
  const [followers, setFollowers] = useState(30000);
  const [price, setPrice] = useState(95);
  const conversionRate = 0.025;

  const sales = Math.floor(followers * conversionRate);
  const revenue = sales * price;
  const creatorShare = Math.floor(revenue * 0.7);

  const formatNumber = (n: number) => n.toLocaleString("en-US");
  const formatCurrency = (n: number) => "$" + n.toLocaleString("en-US");

  return (
    <section className="py-24 lg:py-32 px-8 bg-surface-light relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <FadeIn>
          <div className="mb-12">
            <div className="font-mono text-[10px] text-accent-emerald uppercase tracking-[0.2em] mb-3">
              Yield Projection
            </div>
            <h2 className="font-display font-800 text-[clamp(1.8rem,4vw,2.8rem)] tracking-[-0.02em] text-brand-black">
              Estimate Your Potential
            </h2>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <SlideIn direction="left">
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[11px] text-[#44474A] uppercase tracking-widest">
                    Audience Size
                  </span>
                  <span className="font-mono text-sm text-brand-black font-bold">
                    {formatNumber(followers)}
                  </span>
                </div>
                <input
                  type="range"
                  min={5000}
                  max={200000}
                  step={5000}
                  value={followers}
                  onChange={(e) => setFollowers(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between font-mono text-[10px] text-[#9CA3AF]">
                  <span>5K</span>
                  <span>200K</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[11px] text-[#44474A] uppercase tracking-widest">
                    Product Price
                  </span>
                  <span className="font-mono text-sm text-brand-black font-bold">
                    {formatCurrency(price)}
                  </span>
                </div>
                <input
                  type="range"
                  min={27}
                  max={297}
                  step={1}
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between font-mono text-[10px] text-[#9CA3AF]">
                  <span>$27</span>
                  <span>$297</span>
                </div>
              </div>

              <div className="bg-white p-5">
                <div className="font-mono text-[9px] text-[#9CA3AF] uppercase tracking-widest mb-2">
                  Based on industry standard
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-800 text-lg text-brand-black">2.5%</span>
                  <span className="text-[#44474A] text-[13px]">average conversion rate</span>
                </div>
              </div>
            </div>
          </SlideIn>

          <SlideIn direction="right" delay={0.15}>
            <div className="bg-brand-black p-8 lg:p-10 relative overflow-hidden">
              {/* Emerald glow */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent-emerald/10 blur-[60px] pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex justify-between items-center pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <span className="font-mono text-[10px] text-[#9CA3AF] uppercase tracking-widest">Estimated Sales</span>
                  <span className="font-display font-700 text-xl text-white">{formatNumber(sales)}</span>
                </div>
                <div className="flex justify-between items-center pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <span className="font-mono text-[10px] text-[#9CA3AF] uppercase tracking-widest">Launch Revenue</span>
                  <span className="font-display font-700 text-xl text-white">{formatCurrency(revenue)}</span>
                </div>
                <div className="pt-4">
                  <div className="font-mono text-[10px] text-accent-emerald uppercase tracking-widest mb-3">Your Share (70%)</div>
                  <div className="font-display font-800 text-5xl md:text-6xl text-accent-emerald leading-none">
                    {formatCurrency(creatorShare)}
                  </div>
                </div>
              </div>

              <Link
                href="/audit"
                className="relative z-10 mt-8 block bg-white text-brand-black font-display font-600 text-[15px] tracking-wide py-4 rounded-btn hover:bg-surface-dim transition-all duration-300 text-center"
              >
                Get Your Real Numbers
              </Link>
              <p className="relative z-10 mt-4 font-mono text-[10px] text-[#9CA3AF] text-center leading-relaxed">
                Estimates based on industry averages. Actual results vary.
              </p>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
