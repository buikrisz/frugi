import React from 'react';
import './PestChooseUs.css';
import { Link } from 'react-router-dom';
import { HiPlusCircle } from 'react-icons/hi';
import { BsCheck2Circle } from 'react-icons/bs';
import about_us from '../../images/about_us.jpg';

function ChooseUs() {
    return (
        <div id='rolunk'>
            <h3 className='title'>Miért minket válasszon?</h3>
            <div className='content'>
                <div className='contentSeparator leftContent'>
                    <button className='left'>
                        <h4>Teljes felszereltség</h4>
                        <HiPlusCircle className='icon' />
                    </button>
                    <img src={about_us} alt="About us" className='aboutUs' />
                    <button className='right'>
                        <HiPlusCircle className='icon' />
                        <h4>Kiemelkedő szolgáltatás</h4>
                    </button>
                </div>
                <div className='contentSeparator rightContent'>
                    <h2>Frugi-Cont Kft - Kártevőirtás</h2>
                    <h3>Legjobb minőségű szolgáltatásokat biztosítjuk kártevő problémáira!</h3>
                    <div className="listItem">
                        <BsCheck2Circle className='check' />
                        <h4>Figyelembe vesszük ügyfeleink biztonságát és elégedettségét</h4>
                    </div>
                    <div className="listItem">
                        <BsCheck2Circle className='check' />  
                        <h4>Hatékony, környezetbarát szereket használunk a rovarírtáshoz, melyeknek biztonsági dokumentumait <Link to="/dokumentumok" className='linkToDocs'>itt</Link> találhatják meg</h4>
                    </div>
                    <div className="listItem">
                        <BsCheck2Circle className='check' />
                        <h4>Minőségi szolgáltatásunkat szakképzett kollégáink biztosítják</h4>
                    </div>
                    <div className="listItem">
                        <BsCheck2Circle className='check' />
                        <h4>Magánszemélyek megrendelésein felül vendéglátóhelyek, szálláshelyek, irodák, raktárak, csarnokok és ipartelepek kezelését is vállaljuk</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseUs;