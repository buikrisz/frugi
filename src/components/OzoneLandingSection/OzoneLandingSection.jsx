import React from 'react';
import { LandingForm } from '..';
import image from '../../images/no-virus.png';

function OzoneLandingSection() {
  return (
    <section id="kezdolap">
        <div className='landingContent'>
                <div className='landingTextImg'>
                    <div className='landingText'>
                        <h2 className='landingTitle'>Tiszta és egészséges légkör megteremtése</h2>
                        <h5 className='landingSubtitle'>Fertőtlenítő szolgáltatás lakások, irodák, iskolák, egészségügyi intézmények és nagyobb terek tisztítására is</h5>
                    </div>
                    <img src={image} alt="Pest Control" />
                </div>
                <LandingForm />
            </div>
    </section>
  )
}

export default OzoneLandingSection;