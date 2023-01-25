import "./Home.css";

export const Home = () => {

    return (
        <>
            <div className="hero">
                <div className="inner">
                    <h1>WOMEN IN TECH <br/> SUMMIT 2023</h1>
                    <h2>January 29, 2023</h2>
                </div>
            </div>
            <div className="intro-section">
                <div className="inner">
                    <div className='div1'>
                        <h2>The Largest Women in Technology Conference in Canada</h2>
                        <p className='text'>[Provided paragraph]</p>
                    </div>
                    <div className='div2'>
                        <h2>Workshops & Events</h2>
                        <div>
                            <button className='workshop-button'>Workshop 1</button>
                            <button className='workshop-button'>Workshop 2</button>
                            <button className='workshop-button'>Summit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="numbers">
                <div className="inner">
                    <div className="numbers-cols">
                        <div className="col"><h3>+XYZ</h3><h3>Stat</h3></div>
                        <div className="col"><h3>+XYZ</h3><h3>Stat</h3></div>
                        <div className="col"><h3>+XYZ</h3><h3>Stat</h3></div>
                        <div className="col"><h3>+XYZ</h3><h3>Stat</h3></div>
                    </div>
                </div>
            </div>
            <div className="event-details">
                <div className="inner">
                    <h2>What will the event day look like?</h2>
                    <div className="grid">
                        <button className='booths'>Networking Booths</button>
                        <button className='competition'>Interview Competition</button>
                        <button className='speakers'>Keynote Speakers</button>
                        <button className='etc'>etc</button>
                    </div>
                </div>
            </div>
            <div className="testimonials">
                <div className="inner">
                    <h1>WHY ATTEND?</h1>
                    <div className="testimonial-list">
                        <div className="testimonial">
                            [testimonials]
                        </div>
                    </div>
                </div>
            </div>
            <div className="sponsors">
                <div className="inner">
                    <h1>OUR FEATURED SPONSORS</h1>
                    <div className="sponsor-list">
                        <div className="sponsor">[Sponsor]</div>
                        <div className="sponsor">[Sponsor]</div>
                        <div className="sponsor">[Sponsor]</div>
                        <div className="sponsor">[Sponsor]</div>
                        <div className="sponsor">[Sponsor]</div>

                    </div>
                </div>
            </div>
        </>
    )
}