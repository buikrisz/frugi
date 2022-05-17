import React, { useState, useEffect } from 'react';
import './LandingForm.css';
import apiKey from '../../emailkey';
import emailjs from '@emailjs/browser';

function LandingForm() {
    const [formValue, setFormValue] = useState(
        { name: "", phone: "", service: "", location: "" }
    )

    function handleChange(e) {
        const { name, value } = e.target;
        setFormValue(
            { ...formValue, [name]: value }
        )
    }

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [mailSent, setMailSent] = useState(false);
    const [animationStarted, setAnimationStarted] = useState(false);

    useEffect(
        () => {
            if (formSubmitted) {
                setAnimationStarted(true);
                emailjs.send(apiKey.SERVICE_ID, apiKey.CALLBACK_TEMPLATE_ID, 
                    { from_name: formValue.name, from_phone: formValue.phone, from_service: formValue.service, from_location: formValue.location },
                    apiKey.PUBLIC_KEY)
                .then(res => {
                    console.log('Email sent');
                    setMailSent(true);
                })
                .catch(err => {
                    console.log(err);
                })
            }
        },
        [formSubmitted]
    )

    return (
        (!mailSent && !animationStarted) ? 
            <form className='landingForm' onSubmit={(e) => {
                e.preventDefault();
                setFormSubmitted(true);
            }}>
                <h2>Kérjen visszahívást:</h2>
                <input type="text" name="name" id="name" placeholder="Név" value={formValue.name} onChange={handleChange} required />
                <input type="text" name="phone" id="phone" placeholder="Telefonszám" value={formValue.phone} onChange={handleChange} required />
                <input type="text" name="service" id="service" placeholder="Melyik szolgáltatás érdekli?" value={formValue.service} onChange={handleChange} />
                <input type="text" name="location" id="location" placeholder="Melyik város / kerület?" value={formValue.location} onChange={handleChange} required />
                <div className='landingFormCheckbox'>
                    <input type="checkbox" name="privacyPolicy" id="privacyPolicy" />
                    <label htmlFor="privacyPolicy">Elfogadom az adatvédelmi nyilatkozatot.</label>
                </div>
                <button>Visszahívást kérek!</button>
            </form> 
        : (!mailSent && animationStarted) ?
            <form className='landingForm'>
                <svg className="loader" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                    <circle className="internal-circle" cx="60" cy="60" r="30"></circle>
                    <circle className="external-circle" cx="60" cy="60" r="50"></circle>
                </svg>
            </form>
        :
            <form className='landingForm'>
                <h2>Köszönjük! <br/><br/> Munkatársunk 24 órán belül jelentkezni fog Önnél!</h2>
            </form>
    )
}

export default LandingForm;