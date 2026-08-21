export const CATEGORIES = [
	{ id: 'cat_amazon', name: 'Amazon', slug: 'amazon' },
	{ id: 'cat_tiktok_shop', name: 'TikTok Shop', slug: 'tiktok-shop' },
	{ id: 'cat_shopify', name: 'Shopify', slug: 'shopify' },
	{ id: 'cat_growth', name: 'Growth', slug: 'growth' },
	{ id: 'cat_branding', name: 'Branding', slug: 'branding' },
]

export const categoryById = Object.fromEntries(CATEGORIES.map((category) => [category.id, category]))
