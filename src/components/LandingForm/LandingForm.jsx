import React, { useState } from 'react';
import './LandingForm.css';

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

    return (
        !formSubmitted ? 
        <form className='landingForm' onSubmit={(e) => {
            e.preventDefault();
            setFormSubmitted(true);
        }}>
            <h2>Kérjen visszahívást:</h2>
            <input type="text" name="name" id="name" placeholder="Név" value={formValue.name} onChange={handleChange} required />
            <input type="text" name="phone" id="phone" placeholder="Telefonszám" value={formValue.phone} onChange={handleChange} required />
            <input type="text" name="service" id="service" placeholder="Melyik szolgáltatás érdekli?" value={formValue.service} onChange={handleChange} />
            <input type="text" name="location" id="location" placeholder="Melyik város / kerület?" value={formValue.location} onChange={handleChange} required />
            <button>Visszahívást kérek!</button>
        </form> 
        : 
        <form className='landingForm'>
            <h2>Köszönjük! <br/><br/> Munkatársunk 24 órán belül jelentkezni fog Önnél!</h2>
        </form>
    )
}

export default LandingForm;