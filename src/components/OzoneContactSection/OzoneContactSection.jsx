import React, { useState } from 'react';
import { ContactForm, ContactInfoCard } from '..';

function ContactSection() {
    const [formData, setFormData] = useState(
        { contactName: "", contactPhone: "", contactMail: "", contactService: "", contactMessage: "" }
    )

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [mailSent, setMailSent] = useState(false);
    const [animationStarted, setAnimationStarted] = useState(false);

    return (
        <section itemScope itemType="https://schema.org/ContactPage" id='kapcsolat'>
            <div className='contactInfo'>
                <h3 itemProp="title" className='title'>Kapcsolat</h3>
                <div className='contactInfoCards'>
                    <ContactInfoCard icon="location" title="Iroda cím" text="2120, Dunakeszi Mária utca 23." />
                    <ContactInfoCard icon="phone" title="Telefonszám" text="+36-70-338-4734" />
                    <ContactInfoCard icon="mail" title="E-mail cím" text="frugiozone@gmail.com" />
                </div>
            </div>
            <div className='formInfo'>
                {
                (!mailSent && !animationStarted) ? 
                    <ContactForm itemProp="form" formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted} formData={formData} setFormData={setFormData} setMailSent={setMailSent} setAnimationStarted={setAnimationStarted} selectedSite="ozone" />
                : (!mailSent && animationStarted) ?
                    <form className='contactForm'>
                        <svg className="loader" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                            <circle className="internal-circle" cx="60" cy="60" r="30"></circle>
                            <circle className="external-circle" cx="60" cy="60" r="50"></circle>
                        </svg>
                    </form> 
                : 
                    <form className='contactForm'>
                        <h2 className='confirmationTxt'>Köszönjük!<br/><br/> Munkatársunk 24 órán belül válaszolni fog üzenetére!</h2>
                    </form>
                }
            </div>
        </section>
    )
}

export default ContactSection;