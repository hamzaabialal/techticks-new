export const subServicesData = {
	'ecommerce-management': {
		breadcrumb: ['Services', 'Ecommerce Management'],
		breadcrumbLinks: ['/services'],
		hero: {
			tag: 'Ecommerce Management',
			title: 'We Run Your Store.',
			titleHighlight: 'You Focus on Growth.',
			subtitle:
				'Full-service ecommerce operations across Amazon, TikTok Shop, Shopify, Walmart, eBay & Etsy — so you can focus on your product while we handle everything else.',
		},
		stats: [
			{ value: '80+', label: 'Brands Managed' },
			{ value: '$40M+', label: 'Revenue Driven' },
			{ value: '6', label: 'Platforms' },
			{ value: '96%', label: 'Client Retention' },
		],
		platforms: ['Amazon', 'TikTok Shop', 'Shopify', 'Walmart', 'eBay', 'Etsy'],
		servicesTitle: 'What actually comes with this',
		services: [
			{
				num: '01',
				title: 'Store Setup & Optimization',
				desc: 'Complete storefront setup, branding, and listing optimization across all major platforms from day one.',
			},
			{
				num: '02',
				title: 'Inventory & Order Management',
				desc: 'Real-time inventory tracking, order routing, and fulfillment coordination across every channel.',
			},
			{
				num: '03',
				title: 'Listings & Catalog Management',
				desc: 'SEO-optimized titles, bullets, descriptions, and A+ Content that converts browsers into buyers.',
			},
			{
				num: '04',
				title: 'Customer Service & Handling',
				desc: 'Professional customer support, review management, and case handling to protect your seller rating.',
			},
			{
				num: '05',
				title: 'Performance Tracking & Reporting',
				desc: 'Weekly and monthly reporting with the metrics that actually matter to your business growth.',
			},
			{
				num: '06',
				title: 'Multi-Channel Account Management',
				desc: 'Unified strategy across all platforms — same voice, same brand, optimized for each channel.',
			},
		],
		process: {
			title: 'From day one to ongoing growth',
			steps: [
				{ num: '01', title: 'Store Audit', desc: 'We audit your setup and identify gaps, opportunities, and quick wins.' },
				{ num: '02', title: 'Growth Strategy', desc: 'Custom roadmap built around your products, margins, and target platforms.' },
				{ num: '03', title: 'Full Setup', desc: 'We implement everything — listings, ads, ops — in the first 30 days.' },
				{ num: '04', title: 'Ongoing Management', desc: 'Monthly retainer with weekly reporting, optimizations, and scaling decisions.' },
			],
		},
		relatedServices: [
			{ title: 'Amazon Growth', link: '/amazon', desc: 'Dedicated Amazon PPC, A+ Content, and full account management.' },
			{ title: 'Digital Marketing', link: '/services/digital-marketing', desc: 'Paid ads, SEO, and social to drive traffic to your stores.' },
			{ title: 'Website Development', link: '/services/development', desc: 'Custom Shopify builds built to convert from day one.' },
		],
	},

	'digital-marketing': {
		pageClass: 'ssp-page--digital-marketing',
		breadcrumb: ['Services', 'Digital Marketing'],
		breadcrumbLinks: ['/services'],
		hero: {
			tag: 'Digital Marketing',
			title: 'Digital Marketing Services That Drive',
			titleHighlight: 'Real Growth.',
			subtitle:
				'Meta Ads, Google Ads, SEO, Email, and Social — built as one integrated system around your real KPIs, not vanity metrics.',
			// optional fields for page-specific hero CTA and background
			ctaText: 'Get A Free Consultation',
			ctaLink: '/contactUs',
			bgClass: 'ssp-hero--bg-spot',
		},
		stats: [
			{ value: '$2M+', label: 'Ad Spend Managed' },
			{ value: '4.8x', label: 'Avg ROAS' },
			{ value: '120+', label: 'Campaigns Launched' },
			{ value: '93%', label: 'Client Retention' },
		],
		servicesTitle: 'Channels we cover',
		services: [
			{
				num: '01',
				title: 'SEO',
				desc: 'Technical SEO, keyword strategy, and content built to rank and convert.',
				link: '/services/digital-marketing/seo',
				icon: '',
				ctaText: 'Learn more',
				ctaLink: '/services/digital-marketing/seo',
			},
			{
				num: '02',
				title: 'Google Ads',
				desc: 'Search, Shopping, and Performance Max campaigns optimized for ROAS.',
				link: '/services/digital-marketing/google-ads',
				icon: '',
				ctaText: 'Learn more',
				ctaLink: '/services/digital-marketing/google-ads',
			},
			{
				num: '03',
				title: 'Meta Ads',
				desc: 'Facebook and Instagram campaigns built around your customer acquisition cost.',
				link: '/services/digital-marketing/meta-ads',
				icon: '',
				ctaText: 'Learn more',
				ctaLink: '/services/digital-marketing/meta-ads',
			},
			{
				num: '04',
				title: 'Social Media Marketing',
				desc: 'Organic content strategy, posting, and community management.',
				link: '/services/digital-marketing/social-media',
				icon: '',
				ctaText: 'Learn more',
				ctaLink: '/services/digital-marketing/social-media',
			},
			{
				num: '05',
				title: 'Email & SMS Marketing',
				desc: 'Lifecycle flows and campaigns that retain customers and drive repeat revenue.',
				icon: '',
				ctaText: 'Learn more',
				ctaLink: '',
			},
			{
				num: '06',
				title: 'Content Marketing',
				desc: 'Blog, video, and UGC strategy that builds authority and drives organic traffic.',
				icon: '',
				ctaText: 'Learn more',
				ctaLink: '',
			},
		],
		// optional final CTA override for page
		cta: {
			title: "Let's Grow Your Store.",
			subtitle: "Book a free 30-minute audit call. We'll review your current setup and show you exactly where to unlock more revenue.",
			buttonText: 'Book A Free Call',
			buttonLink: '/contactUs',
			variantClass: '',
		},
		process: {
			title: 'How we run your marketing',
			steps: [
				{ num: '01', title: 'Audit & Strategy', desc: 'Full audit of existing channels and a custom growth roadmap.' },
				{ num: '02', title: 'Campaign Build', desc: 'Ads, content, and flows built from scratch or rebuilt from the ground up.' },
				{ num: '03', title: 'Launch & Test', desc: 'Structured testing against real KPIs — ROAS, CAC, and LTV.' },
				{ num: '04', title: 'Scale & Report', desc: 'Weekly optimizations and monthly reports with what actually matters.' },
			],
		},
		relatedServices: [
			{ title: 'Ecommerce Management', link: '/services/ecommerce-management', desc: 'Full platform operations across Amazon, Shopify, and more.' },
			{ title: 'UX/UI Design', link: '/services/design', desc: 'Conversion-focused design for your ads and landing pages.' },
			{ title: 'Website Development', link: '/services/development', desc: 'Landing pages and funnels built to convert your traffic.' },
		],
	},

	'digital-marketing/seo': {
		breadcrumb: ['Services', 'Digital Marketing', 'SEO'],
		breadcrumbLinks: ['/services', '/services/digital-marketing'],
		hero: {
			tag: 'SEO',
			title: 'Rank Higher.',
			titleHighlight: 'Convert Better.',
			subtitle:
				'Technical SEO, keyword strategy, and content architecture that drives organic traffic and turns visitors into customers.',
		},
		stats: [
			{ value: '3x', label: 'Avg Traffic Growth' },
			{ value: '65+', label: 'Sites Optimized' },
			{ value: '6mo', label: 'Avg Time to Results' },
			{ value: '91%', label: 'Retention Rate' },
		],
		servicesTitle: 'What our SEO covers',
		services: [
			{ num: '01', title: 'Technical SEO Audit', desc: 'Complete site health check — crawlability, indexation, Core Web Vitals, and site speed.' },
			{ num: '02', title: 'Keyword Research', desc: 'In-depth keyword mapping aligned to buyer intent, not just search volume.' },
			{ num: '03', title: 'On-Page Optimization', desc: 'Title tags, meta descriptions, headers, internal linking, and content structure.' },
			{ num: '04', title: 'Content Strategy', desc: 'Topic clusters and editorial calendars built to rank and convert your target audience.' },
			{ num: '05', title: 'Link Building', desc: 'White-hat authority building through relevant, high-DR placements in your niche.' },
			{ num: '06', title: 'Local SEO', desc: 'Google Business Profile, local citations, and map pack optimization for local businesses.' },
		],
		process: {
			title: 'Our SEO process',
			steps: [
				{ num: '01', title: 'Technical Audit', desc: 'We find and fix every technical issue holding your rankings back.' },
				{ num: '02', title: 'Keyword Mapping', desc: 'We map the right keywords to the right pages based on intent and competition.' },
				{ num: '03', title: 'On-Page & Content', desc: 'We optimize existing pages and build new content to target priority keywords.' },
				{ num: '04', title: 'Track & Scale', desc: 'Monthly rank tracking, reporting, and iteration as rankings grow.' },
			],
		},
		relatedServices: [
			{ title: 'Google Ads', link: '/services/digital-marketing/google-ads', desc: 'Capture intent with paid search while SEO builds.' },
			{ title: 'Meta Ads', link: '/services/digital-marketing/meta-ads', desc: 'Pair organic growth with social paid strategy.' },
			{ title: 'Digital Marketing Hub', link: '/services/digital-marketing', desc: 'See all digital marketing services.' },
		],
	},

	'digital-marketing/google-ads': {
		breadcrumb: ['Services', 'Digital Marketing', 'Google Ads'],
		breadcrumbLinks: ['/services', '/services/digital-marketing'],
		hero: {
			tag: 'Google Ads',
			title: 'Capture Every',
			titleHighlight: 'High-Intent Search.',
			subtitle:
				'Search, Shopping, and Performance Max campaigns engineered around your ROAS targets — not click volume or impression share.',
		},
		stats: [
			{ value: '5.2x', label: 'Avg ROAS' },
			{ value: '$800K+', label: 'Ad Spend Managed' },
			{ value: '50+', label: 'Accounts Managed' },
			{ value: '88%', label: 'Retention Rate' },
		],
		servicesTitle: 'What we manage',
		services: [
			{ num: '01', title: 'Search Campaigns', desc: 'Intent-based keyword campaigns with tight match types and negative keyword hygiene.' },
			{ num: '02', title: 'Shopping & PMax', desc: 'Product feed optimization and Performance Max campaigns for ecommerce brands.' },
			{ num: '03', title: 'Display & Retargeting', desc: "Audience-based remarketing to convert browsers who didn't buy the first time." },
			{ num: '04', title: 'YouTube Ads', desc: 'In-stream and discovery ads for brand awareness and upper-funnel reach.' },
			{ num: '05', title: 'Conversion Tracking', desc: 'Accurate GA4 and Google Tag setup so every decision is backed by real data.' },
			{ num: '06', title: 'Monthly Reporting', desc: 'Clear reports on ROAS, CAC, impression share, and what we are doing next.' },
		],
		process: {
			title: 'How we run Google Ads',
			steps: [
				{ num: '01', title: 'Account Audit', desc: 'We diagnose wasted spend and structural issues in your existing account.' },
				{ num: '02', title: 'Campaign Build', desc: 'Clean account architecture built around your products and margins.' },
				{ num: '03', title: 'Test & Optimize', desc: 'Continuous bid, creative, and audience testing against your target ROAS.' },
				{ num: '04', title: 'Scale', desc: 'We scale what works and cut what does not — every week, not every quarter.' },
			],
		},
		relatedServices: [
			{ title: 'Meta Ads', link: '/services/digital-marketing/meta-ads', desc: "Pair Google intent with Meta's discovery engine." },
			{ title: 'SEO', link: '/services/digital-marketing/seo', desc: 'Build organic visibility alongside your paid strategy.' },
			{ title: 'Digital Marketing Hub', link: '/services/digital-marketing', desc: 'See all digital marketing services.' },
		],
	},

	'digital-marketing/meta-ads': {
		breadcrumb: ['Services', 'Digital Marketing', 'Meta Ads'],
		breadcrumbLinks: ['/services', '/services/digital-marketing'],
		hero: {
			tag: 'Meta Ads',
			title: 'Stop Boosting.',
			titleHighlight: 'Start Converting.',
			subtitle:
				'Facebook and Instagram campaigns structured around your CAC — creative testing, audience strategy, and full-funnel builds that actually scale.',
		},
		stats: [
			{ value: '4.6x', label: 'Avg ROAS' },
			{ value: '$1.2M+', label: 'Ad Spend Managed' },
			{ value: '200+', label: 'Creatives Tested' },
			{ value: '90%', label: 'Retention Rate' },
		],
		servicesTitle: 'What we manage',
		services: [
			{ num: '01', title: 'Campaign Strategy', desc: 'Full-funnel architecture from awareness to conversion, built around your CAC targets.' },
			{ num: '02', title: 'Creative Testing', desc: 'Systematic creative testing — static, video, and UGC — to find your winning angles.' },
			{ num: '03', title: 'Audience Building', desc: 'Custom and lookalike audience development based on your real customer data.' },
			{ num: '04', title: 'Retargeting', desc: 'Smart retargeting sequences that bring high-intent visitors back to convert.' },
			{ num: '05', title: 'Pixel & Tracking Setup', desc: "Accurate Conversions API and pixel setup so Meta's algorithm optimizes correctly." },
			{ num: '06', title: 'Weekly Reporting', desc: 'ROAS, CAC, CPM, and creative-level performance breakdowns every week.' },
		],
		process: {
			title: 'How we run Meta Ads',
			steps: [
				{ num: '01', title: 'Audit & Strategy', desc: 'We review your ad account, pixel health, and creative library.' },
				{ num: '02', title: 'Campaign Build', desc: 'Clean funnel structure with proper campaign objectives and budget logic.' },
				{ num: '03', title: 'Creative Testing', desc: 'Rapid creative testing to identify winning hooks and formats within 30 days.' },
				{ num: '04', title: 'Scale Profitably', desc: 'We scale winners and refresh creative before fatigue kills performance.' },
			],
		},
		relatedServices: [
			{ title: 'Google Ads', link: '/services/digital-marketing/google-ads', desc: "Capture search intent to complement your Meta strategy." },
			{ title: 'Social Media Marketing', link: '/services/digital-marketing/social-media', desc: 'Organic social to back your paid strategy.' },
			{ title: 'Digital Marketing Hub', link: '/services/digital-marketing', desc: 'See all digital marketing services.' },
		],
	},

	'digital-marketing/social-media': {
		breadcrumb: ['Services', 'Digital Marketing', 'Social Media Marketing'],
		breadcrumbLinks: ['/services', '/services/digital-marketing'],
		hero: {
			tag: 'Social Media Marketing',
			title: 'Build a Brand',
			titleHighlight: 'People Actually Follow.',
			subtitle:
				'Organic social strategy, content creation, and community management across Instagram, TikTok, LinkedIn, and X — built to grow and convert.',
		},
		stats: [
			{ value: '2M+', label: 'Followers Grown' },
			{ value: '60+', label: 'Brands Managed' },
			{ value: '8.4%', label: 'Avg Engagement Rate' },
			{ value: '95%', label: 'Retention Rate' },
		],
		servicesTitle: 'What we manage',
		services: [
			{ num: '01', title: 'Content Strategy', desc: 'Platform-specific content calendars built around your brand voice and audience goals.' },
			{ num: '02', title: 'Content Creation', desc: 'Graphics, short-form video, and copy produced in-house — consistently, every week.' },
			{ num: '03', title: 'Community Management', desc: 'Daily comment and DM management to build real relationships with your audience.' },
			{ num: '04', title: 'Influencer & UGC', desc: 'Creator outreach and UGC programs that generate authentic content at scale.' },
			{ num: '05', title: 'TikTok & Reels', desc: 'Short-form video strategy built for the algorithm — scripted, shot, and edited.' },
			{ num: '06', title: 'Analytics & Reporting', desc: 'Monthly reports on reach, engagement, follower growth, and content performance.' },
		],
		process: {
			title: 'How we grow your social',
			steps: [
				{ num: '01', title: 'Brand Audit', desc: 'We audit your current profiles, content, and audience health.' },
				{ num: '02', title: 'Strategy Build', desc: 'Content pillars, posting cadence, and platform priorities set for your brand.' },
				{ num: '03', title: 'Content Production', desc: 'Weekly content batch produced, reviewed, and scheduled in advance.' },
				{ num: '04', title: 'Grow & Optimize', desc: 'Monthly performance review and strategy iteration to keep growth compounding.' },
			],
		},
		relatedServices: [
			{ title: 'Meta Ads', link: '/services/digital-marketing/meta-ads', desc: 'Amplify your best organic content with paid spend.' },
			{ title: 'Google Ads', link: '/services/digital-marketing/google-ads', desc: 'Capture intent from users your social content reaches.' },
			{ title: 'Digital Marketing Hub', link: '/services/digital-marketing', desc: 'See all digital marketing services.' },
		],
	},

	'design': {
		breadcrumb: ['Services', 'UX/UI & Graphic Design'],
		breadcrumbLinks: ['/services'],
		hero: {
			tag: 'UX/UI & Graphic Design',
			title: 'Design That Converts,',
			titleHighlight: 'Not Just Impresses.',
			subtitle:
				'UX/UI, brand identity, Amazon creatives, and ad design — backed by user behaviour data and ecommerce best practices, not just taste.',
		},
		stats: [
			{ value: '200+', label: 'Projects Delivered' },
			{ value: '38%', label: 'Avg CVR Lift' },
			{ value: '5', label: 'Platforms Covered' },
			{ value: '94%', label: 'Satisfaction Rate' },
		],
		servicesTitle: 'What we design',
		services: [
			{ num: '01', title: 'UX/UI & Web Design', desc: 'Conversion-focused interfaces for websites, landing pages, and ecommerce stores.' },
			{ num: '02', title: 'Brand Identity', desc: 'Logo systems, typography, color, and guidelines built for long-term consistency.' },
			{ num: '03', title: 'Ad Creative', desc: 'Scroll-stopping static and video creatives for Meta, Google, and TikTok Ads.' },
			{ num: '04', title: 'Amazon Listing Design', desc: 'Main images, infographics, A+ Content, and storefronts that convert on Amazon.' },
			{ num: '05', title: 'Packaging Design', desc: 'Product packaging designed to communicate value and stand out on the shelf.' },
			{ num: '06', title: 'Social Media Graphics', desc: 'On-brand templates and custom graphics for all your social channels.' },
		],
		process: {
			title: 'Our design process',
			steps: [
				{ num: '01', title: 'Discovery', desc: 'We understand your brand, audience, and goals before touching a pixel.' },
				{ num: '02', title: 'Concept', desc: 'Initial design directions presented with rationale — no guessing games.' },
				{ num: '03', title: 'Refine', desc: 'Feedback-driven iterations until the design is exactly right.' },
				{ num: '04', title: 'Deliver', desc: 'All files delivered in production-ready formats for every platform.' },
			],
		},
		relatedServices: [
			{ title: 'Website Development', link: '/services/development', desc: 'We build what we design — no handoff friction.' },
			{ title: 'Digital Marketing', link: '/services/digital-marketing', desc: 'Creative that powers your paid and organic campaigns.' },
			{ title: 'Ecommerce Management', link: '/services/ecommerce-management', desc: 'Amazon and marketplace listing design included.' },
		],
	},

	'development': {
		breadcrumb: ['Services', 'Website Development'],
		breadcrumbLinks: ['/services'],
		hero: {
			tag: 'Website Development',
			title: 'Websites Built to',
			titleHighlight: 'Perform, Not Just Launch.',
			subtitle:
				'Shopify, WordPress, landing pages, and funnels — built for speed, clarity, and conversion from day one.',
		},
		stats: [
			{ value: '150+', label: 'Sites Built' },
			{ value: '90+', label: 'Avg Performance Score' },
			{ value: '2x', label: 'Avg Conversion Lift' },
			{ value: '97%', label: 'On-Time Delivery' },
		],
		servicesTitle: 'What we build',
		services: [
			{ num: '01', title: 'Shopify Development', desc: 'Custom Shopify 2.0 builds — mobile-first, fast-loading, and built to convert.' },
			{ num: '02', title: 'WordPress Development', desc: 'Custom WordPress sites with clean code, fast loading, and easy content management.' },
			{ num: '03', title: 'Landing Pages & Funnels', desc: 'Conversion-ready pages engineered around how online shoppers actually behave.' },
			{ num: '04', title: 'Performance Optimization', desc: 'Speed audits, Core Web Vitals fixes, and CRO improvements for existing sites.' },
			{ num: '05', title: 'App & Platform Integrations', desc: 'Klaviyo, Recharge, Gorgias, and any third-party app wired up correctly.' },
			{ num: '06', title: 'Ongoing Maintenance', desc: 'Monthly retainer to keep your site fast, secure, and updated as your business grows.' },
		],
		process: {
			title: 'How we build',
			steps: [
				{ num: '01', title: 'Discovery & Scope', desc: 'We define requirements, timeline, and success metrics before writing a line of code.' },
				{ num: '02', title: 'Design & Prototype', desc: 'Interactive wireframes reviewed and approved before development starts.' },
				{ num: '03', title: 'Build & Test', desc: 'Development with QA at every stage — no surprises at launch.' },
				{ num: '04', title: 'Launch & Support', desc: 'Smooth go-live and ongoing support to keep everything running.' },
			],
		},
		relatedServices: [
			{ title: 'UX/UI Design', link: '/services/design', desc: 'We design before we build — no handoff friction.' },
			{ title: 'Ecommerce Management', link: '/services/ecommerce-management', desc: 'Once built, we manage your store operations too.' },
			{ title: 'Digital Marketing', link: '/services/digital-marketing', desc: 'Drive traffic to the site we build for you.' },
		],
	},
}
