import { FaWhatsapp } from 'react-icons/fa'

// Same number already shown as "Call Us" in the contact sections (Home.js,
// contactUs.js) — reused here as a click-to-chat wa.me link rather than a
// second, separately-maintained number.
const WHATSAPP_NUMBER = '13205440303'

function WhatsAppFloatButton() {
	return (
		<a
			href={`https://wa.me/${WHATSAPP_NUMBER}`}
			target='_blank'
			rel='noopener noreferrer'
			className='whatsapp-float-button'
			aria-label='Chat with us on WhatsApp'>
			<FaWhatsapp />
		</a>
	)
}

export default WhatsAppFloatButton
