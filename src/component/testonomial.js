import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { FaTwitter } from 'react-icons/fa'

function Testimonials() {
    const testimonials = [
        {
            img: 'https://i.pravatar.cc/100?img=12',
            name: 'Sam Lui',
            title: 'Design – Sam Lui, GlowSkin Co.',
            subtitle: 'Founder of GreenEarth Eco Store',
            text: 'TechTicks transformed our website and app with stunning, user-friendly designs. Our customers love the new look, and our engagement has skyrocketed!',
        },
        {
            img: 'https://i.pravatar.cc/100?img=32',
            name: 'Ahmed Raza',
            title: 'SEO – Ahmed Raza, BuildPro Solutions',
            subtitle: 'Head of Product at HealthTech',
            text: 'Our search rankings improved dramatically after working with TechTicks. Their SEO strategy brought us consistent, high-quality traffic and leads.',
        },
        {
            img: 'https://i.pravatar.cc/100?img=45',
            name: 'Bilal Hussain',
            title: 'Development – Bilal Hussain, FinTrack',
            subtitle: 'Marketing Director',
            text: 'They developed a fast, secure, and reliable platform for our services. The performance and scalability of the website exceeded our expectations.',
        },
        {
            img: 'https://i.pravatar.cc/100?img=46',
            name: 'Emily Rodriguez',
            title: 'Advertising – Emily Rodriguez, NovaEdge',
            subtitle: 'Marketing Director',
            text: "TechTicks crafted targeted campaigns across social media and search engines. We've seen measurable growth and ROI that truly stands out.",
        },
        {
            img: 'https://i.pravatar.cc/100?img=47',
            name: 'Franc Tin',
            title: 'Maintenance – Franc Tin, HealthBridge Clinic',
            subtitle: 'Marketing Director',
            text: 'Their maintenance team keeps our systems running smoothly 24/7. Updates, monitoring, and support are handled professionally without any downtime.',
        },
        {
            img: 'https://i.pravatar.cc/100?img=48',
            name: 'Ali Malik',
            title: 'Social Media – Ali Malik, TrendWear',
            subtitle: 'Marketing Director',
            text: 'Our social media presence has grown consistently thanks to TechTicks. They manage our profiles, boost engagement, and align with our brand perfectly.',
        },
        {
            img: 'https://i.pravatar.cc/100?img=49',
            name: 'Jason Lee',
            title: 'Migration – Jason Lee, BrightTech',
            subtitle: 'Marketing Director',
            text: 'We migrated our website and e-commerce platform seamlessly. TechTicks ensured zero downtime, preserved performance, and maintained SEO value.',
        },
        {
            img: 'https://i.pravatar.cc/100?img=50',
            name: 'Michael Brown',
            title: 'E-commerce – Michael Brown, StartSpark',
            subtitle: 'Marketing Director',
            text: 'The custom e-commerce solution provided by TechTicks perfectly matches our industry needs. It improved customer experience and sales.',
        },
        {
            img: 'https://i.pravatar.cc/100?img=51',
            name: 'Daniel Carter',
            title: 'Multi-Service – Daniel Carter, LearnHub',
            subtitle: 'Marketing Director',
            text: 'From design to development and marketing, TechTicks handled everything with precision. Their expertise across multiple areas made our project a success.',
        },
        {
            img: 'https://i.pravatar.cc/100?img=52',
            name: 'Zain Ali',
            title: 'Ongoing Support – Zain Ali, UrbanSpace',
            subtitle: 'Marketing Director',
            text: 'Even after launch, TechTicks provides reliable support. Their team is always responsive, helping us resolve issues quickly and efficiently.',
        },
    ]

    const [emblaRef] = useEmblaCarousel(
        { loop: true, dragFree: true, align: 'start' },
        [AutoScroll({ speed: 1.5, stopOnInteraction: false, direction: 'forward' })]
    )

    const Card = ({ item }) => (
        <div style={{ width: '360px' }}>

            {/* BOX — only twitter icon + text inside */}
            <div style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                padding: '28px 24px',
                boxSizing: 'border-box',
				marginLeft: '12px',
            }}>
                {/* Twitter Icon */}
                <div style={{
                    width: '48px',
                    height: '48px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    color: '#fff',
                    fontSize: '20px',
                }}>
                    <FaTwitter />
                </div>

                {/* Review Text */}
                <p style={{
                    color: '#ccc',
                    fontSize: '15px',
                    lineHeight: '1.8',
                    margin: 0,
                }}>
                    {item.text}
                </p>
            </div>

            {/* TRIANGLE — sits outside the box */}
            <div style={{
                width: 0,
                height: 0,
                borderLeft: '12px solid transparent',
                borderRight: '12px solid transparent',
                borderTop: '14px solid rgba(255,255,255,0.06)',
                marginLeft: '32px',
            }} />

            {/* USER INFO — fully outside the card box */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginTop: '16px',
                paddingLeft: '4px',
            }}>
                <img
                    src={item.img}
                    alt={item.name}
                    style={{
                        width: '58px',
                        height: '58px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                    }}
                />
                <div>
                    <h6 style={{
                        margin: 0,
                        fontSize: '15px',
                        fontWeight: 600,
                        color: '#fff',
                    }}>
                        {item.name}
                    </h6>
                    <span style={{
                        fontSize: '13px',
                        color: '#777',
                    }}>
                        {item.subtitle}
                    </span>
                </div>
            </div>

        </div>
    )

    return (
        <section style={{
            background: '#000',
            padding: '100px 0',
            overflow: 'hidden',
            color: '#fff',
        }}>
            {/* Heading */}
            <div style={{
                textAlign: 'center',
                marginBottom: '60px',
                padding: '0 20px',
            }}>
                <h2 style={{
                    fontSize: '42px',
                    fontWeight: 700,
                    marginBottom: '16px',
                }}>
                    Our Testimonials
                </h2>
                <p style={{
                    color: '#888',
                    fontSize: '15px',
                    maxWidth: '600px',
                    margin: '0 auto',
                }}>
                    Don't just take our word for it; hear what our satisfied clients
                    have to say about their experience with TechTicks.
                </p>
            </div>

            {/* Single Row Carousel */}
            <div
                ref={emblaRef}
                style={{
                    overflow: 'hidden',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                    maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                }}
            >
                <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                    {[...testimonials, ...testimonials].map((item, i) => (
                        <div key={i} style={{ flex: '0 0 360px', minWidth: 0 }}>
                            <Card item={item} />
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Testimonials