export default function Privacy() {
  return (
    <div className="pt-32 pb-24 px-8 bg-white">
      <div className="max-w-[800px] mx-auto">
        <h1 className="font-display font-800 text-4xl tracking-[-0.02em] text-brand-black mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-zinc max-w-none text-[15px] leading-relaxed space-y-6 text-[#44474A]">
          <p className="font-mono text-[11px] text-[#9CA3AF] uppercase tracking-widest">
            Last Updated: March 2026
          </p>

          <h2 className="font-display font-700 text-xl text-brand-black mt-8">Information We Collect</h2>
          <p>
            When you submit our Creator Audit form, we collect the following information: your name,
            email address, social media handle, platform, follower count, niche, service interest,
            and any additional information you provide about your monetization challenges.
          </p>

          <h2 className="font-display font-700 text-xl text-brand-black mt-8">How We Use Your Information</h2>
          <p>We use the information you provide to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Analyze your creator profile and build a personalized monetization audit</li>
            <li>Contact you with your audit results via email or social media DM</li>
            <li>Discuss potential partnership opportunities</li>
            <li>Improve our services and offerings</li>
          </ul>

          <h2 className="font-display font-700 text-xl text-brand-black mt-8">Data Sharing</h2>
          <p>
            We do not sell, trade, or share your personal information with third parties. Your data
            is only used internally by the 64 Industries team for the purposes described above.
          </p>

          <h2 className="font-display font-700 text-xl text-brand-black mt-8">Data Security</h2>
          <p>
            We take reasonable measures to protect the information you provide. However, no method
            of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="font-display font-700 text-xl text-brand-black mt-8">Cookies</h2>
          <p>
            This website uses essential cookies for basic functionality. We do not use tracking
            cookies or third-party analytics that collect personal information.
          </p>

          <h2 className="font-display font-700 text-xl text-brand-black mt-8">Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal information
            at any time by contacting us. We will respond to your request within 30 days.
          </p>

          <h2 className="font-display font-700 text-xl text-brand-black mt-8">Contact</h2>
          <p>
            If you have questions about this privacy policy, contact us at{" "}
            <a href="mailto:hello@64industries.com" className="text-brand-black underline hover:no-underline">
              hello@64industries.com
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
