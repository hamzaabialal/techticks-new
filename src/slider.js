import picture1 from '../src/component/images/services-slider/slider1.png'
import picture2 from '../src/component/images/services-slider/slider2.png'
import picture3 from '../src/component/images/services-slider/slider3.png'
import picture4 from '../src/component/images/services-slider/slider4.png'
import picture5 from '../src/component/images/services-slider/slider5.png'
import picture6 from '../src/component/images/services-slider/slider6.png'
import picture7 from '../src/component/images/services-slider/slider7.png'
import picture8 from '../src/component/images/services-slider/slider8.png'
import picture9 from '../src/component/images/services-slider/slider9.png'

function Slider() {
	const logos = [
		picture1,
		picture2,
		picture3,
		picture4,
		picture5,
		picture6,
		picture7,
		picture8,
		picture9,
	]

	return (
		<section className='services-slide'>
			<div
				id='Slider'
				className='heading_brands'>
				<h1>Brands that trust us to deliver</h1>
				<div className='s-slider'>
					{/* Two identical halves (each = logos x2) so the marquee loops
					    seamlessly at -50%. Each half is wider than the screen, so the
					    row is always full — no gap ever shows. */}
					<div className='s-slide-track'>
						{[...logos, ...logos, ...logos, ...logos].map(
							(pic, i) => (
								<div
									className='s-slide'
									key={i}>
									<img
										src={pic}
										alt=''
									/>
								</div>
							),
						)}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Slider
