export const servicesCatalog = [
	{
		id: 'ecommerce-management',
		title: 'Ecommerce Management',
		description: 'Amazon · TikTok Shop · Shopify · Walmart · eBay · Etsy. From account setup and listing optimisation to platform PPC and full account management — we handle the daily operations so you stop firefighting and start scaling. Whether you\'re launching a new channel or trying to scale an existing one, we\'ve done it before.',
		route: '/services/ecommerce-management',
		iconKey: 'ecommerce',
		mainPageGroups: [
			{ title: 'Amazon', description: "The world's largest ecommerce platform — and the most competitive. We manage listings, PPC, A+ Content, Brand Registry, and account health, run by operators who've handled real Seller Central accounts, not just read about them." },
			{ title: 'TikTok Shop', description: 'The fastest-growing sales channel in ecommerce right now. Store setup, creator affiliate programs, UGC strategy, and TikTok Ads — built to turn discovery into real sales, not just views.' },
			{ title: 'Shopify, Walmart, eBay & Etsy', description: 'Your owned DTC store plus the marketplaces that matter. Custom Shopify builds, Walmart Connect, eBay Cassini SEO, and Etsy listing optimisation — all managed under one roof by a single team.' },
		],
	},
	{
		id: 'digital-marketing',
		title: 'Digital Marketing',
		description: 'Meta Ads · Google Ads · SEO · Email Marketing · Social Media · Content. Paid, organic, and retention — built as an integrated system, not separate campaigns. We set real KPIs (ROAS, CAC, revenue) and optimise against those, not vanity metrics.',
		route: '/services/digital-marketing',
		iconKey: 'marketing',
		mainPageGroups: [
			{ title: 'Paid Advertising', description: 'Meta and Google campaigns structured around your numbers — ROAS, CAC, and LTV — not clicks and impressions. Every dollar of spend is tracked, tested, and optimised for measurable returns.' },
			{ title: 'SEO & Content', description: 'Technical strength, keyword strategy, and content structure built to rank and convert. We grow organic traffic and long-term discoverability without shortcuts that damage your site later.' },
			{ title: 'Email, SMS & Social', description: 'Retention and community working alongside paid — lifecycle email and SMS flows plus platform-native social content that keeps customers coming back, not just clicking once.' },
		],
	},
	{
		id: 'design',
		title: 'UX/UI & Graphic Design',
		description: 'UX/UI Design · Brand Identity · Amazon Creatives · Ad Design · Packaging. Design that serves a commercial purpose — improving conversion, building trust, and making your brand recognisable. Backed by user behaviour data and ecommerce best practices, not just taste.',
		route: '/services/design',
		iconKey: 'design',
		mainPageGroups: [
			{ title: 'UX/UI & Web Design', description: 'Intuitive, conversion-focused interfaces for websites, landing pages, and stores. Every screen is built around real user behaviour — clean layouts, smart flows, and visual hierarchy that drives action from the first click.' },
			{ title: 'Brand Identity & Ad Creative', description: 'From logos and brand systems to scroll-stopping ad and social creatives, we keep your brand consistent and recognisable across every platform and campaign you run.' },
			{ title: 'Amazon & Packaging Design', description: 'High-converting Amazon listings, A+ Content, storefronts, and product packaging — strategically crafted to communicate value, build buyer confidence, and stand out on the shelf.' },
		],
	},
	{
		id: 'development',
		title: 'Website Development',
		description: 'Shopify · WordPress · Landing Pages · Funnels · Performance Optimisation. Websites built for speed, clarity, and conversion — not to impress designers. We build, we maintain, and we optimise as your business grows.',
		route: '/services/development',
		iconKey: 'development',
		mainPageGroups: [
			{ title: 'Custom Store Development', description: 'Full builds on Shopify 2.0 and WordPress — mobile-first by default, with 90+ performance targets baked into the build, not patched in after launch.' },
			{ title: 'Landing Pages & Funnels', description: 'Conversion-ready landing pages and sales funnels engineered around how online shoppers actually behave — no bloat, no slow themes, no checkout that leaks revenue.' },
			{ title: 'Performance & Optimisation', description: 'Ongoing speed, CRO, and maintenance as your business grows. We measure, test, and refine so your site keeps converting long after launch.' },
		],
	},
]

export const serviceById = Object.fromEntries(servicesCatalog.map((service) => [service.id, service]))

export function attachDetailContent(detailContent) {
	servicesCatalog.forEach((service) => {
		service.detail = detailContent[service.id]
	})
}
