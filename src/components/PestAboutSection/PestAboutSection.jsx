import React from 'react';
import { PestChooseUs, PestServices } from '..';
import './PestAboutSection.css';

function AboutSection() {
    return (
        <section id='aboutSection'>
            <PestChooseUs />
            <PestServices />
        </section>
    )
}

export default AboutSection