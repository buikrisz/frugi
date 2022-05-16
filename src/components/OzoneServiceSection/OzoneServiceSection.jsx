import React from 'react';
import './OzoneServiceSection.css';
import { BsCheck2Circle } from 'react-icons/bs';
import bakterium from '../../images/bacteria.png';
import levego from '../../images/fresh.png';
import szaglas from '../../images/smell.png';

function OzoneServiceSection() {
    return (
        <section id='whyOzoneSection'>
            <h3 className='title'>Miért minket válasszon?</h3>
            <div className="advantageCard">
                <img src={bakterium} alt="Bacteria" />
                <div className='listItems'>
                    <div className='listItem'>
                        <BsCheck2Circle className='check' />
                        <h4>Megöli a falakon megtelepedett penészt és gombákat</h4>
                    </div>
                    <div className='listItem'>
                        <BsCheck2Circle className='check' />
                        <h4>Elpusztítja a baktériumokat és vírusokat</h4>
                    </div>
                    <div className='listItem'>
                        <BsCheck2Circle className='check' />
                        <h4>Elpusztítja a koronavírust is</h4>
                    </div>
                </div>
            </div>
            <div className="advantageCard">
                <img src={levego} alt="Bacteria" />
                <div className='listItems'>
                    <div className='listItem'>
                        <BsCheck2Circle className='check' />
                        <h4>Pollenmentesít</h4>
                    </div>
                    <div className='listItem'>
                        <BsCheck2Circle className='check' />
                        <h4>Tiszta, és egészséges levegőt biztosít</h4>
                    </div>
                    <div className='listItem'>
                        <BsCheck2Circle className='check' />
                        <h4>Lakások, irodák, légkondícionáló eszközök és nagyobb terek tisztítására és fertőtlenítésére is alkalmas</h4>
                    </div>
                </div>
            </div>
            <div className="advantageCard">
                <img src={szaglas} alt="Bacteria" />
                <div className='listItems'>
                    <div className='listItem'>
                        <BsCheck2Circle className='check' />
                        <h4>Megszünteti a kellemetlen szagokat</h4>
                    </div>
                    <div className='listItem'>
                        <BsCheck2Circle className='check' />
                        <h4>Ajánlott légúti megbetegedéssel / allergiával élők számára</h4>
                    </div>
                    <div className='listItem'>
                        <BsCheck2Circle className='check' />
                        <h4>Ajánlot dohányzást elhagyók számára</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OzoneServiceSection;