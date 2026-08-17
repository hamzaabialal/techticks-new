import portfolioShopify from './images/portfolio-stock/hands-on-keyboard.jpg'
import portfolioAmazon from './images/portfolio-stock/hammer-nails-wood.jpg'
import portfolioSocial from './images/portfolio-stock/pen-notebook-desk.jpg'
import portfolioLanding from './images/portfolio-stock/laptop-analytics-dashboard.jpg'
import techLogo2 from './images/services-slider/slider2.png'
import techLogo3 from './images/services-slider/slider3.png'
import techLogo4 from './images/services-slider/slider4.png'
import techLogo5 from './images/services-slider/slider5.png'
import techLogo6 from './images/services-slider/slider6.png'
import { attachDetailContent, serviceById } from './servicesCatalog'

const detailPageContent = {
	'ecommerce-management': {
		pageClass: 'ssp-page--ecommerce-management',
		breadcrumb: ['Services', 'Ecommerce Management'],
		breadcrumbLinks: ['/services'],
		showBreadcrumb: false,
		hideTag: true,
		hero: {
			titleSegments: [
				{ text: 'We Run Y' },
				{ text: 'our Sto', gradient: true },
				{ text: 're. You' },
				{ break: true },
				{ text: 'Focus ' },
				{ text: 'on Gro', gradient: true },
				{ text: 'wth.' },
			],
			subtitle:
				'TechTicks handles every layer of your ecommerce operation from listing optimization and inventory management to customer service and multi-channel reporting, so your brand scales without the overhead.',
			ctaText: 'Start Now',
			ctaLink: '/contactUs',
		},
		stats: [
			{ value: '80+', label: 'Brands Scaled' },
			{ value: '$40M+', label: 'Revenue Managed' },
			{ value: '6', label: 'Platforms Covered' },
			{ value: '96%', label: 'Clients Retention' },
		],
		textBlock: {
			title: 'End-to-end operations for every major platform',
			paragraphs: [
				"TechTicks' Ecommerce Management service covers the full operational stack, day-to-day store management, listing and catalog optimization, inventory replenishment, order fulfillment coordination, and customer service across Amazon, Shopify, TikTok Shop, Walmart, eBay, and Etsy.",
				"Whether you're launching a new channel or inheriting a messy multi-SKU catalog, we bring a dedicated team with platform expertise, proven SOPs, and the tooling to run your operations at scale, without adding headcount to your payroll.",
			],
		},
		servicesTitle: 'What actually there?',
		servicesSubtitle: 'Everything your store needs to perform.',
		services: [
			{
				num: '01',
				title: 'Store Setup & Optimization',
				desc: 'Full storefront buildout and continuous CRO — listings, imagery, A+ content, and storefront architecture tuned for conversion.',
				iconKey: 'badge',
			},
			{
				num: '02',
				title: 'Inventory & Order Management',
				desc: 'Real-time stock monitoring, replenishment forecasting, FBA/FBM coordination, and fulfillment SLA management across every channel.',
				iconKey: 'target',
			},
			{
				num: '03',
				title: 'Listing & Catalog Management',
				desc: 'Keyword-rich titles, bullet optimization, backend search terms, variant consolidation, and ongoing catalog hygiene.',
				iconKey: 'shuffle',
			},
			{
				num: '04',
				title: 'Customer Service Handling',
				desc: 'Dedicated response management for reviews, Q&A, buyer messages, and returns — protecting your seller metrics 24/7.',
				iconKey: 'badge',
			},
			{
				num: '05',
				title: 'Performance Tracking & Reporting',
				desc: 'Custom dashboards surfacing revenue, ACOS, conversion rate, return rate, and channel-level KPIs weekly and monthly.',
				iconKey: 'target',
			},
			{
				num: '06',
				title: 'Multi-Channel Account Management',
				desc: 'Unified operations across Amazon, Shopify, TikTok Shop, Walmart, eBay, and Etsy — one team, full coverage.',
				iconKey: 'shuffle',
			},
		],
		process: {
			title: 'From day one to ongoing growth',
			subtitle:
				'We follow a proven, execution-driven process designed to remove guesswork, eliminate waste, and scale your Amazon business the right way.',
			steps: [
				{ num: '01', title: 'Store Audit', desc: 'We tear down your current setup — listings, health metrics, pricing, competitors — and find exactly where revenue is leaking.' },
				{ num: '02', title: 'Growth Strategy', desc: 'A tailored 90-day roadmap built around your margins, channels, and goals. No templates, no guesswork.' },
				{ num: '03', title: 'Full Setup', desc: "We handle the execution — catalog migration, listing builds, tool integrations, and team onboarding — so you don't have to." },
				{ num: '04', title: 'Ongoing Management', desc: 'Your dedicated account team runs daily operations: listings, inventory, ads coordination, customer service, and platform compliance.' },
			],
		},
		crossSell: {
			title: 'More ways TechTicks can help',
			subtitle: 'Expand your reach and connect with customers online.',
			items: [
				{ title: 'Amazon Growth', desc: 'PPC management, ranking strategies, and full-funnel Amazon advertising to dominate your category.', link: '/amazon', linkText: 'Learn more' },
				{ title: 'Shopify Development', desc: 'Custom Shopify storefronts built for speed, conversion, and brand experience, from scratch or migration.', link: '/services/development', linkText: 'Learn more' },
				{ title: 'Digital Marketing', desc: 'Paid social, influencer seeding, and email flows that drive qualified traffic to your stores.', link: '/services/digital-marketing', linkText: 'Learn more' },
			],
		},
		cta: {
			title: "Let's Grow Your Store.",
			subtitle: "Book a free 30-minute audit call. We'll review your current setup and show you exactly where to unlock more revenue.",
			buttonText: 'Book A Free Call',
			buttonLink: '/contactUs',
		},
	},

	'digital-marketing': {
		pageClass: 'ssp-page--digital-marketing',
		breadcrumb: ['Services', 'Digital Marketing'],
		breadcrumbLinks: ['/services'],
		showStats: false,
		hero: {
			tag: 'Digital Marketing',
			titleSegments: [
				{ text: 'Digital Mark' },
				{ text: 'eting S', gradient: true },
				{ text: 'ervices' },
				{ break: true },
				{ text: 'That Drive ' },
				{ text: 'Real', gradient: true },
				{ text: ' Growth.' },
			],
			subtitle:
				'We help ecommerce brands on Amazon, Shopify, TikTok Shop, Walmart, eBay and Etsy increase visibility, capture demand and grow sales with data-driven marketing built around your margins.',
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
		servicesTitle: 'Digital marketing services',
		servicesSubtitle: 'Pick a single channel or let us run the full stack as one connected growth engine.',
		services: [
			{
				num: '01',
				title: 'Paid Advertising',
				desc: 'Meta and Google campaigns structured around your numbers — ROAS, CAC, and LTV — not clicks and impressions. Every dollar of spend is tracked, tested, and optimised for measurable returns.',
				iconKey: 'dollar',
				ctaText: 'Learn more',
				ctaLink: '/contactUs',
			},
			{
				num: '02',
				title: 'SEO & Content',
				desc: 'Technical strength, keyword strategy, and content structure built to rank and convert. We grow organic traffic and long-term discoverability without shortcuts that damage your site later.',
				iconKey: 'doc',
				ctaText: 'Learn more',
				ctaLink: '/contactUs',
			},
			{
				num: '03',
				title: 'Email, SMS & Social',
				desc: 'Retention and community working alongside paid — lifecycle email and SMS flows plus platform-native social content that keeps customers coming back, not just clicking once.',
				iconKey: 'mail',
				ctaText: 'Learn more',
				ctaLink: '/contactUs',
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
			title: 'How it works',
			subtitle: 'A process built for compounding.',
			steps: [
				{ num: '01', title: 'Discovery', desc: 'We audit your storefront, ad accounts, analytics and competitors to find the real growth gaps.' },
				{ num: '02', title: 'Strategy', desc: 'A channel mix, budget plan and creative direction mapped to your margins and revenue targets.' },
				{ num: '03', title: 'Execution', desc: 'Campaigns, creative, flows and content go live — built, launched and managed by our specialists.' },
				{ num: '04', title: 'Optimization & Reporting', desc: 'Weekly testing, budget reallocation and transparent reporting that compound results over time.' },
			],
		},
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
		pageClass: 'ssp-page--ui-ux-design',
		breadcrumb: ['Services', 'UX/UI & Graphic Design'],
		breadcrumbLinks: ['/services'],
		hero: {
			tag: 'UX/UI & Graphic Design',
			titleSegments: [
				{ text: 'Design that ' },
				{ text: 'conve', gradient: true },
				{ text: 'rts,' },
				{ break: true },
				{ text: 'not just lo' },
				{ text: 'oks g', gradient: true },
				{ text: 'ood.' },
			],
			subtitle: 'UX, UI, and marketplace graphics engineered to lift conversion rates, not decorate your brand.',
			ctaText: 'Get A Free Consultation',
			ctaLink: '/contactUs',
		},
		stats: [
			{ value: '200+', label: 'Projects Delivered' },
			{ value: '38%', label: 'Avg CVR Lift' },
			{ value: '5', label: 'Platforms Covered' },
			{ value: '94%', label: 'Satisfaction Rate' },
		],
		servicesTitle: 'Every design discipline. One Team.',
		servicesSubtitle: 'No handoffs to freelancers. Every vertical is in-house and ecommerce-trained.',
		services: [
			{
				num: '01',
				title: 'Website & App UI/UX',
				desc: 'Conversion-first UX that moves visitors to buyers, built for Shopify, custom DTC, and app storefronts.',
				ctaText: 'Learn more →',
				ctaLink: '/contactUs',
				iconKey: 'monitor',
			},
			{
				num: '02',
				title: 'Amazon & Marketplace Graphics',
				desc: 'A+ Content, storefront banners, and listing imagery engineered to outperform on Amazon, Walmart, and eBay.',
				ctaText: 'Learn more →',
				ctaLink: '/contactUs',
				iconKey: 'shopify',
			},
			{
				num: '03',
				title: 'Brand Identity & Logo',
				desc: 'Visual systems that hold up on packaging, TikTok, and a 40-foot trade-show backdrop — all from one design sprint.',
				ctaText: 'Learn more →',
				ctaLink: '/contactUs',
				iconKey: 'pen',
			},
			{
				num: '04',
				title: 'Social Media Design',
				desc: 'Thumb-stopping creatives for TikTok Shop, Meta, and Pinterest — designed to drive clicks, not just impressions.',
				ctaText: 'Learn more →',
				ctaLink: '/contactUs',
				iconKey: 'share',
			},
			{
				num: '05',
				title: 'Landing Page Design',
				desc: 'High-converting landing pages for paid traffic — every element positioned to reduce drop-off and lift CVR.',
				ctaText: 'Learn more →',
				ctaLink: '/contactUs',
				iconKey: 'layout',
			},
			{
				num: '06',
				title: 'Packaging & Print',
				desc: 'Retail-ready packaging and insert cards that reinforce brand, drive repeat purchases, and stand out on shelf.',
				ctaText: 'Learn more →',
				ctaLink: '/contactUs',
				iconKey: 'printer',
			},
		],
		growthPartner: {
			title: "WE'RE YOUR GROWTH PARTNER.",
			subtitle: 'Design agencies care about awards. We care about your conversion rate, your ROAS, and your BSR.',
			stats: [
				{
					stat: '72hr',
					title: 'First Drafts in 72 Hours',
					desc: 'Most agencies take two weeks to show you anything. We move at ecommerce speed because your ad spend doesn\'t pause.',
				},
				{
					stat: '100%',
					title: 'Ecommerce-Only Focus',
					desc: 'We don\'t do restaurant menus or wedding invitations. Every designer on our team has worked inside an ecommerce P&L.',
				},
				{
					stat: 'Data',
					title: 'Design Decisions Backed by Data',
					desc: 'We pull your conversion funnel before touching Figma. Every layout choice is a hypothesis tied to a business metric.',
				},
			],
		},
		portfolio: {
			title: 'Let The Results Do The Talking',
			viewAllText: 'VIEW ALL WORK →',
			viewAllLink: '/portfolio',
			items: [
				{
					image: portfolioShopify,
					title: 'Shopify Storefront',
					category: 'UI/UX',
				},
				{
					image: portfolioAmazon,
					title: 'Amazon A+ Content',
					category: 'Marketplace',
				},
				{
					image: null,
					visual: 'ssp-portfolio-placeholder--branding',
					title: 'Brand Identity System',
					category: 'Branding',
				},
				{
					image: portfolioSocial,
					title: 'TikTok Shop Creative',
					category: 'Social',
				},
				{
					image: portfolioLanding,
					title: 'Landing Page',
					category: 'Conversion',
				},
				{
					image: null,
					visual: 'ssp-portfolio-placeholder--packaging',
					title: 'Packaging Design',
					category: 'Print',
				},
			],
		},
		cta: {
			title: 'Ready to turn your design into revenue?',
			subtitle: 'Free audit. No pitch deck. Jut an honest look at what\'s costing you conversions.',
			buttonText: 'Book A Free Call',
			buttonLink: '/contactUs',
		},
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

detailPageContent.development = {
	...detailPageContent.development,
	pageClass: 'ssp-page--development',
	showBreadcrumb: false,
	showStats: false,
	showTestimonials: true,
	portfolioBeforeProcess: true,
	hero: {
		...detailPageContent.development.hero,
		titleSegments: [
			{ text: 'Websites ' },
			{ text: 'built to', gradient: true },
			{ text: ' sell not just ' },
			{ text: 'exists', gradient: true },
			{ text: '.' },
		],
		subtitle: 'Responsive, conversion-optimized, ecommerce-ready builds, designed and developed in-house so nothing gets lost in the handoff.',
		ctaText: 'Get A Free Consultation',
	},
	platformLogosLabel: 'Platforms & technologies we build on',
	platformLogos: [
		{ image: techLogo2, alt: 'PopDarts' },
		{ image: techLogo3, alt: 'Syndicate' },
		{ image: techLogo4, alt: 'Monk Cables' },
		{ image: techLogo5, alt: 'Oaks Craft' },
		{ image: techLogo6, alt: 'Crazy Cups' },
	],
	servicesTitle: 'Every build, every channel.',
	servicesSubtitle: "From first commit to post-launch support - we handle the full development lifecycle so your team doesn't have to.",
	services: [
		{ num: '01', title: 'Shopify Store Development', desc: 'Custom themes, app integrations, and checkout optimization for Shopify merchants ready to scale.', ctaText: 'Learn more', ctaLink: '/contactUs', iconKey: 'shopify' },
		{ num: '02', title: 'Custom Website Design & Build', desc: 'Fully bespoke sites built on Next.js or headless stacks - no templates, no shortcuts.', ctaText: 'Learn more', ctaLink: '/contactUs', iconKey: 'code' },
		{ num: '03', title: 'Redesigns & Migrations', desc: 'Platform migrations and complete redesigns that preserve SEO equity and improve conversion from day one.', ctaText: 'Learn more', ctaLink: '/contactUs', iconKey: 'refresh' },
		{ num: '04', title: 'Landing Pages', desc: 'High-converting campaign pages built for paid traffic - A/B-ready and launched in days, not weeks.', ctaText: 'Learn more', ctaLink: '/contactUs', iconKey: 'layout' },
		{ num: '05', title: 'Speed & Performance Optimization', desc: 'Core Web Vitals audits and surgical fixes that cut load time and lift rankings.', ctaText: 'Learn more', ctaLink: '/contactUs', iconKey: 'speed' },
		{ num: '06', title: 'Maintenance & Support', desc: 'Ongoing updates, security patches, and feature rollouts, so your site never stagnates.', ctaText: 'Learn more', ctaLink: '/contactUs', iconKey: 'support' },
	],
	process: {
		title: 'The unfair advantage.',
		steps: [
			{ num: '01', title: 'Launched in weeks, not months.', desc: "Our sprint-based process and in-house design-dev pipeline means you're live and generating revenue faster than agency timelines allow." },
			{ num: '02', title: 'Deep ecommerce platform expertise.', desc: "Shopify, headless, custom stacks - we've built across every major platform and know which one wins for your category and volume." },
			{ num: '03', title: 'Design to dev. No handoff gaps.', desc: "Our designers and developers share a single Figma file. What's approved is exactly what ships, no it looked different in the mockup surprises." },
		],
	},
	portfolio: {
		title: 'Sites That Drive Revenue.',
		viewAllText: 'VIEW ALL WORK →',
		viewAllLink: '/portfolio',
		items: [
			{ image: portfolioShopify, title: 'Shopify Storefront', category: 'UI/UX' },
			{ image: portfolioAmazon, title: 'Amazon A+ Content', category: 'Marketplace' },
			{ image: null, visual: 'ssp-portfolio-placeholder--branding', title: 'Brand Identity System', category: 'Branding' },
			{ image: portfolioSocial, title: 'TikTok Shop Creative', category: 'Social' },
			{ image: portfolioLanding, title: 'Landing Page', category: 'Conversion' },
			{ image: null, visual: 'ssp-portfolio-placeholder--packaging', title: 'Packaging Design', category: 'Print' },
		],
	},
	cta: {
		title: 'Ready to build something that sells?',
		subtitle: "We'll audit your current site and tell you exactly what's costing you conversions, no pitch deck, no pressure.",
		buttonText: 'Book A Free Call',
		buttonLink: '/contactUs',
	},
}

const canonicalDetailPages = Object.fromEntries(
	Object.entries(detailPageContent).map(([id, detail]) => {
		const category = serviceById[id]

		if (!category) {
			return [id, detail]
		}

		return [
			id,
			{
				...detail,
				category,
				breadcrumb: ['Services', category.title],
				breadcrumbLinks: ['/services'],
				hero: {
					...detail.hero,
					tag: detail.hideTag ? undefined : category.title,
				},
			},
		]
	}),
)

attachDetailContent(canonicalDetailPages)

export const subServicesData = {
	...detailPageContent,
	...canonicalDetailPages,
}
