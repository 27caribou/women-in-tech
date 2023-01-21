import React from "react"
import { useRef } from "react"
import emailjs from "emailjs-com";

export const ContactUs = () => {
    const form = useRef();
    function sendEmail(event) {
        event.preventDefault();
        event.target.reset();

        emailjs
            .sendForm(
                "service_ljcy71r",
                "template_vzurb47",
                form.current,
                "Q_VQoQboZCQbHB_tO"
            )
            .then(() => {
                alert("Your message has been sent!");
            }).catch(() => {
                alert("The email service is temporarily unavailable. Please contact us directly on westerndevsociety@gmail.com");
            })
    }
    return (
        <div className="container">
            <div className="row">
                <div className="half__form">
                    <h3 className="title--form">Send your request</h3>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="contactform">
                            <div className="item">
                                <label className="item--label">Name</label>
                                <input className="input" type="text" name="user_name"/>
                            </div>
                            <div className="item">
                                <label className="item--label">Phone</label>
                                <input className="input" type="text" name="user_phone" />
                            </div>
                            <div className="item">
                                <label className="item--label">Email</label>
                                <input className="input" type="email" name="user_email" />
                            </div>
                            <div className="item">
                                <label className="item--label">Subject</label>
                                <input className="input" type="text" name="subject" />
                            </div>
                            <div className="item">
                                <label className="item--label">Message</label>
                                <textarea className="inputmessage" type="text" name="message" placeholder="Your message"/>
                            </div>
                        </div>
                        <button type="submit" className="send">SEND</button>
                    </form>
                    
                </div>
                <div className="half__about">
                    <h3 className="title--about">Reach us</h3>
                    <div className="df">
                        <div className="contacts">
                            <h5 className="contactsitem">Email</h5>
                            <h5 className="contactsitem">Phone</h5>
                            <h5 className="contactsitem">Address</h5>
                        </div>
                        <div className="contacts__details">
                            <h5 className="contactsitem email">contactus@example.com</h5>
                            <h5 className="contactsitem">+1 012 345 6789</h5>
                            <h5 className="contactsitem">#212, Ground floor, 7th cross Some layout, Some Road,
                                koromangla Bengaluru 560001</h5>
                        </div>
                    </div>  
                </div>
            </div>
        </div>                
        
    )
} 