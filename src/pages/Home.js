import "./Home.css";

export const Home = () => {


    return (
        <>
            <div className = "div1">
                <h1 className='head'>Women In Tech <span className='line-break'>Summit 2023</span></h1>
            </div>
            <div>
                <div className='div2'>
                    <h2 className='head1'>The Largest Women in Technology Conference in Canada</h2>
                    <p className='text'>Provided paragraph</p>
                    <p>
                        The hybrid conference will bring women in tech, minorities and allies from all over the world together through an interactive platform featuring live educational & training content, keynotes, engaging panels, breakout rooms, technical workshops, and networking with virtual and in-person sessions.
                    </p>
                </div>

                <div className='div3'>
                    <h2 className='text'>Workshops & Events</h2>
                    <button className='workshop-button'>Workshop 1</button>
                    <div className='divider'/>
                    <button className='workshop-button'>Workshop 2</button>
                    <div className='divider'/>
                    <button className='workshop-button'>Summit</button>
                </div>
            </div>
            <h2>What will event day look like?</h2>
            <div className='event-container'>
                <button className='booths'>Networking Booths</button>
                <button className='competition'>Interview Competition</button>
                <button className='speakers'>Keynote Speakers</button>
                <button className='etc'>etc</button>
            </div>
        </>
    )
}