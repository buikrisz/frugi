import React, { useState } from 'react';
import './ContactSection.css';
import { ContactForm, ContactInfoCard, ContactServicesCard } from '..';


function ContactSection() {
    const [formData, setFormData] = useState(
        { contactName: "", contactPhone: "", contactMail: "", contactService: "", contactMessage: "" }
    )

    const [formSubmitted, setFormSubmitted] = useState(false);

    return (
        <section id='contactSection'>
            <div className='contactInfo'>
                <h3 className='title'>Kapcsolat</h3>
                <div className='contactInfoCards'>
                    <ContactInfoCard icon="location" title="Iroda cím" text="2120, Dunakeszi Mária utca 23." />
                    <ContactInfoCard icon="phone" title="Telefonszám" text="+36-70-338-4734" />
                    <ContactInfoCard icon="mail" title="E-mail cím" text="eradicatedpest@gmail.com" />
                </div>
            </div>
            <div className='formInfo'>
                {!formSubmitted ? <ContactForm setFormSubmitted={setFormSubmitted} formData={formData} setFormData={setFormData} />
                :
                <form>
                    <h2 className='confirmationTxt'>Köszönjük!<br/><br/> Munkatársunk 24 órán belül válaszolni fog üzenetére!</h2>
                </form>
                }
            </div>
        </section>
    )
}

export default ContactSection;