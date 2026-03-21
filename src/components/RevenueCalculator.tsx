"use client";

import { useState } from "react";
import Link from "next/link";
import { FadeIn, SlideIn, GradientOrb } from "@/components/Motion";

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
      <GradientOrb color="rgba(0, 200, 83, 0.04)" size="500px" position="bottom-right" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <FadeIn>
          <div className="mb-12">
            <div className="font-mono text-[11px] text-brand-red uppercase tracking-[0.2em] mb-3">
              Revenue Calculator
            </div>
            <h2 className="font-display font-800 text-3xl md:text-4xl tracking-tight text-zinc-900">
              Estimate Your Potential
            </h2>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <SlideIn direction="left">
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest">
                    Audience Size
                  </span>
                  <span className="font-mono text-sm text-brand-red font-bold">
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
                <div className="flex justify-between font-mono text-[10px] text-zinc-400">
                  <span>5K</span>
                  <span>200K</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest">
                    Product Price
                  </span>
                  <span className="font-mono text-sm text-brand-red font-bold">
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
                <div className="flex justify-between font-mono text-[10px] text-zinc-400">
                  <span>$27</span>
                  <span>$297</span>
                </div>
              </div>
            </div>
          </SlideIn>

          <SlideIn direction="right" delay={0.15}>
            <div className="bg-white rounded-card border border-surface-border p-8 lg:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-surface-border">
                  <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">Conversion Rate</span>
                  <span className="font-mono text-sm text-zinc-600">2.5%</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-surface-border">
                  <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">Estimated Sales</span>
                  <span className="font-display font-700 text-xl text-zinc-900">{formatNumber(sales)}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-surface-border">
                  <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">Launch Revenue</span>
                  <span className="font-display font-700 text-xl text-zinc-900">{formatCurrency(revenue)}</span>
                </div>
                <div className="pt-2">
                  <div className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest mb-2">Your Share (70%)</div>
                  <div className="font-display font-800 text-4xl md:text-5xl text-[#00C853] leading-none">
                    {formatCurrency(creatorShare)}
                  </div>
                </div>
              </div>

              <Link
                href="/audit"
                className="mt-8 block bg-brand-red text-white font-display font-600 text-[15px] tracking-wide py-4 rounded-btn hover:bg-brand-red-hover hover:shadow-[0_8px_30px_rgba(225,25,0,0.3)] transition-all duration-300 text-center"
              >
                Get Your Real Numbers
              </Link>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
