import "./PastSponsors.css";
import accentureLogo from "../images/accenture-logo.png";
import bmoLogo from "../images/Bank-of-Montreal-logo.png";
import deloitteLogo from "../images/Deloitte-Logo.png";
import kpmgLogo from "../images/KPMG-Logo.png";

export const PastSponsors = () => {


    return (
        <>
            <div className="hero">
                <div className="inner">
                    <h1>PAST SPONSORS</h1>
                </div>
            </div>
            <div className="past-sponsors">
                <div className="inner">
                    {/*<h2>Our Previous partners</h2>*/}
                    <h3>Title Sponsors</h3>
                    <div className="sponsor-list">
                        <img src={accentureLogo} alt="Accenture Logo"/>
                    </div>
                    <h3>Gold Sponsors</h3>
                    <div className="sponsor-list">
                        <img src={bmoLogo} alt="BMO Logo"/>
                        <img src={deloitteLogo} alt="Deloitte Logo"/>
                        <img src={kpmgLogo} alt="KPMG Logo"/>
                    </div>
                    <br/>
                </div>
            </div>
        </>
    )
}