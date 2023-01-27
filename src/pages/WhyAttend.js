import "./WhyAttend.css"

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
                            [testimonials]
                        </div>
                    </div>
                </div>
            </div>
            <div className="why-attend-details">
                <div className="inner">
                    <div className="div1">
                        <h2 className="purple">Who should attend the Women in Tech Summit?</h2>
                        <h3 className="text">For female and female-aligned students</h3>
                        <p className="text">The Women in Tech Summit (WITS) provides female and female-aligned students
                            a platform to connect and grow in the professional world. The WIT Summit brings
                            career-driven workshops, keynotes, and an interview competition led by industry leaders.
                        </p>
                    </div>
                    <div className="div2">
                        <h2 className="purple">What is WITS?</h2>
                        <h3 className="text">People get together in a highly engaging conference to exchange knowledge,
                            experiences, and thought leadership</h3>
                        {/*<button className="button-27" role="button" onClick={openTicketsPage}>Get Tickets</button>*/}
                    </div>
                    <div className="div3">
                        <h2 className="purple">Why Attend The Women in Tech Summit?</h2>
                        <h3 className="text">Assemble a community of x nationalities including more than x women and minorities
                            in IT
                        </h3>
                    </div>
                </div>
            </div>
        </>
    )
}