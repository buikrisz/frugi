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
                    <div className='ozoneServicesSolutionsContainer'>
                        <img src={ozone_generator} alt="Ózongenerátor" />
                        <div>
                            <h3>Ózongenerátoros fertőtlenítés</h3>
                            <h6>Az ózon az egyik legerősebb oxidálószer a világon, kb. 3000-szer hatékonyabb a hatása a
                                klórénál. Gáz halmazállapota miatt gyakorlatilag bárhova eljut a kezelt területen.<br></br>
                                <span className='ozoneItalic'>Ez ugyanaz az ózon, mint amiből az ózonpajzs áll a Föld körül?</span><br></br>
                                Pontosan. Az ózon egy rendkívül instabil molekula, míg a sztratoszféra ózonrétegében a
                                beeső ultraibolya sugárzás hatására folyamatosan keletkezik és bomlik -így elnyelve a
                                számunkra káros sugárzást- addig alacsonyabb légköri rétegekben már nem található meg.
                                Bizonyos folyamatok, például villámlás során is keletkezik ózon.
                                Az ózongenerátorok ózon termelési elve gyakorlatilag azonos a villámlás során keletkezett
                                ózon folyamatával, az úgynevezett koronakisülés (más néven csendes kisülés) segítségével
                                hozzák létre a gázt.
                            </h6>
                        </div>
                    </div>
                    <span className='ozoneServicesLine'></span>
                    <div className='ozoneServicesSolutionsContainer'>
                        <img src={bakterium} alt="Vegyszer" />
                        <div>
                            <h3>Vegyszeres fertőtlenítés</h3>
                            <h6>Vegyszeres fertőtlenítés esetén professzionális virucid, baktericid szereket használunk a környezeti terhelés minimálisra szorításával. A fertőtlenítésre kérhet permetezéses vagy/és légtérkezeléses eljárást. A pandémiás helyzetben kiemelt figyelmet fordítunk ügyfeleink egészségére.</h6>
                        </div>
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
        </section>
    )
}

export default OzoneServiceSection;