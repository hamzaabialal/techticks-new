// Landing Page (design) and Performance Optimization (development) share this
// dashboard photo deliberately - it's a genuine analytics-dashboard shot,
// still a good fit relabeled either way, not a mismatch like the images it
// replaced elsewhere in this file.
import portfolioLanding from './images/portfolio-stock/laptop-analytics-dashboard.jpg'
import designPortfolioShopify from './images/portfolio-stock/design-shopify-storefront.jpg'
import designPortfolioAmazon from './images/portfolio-stock/design-amazon-a-plus.jpg'
import designPortfolioBrand from './images/portfolio-stock/design-brand-identity.jpg'
import designPortfolioTiktok from './images/portfolio-stock/design-tiktok-creative.jpg'
import designPortfolioPackaging from './images/portfolio-stock/design-packaging.jpg'
import devPortfolioShopify from './images/portfolio-stock/dev-shopify-storefront.jpg'
import devPortfolioRedesign from './images/portfolio-stock/dev-site-redesign.jpg'
import devPortfolioCustomBuild from './images/portfolio-stock/dev-custom-build.jpg'
import devPortfolioLandingPage from './images/portfolio-stock/dev-landing-page.jpg'
import devPortfolioSupport from './images/portfolio-stock/dev-ongoing-support.jpg'
import techLogo2 from './images/services-slider/slider2.png'
import techLogo3 from './images/services-slider/slider3.png'
import techLogo4 from './images/services-slider/slider4.png'
import techLogo5 from './images/services-slider/slider5.png'
import techLogo6 from './images/services-slider/slider6.png'
import { attachDetailContent, serviceById } from './servicesCatalog'

const detailPageContent = {
	'ecommerce-management': {
		seoTitle: 'Ecommerce Management | Amazon, TikTok Shop, Shopify, Walmart, eBay & Etsy',
		seoDescription:
			'TechTicks manages ecommerce growth across six major platforms, from Amazon PPC and TikTok Shop creator programs to Shopify stores and Walmart Marketplace. US-market specialists.',
		pageClass: 'ssp-page--ecommerce-management',
		breadcrumb: ['Services', 'Ecommerce Management'],
		breadcrumbLinks: ['/services'],
		showBreadcrumb: false,
		hideTag: true,
		showTestimonials: true,
		testimonialCategories: ['E-commerce', 'Migration'],
		hero: {
			titleSegments: [
				{ text: 'Six Platfor' },
				{ text: 'ms. One T', gradient: true },
				{ text: 'eam That' },
				{ break: true },
				{ text: 'Actually ' },
				{ text: 'Knows T', gradient: true },
				{ text: 'hem.' },
			],
			subtitle:
				"Most agencies pick one or two channels and learn the others on your dime. We've operated on all six of these platforms with real accounts, real products, and real money. Whether you want to launch on a new marketplace or finally fix what's not working on an existing one, we can hit the ground running.",
			ctaText: 'Book a Free Strategy Call',
			ctaLink: '/contactUs',
		},
		stats: [
			{ value: '80+', label: 'Brands Scaled' },
			{ value: '$40M+', label: 'Revenue Managed' },
			{ value: '6', label: 'Platforms Covered' },
			{ value: '96%', label: 'Clients Retention' },
		],
		textBlock: {
			title: 'Why brands that sell on multiple platforms win long-term',
			paragraphs: [
				'A brand that sells only on Amazon is one algorithm change away from a bad month. TikTok Shop brands that ignore owned channels are building on rented land. Shopify-only DTC brands pay forever for every customer.',
				"Multi-channel isn't just a growth strategy — it's a risk management strategy. TechTicks builds and manages your presence across platforms so you're not dependent on any single one.",
			],
		},
		servicesTitle: 'Six platforms. Each one linked below.',
		servicesSubtitle: "Every card links to that platform's dedicated service page.",
		services: [
			{
				num: '01',
				title: 'Amazon',
				desc: "The world's largest ecommerce platform, and the most competitive. Listings, PPC, A+ Content, Brand Registry, account health.",
				iconKey: 'badge',
				ctaText: 'Learn More →',
				ctaLink: '/amazon',
			},
			{
				num: '02',
				title: 'TikTok Shop',
				desc: 'The fastest-growing sales channel in ecommerce right now. Store setup, creator affiliate programs, UGC strategy, TikTok Ads.',
				iconKey: 'share',
				ctaText: 'Learn More →',
				ctaLink: '/tiktok-shop',
			},
			{
				num: '03',
				title: 'Shopify',
				desc: 'Your owned DTC channel — build it right and it pays dividends forever. Custom development, CRO, app integration, migrations.',
				iconKey: 'shopify',
				ctaText: 'Learn More →',
				ctaLink: '/shopify',
			},
			{
				num: '04',
				title: 'Walmart',
				desc: '120M+ monthly shoppers, less competition than Amazon, and growing fast. Seller setup, listing optimisation, Walmart Connect Ads, WFS.',
				iconKey: 'target',
				ctaText: 'Learn More →',
				ctaLink: '/walmart',
			},
			{
				num: '05',
				title: 'eBay',
				desc: 'Still one of the most profitable channels for the right product categories. Store setup, Cassini SEO, Promoted Listings, repricing.',
				iconKey: 'shuffle',
				ctaText: 'Learn More →',
				ctaLink: '/ebay',
			},
			{
				num: '06',
				title: 'Etsy',
				desc: '90M+ buyers actively looking for what you sell. Shop optimisation, listing SEO, Etsy Ads, Star Seller strategy.',
				iconKey: 'doc',
				ctaText: 'Learn More →',
				ctaLink: '/etsy',
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
		seoTitle: 'Digital Marketing Services: Meta Ads, Google Ads, SEO, Email Marketing & Social Media',
		seoDescription:
			'TechTicks delivers integrated digital marketing for US ecommerce brands: Meta Ads, Google Ads, SEO, email & SMS marketing, social media management, and content creation.',
		pageClass: 'ssp-page--digital-marketing',
		testimonialCategories: ['SEO', 'Advertising', 'Social Media'],
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
		seoTitle: 'SEO Services for Ecommerce Brands | TechTicks',
		seoDescription: 'Technical SEO, keyword strategy, and content architecture that drives organic traffic and turns visitors into customers.',
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
		seoTitle: 'Google Ads Management for Ecommerce | TechTicks',
		seoDescription: 'Search, Shopping, and Performance Max campaigns engineered around your ROAS targets — not click volume or impression share.',
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
		seoTitle: 'Meta Ads Management: Facebook & Instagram Advertising | TechTicks',
		seoDescription: 'Facebook and Instagram campaigns structured around your CAC — creative testing, audience strategy, and full-funnel builds that actually scale.',
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
		seoTitle: 'Social Media Marketing for Ecommerce Brands | TechTicks',
		seoDescription: 'Organic social strategy, content creation, and community management across Instagram, TikTok, LinkedIn, and X — built to grow and convert.',
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
		seoTitle: 'UX/UI Design Services, Shopify UX, App Design, Wireframes & Conversion-Focused Design',
		seoDescription:
			'TechTicks delivers UX/UI design for ecommerce brands: user research, Shopify UX optimisation, app UI design, wireframes, prototypes, and CRO-focused design handoffs.',
		pageClass: 'ssp-page--ui-ux-design',
		testimonialCategories: ['Design'],
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
			subtitle: 'A look at the type of design work we deliver — not specific client case studies.',
			items: [
				{
					image: designPortfolioShopify,
					title: 'Shopify Storefront Example',
					category: 'UI/UX',
				},
				{
					image: designPortfolioAmazon,
					title: 'Amazon A+ Content Example',
					category: 'Marketplace',
				},
				{
					image: designPortfolioBrand,
					title: 'Brand Identity System Example',
					category: 'Branding',
				},
				{
					image: designPortfolioTiktok,
					title: 'TikTok Shop Creative Example',
					category: 'Social',
				},
				{
					image: portfolioLanding,
					title: 'Landing Page Example',
					category: 'Conversion',
				},
				{
					image: designPortfolioPackaging,
					title: 'Packaging Design Example',
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
		seoTitle: 'Website Development Services: Shopify, WordPress, Landing Pages & Custom Web Builds',
		seoDescription:
			'TechTicks builds high-performance websites for ecommerce and service brands: custom Shopify stores, WordPress sites, landing pages, sales funnels, speed optimisation, and ongoing maintenance.',
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

	'tiktok-shop': {
		seoTitle: 'TikTok Shop Agency, Creator Affiliate Marketing, Store Setup & TikTok Ads for US Brands',
		seoDescription:
			'TechTicks helps US brands launch TikTok Shops, build creator affiliate programs, develop UGC content strategies, and run profitable TikTok Ads. Real results, not just impressions.',
		breadcrumb: ['Services', 'Ecommerce Management', 'TikTok Shop'],
		breadcrumbLinks: ['/services', '/services/ecommerce-management'],
		hero: {
			tag: 'TikTok Shop',
			title: 'TikTok Shop Is Where',
			titleHighlight: 'Your Next 10,000 Customers Are.',
			subtitle:
				"The brands growing fastest on TikTok Shop aren't the ones spending the most on ads — they're the ones who figured out the creator affiliate model. One creator with the right audience can outsell a $10,000 paid campaign in a weekend. TechTicks builds and runs the whole system: your store, your creator network, your content strategy, and your ads.",
			ctaText: 'Book a Free TikTok Shop Strategy Call',
			ctaLink: '/contactUs',
		},
		stats: [
			{ value: '80+', label: 'Active Creator Affiliates' },
			{ value: '60+', label: 'Brands Launched on TikTok Shop' },
			{ value: '3x', label: 'Avg GMV Growth in 90 Days' },
			{ value: '92%', label: 'Retention Rate' },
		],
		servicesTitle: 'What we manage',
		services: [
			{ num: '01', title: 'TikTok Shop Setup & Optimisation', desc: 'Account registration, business verification, product catalog setup, and listing optimisation for TikTok’s shopping and discovery algorithm — plus shop health monitoring and policy compliance.', iconKey: 'shopify' },
			{ num: '02', title: 'Creator Affiliate Program Management', desc: 'Research and outreach to relevant creators from nano to macro, onboarding, commission structure design, and product seeding to maximise organic content volume.', iconKey: 'share' },
			{ num: '03', title: 'UGC & Content Strategy', desc: 'Content briefs, hook strategy for the first 2–3 seconds, and formats that work — product demos, transformations, testimonials, POV unboxing.', iconKey: 'pen' },
			{ num: '04', title: 'TikTok Ads Management', desc: 'Spark Ads built from your best-performing organic content, In-Feed Ads, Video Shopping Ads, and Collection Ads — with ROAS-focused optimisation.', iconKey: 'target' },
			{ num: '05', title: 'TikTok LIVE Commerce', desc: 'LIVE shopping event planning, host selection and briefing, pre-LIVE promotional strategy, and post-LIVE analysis for the next session.', iconKey: 'monitor' },
		],
		process: {
			title: 'How we build your TikTok Shop',
			steps: [
				{ num: '01', title: 'Audit & Strategy', desc: 'We review your catalog, category fit, and current creator relationships (if any).' },
				{ num: '02', title: 'Shop & Creator Build', desc: 'Store setup, listing optimisation, and the first wave of creator outreach.' },
				{ num: '03', title: 'Content & Ads', desc: 'Seeding product, briefing creators, and turning winning UGC into Spark Ads.' },
				{ num: '04', title: 'Scale', desc: 'Expanding the creator network and reinvesting in what is already converting.' },
			],
		},
		faqSubtitle: 'Straight answers about launching and growing on TikTok Shop.',
		faq: [
			{
				question: 'Do I need a US business entity to sell on TikTok Shop?',
				answer:
					"Yes, TikTok Shop US currently requires a US business entity or US individual with valid tax documentation. We'll walk you through the requirements and point you to the right resources if you need to set something up.",
			},
			{
				question: 'How many creators do I need before I see sales?',
				answer:
					"We've seen brands generate real traction with as few as 10 well-matched creators. The number matters less than the fit — a creator in your exact niche with 30k followers will outperform a generic lifestyle creator with 500k every time. We focus on fit first.",
			},
			{
				question: 'What types of products do well on TikTok Shop?',
				answer:
					"Products that have a visible before-and-after, a satisfying demo, or a strong emotional hook tend to travel well. Beauty, wellness, kitchen gadgets, fitness, and home products are strong categories. We'll review your catalog and tell you honestly which SKUs have TikTok potential before we start.",
			},
			{
				question: 'Can TikTok Shop and Amazon work together?',
				answer:
					'They can and they should. Creator content from TikTok can drive external traffic to your Amazon listing, which improves organic rank and sales velocity. We run both channels for several clients, and the cross-channel lift is real.',
			},
		],
		relatedServices: [
			{ title: 'Amazon', link: '/amazon', desc: 'Send TikTok-driven traffic into a listing built to convert it.' },
			{ title: 'Shopify', link: '/shopify', desc: 'Your owned channel to reduce reliance on any one marketplace.' },
			{ title: 'Ecommerce Management Hub', link: '/services/ecommerce-management', desc: 'See every platform we manage.' },
		],
		cta: {
			title: "Let's Build Your TikTok Shop from the Ground Up — or Fix What Isn't Working.",
			subtitle: "Book a free strategy call. We'll review your catalog, your current TikTok presence (if any), and tell you exactly where to start.",
			buttonText: 'Book a Free TikTok Shop Strategy Call →',
			buttonLink: '/contactUs',
		},
	},

	'shopify': {
		seoTitle: 'Shopify Agency, Custom Store Development, CRO & Full Shopify Management for DTC Brands',
		seoDescription:
			'TechTicks builds and optimises Shopify stores for US DTC brands: custom theme development, Shopify 2.0, app integration, CRO, speed optimisation, migrations, and ongoing management.',
		breadcrumb: ['Services', 'Ecommerce Management', 'Shopify'],
		breadcrumbLinks: ['/services', '/services/ecommerce-management'],
		hero: {
			tag: 'Shopify',
			title: 'Your Shopify Store Should Be',
			titleHighlight: 'Your Best Salesperson.',
			subtitle:
				"Slow load times. A homepage that doesn't answer 'why you' in the first five seconds. Product pages missing the information buyers actually want. A checkout with three more steps than it needs. These things bleed revenue quietly, every day. TechTicks builds Shopify stores engineered to convert, and audits existing ones to find exactly where the money is leaking.",
			ctaText: 'Book a Free Shopify Audit',
			ctaLink: '/contactUs',
		},
		stats: [
			{ value: '150+', label: 'Shopify Stores Built or Optimised' },
			{ value: '90+', label: 'Avg Lighthouse Performance Score' },
			{ value: '2x', label: 'Avg Conversion Lift After CRO' },
			{ value: '96%', label: 'Client Retention' },
		],
		servicesTitle: 'What we manage',
		services: [
			{ num: '01', title: 'Custom Shopify Store Development', desc: 'Full builds on Shopify 2.0, custom themes or heavily modified bases, mobile-first by default, with 90+ Lighthouse performance targets baked into the build.', iconKey: 'shopify' },
			{ num: '02', title: 'Shopify App Stack & Integrations', desc: 'Reviews, email & SMS, upsell/cross-sell, loyalty, and subscriptions — we evaluate and recommend based on your catalog, we don’t upsell apps you don’t need.', iconKey: 'code' },
			{ num: '03', title: 'Conversion Rate Optimisation', desc: 'Heatmap and session recording analysis, full-funnel audits, product page and checkout improvements, and an A/B testing roadmap prioritised by revenue impact.', iconKey: 'target' },
			{ num: '04', title: 'Shopify Migrations', desc: 'Full migrations from WooCommerce, BigCommerce, Magento, Wix, or a custom-built store — with a 301 redirect strategy built before launch to protect SEO.', iconKey: 'refresh' },
			{ num: '05', title: 'Ongoing Shopify Management', desc: 'Monthly performance reviews and CRO iteration, theme and app maintenance, and Shopify Plus advisory when it makes financial sense to upgrade.', iconKey: 'support' },
			{ num: '06', title: 'Shopify + Amazon Integration', desc: 'Inventory sync across platforms to prevent oversells, and a strategy for using your Shopify customer base to reduce Amazon dependency over time.', iconKey: 'shuffle' },
		],
		process: {
			title: 'How we build',
			steps: [
				{ num: '01', title: 'Discovery & Scope', desc: 'We define requirements, timeline, and success metrics before writing a line of code.' },
				{ num: '02', title: 'Design & Prototype', desc: 'Interactive wireframes reviewed and approved before development starts.' },
				{ num: '03', title: 'Build & Test', desc: 'Development with QA at every stage — no surprises at launch.' },
				{ num: '04', title: 'Launch & Iterate', desc: 'Smooth go-live, then ongoing CRO so the store keeps improving after day one.' },
			],
		},
		faqSubtitle: 'Straight answers about building or improving your Shopify store.',
		faq: [
			{
				question: 'Do you build on Shopify 2.0?',
				answer:
					'Yes, all new builds use Shopify 2.0 architecture. It gives us far more customisation flexibility, better page speed, and section-everywhere functionality that makes the store easier for you to manage after handoff.',
			},
			{
				question: 'How long does a Shopify build take?',
				answer:
					'A standard custom build is 3–6 weeks. More complex stores with custom functionality can take 6–10 weeks. We give you a precise timeline in the proposal before we start.',
			},
			{
				question: 'Can you improve my existing store rather than rebuild it?',
				answer:
					"Often, yes, and it's faster ROI. We'll audit your current store first and give you an honest recommendation on whether to optimise or rebuild, based on actual performance data.",
			},
			{
				question: 'Do you work with Shopify Plus?',
				answer:
					'Yes. We handle standard Shopify and Shopify Plus, including Shopify Flow automations, checkout extensibility, custom scripts, and B2B wholesale configuration.',
			},
		],
		relatedServices: [
			{ title: 'Website Development', link: '/services/development', desc: 'Landing pages, funnels, and non-Shopify builds too.' },
			{ title: 'UX/UI Design', link: '/services/design', desc: 'Store design grounded in buyer psychology and conversion data.' },
			{ title: 'Digital Marketing', link: '/services/digital-marketing', desc: 'Drive traffic to the store we build and optimise.' },
		],
		cta: {
			title: 'A Better Shopify Store Pays for Itself. Let’s Show You Where the Money Is.',
			subtitle: "Book a free audit. We'll review your store and tell you exactly what's costing you conversions.",
			buttonText: 'Book a Free Shopify Audit →',
			buttonLink: '/contactUs',
		},
	},

	'walmart': {
		seoTitle: 'Walmart Marketplace Agency, Seller Setup, Listing Optimisation & Walmart Connect Ads',
		seoDescription:
			'TechTicks manages Walmart Marketplace for US brands: Seller Center setup, listing optimisation, Walmart Connect PPC, WFS fulfillment, and cross-channel strategy with Amazon.',
		breadcrumb: ['Services', 'Ecommerce Management', 'Walmart'],
		breadcrumbLinks: ['/services', '/services/ecommerce-management'],
		hero: {
			tag: 'Walmart',
			title: '120 Million Monthly Shoppers.',
			titleHighlight: 'Most Sellers Aren’t Optimised for Any of Them.',
			subtitle:
				"Walmart Marketplace is genuinely underused. Categories that are brutally competitive on Amazon often have breathing room on Walmart — lower CPCs, less listing competition, and a customer base that's actively looking to buy. We set you up to capture profitable sales while everyone else fights for scraps on Amazon.",
			ctaText: 'Book a Free Walmart Strategy Call',
			ctaLink: '/contactUs',
		},
		stats: [
			{ value: '120M+', label: 'Monthly Walmart Shoppers' },
			{ value: '40+', label: 'Walmart Sellers Managed' },
			{ value: '2 Day', label: 'Delivery Badge Strategy' },
			{ value: '90%', label: 'Retention Rate' },
		],
		servicesTitle: 'What we manage',
		services: [
			{ num: '01', title: 'Seller Center Setup & Management', desc: 'Seller application support, full account configuration — payments, tax, shipping, returns — plus account health and policy compliance management.', iconKey: 'badge' },
			{ num: '02', title: 'Listing Optimisation', desc: 'Keyword research with Walmart-specific tooling, title/description/attribute optimisation, and correct category mapping — miscategorisation kills visibility.', iconKey: 'doc' },
			{ num: '03', title: 'Walmart Connect Ads', desc: 'Sponsored Products setup and management, keyword and auto campaign strategy, bid management against your margin targets, and Walmart DSP for scale.', iconKey: 'dollar' },
			{ num: '04', title: 'Walmart Fulfillment Services (WFS)', desc: 'WFS onboarding and eligibility assessment, inventory and reorder planning, and 2-day delivery badge strategy — it meaningfully improves conversion.', iconKey: 'shuffle' },
			{ num: '05', title: 'Walmart + Amazon Cross-Channel Strategy', desc: 'Price parity monitoring, channel-specific inventory allocation, and unified reporting so you see the full picture across both platforms.', iconKey: 'target' },
		],
		process: {
			title: 'How we get you set up',
			steps: [
				{ num: '01', title: 'Eligibility & Application', desc: 'We assess category fit and manage the Seller Center application.' },
				{ num: '02', title: 'Listing Build', desc: 'Catalog setup, keyword-optimised listings, and correct categorisation.' },
				{ num: '03', title: 'Ads & Fulfillment', desc: 'Walmart Connect campaigns and a WFS plan if it fits your logistics.' },
				{ num: '04', title: 'Scale', desc: 'Ongoing optimisation as sell-through data comes in.' },
			],
		},
		relatedServices: [
			{ title: 'Amazon', link: '/amazon', desc: 'Run both marketplaces without price or inventory conflicts.' },
			{ title: 'eBay', link: '/ebay', desc: 'Another marketplace with real profit margin for the right category.' },
			{ title: 'Ecommerce Management Hub', link: '/services/ecommerce-management', desc: 'See every platform we manage.' },
		],
		cta: {
			title: 'Walmart Revenue Doesn’t Have to Come With Amazon-Level Complexity',
			subtitle: "Book a free strategy call and we'll show you whether your catalog has real Walmart potential.",
			buttonText: 'Book a Free Walmart Strategy Call →',
			buttonLink: '/contactUs',
		},
	},

	'ebay': {
		seoTitle: 'eBay Management Agency, Store Setup, Listing SEO, eBay Ads & Account Growth',
		seoDescription:
			'TechTicks manages eBay stores for US brands: store setup, Cassini-optimised listings, Promoted Listings management, repricing strategy, and full account health management.',
		breadcrumb: ['Services', 'Ecommerce Management', 'eBay'],
		breadcrumbLinks: ['/services', '/services/ecommerce-management'],
		hero: {
			tag: 'eBay',
			title: '135 Million eBay Buyers.',
			titleHighlight: 'Most Sellers Are Leaving Money on the Table.',
			subtitle:
				"eBay gets written off by brands who assume it's only for used goods and bargain hunters. For refurbished products, collectibles, auto parts, electronics, and plenty more, eBay is one of the most profitable channels available. The sellers doing well treat the platform seriously — optimised listings, clean account health, and a repricing strategy that actually works. That's what we set up.",
			ctaText: 'Book a Free eBay Strategy Call',
			ctaLink: '/contactUs',
		},
		stats: [
			{ value: '135M+', label: 'Active eBay Buyers' },
			{ value: '30+', label: 'eBay Stores Managed' },
			{ value: 'Top Rated', label: 'Seller Status Strategy' },
			{ value: '88%', label: 'Retention Rate' },
		],
		servicesTitle: 'What we manage',
		services: [
			{ num: '01', title: 'Store Setup & Branding', desc: 'Store subscription setup, store design and category structure, shipping and return policies configured for buyer trust, and a Top Rated Seller strategy from day one.', iconKey: 'badge' },
			{ num: '02', title: 'Listing Creation & SEO', desc: 'Keyword research built around how eBay’s Cassini algorithm ranks listings, title and item-specifics optimisation, and bulk listing creation for large catalogs.', iconKey: 'doc' },
			{ num: '03', title: 'eBay Promoted Listings', desc: 'Standard and Advanced Promoted Listings, ad rate strategy that improves visibility without shredding margin, and ongoing campaign optimisation.', iconKey: 'dollar' },
			{ num: '04', title: 'Repricing & Inventory Management', desc: 'Competitive repricing strategy, repricing tool setup, and inventory sync across eBay, Amazon, and Shopify to prevent oversells.', iconKey: 'shuffle' },
			{ num: '05', title: 'Account Health & Growth', desc: 'Defect rate and feedback monitoring, case management and dispute resolution, and a selling-limits increase strategy.', iconKey: 'target' },
		],
		process: {
			title: 'How we grow your eBay store',
			steps: [
				{ num: '01', title: 'Store Audit', desc: 'We review your current listings, account health, and category fit.' },
				{ num: '02', title: 'Listing & SEO Build', desc: 'Cassini-optimised titles, item specifics, and category mapping.' },
				{ num: '03', title: 'Promoted Listings', desc: 'Ad rate strategy that grows visibility without hurting margin.' },
				{ num: '04', title: 'Scale', desc: 'Repricing, inventory sync, and account health management as you grow.' },
			],
		},
		relatedServices: [
			{ title: 'Walmart', link: '/walmart', desc: 'Another underused marketplace with real margin.' },
			{ title: 'Etsy', link: '/etsy', desc: 'For handmade, vintage, and niche product categories.' },
			{ title: 'Ecommerce Management Hub', link: '/services/ecommerce-management', desc: 'See every platform we manage.' },
		],
		cta: {
			title: 'Ready to Take eBay Seriously as a Revenue Channel?',
			subtitle: "Book a free strategy call and we'll show you what your category is actually capable of on eBay.",
			buttonText: 'Book a Free eBay Strategy Call →',
			buttonLink: '/contactUs',
		},
	},

	'etsy': {
		seoTitle: 'Etsy Management Agency, Shop Optimisation, Listing SEO & Etsy Ads for US Sellers',
		seoDescription:
			'TechTicks manages Etsy shops for handmade, vintage, and niche product sellers. Shop setup, Etsy SEO, Etsy Ads management, Star Seller strategy, and ongoing growth management.',
		breadcrumb: ['Services', 'Ecommerce Management', 'Etsy'],
		breadcrumbLinks: ['/services', '/services/ecommerce-management'],
		hero: {
			tag: 'Etsy',
			title: '90 Million Buyers Are Searching Etsy',
			titleHighlight: 'Right Now. Is Your Shop Showing Up?',
			subtitle:
				"Etsy has a reputation as a casual side-hustle platform. The sellers making serious money on it know it's anything but. Etsy's search algorithm is real, its advertising system works when used correctly, and its buyers have purchase intent that's hard to find on most other platforms. TechTicks runs your Etsy shop with the same rigour we apply to Amazon.",
			ctaText: 'Book a Free Etsy Strategy Call',
			ctaLink: '/contactUs',
		},
		stats: [
			{ value: '90M+', label: 'Active Etsy Buyers' },
			{ value: '25+', label: 'Etsy Shops Managed' },
			{ value: 'Star Seller', label: 'Status Strategy' },
			{ value: '93%', label: 'Retention Rate' },
		],
		servicesTitle: 'What we manage',
		services: [
			{ num: '01', title: 'Shop Setup & Optimisation', desc: 'Shop name, banner, logo, and about page — everything buyers see before they click a listing — plus Star Seller criteria management and shop section structure.', iconKey: 'badge' },
			{ num: '02', title: 'Listing SEO & Creation', desc: 'Keyword research using EverBee, eRank, and Etsy’s own search data, titles and tags that match how buyers actually search, and pricing strategy based on competitive analysis.', iconKey: 'doc' },
			{ num: '03', title: 'Etsy Ads Management', desc: 'Daily budget management and listing selection — not everything should be advertised — plus ROAS tracking and the Offsite Ads opt-in/out decision.', iconKey: 'dollar' },
			{ num: '04', title: 'Growth & Review Strategy', desc: 'Seasonal planning around holiday peaks, a new-listing cadence to catch the algorithmic boost, and a repeat-customer strategy with follow-ups and offers.', iconKey: 'target' },
		],
		process: {
			title: 'How we grow your Etsy shop',
			steps: [
				{ num: '01', title: 'Shop Audit', desc: 'We review your listings, keywords, and shop setup for ranking gaps.' },
				{ num: '02', title: 'Listing SEO Build', desc: 'Titles, tags, and descriptions rebuilt around real buyer search behaviour.' },
				{ num: '03', title: 'Ads & Seasonal Planning', desc: 'Etsy Ads set up alongside a calendar built around Etsy’s biggest buying seasons.' },
				{ num: '04', title: 'Scale', desc: 'New listing cadence and review strategy compounding growth over time.' },
			],
		},
		relatedServices: [
			{ title: 'eBay', link: '/ebay', desc: 'Another channel with strong margin for the right category.' },
			{ title: 'UX/UI Design', link: '/services/design', desc: 'Product photography and shop branding that converts.' },
			{ title: 'Ecommerce Management Hub', link: '/services/ecommerce-management', desc: 'See every platform we manage.' },
		],
		cta: {
			title: 'Your Etsy Shop Can Be a Real Business. Let’s Treat It Like One.',
			subtitle: "Book a free strategy call and we'll show you exactly where your shop is losing ranking and sales.",
			buttonText: 'Book a Free Etsy Strategy Call →',
			buttonLink: '/contactUs',
		},
	},

	'graphic-design': {
		seoTitle: 'Graphic Design Services: Brand Identity, Amazon Creatives, Ad Design & Packaging',
		seoDescription:
			'TechTicks delivers ecommerce-focused graphic design: brand identity, Amazon A+ Content design, social media graphics, Meta ad creatives, product packaging, and pitch decks.',
		breadcrumb: ['Services', 'UX/UI & Graphic Design', 'Graphic Design'],
		breadcrumbLinks: ['/services', '/services/design'],
		hero: {
			tag: 'Graphic Design',
			title: 'Buyers Judge Your Brand',
			titleHighlight: 'in Half a Second. What Are They Deciding?',
			subtitle:
				"On Amazon, your main image is the first thing a buyer sees — and if it doesn't stop the scroll, nothing else matters. On TikTok, your thumbnail determines whether anyone watches. On Shopify, your homepage visuals are doing the job of a retail window display. Our design team creates visuals built to perform in the commercial environments where your brand actually lives.",
			ctaText: 'Book a Free Design Consultation',
			ctaLink: '/contactUs',
		},
		stats: [
			{ value: '200+', label: 'Design Projects Delivered' },
			{ value: '5', label: 'Platforms Designed For' },
			{ value: '72hr', label: 'First Drafts Turnaround' },
			{ value: '94%', label: 'Satisfaction Rate' },
		],
		servicesTitle: 'What we design',
		services: [
			{ num: '01', title: 'Brand Identity & Logo Design', desc: 'Logo design and variants, colour and typography systems, a full brand style guide, and brand application across packaging, social, ads, and web.', iconKey: 'pen' },
			{ num: '02', title: 'Amazon Creative Design', desc: 'Main image optimisation — the single biggest lever for Amazon click-through rate — plus lifestyle imagery, A+ Content design, and Storefront banners.', iconKey: 'shopify' },
			{ num: '03', title: 'Social Media Graphics', desc: 'Instagram and Facebook templates, TikTok thumbnails and text overlays, Pinterest pin design, and content calendar graphic packages.', iconKey: 'share' },
			{ num: '04', title: 'Ad Creative Design', desc: 'Static creatives for Meta in every required size, Google Display sets, TikTok ad overlays and end cards, and email header and banner design.', iconKey: 'layout' },
			{ num: '05', title: 'Product & Packaging Design', desc: 'Boxes, bags, labels, and custom formats, insert and thank-you card design, and print-ready files with bleed and safe zones handled correctly.', iconKey: 'printer' },
			{ num: '06', title: 'Pitch Decks & Presentations', desc: 'Investor and client pitch decks, brand presentation templates, and infographic and data visualisation design.', iconKey: 'monitor' },
		],
		process: {
			title: 'Our design process',
			steps: [
				{ num: '01', title: 'Discovery', desc: 'We audit what exists and understand your brand and your buyers.' },
				{ num: '02', title: 'Concepts', desc: 'Initial directions grounded in the platform the design has to perform on.' },
				{ num: '03', title: 'Refinement', desc: 'Feedback and iteration until it is both on-brand and commercially sharp.' },
				{ num: '04', title: 'Delivery', desc: 'Final files in every format and size you need, ready to publish.' },
			],
		},
		relatedServices: [
			{ title: 'UX/UI Design', link: '/services/design', desc: 'Interfaces and store design, the other half of design that converts.' },
			{ title: 'Amazon', link: '/amazon', desc: 'Put your new creative to work on listings and A+ Content.' },
			{ title: 'Digital Marketing', link: '/services/digital-marketing', desc: 'Put your new ad creative into paid campaigns.' },
		],
		cta: {
			title: 'Your Brand Deserves to Look as Good as the Product Itself',
			subtitle: "Book a free design consultation and we'll show you where your current visuals are costing you attention.",
			buttonText: 'Book a Free Design Consultation →',
			buttonLink: '/contactUs',
		},
	},
}

detailPageContent.development = {
	...detailPageContent.development,
	pageClass: 'ssp-page--development',
	showBreadcrumb: false,
	showStats: false,
	showTestimonials: true,
	testimonialCategories: ['Development'],
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
		title: 'What a TechTicks Build Looks Like',
		subtitle: 'A look at the type of builds we deliver — not specific client case studies.',
		items: [
			{ image: devPortfolioShopify, title: 'Shopify Storefront Example', category: 'Shopify Development' },
			{ image: devPortfolioRedesign, title: 'Site Redesign Example', category: 'Redesigns & Migrations' },
			{ image: devPortfolioCustomBuild, title: 'Custom Build Example', category: 'Custom Website Design & Build' },
			{ image: devPortfolioLandingPage, title: 'Landing Page Example', category: 'Landing Pages' },
			{ image: portfolioLanding, title: 'Performance Optimization Example', category: 'Speed & Performance Optimization' },
			{ image: devPortfolioSupport, title: 'Ongoing Support Example', category: 'Maintenance & Support' },
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
