"use client";

import { useState } from "react";
import Link from "next/link";

export default function RevenueCalculator() {
  const [followers, setFollowers] = useState(30000);
  const [price, setPrice] = useState(95);
  const conversionRate = 0.025;

  const sales = Math.floor(followers * conversionRate);
  const revenue = sales * price;
  const creatorShare = Math.floor(revenue * 0.7);

  const formatNumber = (n: number) =>
    n.toLocaleString("en-US");

  const formatCurrency = (n: number) =>
    "$" + n.toLocaleString("en-US");

  return (
    <section className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_rgba(225,25,0,0.05)_0%,_transparent_70%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="font-data text-[#E11900] text-xs uppercase tracking-[0.3em] mb-4">
              The Math
            </div>
            <h2 className="font-headline font-black text-5xl md:text-6xl tracking-tighter uppercase mb-12">
              SEE WHAT YOUR
              <br />
              <span className="text-primary">AUDIENCE IS WORTH</span>
            </h2>

            <div className="space-y-12">
              <div className="space-y-4">
                <div className="flex justify-between font-data text-xs uppercase tracking-widest">
                  <span className="text-neutral-400">Audience Size</span>
                  <span className="text-primary">
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
                <div className="flex justify-between font-data text-[10px] text-neutral-600 uppercase">
                  <span>5K</span>
                  <span>200K</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between font-data text-xs uppercase tracking-widest">
                  <span className="text-neutral-400">Product Price</span>
                  <span className="text-primary">{formatCurrency(price)}</span>
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
                <div className="flex justify-between font-data text-[10px] text-neutral-600 uppercase">
                  <span>$27</span>
                  <span>$297</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-highest p-10 border border-white/5">
            <div className="space-y-8">
              <div>
                <div className="font-data text-[10px] text-neutral-500 uppercase tracking-widest mb-1">
                  Conversion Rate
                </div>
                <div className="font-data text-lg text-neutral-300">
                  2.5%{" "}
                  <span className="text-neutral-600 text-xs">
                    (97.5% don&apos;t buy)
                  </span>
                </div>
              </div>

              <div>
                <div className="font-data text-[10px] text-neutral-500 uppercase tracking-widest mb-1">
                  Estimated Sales
                </div>
                <div className="font-data text-2xl text-white">
                  {formatNumber(sales)}
                </div>
              </div>

              <div>
                <div className="font-data text-[10px] text-neutral-500 uppercase tracking-widest mb-1">
                  Launch Revenue
                </div>
                <div className="font-data text-2xl text-white">
                  {formatCurrency(revenue)}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <div className="font-data text-[10px] text-neutral-500 uppercase tracking-widest mb-2">
                  Your Share (70%)
                </div>
                <div className="font-data text-5xl md:text-6xl text-[#00C853] leading-none">
                  {formatCurrency(creatorShare)}
                </div>
              </div>
            </div>

            <Link
              href="/audit"
              className="mt-10 block bg-[#E11900] text-white font-headline font-black text-lg tracking-tighter px-10 py-4 uppercase hover:bg-white hover:text-black transition-all text-center"
            >
              GET YOUR REAL NUMBERS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
