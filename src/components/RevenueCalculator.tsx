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
    <section className="py-28 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="font-data text-brand-red text-xs uppercase tracking-[0.3em] mb-4">
              The Math
            </div>
            <h2 className="font-headline font-black text-4xl md:text-5xl tracking-tighter uppercase text-neutral-900 mb-4">
              SEE WHAT YOUR
              <br />
              <span className="text-brand-red">AUDIENCE IS WORTH</span>
            </h2>
            <p className="text-neutral-500 font-light text-sm mb-12 max-w-md leading-relaxed">
              Drag the sliders to see how much revenue your audience could generate with a single product launch.
            </p>

            <div className="space-y-10">
              <div className="space-y-3">
                <div className="flex justify-between font-data text-xs uppercase tracking-widest">
                  <span className="text-neutral-500">Audience Size</span>
                  <span className="text-brand-red font-bold">
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
                <div className="flex justify-between font-data text-[10px] text-neutral-400 uppercase">
                  <span>5K</span>
                  <span>200K</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between font-data text-xs uppercase tracking-widest">
                  <span className="text-neutral-500">Product Price</span>
                  <span className="text-brand-red font-bold">{formatCurrency(price)}</span>
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
                <div className="flex justify-between font-data text-[10px] text-neutral-400 uppercase">
                  <span>$27</span>
                  <span>$297</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 border border-neutral-200 shadow-sm">
            <div className="space-y-8">
              <div>
                <div className="font-data text-[10px] text-neutral-400 uppercase tracking-widest mb-1">
                  Conversion Rate
                </div>
                <div className="font-data text-lg text-neutral-700">
                  2.5%{" "}
                  <span className="text-neutral-400 text-xs">
                    (97.5% don&apos;t buy)
                  </span>
                </div>
              </div>

              <div>
                <div className="font-data text-[10px] text-neutral-400 uppercase tracking-widest mb-1">
                  Estimated Sales
                </div>
                <div className="font-data text-2xl text-neutral-900">
                  {formatNumber(sales)}
                </div>
              </div>

              <div>
                <div className="font-data text-[10px] text-neutral-400 uppercase tracking-widest mb-1">
                  Launch Revenue
                </div>
                <div className="font-data text-2xl text-neutral-900">
                  {formatCurrency(revenue)}
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-200">
                <div className="font-data text-[10px] text-neutral-400 uppercase tracking-widest mb-2">
                  Your Share (70%)
                </div>
                <div className="font-data text-5xl md:text-6xl text-[#00C853] leading-none">
                  {formatCurrency(creatorShare)}
                </div>
              </div>
            </div>

            <Link
              href="/audit"
              className="mt-10 block bg-brand-red text-white font-headline font-bold text-lg tracking-tight px-10 py-4 uppercase hover:bg-brand-red-hover transition-colors text-center"
            >
              GET YOUR REAL NUMBERS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
