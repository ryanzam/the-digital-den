import { footerLinks } from "../constants"


const Footer = () => {
    return (
        <footer>
            <div className="info">
                <p>The Digital Den</p>
            </div>

            <hr />

            <div className="links">
                <p>Copyright © 2025 The Digital Den. All rights reserved.</p>

                <ul>
                    {footerLinks.map(({ label, link }) => (
                        <li key={label}>
                            <a href={link}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}

export default Footer