import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { WhyAttend } from "./pages/WhyAttend";
import { Sponsors } from "./pages/Sponsors";
import { Gallery } from "./pages/Gallery";
import { Tickets } from "./pages/Tickets";
import { ContactUs } from "./pages/ContactUs";
import { NotFound } from "./pages/NotFound";
import logo from './images/wit_logo.png';
import wdsLogo from './images/wds-logo.png';
import instaLogo from './images/instagram-logo.png';
import linkedInLogo from './images/linkedin-logo.png';
import {SponsorUs} from "./pages/SponsorUs";
import {PastSponsors} from "./pages/PastSponsors";

function App() {

    const navBar = <>
        <div className="nav-top">
            <div className="inner">
                <a href="#"><img src={wdsLogo} className="wds-logo" alt="WDS Logo"/></a>
            </div>
        </div>
        <nav className="nav">
            <div className="inner">
                <Link to="/"><img src={logo} className="wits-logo" alt="WIT Logo"/></Link>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/why-attend">Why Attend</Link></li>
                    <li><Link to="/sponsors">Sponsors</Link></li>
                    <li><Link to="/sponsor-us">Sponsor Us</Link></li>
                    <li><Link to="/past-sponsors">Past Sponsors</Link></li>
                    {/*<li><Link to="/gallery">Gallery</Link></li>*/}
                    <li><a href="https://www.tickettailor.com/events/westerndevsociety/766196" target="_blank">Tickets</a></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    </>

    const footer = <>
        <div className="footer">
            <div className="inner">
                <a href="#"><img src={instaLogo} className="instagram-logo" alt="Instragram Logo"/></a>
                <a href="#"><img src={linkedInLogo} className="linkedin-logo" alt="LinkedIn Logo"/></a>
            </div>
        </div>
    </>

    return (
        <>
            { navBar }
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/why-attend" element={<WhyAttend/>}/>
                <Route path="/sponsors" element={<Sponsors/>}/>
                <Route path="/past-sponsors" element={<PastSponsors/>}/>
                <Route path="/sponsor-us" element={<SponsorUs/>}/>
                {/*<Route path="/gallery" element={<Gallery/>}/>*/}
                <Route path="/tickets" element={<Tickets/>}/>
                <Route path="/contact-us" element={<ContactUs/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            { footer }
        </>
    );
}

export default App;
