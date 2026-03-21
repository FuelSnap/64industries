"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/how-it-works", label: "How It Works" },
    { href: "/creators", label: "For Creators" },
    { href: "/results", label: "Results" },
    { href: "/about", label: "About" },
    { href: "/founder", label: "Founder" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-neutral-900/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter text-white uppercase font-headline"
        >
          64 INDUSTRIES
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-neutral-400 font-medium hover:text-white transition-colors font-headline uppercase tracking-tighter text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/audit"
          className="hidden md:block bg-[#E11900] text-white font-headline font-black tracking-tighter px-6 py-2 uppercase hover:bg-white hover:text-black transition-all duration-200 text-sm"
        >
          GET YOUR AUDIT
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-neutral-900/95 backdrop-blur-xl border-t border-white/5 px-6 pb-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-neutral-400 hover:text-white transition-colors font-headline uppercase tracking-tighter"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/audit"
            onClick={() => setMobileOpen(false)}
            className="block mt-4 bg-[#E11900] text-white font-headline font-black tracking-tighter px-6 py-3 uppercase text-center"
          >
            GET YOUR AUDIT
          </Link>
        </div>
      )}
    </nav>
  );
}
