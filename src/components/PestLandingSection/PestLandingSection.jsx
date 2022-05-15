import React from 'react';
import { LandingForm } from '..';
import './PestLandingSection.css';
import image from '../../images/pest_control.png';

function LandingSection() {
    return (
        <section id='kezdolap'>
            <div className='landingContent'>
                <div className='landingTextImg'>
                    <div className='landingText'>
                        <h2 className='landingTitle'>Lakások védelme a váratlan betolakodóktól</h2>
                        <h5 className='landingSubtitle'>Ágyi poloska-, csótány-, kártevőirtás magánszemélyeknek, intézményeknek és ?közületeknek?</h5>
                    </div>
                    <img src={image} alt="Pest Control" />
                </div>
                <LandingForm />
            </div>
        </section>
    )
}   

export default LandingSection;