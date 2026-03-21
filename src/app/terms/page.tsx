export default function Terms() {
  return (
    <div className="pt-32 pb-24 px-8 bg-white">
      <div className="max-w-[800px] mx-auto">
        <h1 className="font-display font-800 text-4xl tracking-tight text-zinc-900 mb-8">
          Terms of Service
        </h1>
        <div className="prose prose-zinc max-w-none text-[15px] leading-relaxed space-y-6 text-zinc-500">
          <p className="font-mono text-[11px] text-zinc-400 uppercase tracking-widest">
            Last Updated: March 2026
          </p>

          <h2 className="font-display font-700 text-xl text-zinc-900 mt-8">Agreement</h2>
          <p>
            By accessing and using the 64 Industries website, you agree to be bound by these
            Terms of Service. If you do not agree to these terms, please do not use our website.
          </p>

          <h2 className="font-display font-700 text-xl text-zinc-900 mt-8">Services</h2>
          <p>
            64 Industries provides creator monetization services including product launch partnerships,
            social media management, and brand deal brokering. Specific terms for each service are
            outlined in individual partnership agreements.
          </p>

          <h2 className="font-display font-700 text-xl text-zinc-900 mt-8">Free Audit</h2>
          <p>
            The Creator Audit is provided free of charge with no obligation. Submitting a request
            does not create a binding agreement. Any partnership arrangements will be formalized
            through a separate agreement with clearly defined terms.
          </p>

          <h2 className="font-display font-700 text-xl text-zinc-900 mt-8">Revenue Projections</h2>
          <p>
            Revenue estimates provided through our calculator and audit reports are projections
            based on industry averages and are not guarantees of actual results. Individual
            results will vary based on audience engagement, product quality, niche, and market conditions.
          </p>

          <h2 className="font-display font-700 text-xl text-zinc-900 mt-8">Intellectual Property</h2>
          <p>
            All content on this website, including text, design, logos, and graphics, is the
            property of 64 Industries and is protected by applicable intellectual property laws.
          </p>

          <h2 className="font-display font-700 text-xl text-zinc-900 mt-8">Limitation of Liability</h2>
          <p>
            64 Industries shall not be liable for any indirect, incidental, or consequential
            damages arising from the use of our website or services. Our liability is limited
            to the amount of fees paid under any active partnership agreement.
          </p>

          <h2 className="font-display font-700 text-xl text-zinc-900 mt-8">Contact</h2>
          <p>
            For questions about these terms, contact us at{" "}
            <a href="mailto:hello@64industries.com" className="text-brand-red hover:underline">
              hello@64industries.com
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
