import { Helmet } from 'react-helmet-async'

// Every route shared the exact same <title>/<meta description> from
// index.html until this existed — this is the one place each page sets its
// own, via react-helmet-async's HelmetProvider (wrapped around the whole
// app in App.js).
function Seo({ title, description }) {
	return (
		<Helmet>
			{title && <title>{title}</title>}
			{description && <meta name='description' content={description} />}
		</Helmet>
	)
}

export default Seo
