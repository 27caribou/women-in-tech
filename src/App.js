import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { WhyAttend } from "./pages/WhyAttend";
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

    const githubPage = 'women-in-tech'

    const navBar = <>
        <div className="nav-top">
            <div className="inner">
                <img src={wdsLogo} className="wds-logo" alt="WDS Logo"/>
            </div>
        </div>
        <div className="nav">
            <div className="inner">
                <div className="logo">
                    <Link to={`${githubPage}`}><img src={logo} className="wits-logo" alt="WIT Logo"/></Link>
                </div>
                <ul>
                    <li><Link to={`${githubPage}`}>Home</Link></li>
                    <li><Link to={`${githubPage}/why-attend`}>Why Attend</Link></li>
                    <li>
                        <div className="dropdown">
                            <div className="label">Sponsors</div>
                            <div className="content">
                                <Link to={`${githubPage}/sponsor-us`}>Sponsor Us</Link>
                                <Link to={`${githubPage}/past-sponsors`}>Past Sponsors</Link>
                            </div>
                        </div>
                    </li>
                    <li><Link to={`${githubPage}/tickets`}>Tickets</Link></li>
                    <li><Link to={`${githubPage}/contact-us`}>Contact Us</Link></li>
                </ul>
            </div>
        </div>
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
                <Route path={`${githubPage}`} element={<Home/>}/>
                <Route path={`${githubPage}/why-attend`} element={<WhyAttend/>}/>
                <Route path={`${githubPage}/past-sponsors`} element={<PastSponsors/>}/>
                <Route path={`${githubPage}/sponsor-us`} element={<SponsorUs/>}/>
                {/*<Route path="/gallery" element={<Gallery/>}/>*/}
                <Route path={`${githubPage}/tickets`} element={<Tickets/>}/>
                <Route path={`${githubPage}/contact-us`} element={<ContactUs/>}/>
                <Route path={`${githubPage}/*`} element={<NotFound/>}/>
            </Routes>
            { footer }
        </>
    );
}

export default App;
