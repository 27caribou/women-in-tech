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

function App() {

    const navBar = <>
        <div className="nav-top">
            <div className="inner">
                <a href="#"><img src={wdsLogo} className="wds-logo" alt="WDS Logo"/></a>
            </div>
        </div>
        <nav className="nav">
            <div className="inner">
                <img src={logo} className="wits-logo" alt="WIT Logo"/>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/why-attend">Why Attend</Link></li>
                    <li><Link to="/sponsors">Sponsors</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><a href="https://www.tickettailor.com/events/westerndevsociety/766196" target="_blank">Tickets</a></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    </>

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
