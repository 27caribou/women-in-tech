

export default function NavBar(){





    return(
        <nav className = "nav">
            <a href = "/" className="wits-logo">WITS Logo</a>
            <ul>
                <li>
                    <a href = "/">Home</a>
                </li>
                <li>
                    <a href = "/why-attend">Why Attend</a>
                </li>
                <li>
                    <a href = "/sponsors">Sponsors</a>
                </li>
                <li>
                    <a href = "/gallery">Gallery</a>
                </li>
                <li>
                    <a href = "https://www.tickettailor.com/events/westerndevsociety/766196" target = "_blank">Tickets</a>
                </li>
                <li>
                    <a href = "/contact-us">Contact Us</a>
                </li>
            </ul>
        </nav>
    )
}