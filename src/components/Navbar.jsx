import React from 'react'

const navLinks = [
    { label: "Deals" },
    { label: "Information Technology" },
    { label: "Phones" },
    { label: "Gaming" },
    { label: "Audio" },
    { label: "Wearable" },
];

const Navbar = () => {
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
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                    <button>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar