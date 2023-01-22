import { useNavigate } from "react-router-dom"
import "./WhyAttend.css"

export const WhyAttend = () => {
    
    const navigate = useNavigate();

    const navigateToTickets = () => {
        navigate('/tickets')
    }

    return (
        <div>
        <div className="div1">
        <h1 className = "head">Why Attend</h1>
        </div>
        <div>
            <h2 className="head1">Who should attend Women in Tech conference</h2>
            <h3 className="text">A place for women in technology</h3>
            <p className = "text">Attending Women in Tech Conference is a great way to stay up to date on the latest technology, 
                develop your abilities, and add more value to your organization if you work as a software engineer, 
                product manager, designer, data scientist business manager, or in a tech department. Become more connected 
                to women in IT communities around the world, interact on a local and a international level, look for new 
                opportunities, and give back to the community to have an effect
            </p>
            <div className="div2">
            <h2 className="head1">What is WITC?</h2>
            <h3 className="text">People get together in a highly engaging conference to exchange knowledge, experiences, and thought leadership</h3>
            <button className="button-27" role="button" onClick={navigateToTickets}>Get Tickets</button>
            </div>
            <h2 className="head1">Why Attend The Conference for Women in Tech?</h2>
            <h3 className="text">Assemble a community of x nationalities including more than x women and minorities in IT</h3>
        </div>
        </div>
    )
}