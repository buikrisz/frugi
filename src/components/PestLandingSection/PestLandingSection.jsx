import React from 'react';
import { LandingForm } from '..';
import './PestLandingSection.css';
import image from '../../images/pest_control.png';

function LandingSection() {
    return (
        <section id='landingSection'>
            <div className='landingContent'>
                <div>
                    <h2>Lakások védelme a váratlan betolakodóktól</h2>
                    <img src={image} alt="Pest Control" />
                </div>
                <LandingForm />
            </div>
        </section>
    )
}   

export default LandingSection;