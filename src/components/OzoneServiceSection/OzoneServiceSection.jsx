import React from 'react';
import './OzoneServiceSection.css';
import { BsCheck2Circle } from 'react-icons/bs';
import bakterium from '../../images/bacteria.png';
import ozone_generator from '../../images/ozone_generator.png';
import lakas from '../../images/house.png';
import iroda from '../../images/office.png';
import egeszsegugy from '../../images/ambulance.png';
import iskola from '../../images/university.png';


function OzoneServiceSection() {
    return (
        <section id='szolgaltatasok' className='ozoneServicesSection'>
            <h3 className='title'>Szolgáltatásaink</h3>
            <div className='ozoneServicesContent'>
                <div className='ozoneServicesCard ozoneServicesSolutions'>
                    <div>
                        <img src={ozone_generator} alt="Ózongenerátor" />
                        <h3>Ózongenerátoros fertőtlenítés</h3>
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, adipisci reprehenderit ad hic natus suscipit in exercitationem nulla. Ipsam corporis esse molestiae? Impedit animi ea fugit tempora odit quisquam ullam.</h6>
                    </div>
                    <span className='ozoneServicesLine'></span>
                    <div>
                        <img src={bakterium} alt="Vegyszer" />
                        <h3>Vegyszeres fertőtlenítés</h3>
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, adipisci reprehenderit ad hic natus suscipit in exercitationem nulla. Ipsam corporis esse molestiae? Impedit animi ea fugit tempora odit quisquam ullam.</h6>
                    </div>
                </div>
                <div className='ozoneServicesCard ozoneServicesCustomers'>
                    <div>
                        <img src={lakas} alt="Lakás" />
                        <h5>Lakások / Házak fertőtlenítése</h5>
                        <h6>~ Megszünteti a kellemetlen szagokat ~</h6>
                    </div>
                    <div>
                        <img src={iskola} alt="Iskola" />
                        <h5>Iskolák fertőtlenítése</h5>
                        <h6>~ Megöli a falakon letelepedett penészt ~</h6>
                    </div>
                    <div>
                        <img src={egeszsegugy} alt="Egészségügyi intézmény" />
                        <h5>Egészségügyi intézmények fertőtlenítése</h5>
                        <h6>~ Elpusztítja a baktériumokat és a vírusokat  ~</h6>
                    </div>
                    <div>
                        <img src={iroda} alt="Iroda" />
                        <h5>Irodák fertőtlenítése</h5>
                        <h6>~ Tiszta, és egészséges levegőt biztosít ~</h6>
                    </div>
                </div>
            </div>
            {/* <div className="advantageCard">
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
            </div> */}
        </section>
    )
}

export default OzoneServiceSection;