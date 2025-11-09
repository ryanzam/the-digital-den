import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const navLinks = [
    { label: "Deals" },
    { label: "Information Technology" },
    { label: "Phones" },
    { label: "Gaming" },
    { label: "Audio" },
    { label: "Wearable" },
];

const Navbar = () => {

    useGSAP(() => {
        const header = gsap.timeline({
            scrollTrigger: {
                trigger: 'header',
                start: 'bottom top',
            }
        })

        header.fromTo('header', { backgroundColor: 'transparent' }
            , {
                backgroundColor: '#000000b3',
                backgroundFilter: 'blur(50px)',
                duration: 0.5,
                ease: 'power1.inOut',
            })

    }, []);

    return (
        <header>
            <nav>
                <img src="/logo.png" alt="company logo" />

                <ul>
                    {navLinks.map(({ label }) => (
                        <li key={label}>
                            <a href={label}>{label}</a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center justify-center gap-3">
                    <button>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                    <button>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar