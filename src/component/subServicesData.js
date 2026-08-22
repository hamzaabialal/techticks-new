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
import ecomPortfolioAmazon from './images/portfolio-stock/dev-amazon-listing-design.jpg'
import ecomPortfolioSaas from './images/portfolio-stock/dev-saas-platform.png'
import ecomPortfolioAutomotive from './images/portfolio-stock/dev-automotive-website.png'
import devGuardxflow from './images/portfolio-stock/dev-guardxflow.png'
import devSparkFitness from './images/portfolio-stock/dev-spark-fitness.png'
import devHostyoHome from './images/portfolio-stock/dev-hostyo-home.png'
import devHostyoCrm from './images/portfolio-stock/dev-hostyo-crm.jpeg'
import devHostyoProperties from './images/portfolio-stock/dev-hostyo-properties.png'
import devRetellAi from './images/portfolio-stock/dev-retell-ai.jpeg'
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
			title: 'Why Brands That Sell on Multiple Platforms Win Long-Term',
			paragraphs: [
				'A brand that sells only on Amazon is one algorithm change away from a bad month. TikTok Shop brands that ignore owned channels are building on rented land. Shopify-only DTC brands pay forever for every customer.',
				"Multi-channel isn't just a growth strategy - it's a risk management strategy. TechTicks builds and manages your presence across platforms so you're not dependent on any single one.",
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
				desc: 'Your owned DTC channel - build it right and it pays dividends forever. Custom development, CRO, app integration, migrations.',
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
				{ num: '01', title: 'Store Audit', desc: 'We tear down your current setup - listings, health metrics, pricing, competitors - and find exactly where revenue is leaking.' },
				{ num: '02', title: 'Growth Strategy', desc: 'A tailored 90-day roadmap built around your margins, channels, and goals. No templates, no guesswork.' },
				{ num: '03', title: 'Full Setup', desc: "We handle the execution - catalog migration, listing builds, tool integrations, and team onboarding - so you don't have to." },
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
		portfolio: {
			title: 'Let The Results Do The Talking',
			subtitle: 'A look at the type of ecommerce work we deliver — not specific client case studies.',
			items: [
				{ image: ecomPortfolioAmazon, title: 'Amazon Listing Design', category: 'Amazon A+ Content & Listings' },
				{ image: ecomPortfolioSaas, title: 'SaaS Platform Store', category: 'Shopify & Custom Development' },
				{ image: ecomPortfolioAutomotive, title: 'Automotive E-commerce Build', category: 'Custom E-commerce' },
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
				title: 'Meta Ads',
				desc: 'Facebook and Instagram campaigns structured around your CAC - creative testing, audience strategy, and full-funnel builds that actually scale.',
				iconKey: 'dollar',
				ctaText: 'Learn more',
				ctaLink: '/services/digital-marketing/meta-ads',
			},
			{
				num: '02',
				title: 'Google Ads',
				desc: 'Search, Shopping, and Performance Max campaigns engineered around your ROAS targets - not click volume or impression share.',
				iconKey: 'target',
				ctaText: 'Learn more',
				ctaLink: '/services/digital-marketing/google-ads',
			},
			{
				num: '03',
				title: 'SEO',
				desc: 'Technical SEO, keyword strategy, and content architecture that drives organic traffic and turns visitors into customers.',
				iconKey: 'doc',
				ctaText: 'Learn more',
				ctaLink: '/services/digital-marketing/seo',
			},
			{
				num: '04',
				title: 'Email & SMS Marketing',
				desc: 'Lifecycle flows and campaign sends built on Klaviyo, Omnisend, or Postscript - welcome series, abandoned cart, and win-back, tuned to your revenue.',
				iconKey: 'mail',
				ctaText: 'Learn more',
				ctaLink: '/services/digital-marketing/email-marketing',
			},
			{
				num: '05',
				title: 'Social Media Marketing',
				desc: 'Organic social strategy, content creation, and community management across Instagram, TikTok, LinkedIn, and X - built to grow and convert.',
				iconKey: 'share',
				ctaText: 'Learn more',
				ctaLink: '/services/digital-marketing/social-media',
			},
			{
				num: '06',
				title: 'Content Creation & Copywriting',
				desc: 'Ad copy, blog content, email copy, and product descriptions - written to rank, convert, and sound like the same brand everywhere.',
				iconKey: 'badge',
				ctaText: 'Learn more',
				ctaLink: '/services/digital-marketing/content-creation',
			},
		],
		process: {
			title: 'How it works',
			subtitle: 'A process built for compounding.',
			steps: [
				{ num: '01', title: 'Discovery', desc: 'We audit your storefront, ad accounts, analytics and competitors to find the real growth gaps.' },
				{ num: '02', title: 'Strategy', desc: 'A channel mix, budget plan and creative direction mapped to your margins and revenue targets.' },
				{ num: '03', title: 'Execution', desc: 'Campaigns, creative, flows and content go live - built, launched and managed by our specialists.' },
				{ num: '04', title: 'Optimization & Reporting', desc: 'Weekly testing, budget reallocation and transparent reporting that compound results over time.' },
			],
		},
		faqSubtitle: 'Straight answers about how we run digital marketing.',
		faq: [
			{
				question: 'Should we run Meta Ads and Google Ads at the same time?',
				answer:
					"In most cases, yes. Meta and Google serve different stages of the buyer journey — Meta builds awareness and demand, Google captures it. Brands running both typically see a better blended ROAS because each channel plugs the gaps the other can't fill.",
			},
			{
				question: "What's the minimum ad budget you recommend?",
				answer:
					"For Meta or Google, we recommend at least $3,000/month per platform. Below that threshold, the campaign learning phases take too long and you're optimising on insufficient data. We'll tell you honestly if now isn't the right time.",
			},
			{
				question: 'How long does SEO take?',
				answer:
					'Technical fixes can move the needle in 4–8 weeks. Content and link building typically takes 3–6 months before you see meaningful ranking movement. Anyone who tells you differently is selling you something. We set honest timelines from the start.',
			},
		],
		// optional final CTA override for page
		cta: {
			title: 'Marketing That Keeps Working After You Stop Paying for It',
			subtitle: "Book a free marketing audit. We'll review your current setup and show you exactly where to unlock more revenue.",
			buttonText: 'Book a Free Marketing Audit →',
			buttonLink: '/contactUs',
			variantClass: '',
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
		servicesTitle: 'Services — Digital Marketing',
		services: [
			{
				num: '01', title: 'Search Engine Optimisation (SEO)',
				bullets: [
					'Technical SEO audit: crawlability, indexation, page speed, Core Web Vitals',
					'On-page optimisation: title tags, meta descriptions, headings, schema markup, internal linking',
					"Keyword research and content gap analysis — finding the searches your competitors are capturing",
					'Content strategy: blog posts, category pages, and product page SEO',
					'Link building: outreach campaigns, guest posts, and digital PR',
					'Monthly ranking reports with competitor movement tracking',
				],
			},
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
		seoDescription: 'Search, Shopping, and Performance Max campaigns engineered around your ROAS targets - not click volume or impression share.',
		breadcrumb: ['Services', 'Digital Marketing', 'Google Ads'],
		breadcrumbLinks: ['/services', '/services/digital-marketing'],
		hero: {
			tag: 'Google Ads',
			title: 'Capture Every',
			titleHighlight: 'High-Intent Search.',
			subtitle:
				'Search, Shopping, and Performance Max campaigns engineered around your ROAS targets - not click volume or impression share.',
		},
		stats: [
			{ value: '5.2x', label: 'Avg ROAS' },
			{ value: '$800K+', label: 'Ad Spend Managed' },
			{ value: '50+', label: 'Accounts Managed' },
			{ value: '88%', label: 'Retention Rate' },
		],
		servicesTitle: 'Services — Digital Marketing',
		services: [
			{
				num: '01', title: 'Google Ads',
				bullets: [
					'Search: high-intent keyword targeting for buyers who are ready to buy',
					'Shopping: Google Merchant Center setup, product feed optimisation, Performance Max',
					'Display and YouTube for awareness and retargeting',
					'Conversion tracking setup: GA4, Google Tag Manager, server-side where needed',
					'Competitor conquest campaigns and branded defence',
					'Landing page review — we flag conversion issues that are silently killing your ad performance',
				],
			},
		],
		process: {
			title: 'How we run Google Ads',
			steps: [
				{ num: '01', title: 'Account Audit', desc: 'We diagnose wasted spend and structural issues in your existing account.' },
				{ num: '02', title: 'Campaign Build', desc: 'Clean account architecture built around your products and margins.' },
				{ num: '03', title: 'Test & Optimize', desc: 'Continuous bid, creative, and audience testing against your target ROAS.' },
				{ num: '04', title: 'Scale', desc: 'We scale what works and cut what does not - every week, not every quarter.' },
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
		seoDescription: 'Facebook and Instagram campaigns structured around your CAC - creative testing, audience strategy, and full-funnel builds that actually scale.',
		breadcrumb: ['Services', 'Digital Marketing', 'Meta Ads'],
		breadcrumbLinks: ['/services', '/services/digital-marketing'],
		hero: {
			tag: 'Meta Ads',
			title: 'Stop Boosting.',
			titleHighlight: 'Start Converting.',
			subtitle:
				'Facebook and Instagram campaigns structured around your CAC - creative testing, audience strategy, and full-funnel builds that actually scale.',
		},
		stats: [
			{ value: '4.6x', label: 'Avg ROAS' },
			{ value: '$1.2M+', label: 'Ad Spend Managed' },
			{ value: '200+', label: 'Creatives Tested' },
			{ value: '90%', label: 'Retention Rate' },
		],
		servicesTitle: 'Services — Digital Marketing',
		services: [
			{
				num: '01', title: 'Meta Ads (Facebook & Instagram)',
				bullets: [
					'Full-funnel campaign architecture: awareness, consideration, conversion, retention',
					'Creative strategy and brief production: static, video, carousel, UGC-style reels',
					'Audience architecture: interest stacking, behavioural targeting, lookalikes, custom audiences',
					'Retargeting sequences for cart abandoners, PDP viewers, past purchasers, and video watchers',
					'Dynamic product ads (DPA) using your live product catalog feed',
					"Weekly creative performance analysis — killing what doesn't work, scaling what does",
				],
			},
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
		seoDescription: 'Organic social strategy, content creation, and community management across Instagram, TikTok, LinkedIn, and X - built to grow and convert.',
		breadcrumb: ['Services', 'Digital Marketing', 'Social Media Marketing'],
		breadcrumbLinks: ['/services', '/services/digital-marketing'],
		hero: {
			tag: 'Social Media Marketing',
			title: 'Build a Brand',
			titleHighlight: 'People Actually Follow.',
			subtitle:
				'Organic social strategy, content creation, and community management across Instagram, TikTok, LinkedIn, and X - built to grow and convert.',
		},
		stats: [
			{ value: '2M+', label: 'Followers Grown' },
			{ value: '60+', label: 'Brands Managed' },
			{ value: '8.4%', label: 'Avg Engagement Rate' },
			{ value: '95%', label: 'Retention Rate' },
		],
		servicesTitle: 'Services — Digital Marketing',
		services: [
			{
				num: '01', title: 'Social Media Management',
				bullets: [
					'Platform management: Instagram, Facebook, TikTok, Pinterest, LinkedIn',
					'Content calendar creation, copywriting, and scheduling',
					'Community management: comment replies, DMs, brand reputation',
					'Short-form video strategy for Reels, TikTok, and YouTube Shorts',
					"Monthly analytics reporting: what's growing, what's not, what to do next",
				],
			},
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

	'digital-marketing/email-marketing': {
		seoTitle: 'Email & SMS Marketing for Ecommerce Brands | TechTicks',
		seoDescription: 'Lifecycle email and SMS flows built on Klaviyo, Omnisend, or Postscript - welcome series, abandoned cart, and win-back, tuned to your revenue.',
		breadcrumb: ['Services', 'Digital Marketing', 'Email & SMS Marketing'],
		breadcrumbLinks: ['/services', '/services/digital-marketing'],
		hero: {
			tag: 'Email & SMS Marketing',
			title: 'Your Best Customers Are',
			titleHighlight: 'Already on Your List.',
			subtitle:
				'Email and SMS are the highest-margin channels most brands underinvest in - no ad spend, and you already have the relationship. We build the flows and campaigns that turn that list into recurring revenue.',
		},
		stats: [
			{ value: '30%+', label: 'Avg Revenue from Flows' },
			{ value: '60+', label: 'Klaviyo Accounts Managed' },
			{ value: '6', label: 'Core Flows Built' },
			{ value: '93%', label: 'Client Retention' },
		],
		servicesTitle: 'Services — Digital Marketing',
		services: [
			{
				num: '01', title: 'Email & SMS Marketing',
				bullets: [
					'Platform setup and migration: Klaviyo, Omnisend, Mailchimp',
					'Core automated flows: welcome series, abandoned cart, browse abandonment, post-purchase, win-back',
					'Campaign calendar: promotional sends built around your sales calendar',
					'List segmentation, hygiene, and deliverability management',
					'A/B testing: subject lines, preview text, send times, CTA copy',
					'SMS campaigns via Postscript, Klaviyo SMS, or Attentive',
				],
			},
		],
		process: {
			title: 'How we grow your list revenue',
			steps: [
				{ num: '01', title: 'Account Audit', desc: 'We review your current flows, campaigns, and deliverability health.' },
				{ num: '02', title: 'Flow Build', desc: 'Core automated flows built or rebuilt around your actual customer journey.' },
				{ num: '03', title: 'Campaign Calendar', desc: 'A promotional send schedule mapped to your sales calendar.' },
				{ num: '04', title: 'Test & Optimize', desc: 'Ongoing A/B testing and segmentation refinement.' },
			],
		},
		relatedServices: [
			{ title: 'Social Media Marketing', link: '/services/digital-marketing/social-media', desc: 'Building the audience that ends up on your list.' },
			{ title: 'Content Creation & Copywriting', link: '/services/digital-marketing/content-creation', desc: 'The copy behind every flow and campaign.' },
			{ title: 'Digital Marketing Hub', link: '/services/digital-marketing', desc: 'See all digital marketing services.' },
		],
	},

	'digital-marketing/content-creation': {
		seoTitle: 'Content Creation & Copywriting for Ecommerce Brands | TechTicks',
		seoDescription: 'Ad copy, blog content, email copy, and product descriptions for ecommerce brands - written to rank, convert, and sound like the same brand everywhere.',
		breadcrumb: ['Services', 'Digital Marketing', 'Content Creation & Copywriting'],
		breadcrumbLinks: ['/services', '/services/digital-marketing'],
		hero: {
			tag: 'Content Creation & Copywriting',
			title: 'Every Channel Needs Words.',
			titleHighlight: 'Most Brands Reuse the Same Weak Ones.',
			subtitle:
				"Ad copy, product descriptions, blog posts, and email - written by people who understand ecommerce, not generic freelance copywriters. Every piece is built for the specific channel it runs on.",
		},
		stats: [
			{ value: '500+', label: 'Pieces of Content Delivered' },
			{ value: '5', label: 'Channels Covered' },
			{ value: '72hr', label: 'Avg Turnaround' },
			{ value: '93%', label: 'Client Retention' },
		],
		servicesTitle: 'Services — Digital Marketing',
		services: [
			{
				num: '01', title: 'Content Creation & Copywriting',
				bullets: [
					'Ad copy for Meta, Google, TikTok, and Amazon Sponsored Brands',
					'Blog content and SEO-focused articles built for ranking, not just filler',
					'Email copy, subject lines, preview text, and body copy that gets opened and clicked',
					'Product description copywriting for Shopify, Amazon, and other platforms',
					'Brand voice guidelines so every piece of content sounds like the same company',
				],
			},
		],
		process: {
			title: 'How we produce your content',
			steps: [
				{ num: '01', title: 'Brand Voice Discovery', desc: 'We learn how your brand sounds and who it is talking to.' },
				{ num: '02', title: 'Content Calendar', desc: 'What gets written, for which channel, and on what schedule.' },
				{ num: '03', title: 'Production & Review', desc: 'Drafted, reviewed, and revised against a simple approval process.' },
				{ num: '04', title: 'Delivery', desc: 'Copy delivered ready to publish, formatted for its destination.' },
			],
		},
		relatedServices: [
			{ title: 'SEO', link: '/services/digital-marketing/seo', desc: 'The strategy behind every piece of ranking content.' },
			{ title: 'Email & SMS Marketing', link: '/services/digital-marketing/email-marketing', desc: 'Where a lot of this copy actually gets sent.' },
			{ title: 'Digital Marketing Hub', link: '/services/digital-marketing', desc: 'See all digital marketing services.' },
		],
	},

	'design': {
		seoTitle: 'UX/UI & Graphic Design Services for Ecommerce Brands | TechTicks',
		seoDescription:
			'TechTicks delivers UX/UI design and graphic design for ecommerce brands: conversion-focused interfaces, Amazon creative, brand identity, and marketplace graphics.',
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
		servicesTitle: 'Two disciplines. One in-house team.',
		servicesSubtitle: 'No handoffs to freelancers - every vertical below is ecommerce-trained and in-house.',
		services: [
			{
				num: '01',
				title: 'UX/UI Design',
				desc: 'Conversion-first interfaces for Shopify, custom DTC, and apps - user research, wireframes, prototypes, and CRO-focused handoffs.',
				ctaText: 'View UX/UI Design →',
				ctaLink: '/services/ui-ux-design',
				iconKey: 'monitor',
			},
			{
				num: '02',
				title: 'Graphic Design',
				desc: 'Brand identity, Amazon & marketplace creative, social graphics, ad creative, packaging, and pitch decks.',
				ctaText: 'View Graphic Design →',
				ctaLink: '/services/graphic-design',
				iconKey: 'pen',
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
			subtitle: 'A look at the type of design work we deliver - not specific client case studies.',
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

	'ui-ux-design': {
		seoTitle: 'UX/UI Design Services, Shopify UX, App Design, Wireframes & Conversion-Focused Design',
		seoDescription:
			'TechTicks delivers UX/UI design for ecommerce brands: user research, Shopify UX optimisation, app UI design, wireframes, prototypes, and CRO-focused design handoffs.',
		breadcrumb: ['Services', 'UX/UI & Graphic Design', 'UX/UI Design'],
		breadcrumbLinks: ['/services', '/services/design'],
		hero: {
			tag: 'UX/UI Design',
			title: 'Good Design Doesn’t Just Look Right.',
			titleHighlight: 'It Makes People Buy.',
			subtitle:
				"Every UX decision we make is tied to a specific behaviour we're trying to change - reducing abandonment, increasing add-to-cart, shortening time-to-purchase. The aesthetics follow the function.",
			ctaText: 'Book a Free UX Audit',
			ctaLink: '/contactUs',
		},
		stats: [
			{ value: '150+', label: 'Interfaces Designed' },
			{ value: '38%', label: 'Avg CVR Lift' },
			{ value: '72hr', label: 'First Drafts Turnaround' },
			{ value: '94%', label: 'Satisfaction Rate' },
		],
		servicesTitle: 'What we design',
		services: [
			{
				num: '01',
				title: 'UX Research & Strategy',
				desc: 'User journey mapping, heatmap and session recording analysis, competitor UX audits, and funnel drop-off analysis.',
				iconKey: 'target',
				ctaText: 'Learn more →',
				ctaLink: '/services/ui-ux-design/ux-research-strategy',
			},
			{
				num: '02',
				title: 'Wireframing & Prototyping',
				desc: 'Low-fidelity wireframes, high-fidelity interactive Figma prototypes, and a design system for consistency at scale.',
				iconKey: 'layout',
				ctaText: 'Learn more →',
				ctaLink: '/services/ui-ux-design/wireframing-prototyping',
			},
			{
				num: '03',
				title: 'Shopify UX Design',
				desc: 'Homepage, collection, and product page UX, checkout flow optimisation, and mobile UX audits and redesigns.',
				iconKey: 'shopify',
				ctaText: 'Learn more →',
				ctaLink: '/services/ui-ux-design/shopify-ux-design',
			},
			{
				num: '04',
				title: 'App UI Design',
				desc: 'iOS and Android UI following Apple HIG and Material Design, onboarding flow design, and dashboard UI.',
				iconKey: 'monitor',
				ctaText: 'Learn more →',
				ctaLink: '/services/ui-ux-design/app-ui-design',
			},
			{
				num: '05',
				title: 'Website & Landing Page UI',
				desc: 'Marketing website UI and high-converting landing page design for paid traffic, built to match ad intent.',
				iconKey: 'code',
				ctaText: 'Learn more →',
				ctaLink: '/services/ui-ux-design/website-landing-page-ui',
			},
		],
		process: {
			title: 'Our design process',
			steps: [
				{ num: '01', title: 'Discovery', desc: 'We audit what exists, review analytics, and understand your users.' },
				{ num: '02', title: 'Strategy', desc: 'Information architecture, user flows, and content hierarchy.' },
				{ num: '03', title: 'Wireframes', desc: 'Structure before styling. We get this right before anything looks like design.' },
				{ num: '04', title: 'High-Fidelity Design', desc: 'Full Figma mockups aligned to your brand system.' },
				{ num: '05', title: 'Prototype & Review', desc: 'Clickthrough prototype, feedback, iteration.' },
				{ num: '06', title: 'Handoff', desc: 'Developer-ready Figma files with full annotation, specs, and assets.' },
			],
		},
		relatedServices: [
			{ title: 'Graphic Design', link: '/services/graphic-design', desc: 'Brand identity and marketplace creative to match your new UX.' },
			{ title: 'Website Development', link: '/services/web-development', desc: 'We build what we design - no handoff friction.' },
			{ title: 'Shopify', link: '/shopify', desc: 'See the platform this UX work most often lives on.' },
		],
		cta: {
			title: 'Find Out Exactly Where Your UX Is Losing You Sales',
			subtitle: "Book a free audit and we'll show you where visitors are dropping off.",
			buttonText: 'Book a Free UX Audit →',
			buttonLink: '/contactUs',
		},
	},

	'ui-ux-design/ux-research-strategy': {
		breadcrumb: ['Services', 'UX/UI & Graphic Design', 'UX/UI Design', 'UX Research & Strategy'],
		breadcrumbLinks: ['/services', '/services/design', '/services/ui-ux-design'],
		hero: {
			tag: 'UX Research & Strategy',
			title: 'Design Decisions Backed by',
			titleHighlight: 'Real User Behaviour.',
			subtitle:
				'We pull your funnel data and watch real sessions before touching Figma - every layout choice that follows is a hypothesis tied to a business metric, not a guess.',
		},
		stats: [
			{ value: '100+', label: 'UX Audits Delivered' },
			{ value: '38%', label: 'Avg CVR Lift Post-Redesign' },
			{ value: '2wk', label: 'Avg Audit Turnaround' },
			{ value: '94%', label: 'Client Satisfaction' },
		],
		servicesTitle: 'Services — UX/UI',
		services: [
			{
				num: '01', title: 'UX Research & Strategy',
				bullets: [
					'User journey mapping — the actual path your customers take, not the one you assume',
					'Heatmap and session recording analysis using Hotjar or Microsoft Clarity',
					"Competitor UX audit — what's working in your market that you're not doing",
					'Persona development grounded in real buyer psychology and purchase behaviour',
					"Funnel drop-off analysis: where users leave and what's causing it",
				],
			},
		],
		process: {
			title: 'How we research',
			steps: [
				{ num: '01', title: 'Data Pull', desc: 'Analytics, heatmaps, and session recordings gathered and reviewed.' },
				{ num: '02', title: 'Pattern Finding', desc: 'We identify where and why users are dropping off.' },
				{ num: '03', title: 'Hypothesis Building', desc: 'Each finding becomes a specific, testable design change.' },
				{ num: '04', title: 'Handoff to Design', desc: 'Findings feed directly into wireframes and prototypes.' },
			],
		},
		relatedServices: [
			{ title: 'Wireframing & Prototyping', link: '/services/ui-ux-design/wireframing-prototyping', desc: 'Where research findings become structure.' },
			{ title: 'Shopify UX Design', link: '/services/ui-ux-design/shopify-ux-design', desc: 'Research applied to your storefront specifically.' },
			{ title: 'UX/UI Design Hub', link: '/services/ui-ux-design', desc: 'See every UX/UI service we offer.' },
		],
		cta: {
			title: 'Find Out Exactly Where Your UX Is Losing You Sales',
			subtitle: "Book a free audit and we'll show you where visitors are dropping off.",
			buttonText: 'Book a Free UX Audit →',
			buttonLink: '/contactUs',
		},
	},

	'ui-ux-design/wireframing-prototyping': {
		breadcrumb: ['Services', 'UX/UI & Graphic Design', 'UX/UI Design', 'Wireframing & Prototyping'],
		breadcrumbLinks: ['/services', '/services/design', '/services/ui-ux-design'],
		hero: {
			tag: 'Wireframing & Prototyping',
			title: 'Structure Before',
			titleHighlight: 'Styling.',
			subtitle:
				"We get the layout, hierarchy, and flow right before anything looks like design - so revisions happen on a wireframe in an hour, not on finished visuals in a week.",
		},
		stats: [
			{ value: '150+', label: 'Prototypes Built' },
			{ value: '72hr', label: 'First Wireframes Turnaround' },
			{ value: 'Figma', label: 'Developer-Ready Handoff' },
			{ value: '94%', label: 'Client Satisfaction' },
		],
		servicesTitle: 'Services — UX/UI',
		services: [
			{
				num: '01', title: 'Wireframing & Prototyping',
				bullets: [
					'Low-fidelity wireframes for fast structure iteration before any design decisions are made',
					'High-fidelity interactive prototypes in Figma',
					'Mobile-first by default, desktop layout comes second',
					'Clickthrough prototype for stakeholder sign-off and user testing',
					'Design system and component library creation for consistency at scale',
				],
			},
		],
		process: {
			title: 'How we build it',
			steps: [
				{ num: '01', title: 'Content & Hierarchy', desc: 'What needs to be on the page, and in what order of importance.' },
				{ num: '02', title: 'Low-Fi Structure', desc: 'Fast wireframes to lock layout before visual design starts.' },
				{ num: '03', title: 'Interactive Prototype', desc: 'Clickable Figma prototype ready for stakeholder review.' },
				{ num: '04', title: 'Refine & Handoff', desc: 'Feedback incorporated, then handed to high-fidelity design.' },
			],
		},
		relatedServices: [
			{ title: 'UX Research & Strategy', link: '/services/ui-ux-design/ux-research-strategy', desc: 'What informs every wireframing decision.' },
			{ title: 'App UI Design', link: '/services/ui-ux-design/app-ui-design', desc: 'Where prototypes become polished app interfaces.' },
			{ title: 'UX/UI Design Hub', link: '/services/ui-ux-design', desc: 'See every UX/UI service we offer.' },
		],
		cta: {
			title: 'Find Out Exactly Where Your UX Is Losing You Sales',
			subtitle: "Book a free audit and we'll show you where visitors are dropping off.",
			buttonText: 'Book a Free UX Audit →',
			buttonLink: '/contactUs',
		},
	},

	'ui-ux-design/shopify-ux-design': {
		breadcrumb: ['Services', 'UX/UI & Graphic Design', 'UX/UI Design', 'Shopify UX Design'],
		breadcrumbLinks: ['/services', '/services/design', '/services/ui-ux-design'],
		hero: {
			tag: 'Shopify UX Design',
			title: 'Your Shopify Store Should',
			titleHighlight: 'Sell While You Sleep.',
			subtitle:
				'Homepage, collection page, product page, and checkout - redesigned around how buyers actually browse and decide, not how the theme happened to ship.',
		},
		stats: [
			{ value: '90+', label: 'Shopify Stores Redesigned' },
			{ value: '2x', label: 'Avg Conversion Lift' },
			{ value: '70%', label: 'Of DTC Traffic Is Mobile' },
			{ value: '96%', label: 'Client Retention' },
		],
		servicesTitle: 'Services — UX/UI',
		services: [
			{
				num: '01', title: 'Shopify UX Design',
				bullets: [
					'Homepage, collection page, and product page UX redesign',
					'Checkout flow optimisation — every unnecessary step costs conversions',
					'Navigation and filter/sort UX for large or complex product catalogs',
					'Mobile UX audit and redesign — most Shopify traffic is on mobile',
					'A/B test design for structured CRO experiments',
				],
			},
		],
		process: {
			title: 'How we redesign your store',
			steps: [
				{ num: '01', title: 'Store Audit', desc: 'Heatmaps, funnel data, and a full page-by-page UX review.' },
				{ num: '02', title: 'Redesign Priorities', desc: 'Ranked by expected revenue impact, not by what is easiest.' },
				{ num: '03', title: 'Design & Prototype', desc: 'New UX built in Figma, reviewed before any development starts.' },
				{ num: '04', title: 'Build & Test', desc: 'Handed to development, then A/B tested against the original.' },
			],
		},
		relatedServices: [
			{ title: 'Shopify', link: '/shopify', desc: 'Full Shopify build and CRO service, this UX work included.' },
			{ title: 'Website & Landing Page UI', link: '/services/ui-ux-design/website-landing-page-ui', desc: 'For the pages driving paid traffic to your store.' },
			{ title: 'UX/UI Design Hub', link: '/services/ui-ux-design', desc: 'See every UX/UI service we offer.' },
		],
		cta: {
			title: 'Find Out Exactly Where Your UX Is Losing You Sales',
			subtitle: "Book a free audit and we'll show you where visitors are dropping off.",
			buttonText: 'Book a Free UX Audit →',
			buttonLink: '/contactUs',
		},
	},

	'ui-ux-design/app-ui-design': {
		breadcrumb: ['Services', 'UX/UI & Graphic Design', 'UX/UI Design', 'App UI Design'],
		breadcrumbLinks: ['/services', '/services/design', '/services/ui-ux-design'],
		hero: {
			tag: 'App UI Design',
			title: 'First Impressions That',
			titleHighlight: 'Drive Activation, Not Confusion.',
			subtitle:
				'iOS and Android interfaces built on real platform conventions - Apple HIG and Material Design - so your app feels native, not like a website squeezed into a frame.',
		},
		stats: [
			{ value: '40+', label: 'App Interfaces Designed' },
			{ value: 'HIG', label: 'Apple HIG Compliant' },
			{ value: 'Material', label: 'Material Design Compliant' },
			{ value: '94%', label: 'Client Satisfaction' },
		],
		servicesTitle: 'Services — UX/UI',
		services: [
			{
				num: '01', title: 'App UI Design',
				bullets: [
					'iOS and Android UI following Apple HIG and Material Design principles',
					'Onboarding flow design — first impressions that drive activation, not confusion',
					'Dashboard and data visualisation UI for complex information',
					'Microanimation and interaction specs for developers',
					'Figma handoff with annotated components and spacing specs',
				],
			},
		],
		process: {
			title: 'How we design your app',
			steps: [
				{ num: '01', title: 'Platform Research', desc: 'Native conventions for iOS and Android mapped to your product.' },
				{ num: '02', title: 'Flow & Wireframes', desc: 'Core user flows structured before visual design begins.' },
				{ num: '03', title: 'High-Fidelity UI', desc: 'Full screen designs aligned to your brand and platform guidelines.' },
				{ num: '04', title: 'Developer Handoff', desc: 'Annotated Figma files with every spec your dev team needs.' },
			],
		},
		relatedServices: [
			{ title: 'Wireframing & Prototyping', link: '/services/ui-ux-design/wireframing-prototyping', desc: 'Where app flows are structured before final UI.' },
			{ title: 'Website Development', link: '/services/web-development', desc: 'For the web side of a cross-platform product.' },
			{ title: 'UX/UI Design Hub', link: '/services/ui-ux-design', desc: 'See every UX/UI service we offer.' },
		],
		cta: {
			title: 'Find Out Exactly Where Your UX Is Losing You Sales',
			subtitle: "Book a free audit and we'll show you where visitors are dropping off.",
			buttonText: 'Book a Free UX Audit →',
			buttonLink: '/contactUs',
		},
	},

	'ui-ux-design/website-landing-page-ui': {
		breadcrumb: ['Services', 'UX/UI & Graphic Design', 'UX/UI Design', 'Website & Landing Page UI'],
		breadcrumbLinks: ['/services', '/services/design', '/services/ui-ux-design'],
		hero: {
			tag: 'Website & Landing Page UI',
			title: 'Every Element Positioned',
			titleHighlight: 'to Reduce Drop-Off.',
			subtitle:
				'Marketing website UI and landing pages built to match ad intent exactly - a visitor arriving from a specific ad should never have to guess if they landed in the right place.',
		},
		stats: [
			{ value: '200+', label: 'Pages Designed' },
			{ value: '38%', label: 'Avg CVR Lift' },
			{ value: '72hr', label: 'First Drafts Turnaround' },
			{ value: '94%', label: 'Client Satisfaction' },
		],
		servicesTitle: 'Services — UX/UI',
		services: [
			{
				num: '01', title: 'Website & Landing Page UI',
				bullets: [
					'Marketing website UI for ecommerce brands, agencies, and SaaS',
					'High-converting landing page design for paid traffic, built to match ad intent',
					'Sales funnel page sequences designed to reduce friction at every step',
					'UI component library aligned to your brand guidelines',
				],
			},
		],
		process: {
			title: 'How we design your pages',
			steps: [
				{ num: '01', title: 'Ad-to-Page Alignment', desc: 'We start from the ad or campaign the page needs to match.' },
				{ num: '02', title: 'Wireframe', desc: 'Structure and hierarchy locked before visual design begins.' },
				{ num: '03', title: 'High-Fidelity Design', desc: 'Full page design built to reduce friction at every scroll.' },
				{ num: '04', title: 'Handoff & Test', desc: 'Developer-ready files, then A/B test variants where useful.' },
			],
		},
		relatedServices: [
			{ title: 'Website Development', link: '/services/web-development', desc: 'We build what we design - no handoff friction.' },
			{ title: 'Digital Marketing', link: '/services/digital-marketing', desc: 'Drive paid traffic to the pages we design.' },
			{ title: 'UX/UI Design Hub', link: '/services/ui-ux-design', desc: 'See every UX/UI service we offer.' },
		],
		cta: {
			title: 'Find Out Exactly Where Your UX Is Losing You Sales',
			subtitle: "Book a free audit and we'll show you where visitors are dropping off.",
			buttonText: 'Book a Free UX Audit →',
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
				'Shopify, WordPress, landing pages, and funnels - built for speed, clarity, and conversion from day one.',
		},
		stats: [
			{ value: '150+', label: 'Sites Built' },
			{ value: '90+', label: 'Avg Performance Score' },
			{ value: '2x', label: 'Avg Conversion Lift' },
			{ value: '97%', label: 'On-Time Delivery' },
		],
		servicesTitle: 'What we build',
		services: [
			{ num: '01', title: 'Shopify Development', desc: 'Custom Shopify 2.0 builds - mobile-first, fast-loading, and built to convert.' },
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
				{ num: '03', title: 'Build & Test', desc: 'Development with QA at every stage - no surprises at launch.' },
				{ num: '04', title: 'Launch & Support', desc: 'Smooth go-live and ongoing support to keep everything running.' },
			],
		},
		relatedServices: [
			{ title: 'UX/UI Design', link: '/services/design', desc: 'We design before we build - no handoff friction.' },
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
				"The brands growing fastest on TikTok Shop aren't the ones spending the most on ads - they're the ones who figured out the creator affiliate model. One creator with the right audience can outsell a $10,000 paid campaign in a weekend. TechTicks builds and runs the whole system: your store, your creator network, your content strategy, and your ads.",
			ctaText: 'Book a Free TikTok Shop Strategy Call',
			ctaLink: '/contactUs',
		},
		stats: [
			{ value: '80+', label: 'Active Creator Affiliates' },
			{ value: '60+', label: 'Brands Launched on TikTok Shop' },
			{ value: '3x', label: 'Avg GMV Growth in 90 Days' },
			{ value: '92%', label: 'Retention Rate' },
		],
		servicesTitle: 'Services — TikTok Shop',
		services: [
			{
				num: '01', title: 'TikTok Shop Setup & Optimisation', iconKey: 'shopify',
				bullets: [
					'Account registration, business verification, and product catalog setup',
					"Listing optimisation for TikTok's shopping and discovery algorithm",
					'Pricing, shipping, and promotional campaign configuration',
					"Shop health monitoring and policy compliance — TikTok moves fast on violations",
				],
			},
			{
				num: '02', title: 'Creator Affiliate Program Management', iconKey: 'share',
				bullets: [
					'Research and outreach to relevant creators from nano to macro, in your actual category',
					'Onboarding, commission structure design, and creator briefing',
					'Ongoing relationship management and performance tracking',
					'Product seeding strategy to maximise organic content volume',
					"Weekly reporting: who's posting, who's converting, who's not worth keeping",
				],
			},
			{
				num: '03', title: 'UGC & Content Strategy', iconKey: 'pen',
				bullets: [
					"Content briefs that give creators a direction without killing their authenticity",
					'Hook strategy — the first 2-3 seconds of a TikTok video decide everything',
					'Formats that work: product demos, transformations, testimonials, POV unboxing',
					'Identifying your best organic content and turning it into Spark Ads',
				],
			},
			{
				num: '04', title: 'TikTok Ads Management', iconKey: 'target',
				bullets: [
					"Spark Ads built from your best-performing organic creator content",
					'In-Feed Ads, Video Shopping Ads (VSA), Collection Ads, and LIVE Shopping Ads',
					'Audience building, lookalikes, and retargeting sequences',
					'ROAS-focused optimisation with clear weekly performance summaries',
				],
			},
			{
				num: '05', title: 'TikTok LIVE Commerce', iconKey: 'monitor',
				bullets: [
					'LIVE shopping event planning, scripting, and scheduling',
					'Host selection and briefing — brand team or external creator',
					'Pre-LIVE promotional strategy to build the audience before you go live',
					'Post-LIVE analysis and optimisation for the next session',
				],
			},
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
					"We've seen brands generate real traction with as few as 10 well-matched creators. The number matters less than the fit - a creator in your exact niche with 30k followers will outperform a generic lifestyle creator with 500k every time. We focus on fit first.",
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
			title: "Let's Build Your TikTok Shop from the Ground Up - or Fix What Isn't Working.",
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
		servicesTitle: 'Services — Shopify',
		services: [
			{
				num: '01', title: 'Custom Shopify Store Development', iconKey: 'shopify',
				bullets: [
					'Full builds on Shopify 2.0, custom themes or heavily modified Dawn/Debut bases',
					"Mobile-first by default: 70%+ of DTC traffic lands on a phone",
					'90+ Lighthouse performance targets baked into the build, not patched in after',
					'Custom sections, metafields, dynamic content, and Shopify Functions where needed',
				],
			},
			{
				num: '02', title: 'Shopify App Stack & Integrations', iconKey: 'code',
				bullets: [
					"Reviews: Judge.me, Yotpo, Okendo — we'll recommend based on your catalog and review volume",
					'Email & SMS: Klaviyo, Postscript, Omnisend — setup, flows, and ongoing management',
					'Upsell & cross-sell: ReConvert, Rebuy, Frequently Bought Together',
					'Loyalty: Smile.io, LoyaltyLion, for brands with repeat purchase potential',
					'Subscriptions: Recharge, Skio, for consumables or subscription-model products',
					"We evaluate and recommend. We don't upsell apps you don't need.",
				],
			},
			{
				num: '03', title: 'Conversion Rate Optimisation (CRO)', iconKey: 'target',
				bullets: [
					'Heatmap and session recording analysis — we watch where users get confused or leave',
					'Funnel audit: homepage to PDP to cart to checkout, finding the drop-off points',
					'Product page improvements: imagery order, copy gaps, trust signals, social proof placement',
					'Checkout simplification: every extra field costs conversions',
					"A/B testing roadmap, prioritised by potential revenue impact, not just what's easy",
				],
			},
			{
				num: '04', title: 'Shopify Migrations', iconKey: 'refresh',
				bullets: [
					'Full migrations from WooCommerce, BigCommerce, Magento, Wix, and custom-built stores',
					'Product data, customer records, and order history all transferred cleanly',
					'301 redirect strategy built before launch day to protect SEO rankings',
					'Pre-launch QA checklist — nothing goes live until every link, form, and payment works',
				],
			},
			{
				num: '05', title: 'Ongoing Shopify Management', iconKey: 'support',
				bullets: [
					'Monthly performance reviews and CRO iteration — one launch is never the end',
					'Theme updates, app management, and bug fixes',
					'Shopify Plus advisory: when it makes financial sense to upgrade',
					'New collection launches, seasonal campaign builds, and sale event setups',
				],
			},
			{
				num: '06', title: 'Shopify + Amazon Integration', iconKey: 'shuffle',
				bullets: [
					'Connect your Shopify store to your Amazon listings via native or third-party channels',
					'Inventory sync to prevent oversells across both platforms',
					'Strategy for using your Shopify customer base to reduce Amazon dependency over time',
				],
			},
		],
		process: {
			title: 'How we build',
			steps: [
				{ num: '01', title: 'Discovery & Scope', desc: 'We define requirements, timeline, and success metrics before writing a line of code.' },
				{ num: '02', title: 'Design & Prototype', desc: 'Interactive wireframes reviewed and approved before development starts.' },
				{ num: '03', title: 'Build & Test', desc: 'Development with QA at every stage - no surprises at launch.' },
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
				"Walmart Marketplace is genuinely underused. Categories that are brutally competitive on Amazon often have breathing room on Walmart - lower CPCs, less listing competition, and a customer base that's actively looking to buy. We set you up to capture profitable sales while everyone else fights for scraps on Amazon.",
			ctaText: 'Book a Free Walmart Strategy Call',
			ctaLink: '/contactUs',
		},
		stats: [
			{ value: '120M+', label: 'Monthly Walmart Shoppers' },
			{ value: '40+', label: 'Walmart Sellers Managed' },
			{ value: '2 Day', label: 'Delivery Badge Strategy' },
			{ value: '90%', label: 'Retention Rate' },
		],
		servicesTitle: 'Services — Walmart',
		services: [
			{
				num: '01', title: 'Walmart Seller Center Setup & Management', iconKey: 'badge',
				bullets: [
					"Seller application support — getting approved is step one, and it's not always straightforward",
					'Full account configuration: payments, tax setup, shipping settings, return policies',
					'Account health and performance scorecard monitoring',
					'Policy compliance, case filing, and seller support management',
				],
			},
			{
				num: '02', title: 'Listing Optimisation', iconKey: 'doc',
				bullets: [
					'Keyword research using Walmart-specific tooling alongside Helium 10 data',
					"Title, description, and product attribute optimisation for Walmart's search algorithm",
					'Category mapping and taxonomy setup done correctly — miscategorisation kills visibility',
					"Rich media content where eligible: Walmart's equivalent of Amazon's A+ Content",
				],
			},
			{
				num: '03', title: 'Walmart Connect Ads', iconKey: 'dollar',
				bullets: [
					'Sponsored Products campaign setup and ongoing management',
					'Keyword and auto campaign strategy for maximum catalogue coverage',
					'Bid management and ROAS tracking against your margin targets',
					'Walmart DSP for brands ready to scale beyond Sponsored Products',
				],
			},
			{
				num: '04', title: 'Walmart Fulfillment Services (WFS)', iconKey: 'shuffle',
				bullets: [
					'WFS onboarding, eligibility assessment, and first inbound shipment planning',
					'Inventory management and reorder planning to avoid stockouts',
					'2-day delivery badge strategy — it meaningfully improves conversion rates',
				],
			},
			{
				num: '05', title: 'Walmart + Amazon Cross-Channel Strategy', iconKey: 'target',
				bullets: [
					'Price parity monitoring and management to stay compliant on both platforms',
					'Channel-specific inventory allocation based on sell-through velocity',
					'Unified reporting across Walmart and Amazon so you see the full picture',
					'Avoiding Walmart buybox suppression triggered by Amazon price violations',
				],
			},
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
				"eBay gets written off by brands who assume it's only for used goods and bargain hunters. For refurbished products, collectibles, auto parts, electronics, and plenty more, eBay is one of the most profitable channels available. The sellers doing well treat the platform seriously - optimised listings, clean account health, and a repricing strategy that actually works. That's what we set up.",
			ctaText: 'Book a Free eBay Strategy Call',
			ctaLink: '/contactUs',
		},
		stats: [
			{ value: '135M+', label: 'Active eBay Buyers' },
			{ value: '30+', label: 'eBay Stores Managed' },
			{ value: 'Top Rated', label: 'Seller Status Strategy' },
			{ value: '88%', label: 'Retention Rate' },
		],
		servicesTitle: 'Services — eBay',
		services: [
			{
				num: '01', title: 'eBay Store Setup & Branding', iconKey: 'badge',
				bullets: [
					'Store subscription setup — Basic, Premium, or Anchor based on your catalog size',
					'Store design: banners, logo placement, category structure, and store branding',
					'Shipping policies, return policies, and payment options configured for buyer trust',
					'Top Rated Seller status strategy from day one',
				],
			},
			{
				num: '02', title: 'Listing Creation & SEO', iconKey: 'doc',
				bullets: [
					"Keyword research built around how eBay's Cassini algorithm ranks listings",
					'Title optimisation, item specifics and description copy that rank and convert',
					'Bulk listing creation for large catalogs with consistent formatting',
					'Variation setup, image compliance, and category-specific best practices',
				],
			},
			{
				num: '03', title: 'eBay Promoted Listings', iconKey: 'dollar',
				bullets: [
					'Promoted Listings Standard and Advanced — understanding which to use and when',
					'Ad rate strategy that improves visibility without shredding your margin',
					'Campaign tracking and regular optimisation',
					'Promoted Listings Express for time-sensitive or clearance inventory',
				],
			},
			{
				num: '04', title: 'Repricing & Inventory Management', iconKey: 'shuffle',
				bullets: [
					'Competitive repricing strategy — winning the sale without racing to the bottom',
					'Repricing tool setup and management (ChannelAdvisor, Sellbrite, or others)',
					'Inventory sync across eBay, Amazon, and Shopify to prevent oversells',
					'Multi-location inventory management for high-volume sellers',
				],
			},
			{
				num: '05', title: 'Account Health & Growth', iconKey: 'target',
				bullets: [
					'Defect rate, late shipment, and buyer feedback monitoring',
					'Case management and dispute resolution',
					'Selling limits increase strategy — getting your limits raised faster',
					"Regular growth reviews: what's selling, what's not, what to list next",
				],
			},
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
		servicesTitle: 'Services — Etsy',
		services: [
			{
				num: '01', title: 'Etsy Shop Setup & Optimisation', iconKey: 'badge',
				bullets: [
					'Shop name, banner, logo, bio, and about page — everything buyers see before they click a listing',
					'Announcement and policy setup: shipping timelines, returns, FAQs, written to convert, not just to comply',
					'Star Seller criteria management: response rate, dispatch time, 5-star reviews',
					'Shop section structure for discoverability and cross-selling',
				],
			},
			{
				num: '02', title: 'Listing SEO & Creation', iconKey: 'doc',
				bullets: [
					"Keyword research using EverBee, eRank, and Etsy's own search data",
					'Titles and tags that match how buyers actually search, not just what sounds good',
					'Descriptions written for conversion and long-tail keyword coverage',
					'Product photography guidance: what makes a strong cover image, lifestyle vs. plain background',
					'Pricing strategy based on competitive analysis and perceived value positioning',
				],
			},
			{
				num: '03', title: 'Etsy Ads Management', iconKey: 'dollar',
				bullets: [
					'Daily budget management and listing selection — not everything should be advertised',
					'ROAS tracking and optimisation to ensure ads are paying for themselves',
					'Offsite Ads decision: opt-in or out based on your margins and category',
					'Regular campaign reviews and spend reallocation',
				],
			},
			{
				num: '04', title: 'Growth & Review Strategy', iconKey: 'target',
				bullets: [
					"Seasonal planning: holiday peaks, Valentine's, Mother's Day, where Etsy earns big",
					'New listing cadence — fresh listings get an algorithmic boost, and we use it',
					"Review acquisition using Etsy's built-in tools (ToS-compliant)",
					'Repeat customer strategy: message follow-ups, coupon codes, loyalty offers',
					'Full SEO audit for existing shops — ranking gap identification and fix plan',
				],
			},
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
				"On Amazon, your main image is the first thing a buyer sees - and if it doesn't stop the scroll, nothing else matters. On TikTok, your thumbnail determines whether anyone watches. On Shopify, your homepage visuals are doing the job of a retail window display. Our design team creates visuals built to perform in the commercial environments where your brand actually lives.",
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
			{ num: '01', title: 'Brand Identity & Logo Design', desc: 'Logo design and variants, colour and typography systems, a full brand style guide, and brand application across packaging, social, ads, and web.', iconKey: 'pen', ctaText: 'Learn more →', ctaLink: '/services/graphic-design/brand-identity-logo-design' },
			{ num: '02', title: 'Amazon Creative Design', desc: 'Main image optimisation - the single biggest lever for Amazon click-through rate - plus lifestyle imagery, A+ Content design, and Storefront banners.', iconKey: 'shopify', ctaText: 'Learn more →', ctaLink: '/services/graphic-design/amazon-creative-design' },
			{ num: '03', title: 'Social Media Graphics', desc: 'Instagram and Facebook templates, TikTok thumbnails and text overlays, Pinterest pin design, and content calendar graphic packages.', iconKey: 'share', ctaText: 'Learn more →', ctaLink: '/services/graphic-design/social-media-graphics' },
			{ num: '04', title: 'Ad Creative Design', desc: 'Static creatives for Meta in every required size, Google Display sets, TikTok ad overlays and end cards, and email header and banner design.', iconKey: 'layout', ctaText: 'Learn more →', ctaLink: '/services/graphic-design/ad-creative-design' },
			{ num: '05', title: 'Product & Packaging Design', desc: 'Boxes, bags, labels, and custom formats, insert and thank-you card design, and print-ready files with bleed and safe zones handled correctly.', iconKey: 'printer', ctaText: 'Learn more →', ctaLink: '/services/graphic-design/product-packaging-design' },
			{ num: '06', title: 'Pitch Decks & Presentations', desc: 'Investor and client pitch decks, brand presentation templates, and infographic and data visualisation design.', iconKey: 'monitor', ctaText: 'Learn more →', ctaLink: '/services/graphic-design/pitch-decks-presentations' },
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
			{ title: 'UX/UI Design', link: '/services/ui-ux-design', desc: 'Interfaces and store design, the other half of design that converts.' },
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

	'graphic-design/brand-identity-logo-design': {
		breadcrumb: ['Services', 'UX/UI & Graphic Design', 'Graphic Design', 'Brand Identity & Logo Design'],
		breadcrumbLinks: ['/services', '/services/design', '/services/graphic-design'],
		hero: {
			tag: 'Brand Identity & Logo Design',
			title: 'A Brand Isn’t a Logo.',
			titleHighlight: 'It’s Every Touchpoint Working Together.',
			subtitle:
				'A logo file with no rules around it falls apart the moment two different platforms need it. We build the whole system - colour, type, usage rules - once, so everything you publish looks like the same company.',
		},
		stats: [
			{ value: '80+', label: 'Brand Systems Built' },
			{ value: '72hr', label: 'First Concepts Turnaround' },
			{ value: '100%', label: 'Ecommerce-Trained Team' },
			{ value: '94%', label: 'Satisfaction Rate' },
		],
		servicesTitle: 'Services — Graphic Design',
		services: [
			{
				num: '01', title: 'Brand Identity & Logo Design',
				bullets: [
					'Logo design: primary lockup, secondary variants, favicon, and icon versions',
					'Brand colour palette and typography system with usage rules',
					'Full brand style guide: so everything you publish looks like the same company',
					'Brand application across packaging, social, ads, and web',
					'Brand refresh for brands that have outgrown their current visual identity',
				],
			},
		],
		process: {
			title: 'How we build your identity',
			steps: [
				{ num: '01', title: 'Discovery', desc: 'We learn your brand, your buyers, and your competitors.' },
				{ num: '02', title: 'Concepts', desc: 'A small number of genuinely distinct directions, not ten weak variations.' },
				{ num: '03', title: 'Refinement', desc: 'The chosen direction refined into a complete, flexible system.' },
				{ num: '04', title: 'Style Guide & Delivery', desc: 'Every file format you need, plus the rules for using them.' },
			],
		},
		relatedServices: [
			{ title: 'Product & Packaging Design', link: '/services/graphic-design/product-packaging-design', desc: 'Where your new identity meets the physical product.' },
			{ title: 'Social Media Graphics', link: '/services/graphic-design/social-media-graphics', desc: 'Your brand system applied to daily content.' },
			{ title: 'Graphic Design Hub', link: '/services/graphic-design', desc: 'See every graphic design service we offer.' },
		],
		cta: {
			title: 'Your Brand Deserves to Look as Good as the Product Itself',
			subtitle: "Book a free design consultation and we'll show you where your current visuals are costing you attention.",
			buttonText: 'Book a Free Design Consultation →',
			buttonLink: '/contactUs',
		},
	},

	'graphic-design/amazon-creative-design': {
		breadcrumb: ['Services', 'UX/UI & Graphic Design', 'Graphic Design', 'Amazon Creative Design'],
		breadcrumbLinks: ['/services', '/services/design', '/services/graphic-design'],
		hero: {
			tag: 'Amazon Creative Design',
			title: 'Your Main Image Is the Single',
			titleHighlight: 'Biggest Lever for Click-Through Rate.',
			subtitle:
				"If your main image doesn't stop the scroll, nothing else on the listing matters - the best copy in the world doesn't get read if nobody clicks. We design every image on your listing to earn the next one.",
		},
		stats: [
			{ value: '300+', label: 'Amazon Listings Designed' },
			{ value: '5', label: 'Marketplaces Covered' },
			{ value: '72hr', label: 'First Drafts Turnaround' },
			{ value: '94%', label: 'Satisfaction Rate' },
		],
		servicesTitle: 'Services — Graphic Design',
		services: [
			{
				num: '01', title: 'Amazon Creative Design',
				bullets: [
					'Main image optimisation: the single biggest lever for Amazon click-through rate',
					'Secondary image set: lifestyle shots, infographics, feature callouts, size comparisons',
					'A+ Content design: module layout, brand story, comparison charts',
					'Amazon Storefront design, hero banners, and category page design',
					'Sponsored Brand and Sponsored Display ad creative design',
				],
			},
		],
		process: {
			title: 'How we design your listings',
			steps: [
				{ num: '01', title: 'Listing Audit', desc: 'We review your current images against top-performing competitors.' },
				{ num: '02', title: 'Concepts', desc: 'Main image and A+ Content concepts built around your product\'s strongest angle.' },
				{ num: '03', title: 'Refinement', desc: 'Iteration until every image earns its place on the page.' },
				{ num: '04', title: 'Delivery & Upload-Ready Files', desc: 'Every size and format Amazon requires, ready to publish.' },
			],
		},
		relatedServices: [
			{ title: 'Amazon', link: '/amazon', desc: 'Full Amazon management service, this creative work included.' },
			{ title: 'Brand Identity & Logo Design', link: '/services/graphic-design/brand-identity-logo-design', desc: 'The system your Amazon creative should stay consistent with.' },
			{ title: 'Graphic Design Hub', link: '/services/graphic-design', desc: 'See every graphic design service we offer.' },
		],
		cta: {
			title: 'Your Brand Deserves to Look as Good as the Product Itself',
			subtitle: "Book a free design consultation and we'll show you where your current visuals are costing you attention.",
			buttonText: 'Book a Free Design Consultation →',
			buttonLink: '/contactUs',
		},
	},

	'graphic-design/social-media-graphics': {
		breadcrumb: ['Services', 'UX/UI & Graphic Design', 'Graphic Design', 'Social Media Graphics'],
		breadcrumbLinks: ['/services', '/services/design', '/services/graphic-design'],
		hero: {
			tag: 'Social Media Graphics',
			title: 'Consistent Content,',
			titleHighlight: 'Every Platform, Every Week.',
			subtitle:
				'A brand that looks different on every platform looks like it belongs to nobody. We build the templates and produce the graphics so your feed stays consistent without eating your week.',
		},
		stats: [
			{ value: '5', label: 'Platforms Designed For' },
			{ value: '1000+', label: 'Graphics Produced' },
			{ value: '72hr', label: 'First Drafts Turnaround' },
			{ value: '94%', label: 'Satisfaction Rate' },
		],
		servicesTitle: 'Services — Graphic Design',
		services: [
			{
				num: '01', title: 'Social Media Graphics',
				bullets: [
					'Instagram and Facebook post templates, story frames, and highlight covers',
					'TikTok thumbnail design and text overlay graphics',
					'Pinterest pin design optimised for saves and click-through',
					'YouTube channel art and thumbnail templates',
					'Content calendar graphic packages for consistent, on-brand posting',
				],
			},
		],
		process: {
			title: 'How we produce your content',
			steps: [
				{ num: '01', title: 'Template System', desc: 'Reusable templates built once, matched to your brand system.' },
				{ num: '02', title: 'Content Batching', desc: 'Graphics produced in batches so you are never scrambling last-minute.' },
				{ num: '03', title: 'Review & Approve', desc: 'A simple approval pass before anything goes into your calendar.' },
				{ num: '04', title: 'Delivery', desc: 'Files delivered ready to schedule, sized correctly per platform.' },
			],
		},
		relatedServices: [
			{ title: 'Ad Creative Design', link: '/services/graphic-design/ad-creative-design', desc: 'When your organic content is ready to become a paid campaign.' },
			{ title: 'Social Media Marketing', link: '/services/digital-marketing/social-media', desc: 'The strategy and posting behind the graphics.' },
			{ title: 'Graphic Design Hub', link: '/services/graphic-design', desc: 'See every graphic design service we offer.' },
		],
		cta: {
			title: 'Your Brand Deserves to Look as Good as the Product Itself',
			subtitle: "Book a free design consultation and we'll show you where your current visuals are costing you attention.",
			buttonText: 'Book a Free Design Consultation →',
			buttonLink: '/contactUs',
		},
	},

	'graphic-design/ad-creative-design': {
		breadcrumb: ['Services', 'UX/UI & Graphic Design', 'Graphic Design', 'Ad Creative Design'],
		breadcrumbLinks: ['/services', '/services/design', '/services/graphic-design'],
		hero: {
			tag: 'Ad Creative Design',
			title: 'Creative Fatigue Is the',
			titleHighlight: 'Silent ROAS Killer.',
			subtitle:
				'The same three creatives run for three months are why your CPMs are climbing. We produce ad creative in every format and size your campaigns actually need, on a schedule that keeps ahead of fatigue.',
		},
		stats: [
			{ value: '500+', label: 'Ad Creatives Produced' },
			{ value: '4', label: 'Ad Platforms Covered' },
			{ value: '72hr', label: 'First Drafts Turnaround' },
			{ value: '94%', label: 'Satisfaction Rate' },
		],
		servicesTitle: 'Services — Graphic Design',
		services: [
			{
				num: '01', title: 'Ad Creative Design',
				bullets: [
					'Static ad creatives for Meta: single image and carousel formats in all required sizes',
					'Google Display ad sets: all standard IAB sizes',
					'TikTok ad overlays, end cards, and text animation frames',
					'Email header graphics and promotional banner design',
					'Print ad design for brands with offline marketing needs',
				],
			},
		],
		process: {
			title: 'How we produce your creative',
			steps: [
				{ num: '01', title: 'Angle & Hook Review', desc: 'We work from what your marketing team knows is converting.' },
				{ num: '02', title: 'Creative Production', desc: 'A batch of variants produced for testing, not one single execution.' },
				{ num: '03', title: 'Performance Feedback Loop', desc: 'Winning creative informs the next batch we produce.' },
				{ num: '04', title: 'Ongoing Refresh', desc: 'New creative delivered on a schedule to stay ahead of fatigue.' },
			],
		},
		relatedServices: [
			{ title: 'Meta Ads', link: '/services/digital-marketing/meta-ads', desc: 'The campaigns your new creative will run in.' },
			{ title: 'Social Media Graphics', link: '/services/graphic-design/social-media-graphics', desc: 'Organic content this creative can be built from.' },
			{ title: 'Graphic Design Hub', link: '/services/graphic-design', desc: 'See every graphic design service we offer.' },
		],
		cta: {
			title: 'Your Brand Deserves to Look as Good as the Product Itself',
			subtitle: "Book a free design consultation and we'll show you where your current visuals are costing you attention.",
			buttonText: 'Book a Free Design Consultation →',
			buttonLink: '/contactUs',
		},
	},

	'graphic-design/product-packaging-design': {
		breadcrumb: ['Services', 'UX/UI & Graphic Design', 'Graphic Design', 'Product & Packaging Design'],
		breadcrumbLinks: ['/services', '/services/design', '/services/graphic-design'],
		hero: {
			tag: 'Product & Packaging Design',
			title: 'The Unboxing Is Part of',
			titleHighlight: 'the Product.',
			subtitle:
				'Packaging is the one piece of marketing every single customer experiences in person. We design it to reinforce your brand, build trust on arrival, and make a repeat purchase more likely.',
		},
		stats: [
			{ value: '60+', label: 'Packaging Projects Delivered' },
			{ value: 'Print', label: 'Print-Ready File Prep' },
			{ value: '72hr', label: 'First Concepts Turnaround' },
			{ value: '94%', label: 'Satisfaction Rate' },
		],
		servicesTitle: 'Services — Graphic Design',
		services: [
			{
				num: '01', title: 'Product & Packaging Design',
				bullets: [
					'Packaging design: boxes, bags, labels, tubes, and custom formats',
					'Insert cards, thank-you cards, and unboxing experience design',
					'Lifestyle composite design for product images without a photographer',
					'Print-ready file preparation with bleed, safe zones, and print specifications',
				],
			},
		],
		process: {
			title: 'How we design your packaging',
			steps: [
				{ num: '01', title: 'Format & Constraints', desc: 'Material, printer specs, and budget mapped before design starts.' },
				{ num: '02', title: 'Concepts', desc: 'Directions grounded in your brand system and shelf or unboxing context.' },
				{ num: '03', title: 'Refinement', desc: 'Iteration until it is both on-brand and print-feasible.' },
				{ num: '04', title: 'Print-Ready Delivery', desc: 'Files prepared exactly to your printer\'s specifications.' },
			],
		},
		relatedServices: [
			{ title: 'Brand Identity & Logo Design', link: '/services/graphic-design/brand-identity-logo-design', desc: 'The system your packaging needs to stay consistent with.' },
			{ title: 'Amazon Creative Design', link: '/services/graphic-design/amazon-creative-design', desc: 'For brands where packaging also shows up in listing photos.' },
			{ title: 'Graphic Design Hub', link: '/services/graphic-design', desc: 'See every graphic design service we offer.' },
		],
		cta: {
			title: 'Your Brand Deserves to Look as Good as the Product Itself',
			subtitle: "Book a free design consultation and we'll show you where your current visuals are costing you attention.",
			buttonText: 'Book a Free Design Consultation →',
			buttonLink: '/contactUs',
		},
	},

	'graphic-design/pitch-decks-presentations': {
		breadcrumb: ['Services', 'UX/UI & Graphic Design', 'Graphic Design', 'Pitch Decks & Presentations'],
		breadcrumbLinks: ['/services', '/services/design', '/services/graphic-design'],
		hero: {
			tag: 'Pitch Decks & Presentations',
			title: 'Your Deck Is Judged',
			titleHighlight: 'Before Anyone Reads a Word.',
			subtitle:
				'A cluttered, off-brand deck undercuts a strong pitch before the first slide is even read. We design decks and presentations that make your numbers and your narrative easy to follow, and easy to trust.',
		},
		stats: [
			{ value: '40+', label: 'Decks Designed' },
			{ value: '72hr', label: 'First Draft Turnaround' },
			{ value: '100%', label: 'Ecommerce-Trained Team' },
			{ value: '94%', label: 'Satisfaction Rate' },
		],
		servicesTitle: 'Services — Graphic Design',
		services: [
			{
				num: '01', title: 'Pitch Decks & Presentations',
				bullets: [
					'Investor and client pitch deck design that makes a professional first impression',
					'Brand presentation templates for internal and external use',
					'Infographic and data visualisation design',
					'Trade show materials and event collateral',
				],
			},
		],
		process: {
			title: 'How we design your deck',
			steps: [
				{ num: '01', title: 'Narrative Review', desc: 'We work from your content and story, not a blank template.' },
				{ num: '02', title: 'Structure & Layout', desc: 'Slide flow and hierarchy locked before visual polish begins.' },
				{ num: '03', title: 'Visual Design', desc: 'Full design pass aligned to your brand system.' },
				{ num: '04', title: 'Delivery', desc: 'Editable source files plus a presentation-ready export.' },
			],
		},
		relatedServices: [
			{ title: 'Brand Identity & Logo Design', link: '/services/graphic-design/brand-identity-logo-design', desc: 'The system every deck we design stays consistent with.' },
			{ title: 'UX/UI Design', link: '/services/ui-ux-design', desc: 'For product demos and interface walkthroughs within a deck.' },
			{ title: 'Graphic Design Hub', link: '/services/graphic-design', desc: 'See every graphic design service we offer.' },
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
			{ text: 'A Slow or Confusing Website Is ' },
			{ text: 'Costing You Sa', gradient: true },
			{ text: 'les Every Single Day' },
		],
		subtitle:
			"You can have great products, a healthy ad budget, and a strong brand and still have a website that loses buyers before they buy. Load time, navigation, product page layout, checkout friction — any one of these can be the reason your conversion rate is lower than it should be. TechTicks builds websites that are fast, clear, and commercially effective. And for existing sites, we find the exact problems before recommending anything.",
		ctaText: 'Book a Free Website Audit',
	},
	platformLogosLabel: 'Platforms & technologies we build on',
	platformLogos: [
		{ image: techLogo2, alt: 'PopDarts' },
		{ image: techLogo3, alt: 'Syndicate' },
		{ image: techLogo4, alt: 'Monk Cables' },
		{ image: techLogo5, alt: 'Oaks Craft' },
		{ image: techLogo6, alt: 'Crazy Cups' },
	],
	servicesTitle: 'Services — Web Dev',
	servicesSubtitle: "From first commit to post-launch support - we handle the full development lifecycle so your team doesn't have to.",
	services: [
		{ num: '01', title: 'Shopify Development', desc: 'Custom Shopify store builds on Shopify 2.0, theme development, and custom app development.', ctaText: 'Learn more', ctaLink: '/services/web-development/shopify-store-development', iconKey: 'shopify' },
		{ num: '02', title: 'WordPress & WooCommerce', desc: 'Custom WordPress builds, WooCommerce setup, plugin development, and performance optimisation.', ctaText: 'Learn more', ctaLink: '/services/web-development/wordpress-woocommerce', iconKey: 'code' },
		{ num: '03', title: 'Landing Pages & Sales Funnels', desc: 'High-converting standalone pages and multi-step funnels for paid traffic campaigns.', ctaText: 'Learn more', ctaLink: '/services/web-development/landing-pages', iconKey: 'layout' },
		{ num: '04', title: 'Website Speed & Performance', desc: 'Core Web Vitals audits, image optimisation, and CDN/caching configuration.', ctaText: 'Learn more', ctaLink: '/services/web-development/speed-performance-optimization', iconKey: 'speed' },
		{ num: '05', title: 'Maintenance & Support', desc: 'Monthly technical maintenance, uptime monitoring, and content updates on request.', ctaText: 'Learn more', ctaLink: '/services/web-development/maintenance-support', iconKey: 'support' },
		{ num: '06', title: 'Custom Web Application Development', desc: 'Full-stack web app builds — React, Next.js, Node.js — plus API and internal tooling.', ctaText: 'Learn more', ctaLink: '/services/web-development/custom-web-application-development', iconKey: 'refresh' },
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
		subtitle: 'A look at the type of builds we deliver - not specific client case studies.',
		items: [
			{ image: devGuardxflow, title: 'GuardXFlow', category: 'SaaS Web Application' },
			{ image: devSparkFitness, title: 'Spark Fitness', category: 'Gym Management App' },
			{ image: devHostyoHome, title: 'Hostyo', category: 'Property Management Platform' },
			{ image: devHostyoCrm, title: 'Hostyo CRM', category: 'Custom CRM Dashboard' },
			{ image: devHostyoProperties, title: 'Hostyo Properties', category: 'Multi-Property Management' },
			{ image: devRetellAi, title: 'RetellAI Agent Builder', category: 'AI Voice Agent Platform' },
		],
	},
	techStack: {
		label: 'What we build with',
		groups: [
			{ title: 'Frontend', items: 'React, Next.js, Liquid (Shopify), HTML/CSS, Tailwind CSS' },
			{ title: 'Backend', items: 'Node.js, Python, PHP' },
			{ title: 'CMS & Ecommerce', items: 'Shopify, Shopify Plus, WordPress, WooCommerce, BigCommerce' },
			{ title: 'Databases', items: 'MySQL, PostgreSQL, MongoDB' },
			{ title: 'Hosting & Infrastructure', items: 'Shopify (managed), WP Engine, Cloudflare, AWS, Vercel' },
		],
	},
	faqSubtitle: 'Straight answers about building or maintaining your website.',
	faq: [
		{
			question: 'How long does a website build take?',
			answer:
				'Standard Shopify or WordPress builds take 3–6 weeks. Custom builds or full ecommerce stores with complex requirements can take 6–10 weeks. You get a precise timeline in the proposal, not a vague range.',
		},
		{
			question: 'Do you offer ongoing maintenance after launch?',
			answer:
				'Yes. We offer monthly maintenance retainers that cover updates, security monitoring, backups, performance checks, and content changes. Most clients stay on a retainer after launch.',
		},
		{
			question: 'Can you migrate my existing website to Shopify or WordPress?',
			answer:
				'Yes. Full migrations including product data, customer records, order history, and a 301 redirect strategy to protect your search rankings.',
		},
	],
	cta: {
		title: 'Your Website Should Be an Asset, Not an Overhead',
		subtitle: "We'll audit your current site and tell you exactly what's costing you conversions, no pitch deck, no pressure.",
		buttonText: 'Book a Free Website Audit →',
		buttonLink: '/contactUs',
	},
}

detailPageContent['web-development/shopify-store-development'] = {
	breadcrumb: ['Services', 'Website Development', 'Shopify Development'],
	breadcrumbLinks: ['/services', '/services/web-development'],
	hero: {
		tag: 'Shopify Development',
		title: 'Custom Shopify Builds,',
		titleHighlight: 'Not Modified Templates.',
		subtitle:
			'Custom themes, app integrations, and checkout optimization built on Shopify 2.0 - mobile-first, fast-loading, and built to convert from launch day, not patched up after.',
	},
	stats: [
		{ value: '90+', label: 'Shopify Stores Built' },
		{ value: '90+', label: 'Avg Lighthouse Score' },
		{ value: '2x', label: 'Avg Conversion Lift' },
		{ value: '96%', label: 'On-Time Delivery' },
	],
	servicesTitle: 'Services — Web Dev',
	services: [
		{
			num: '01', title: 'Shopify Development',
			bullets: [
				'Custom Shopify store builds on Shopify 2.0',
				'Theme development, heavy customisation, and feature-level Liquid development',
				'Custom sections, metafields, and Shopify Functions',
				'Shopify Plus: checkout extensibility, Shopify Flow, B2B wholesale configuration',
				'Custom app development and third-party Shopify integrations',
			],
		},
	],
	process: {
		title: 'How we build',
		steps: [
			{ num: '01', title: 'Discovery & Scope', desc: 'Requirements, timeline, and success metrics defined before any code.' },
			{ num: '02', title: 'Design & Prototype', desc: 'Interactive wireframes reviewed and approved before development starts.' },
			{ num: '03', title: 'Build & Test', desc: 'Development with QA at every stage - no surprises at launch.' },
			{ num: '04', title: 'Launch & Support', desc: 'Smooth go-live and ongoing support to keep everything running.' },
		],
	},
	relatedServices: [
		{ title: 'Shopify', link: '/shopify', desc: 'Full Shopify management service, this build work included.' },
		{ title: 'Shopify UX Design', link: '/services/ui-ux-design/shopify-ux-design', desc: 'The design work behind a build like this.' },
		{ title: 'Website Development Hub', link: '/services/web-development', desc: 'See every development service we offer.' },
	],
	cta: {
		title: 'Ready to build something that sells?',
		subtitle: "We'll audit your current site and tell you exactly what's costing you conversions, no pitch deck, no pressure.",
		buttonText: 'Book A Free Call',
		buttonLink: '/contactUs',
	},
}

detailPageContent['web-development/wordpress-woocommerce'] = {
	breadcrumb: ['Services', 'Website Development', 'WordPress & WooCommerce'],
	breadcrumbLinks: ['/services', '/services/web-development'],
	hero: {
		tag: 'WordPress & WooCommerce',
		title: 'Real WordPress Builds,',
		titleHighlight: 'Not Page-Builder Templates.',
		subtitle:
			"WordPress and WooCommerce done properly — custom-coded, fast, secure, and built to actually be maintained, not a stack of page-builder plugins fighting each other.",
	},
	stats: [
		{ value: '60+', label: 'WordPress Sites Built' },
		{ value: '90+', label: 'Avg Performance Score' },
		{ value: 'WooCommerce', label: 'Full Store Setups' },
		{ value: '97%', label: 'On-Time Delivery' },
	],
	servicesTitle: 'Services — Web Dev',
	services: [
		{
			num: '01', title: 'WordPress & WooCommerce',
			bullets: [
				'Custom WordPress builds; not page-builder templates',
				'WooCommerce setup, product import, and checkout configuration',
				'Plugin development and custom API integrations',
				'Performance optimisation: Core Web Vitals, caching layers, CDN setup',
				'Ongoing security management and WordPress maintenance',
			],
		},
	],
	process: {
		title: 'How we build',
		steps: [
			{ num: '01', title: 'Discovery & Scope', desc: 'Requirements, timeline, and success metrics defined before any code.' },
			{ num: '02', title: 'Design & Prototype', desc: 'Interactive wireframes reviewed and approved before development starts.' },
			{ num: '03', title: 'Build & Test', desc: 'Development with QA at every stage - no surprises at launch.' },
			{ num: '04', title: 'Launch & Support', desc: 'Smooth go-live and ongoing support to keep everything running.' },
		],
	},
	relatedServices: [
		{ title: 'UX/UI Design', link: '/services/ui-ux-design', desc: 'We design before we build - no handoff friction.' },
		{ title: 'Maintenance & Support', link: '/services/web-development/maintenance-support', desc: 'Keeping your WordPress site secure and updated.' },
		{ title: 'Website Development Hub', link: '/services/web-development', desc: 'See every development service we offer.' },
	],
	cta: {
		title: 'Ready to build something that sells?',
		subtitle: "We'll audit your current site and tell you exactly what's costing you conversions, no pitch deck, no pressure.",
		buttonText: 'Book A Free Call',
		buttonLink: '/contactUs',
	},
}

detailPageContent['web-development/custom-web-application-development'] = {
	breadcrumb: ['Services', 'Website Development', 'Custom Web Application Development'],
	breadcrumbLinks: ['/services', '/services/web-development'],
	hero: {
		tag: 'Custom Web Application Development',
		title: 'When a Website',
		titleHighlight: "Isn't Enough.",
		subtitle:
			'Full-stack web applications for products that need real logic, not just pages — dashboards, internal tools, and platforms built on React, Next.js, and Node.js.',
	},
	stats: [
		{ value: '15+', label: 'Web Apps Delivered' },
		{ value: 'React', label: 'Next.js / Node.js Stack' },
		{ value: 'API', label: 'First Integration Approach' },
		{ value: '97%', label: 'On-Time Delivery' },
	],
	servicesTitle: 'Services — Web Dev',
	services: [
		{
			num: '01', title: 'Custom Web Application Development',
			bullets: [
				'Full-stack web app builds: React, Next.js, Node.js',
				'API development and third-party service integrations',
				'Custom internal tools, reporting dashboards, and workflow applications',
				'Ongoing development retainer for product teams that need a reliable build partner',
			],
		},
	],
	process: {
		title: 'How we build',
		steps: [
			{ num: '01', title: 'Discovery & Scope', desc: 'Requirements, timeline, and success metrics defined before any code.' },
			{ num: '02', title: 'Design & Prototype', desc: 'Interactive wireframes reviewed and approved before development starts.' },
			{ num: '03', title: 'Build & Test', desc: 'Development with QA at every stage - no surprises at launch.' },
			{ num: '04', title: 'Launch & Support', desc: 'Smooth go-live and ongoing support to keep everything running.' },
		],
	},
	relatedServices: [
		{ title: 'UX/UI Design', link: '/services/ui-ux-design', desc: 'We design before we build - no handoff friction.' },
		{ title: 'Maintenance & Support', link: '/services/web-development/maintenance-support', desc: 'Ongoing support once your application is live.' },
		{ title: 'Website Development Hub', link: '/services/web-development', desc: 'See every development service we offer.' },
	],
	cta: {
		title: 'Ready to build something that sells?',
		subtitle: "We'll audit your current site and tell you exactly what's costing you conversions, no pitch deck, no pressure.",
		buttonText: 'Book A Free Call',
		buttonLink: '/contactUs',
	},
}

detailPageContent['web-development/landing-pages'] = {
	breadcrumb: ['Services', 'Website Development', 'Landing Pages & Sales Funnels'],
	breadcrumbLinks: ['/services', '/services/web-development'],
	hero: {
		tag: 'Landing Pages & Sales Funnels',
		title: 'Built for Paid Traffic,',
		titleHighlight: 'Launched in Days, Not Weeks.',
		subtitle:
			"High-converting campaign pages that match what your ad promised - A/B-ready from the first build, so testing doesn't mean waiting on a second development cycle.",
	},
	stats: [
		{ value: '200+', label: 'Landing Pages Built' },
		{ value: '2x', label: 'Avg Conversion Lift' },
		{ value: 'Days', label: 'Not Weeks to Launch' },
		{ value: '97%', label: 'On-Time Delivery' },
	],
	servicesTitle: 'Services — Web Dev',
	services: [
		{
			num: '01', title: 'Landing Pages & Sales Funnels',
			bullets: [
				'High-converting standalone landing pages for paid traffic campaigns',
				'Multi-step funnel builds with upsell, downsell, and order bump logic',
				'Lead generation pages integrated with your CRM or email platform',
				'Webinar and event registration pages',
				'A/B test-ready page variants from the initial build',
			],
		},
	],
	process: {
		title: 'How we build your pages',
		steps: [
			{ num: '01', title: 'Ad-to-Page Alignment', desc: 'We start from the campaign or offer the page needs to match.' },
			{ num: '02', title: 'Design & Copy', desc: 'Page structure and copy built around the specific offer.' },
			{ num: '03', title: 'Build & Integrate', desc: 'Built and connected to your CRM, email platform, or checkout.' },
			{ num: '04', title: 'Launch & Test', desc: 'Live fast, then iterate based on real conversion data.' },
		],
	},
	relatedServices: [
		{ title: 'Meta Ads', link: '/services/digital-marketing/meta-ads', desc: 'The campaigns these pages are typically built to match.' },
		{ title: 'Website & Landing Page UI', link: '/services/ui-ux-design/website-landing-page-ui', desc: 'The design work behind a page like this.' },
		{ title: 'Website Development Hub', link: '/services/web-development', desc: 'See every development service we offer.' },
	],
	cta: {
		title: 'Ready to build something that sells?',
		subtitle: "We'll audit your current site and tell you exactly what's costing you conversions, no pitch deck, no pressure.",
		buttonText: 'Book A Free Call',
		buttonLink: '/contactUs',
	},
}

detailPageContent['web-development/speed-performance-optimization'] = {
	breadcrumb: ['Services', 'Website Development', 'Website Speed & Performance'],
	breadcrumbLinks: ['/services', '/services/web-development'],
	hero: {
		tag: 'Website Speed & Performance',
		title: 'Every Second of Load Time',
		titleHighlight: 'Is Lost Revenue.',
		subtitle:
			'Core Web Vitals audits and surgical fixes that cut load time and lift rankings - for sites we built and sites we didn\'t, diagnosed before anything gets changed.',
	},
	stats: [
		{ value: '100+', label: 'Sites Optimized' },
		{ value: '90+', label: 'Avg Post-Fix Score' },
		{ value: '2x', label: 'Avg Conversion Lift' },
		{ value: '97%', label: 'On-Time Delivery' },
	],
	servicesTitle: 'Services — Web Dev',
	services: [
		{
			num: '01', title: 'Website Speed & Performance',
			bullets: [
				'Core Web Vitals audit and systematic remediation',
				'Image optimisation and next-gen format (WebP/AVIF) implementation',
				'Code minification, lazy loading, and render-blocking resource resolution',
				'CDN setup and server-side caching configuration',
				'Mobile performance audit — often a separate problem from desktop',
			],
		},
	],
	process: {
		title: 'How we optimize your site',
		steps: [
			{ num: '01', title: 'Performance Audit', desc: 'Every page tested against Core Web Vitals thresholds.' },
			{ num: '02', title: 'Priority List', desc: 'Fixes ranked by expected impact on load time and rankings.' },
			{ num: '03', title: 'Implementation', desc: 'Fixes shipped and re-tested against the original baseline.' },
			{ num: '04', title: 'Ongoing Monitoring', desc: 'Performance tracked so a regression gets caught early.' },
		],
	},
	relatedServices: [
		{ title: 'SEO', link: '/services/digital-marketing/seo', desc: 'Site speed is one of the ranking factors this feeds directly.' },
		{ title: 'Maintenance & Support', link: '/services/web-development/maintenance-support', desc: 'Keeping performance from regressing after the fix.' },
		{ title: 'Website Development Hub', link: '/services/web-development', desc: 'See every development service we offer.' },
	],
	cta: {
		title: 'Ready to build something that sells?',
		subtitle: "We'll audit your current site and tell you exactly what's costing you conversions, no pitch deck, no pressure.",
		buttonText: 'Book A Free Call',
		buttonLink: '/contactUs',
	},
}

detailPageContent['web-development/maintenance-support'] = {
	breadcrumb: ['Services', 'Website Development', 'Maintenance & Support'],
	breadcrumbLinks: ['/services', '/services/web-development'],
	hero: {
		tag: 'Maintenance & Support',
		title: 'A Website Is Never',
		titleHighlight: 'Actually "Done."',
		subtitle:
			'Ongoing updates, security patches, and feature rollouts so your site never stagnates - the same team that built it stays on it, instead of handing you off to a support queue.',
	},
	stats: [
		{ value: '60+', label: 'Sites on Retainer' },
		{ value: '24/7', label: 'Uptime Monitoring' },
		{ value: '<24h', label: 'Avg Response Time' },
		{ value: '96%', label: 'Retainer Renewal Rate' },
	],
	servicesTitle: 'Services — Web Dev',
	services: [
		{
			num: '01', title: 'Maintenance & Support',
			bullets: [
				'Monthly technical maintenance retainer: updates, security patches, backups',
				'Uptime monitoring and incident response',
				'Content updates and new page builds on request',
				'Platform migrations when your business outgrows the current stack',
			],
		},
	],
	process: {
		title: 'How the retainer works',
		steps: [
			{ num: '01', title: 'Onboarding Audit', desc: 'We map your current stack, access, and any outstanding issues.' },
			{ num: '02', title: 'Monthly Maintenance', desc: 'Updates, patches, and backups run on a set schedule.' },
			{ num: '03', title: 'Requests & Fixes', desc: 'Content changes and bug fixes handled within an agreed turnaround.' },
			{ num: '04', title: 'Monthly Report', desc: 'A short summary of what was done and what to watch next.' },
		],
	},
	relatedServices: [
		{ title: 'Website Speed & Performance', link: '/services/web-development/speed-performance-optimization', desc: 'Often the first thing a maintenance audit surfaces.' },
		{ title: 'Custom Web Application Development', link: '/services/web-development/custom-web-application-development', desc: 'For when a site has outgrown its current platform entirely.' },
		{ title: 'Website Development Hub', link: '/services/web-development', desc: 'See every development service we offer.' },
	],
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
