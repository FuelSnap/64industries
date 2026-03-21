# 64 Industries — Full Website Design Prompt

## Brand Overview
64 Industries is a **creator monetization agency**. We partner with social media creators (10K-100K followers) to monetize their audiences through digital products, courses, coaching programs, and communities. We also offer social media management and brand deal brokering as add-on services.

**This is a REAL agency with REAL people.** Position it as a premium, legitimate business — not a side hustle, not a SaaS tool, not a startup. Think established creative agency that happens to specialize in creators.

---

## Design Direction: Modern Creative Agency

### Reference Aesthetic
Think the intersection of: **Huge Inc, Collins, Porto Rocha, Locomotive, Basic Agency** — top-tier creative agencies that feel premium but not boring. The site should make someone think "these people are serious operators" within the first 3 seconds.

### Core Design Principles
1. **Asymmetric layouts** — NOT centered grid after centered grid. Use weighted compositions, offset text, overlapping elements, split-screen sections
2. **Massive whitespace** — Let things breathe. Generous padding (80px-120px between sections). Don't crowd text
3. **Statement typography** — One premium display font for headlines (something like **Clash Display, Cabinet Grotesk, Satoshi, General Sans, or Switzer**). Clean sans-serif for body (Inter, DM Sans, or similar). Monospace accent font for data points and labels
4. **Mixed section heights** — Not every section needs to be the same height. Some tight, some expansive
5. **Intentional contrast** — Mix dark sections with light sections but make each transition feel designed, not random
6. **Subtle motion cues** — Design elements that suggest animation (offset elements, staggered grids, elements that feel like they'd animate in)
7. **NO template energy** — If it looks like it could be a Framer or Webflow template, redesign it

### Color Palette
- **Background Primary:** `#FAFAFA` (off-white) and `#FFFFFF` (white) for light sections
- **Background Dark:** `#0C0C0C` or `#111111` for dark sections (NOT pure black — slightly warm)
- **Accent Red:** `#E11900` — use sparingly for CTAs, key highlights, and interactive elements. Not everywhere
- **Text Primary:** `#1A1A1A` on light backgrounds
- **Text Secondary:** `#6B6B6B` on light backgrounds
- **Text on Dark:** `#F5F5F5` for primary, `#999999` for secondary
- **Success green:** `#00C853` for revenue/money numbers only
- **Borders:** `#E8E8E8` on light, `rgba(255,255,255,0.08)` on dark

### Typography Rules
- **Display/Headlines:** Clash Display or Cabinet Grotesk — Bold/Semibold — Large sizes (48px-96px on desktop). NOT all-uppercase for everything — mix uppercase for short labels with title case or sentence case for larger headlines to feel more editorial
- **Body:** Inter or DM Sans — Regular 400 — 16px-18px with generous line-height (1.6-1.7)
- **Labels/Data:** JetBrains Mono or Space Mono — 11px-12px — uppercase with wide letter-spacing — used for section labels, stats, metadata
- **Key rule:** Headlines should NOT be cramped. Letter-spacing should be `-0.02em` to `-0.04em` max, not tighter

### Layout Grid
- Max width: 1400px
- 12-column grid with 24px gutters
- But NOT everything centered — use offset compositions (text on left taking 7 cols, image/content on right taking 4 cols with 1 col gap)
- Section padding: 100px-140px vertical on desktop, 60px-80px on mobile

### Component Styling
- **Buttons:** Slight border-radius (4px-6px, NOT 0px and NOT full-round). Solid fills for primary, ghost/outline for secondary
- **Cards:** 8px border-radius. Light shadow (`0 1px 3px rgba(0,0,0,0.06)`) or subtle border. NOT flat squares
- **Form inputs:** 6px border-radius, light border, generous padding (14px-16px)
- **Dividers:** Use spacing and background color shifts, not lines. If a line is needed, use `#E8E8E8` at 1px

---

## Pages to Design (7 Total)

---

### PAGE 1: HOMEPAGE

**Goal:** Instantly communicate what 64 Industries does, who it's for, and why it's different. Drive to the free audit CTA.

**Sections:**

#### 1A. Hero
- Large editorial headline: "We turn creator audiences into revenue machines"
- Subtitle: Brief description — we partner with creators, build products, split revenue. $0 upfront.
- Two CTAs: "Get Your Free Audit" (primary red) and "See How It Works" (ghost/outline)
- Small trust line at bottom: "$0 Upfront — Performance Partnership — No Risk"
- **Layout:** Asymmetric — text weighted left, right side could have an abstract graphic element, gradient shape, or large "64" watermark at low opacity

#### 1B. Problem/Comparison
- Headline: "Brand deals pay you once. We build you revenue streams."
- Two-column comparison: Left = "Standard Brand Deals" (the problems), Right = "64 Industries" (the solution)
- Left column: light/grey background, red X marks, items like "One-time payouts", "No ownership", "You promote their brand"
- Right column: dark background, green checkmarks, items like "Long-term revenue", "You own everything", "Your brand, your empire"
- Show a big revenue number contrast at the bottom of each column

#### 1C. How It Works (Overview)
- 4-step horizontal flow: Audit → Build → Launch → Get Paid
- Each step has a number (01-04), title, and 1-2 sentence description
- **Layout suggestion:** Horizontal scroll on mobile, staggered grid on desktop (not a plain 4-column grid — offset the cards vertically)

#### 1D. Revenue Calculator (Interactive)
- Headline: "See what your audience is worth"
- Two sliders: Audience size (5K-200K) and Product price ($27-$297)
- Results panel showing: Conversion rate (2.5%), Estimated sales, Launch revenue, Creator's share (70%)
- The creator's share number should be large and green
- CTA: "Get Your Real Numbers"
- **Layout:** Split — sliders on left, results on right in a distinct card/panel

#### 1E. Social Media Management Teaser
- Headline: "We also run your social media"
- Brief description of the SMM service
- 4 small feature cards (Content Strategy, Daily Posting, Community Management, Growth Analytics)
- CTA: "Learn More" linking to /social-media
- **Layout:** Dark section to break up the light. Text left, cards grid right

#### 1F. Services Overview
- 3 service cards in a row: Product Launch Partnership (core), Social Media Management (add-on), Brand Deal Brokering (add-on)
- Each card: title, description, pricing model, bullet list of what's included
- The core service card should be visually elevated (larger, accent border, or badge)

#### 1G. Results Preview
- Headline: "Results dropping soon"
- Brief text explaining first partnerships are in progress
- 3 placeholder case study cards
- CTA: "Be one of our first case studies"

#### 1H. FAQ
- 8 questions in an accordion
- Questions: cost, product type, time commitment, audience size requirements, revenue split, niche requirements, launch risk, difference from talent agency

#### 1I. Audit Form (CTA Section)
- Dark background section
- Headline: "Get Your Free Monetization Audit"
- Form fields: Name, Instagram handle, Follower count (dropdown), Niche (dropdown), Challenge (optional textarea)
- Submit button: "Get My Free Audit"
- Trust line: "100% Free — No Credit Card — No Obligations — Results in 48 Hours"

---

### PAGE 2: HOW IT WORKS

**Goal:** Walk through the full 6-phase process in detail. Build trust by showing professionalism and thoroughness.

**Sections:**

#### 2A. Hero
- Dark background
- Headline: "From first conversation to first dollar"
- Subtitle about the proven process, no guesswork
- CTA: "Start With a Free Audit"

#### 2B. Timeline (6 Phases)
- Phase 01: Discovery (Days 1-3) — audience analysis, engagement review, niche mapping
- Phase 02: The Audit (Days 3-7) — revenue calculations, product-market fit, recommendations
- Phase 03: Agreement (Days 7-10) — revenue split, scope definition, partnership terms
- Phase 04: The Build (Days 10-21) — product creation, tech setup, sales copy, launch strategy
- Phase 05: Launch (Days 21-35) — 14-day launch sequence, warm-up, pre-launch, open cart
- Phase 06: Ongoing (Day 35+) — evergreen optimization, reporting, next product planning
- **Layout:** NOT a basic vertical list. Use an alternating left-right layout, or a visual timeline with connected nodes. Each phase should feel like a distinct "card" with number, days, title, description, and detail bullets

#### 2C. CTA Banner
- Full-width red background
- "Ready to get started?"
- White CTA button

---

### PAGE 3: FOR CREATORS

**Goal:** Speak directly to the creator. Make them feel seen. Convert them to requesting an audit.

**Sections:**

#### 3A. Hero (Dark)
- Headline: "Built for creators who are tired of leaving money on the table"
- Subtitle about partnering, not consulting
- Two CTAs

#### 3B. "Is This You?" Pain Points
- 6 checkboxes/items that describe creator frustrations:
  - 10K+ followers but less than $1K/mo from content
  - Brand deals are inconsistent
  - Want to sell a course but don't know how
  - Business side is overwhelming
  - Thought about coaching but never launched
  - Hours creating content, barely any return
- Closing line: "If you checked even one, you're sitting on untapped revenue"

#### 3C. Services Grid
- 4 service cards: Product Launch Partnership, Social Media Management, Brand Deal Brokering, Long-Term Partnership
- Each with title, description, pricing model

#### 3D. Revenue Calculator

#### 3E. FAQ

#### 3F. Audit Form

---

### PAGE 4: SOCIAL MEDIA MANAGEMENT

**Goal:** Dedicated page selling the SMM retainer service. This is a core offering — make it feel like a standalone service, not an afterthought.

**Sections:**

#### 4A. Hero (Dark)
- Headline: "We manage your social media so you can focus on creating"
- Subtitle about the time/effort it takes, and how the team handles it

#### 4B. "The Reality" Stats
- 3 stat blocks: 73% consistency barrier, 20hrs/week management time, 3x faster growth with a team
- Brief descriptions under each

#### 4C. Services Breakdown
- 4 detailed service cards: Content Strategy, Daily Management, Community & Engagement, Analytics & Growth
- Each with title, description, and 4 included items

#### 4D. Platforms
- Grid showing: Instagram, TikTok, YouTube, X/Twitter
- Each with the content types we handle on that platform
- Dark section for contrast

#### 4E. Pricing
- Two tiers side by side: Growth ($1,500/mo — 2 platforms, basic) and Scale ($3,000/mo — all platforms, full service)
- Scale tier should be visually highlighted as "Most Popular"

#### 4F. Audit Form

---

### PAGE 5: RESULTS

**Goal:** Placeholder page while first case studies are being built. Should still feel professional and intentional, not empty.

**Sections:**

#### 5A. Hero (Dark)
- Large headline: "Results dropping soon"
- Subtitle about first partnerships being in progress

#### 5B. Status Section (Light)
- Two cards side by side: Status update text card + Preview case study template card
- 3 "Coming Soon" placeholder cards below

---

### PAGE 6: ABOUT

**Goal:** Tell the origin story. Build trust. Show values.

**Sections:**

#### 6A. Hero (Dark)
- Headline: "Who we are"
- Subtitle about being the team behind undervalued creators

#### 6B. Origin Story (Light)
- Split layout: Left = large headline "From Agency to Partner", Right = 3 paragraphs of story text
- Story: saw the broken agency model, decided to build a performance-only partnership model, focus on fewer deeper relationships

#### 6C. Values (Light alternate)
- 4 value cards: Performance Only, Creator First, No Bullshit, Long Term
- Each with title and description

#### 6D. CTA (Red background)
- "Want to work with us?"
- CTA button to audit

---

### PAGE 7: FOUNDER

**Goal:** Personal page for the founder. Build trust through personal story.

**Sections:**

#### 7A. Hero (Dark)
- "The Founder"

#### 7B. Bio (Light)
- Photo placeholder (square, left side) + bio text (right side)
- Story about starting in creative work, seeing the creator monetization gap, building 64 Industries

#### 7C. Philosophy Cards (Light alternate)
- 4 cards: Aligned Incentives, Fewer Deeper, Execution Over Strategy, Creators Deserve Better

#### 7D. CTA (Dark)
- "Let's build something together"
- Audit CTA

---

## Critical Rules

1. **NO mention of shadow operating, ghost work, AI tools, or automation ANYWHERE.** This is a real agency with real social media managers and real strategists
2. **NO stock photos of people.** Use abstract graphics, gradient shapes, or geometric elements instead
3. **NO "friendly startup" energy.** This should feel like a serious, premium operation
4. **Every page must have a clear CTA** driving to the free audit
5. **Mobile responsive** — every layout must work on mobile. Stacked layouts, smaller type, full-width sections
6. **The design must NOT look like a template.** Asymmetric layouts, varied section heights, editorial typography choices
7. **Use real copy** from the descriptions above. Don't placeholder with lorem ipsum
8. **Font pairing must be premium** — suggest using Google Fonts that are available: Outfit, Sora, Space Grotesk, Plus Jakarta Sans, Manrope for headlines. Inter, DM Sans for body. JetBrains Mono for data
