import React from 'react';

function ContactForm({ setFormSubmitted, formData, setFormData }) {
    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            setFormSubmitted(true);
        }}>
            <h2>Lépjen kapcsolatba velünk</h2>
            <div>
                <input type="text" name="contactName" id="contactName" placeholder='Név' value={formData.contactName} onChange={handleChange} required />
                <input type="text" name="contactPhone" id="contactPhone" placeholder='Telefonszám' value={formData.contactPhone} onChange={handleChange} required />
            </div>
            <div>
                <input type="text" name="contactMail" id="contactMail" placeholder='E-mail' value={formData.contactMail} onChange={handleChange} required />
                <select name="contactService" id="contactService" defaultValue="" className={formData.contactService === "" ? "unselected" : "selected"} onChange={handleChange}>
                    <option value="" disabled hidden>Válasszon szolgáltatást...</option>
                    <option value="agyipoloskairtas">Ágyi poloska irtás</option>
                    <option value="csotanyirtas">Csótányirtás</option>
                    <option value="ragcsaloirtas">Rágcsáló irtás</option>
                    <option value="darazsirtas">Darázs irtás</option>
                    <option value="hangyairtas">Hangyairtás</option>
                    <option value="molyirtas">Molyirtás</option>
                    <option value="egyeb">Egyéb</option>
                </select>
            </div>
            <textarea name="contactMessage" id="contactMessage" cols="30" rows="10" placeholder='Üzenet...' value={formData.contactMessage} onChange={handleChange} required />
            <button>Küldés</button>
        </form>
    )
}

export default ContactForm;