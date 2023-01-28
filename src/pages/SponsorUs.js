import "./SponsorUs.css";

export const SponsorUs = () => {

    const benefits = [
        {
            type: 'Pre-Summit Recognition',
            items: [
                { name: 'Social media promotion', hasTitle: true, hasGold: true },
                { name: 'Website presence (placement based on sponsorship)', hasTitle: true, hasGold: true }
            ]
        }, {
            type: 'Summit Week Recognition',
            items: [
                { name: 'Opportunity to host a workshop', hasTitle: true, hasGold: false }
            ]
        }, {
            type: 'Summit Day Recognition',
            items: [
                { name: 'Opportunity to judge interview competition', hasTitle: true, hasGold: false },
                { name: 'Opportunity to host a networking booth with company reps', hasTitle: true, hasGold: true },
                { name: 'Company branded banners and page in summit handbook', hasTitle: true, hasGold: true },
                { name: 'Keynote speech and Q&A (1 hour)', hasTitle: true, hasGold: false },
                { name: 'Keynote speech and Q&A (30 minutes)', hasTitle: false, hasGold: true }
            ]
        }, {
            type: 'Post Event Recognition',
            items: [
                { name: 'Recognition in post-event Women in Tech Summit Resource Handbook (displaying logo and company description)', hasTitle: true, hasGold: true }
            ]
        }
    ]

    return (
        <>
            <div className="hero">
                <div className="inner">
                    <h1>SPONSOR US</h1>
                </div>
            </div>
            <div className="sponsor-us">
                <div className="inner">
                    <h2>Interested in sponsoring WIT?</h2>
                    <p>If you are interested in sponsoring WITS, Sunday, January 28, 2024 - please email aryankhurana@icloud.com.</p>
                    <br/>
                    <br/>
                    <h2>Benefits Breakdown</h2>
                    <div>
                        <table className="benefits-table">
                            <thead>
                            <tr>
                                <th>Sponsorship Benefits</th>
                                <th>Title<br/>1 Available</th>
                                <th>Gold<br/>4 Available</th>
                            </tr>
                            </thead>
                            <tbody>
                            { benefits.map( benefit => <>
                                <tr className="row type">
                                    <th className="col" colSpan={3}>{ benefit.type }</th>
                                </tr>
                                { benefit.items.map( item => <tr className="row benefit" key={item.name}>
                                    <td className="col">{item.name}</td>
                                    <td className="col">{item.hasTitle && <span className="circle"></span>}</td>
                                    <td className="col">{item.hasGold && <span className="circle"></span>}</td>
                                </tr> )}
                            </>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}