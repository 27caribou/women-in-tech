import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { WhyAttend } from "./pages/WhyAttend";
import { Sponsors } from "./pages/Sponsors";
import { Gallery } from "./pages/Gallery";
import { Tickets } from "./pages/Tickets";
import { ContactUs } from "./pages/ContactUs";
import { NotFound } from "./pages/NotFound";

function App() {

    const navBar = <nav className="nav">
        <a href="/" className="wits-logo">WITS Logo</a>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/why-attend">Why Attend</a>
            </li>
            <li>
                <a href="/sponsors">Sponsors</a>
            </li>
            <li>
                <a href="/gallery">Gallery</a>
            </li>
            <li>
                <a href="https://www.tickettailor.com/events/westerndevsociety/766196" target="_blank">Tickets</a>
            </li>
            <li>
                <a href="/contact-us">Contact Us</a>
            </li>
        </ul>
    </nav>

    return (
        <>
            { navBar }
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/why-attend" element={<WhyAttend/>}/>
                <Route path="/sponsors" element={<Sponsors/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/tickets" element={<Tickets/>}/>
                <Route path="/contact-us" element={<ContactUs/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    );
}

export default App;
