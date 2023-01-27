import "./WhyAttend.css"
import headshot from '../images/placeholder_headshot.jpeg';

export const WhyAttend = () => {

    const openTicketsPage = () => {
        window.open('https://www.tickettailor.com/events/westerndevsociety/766196', '_blank');
    }

    return (
        <>
            <div className="hero">
                <div className="inner">
                    <h1>WHY ATTEND?</h1>
                    <div className="testimonial-list">
                        <div className="testimonial">
                            <div className="testimonial-img-container">
                                <img src={headshot} className="testimonial-img" alt="Testimonial Photo"/>
                            </div>
                            <div>
                                <p className="testimonial-quote">
                                ["If you are a woman in tech or anyone who understands the value of tapping into this talent, join, follow, support, and amplify WomenTech Network."]
                                </p>
                                <p className="testimonial-quote">
                                    <strong>
                                        <small>
                                        [- Mariah Lichtenstern, Founding Partner at DiverseCity Ventures]
                                        </small>
      
                                    </strong>

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="why-attend-details">
                <div className="inner">
                    <div className="div1">
                        <h2 className="purple">Who should attend the Women in Tech conference?</h2>
                        <h3 className="text">A place for women in technology</h3>
                        <p className="text">Attending Women in Tech Conference is a great way to stay up to date on the latest
                            technology,
                            develop your abilities, and add more value to your organization if you work as a software engineer,
                            product manager, designer, data scientist business manager, or in a tech department. Become more
                            connected
                            to women in IT communities around the world, interact on a local and a international level, look for
                            new
                            opportunities, and give back to the community to have an effect
                        </p>
                    </div>
                    <div className="div2">
                        <h2 className="purple">What is WITC?</h2>
                        <h3 className="text">People get together in a highly engaging conference to exchange knowledge,
                            experiences, and thought leadership</h3>
                        <button className="button-27" role="button" onClick={openTicketsPage}>Get Tickets</button>
                    </div>
                    <div className="div3">
                        <h2 className="purple">Why Attend The Conference for Women in Tech?</h2>
                        <h3 className="text">Assemble a community of x nationalities including more than x women and minorities
                            in IT
                        </h3>
                    </div>
                </div>
            </div>
        </>
    )
}