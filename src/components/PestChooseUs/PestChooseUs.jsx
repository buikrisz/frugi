import React from 'react';
import './PestChooseUs.css';
import { HiPlusCircle } from 'react-icons/hi';
import { BsCheck2Circle } from 'react-icons/bs';
import placeholder from '../../images/placeholder.png';

function ChooseUs() {
    return (
        <div id='chooseUs'>
            <h3 className='title'>Miért minket válasszon?</h3>
            <div className='content'>
                <div className='contentSeparator leftContent'>
                    <button className='left'>
                        <h4>Teljes felszereltség</h4>
                        <HiPlusCircle className='icon' />
                    </button>
                    <img src={placeholder} alt="About us" className='aboutUs' />
                    <button className='right'>
                        <HiPlusCircle className='icon' />
                        <h4>?Kiemelkedő szolgáltatás?</h4>
                    </button>
                </div>
                <div className='contentSeparator rightContent'>
                    <h2>??Frugi-Cont kártevőírtó akármi??</h2>
                    <h3>Legjobb minőségi szolgáltatásokat biztosítjuk kártevő problémáira!</h3>
                    <div className="listItem">
                        <BsCheck2Circle className='check' />
                        <h4>Figyelembe vesszük ügyfeleink biztonságát és elégedettségét</h4>
                    </div>
                    <div className="listItem">
                        <BsCheck2Circle className='check' />  
                        <h4>Hatékony, környezetbarát?? szereket használunk a rovarírtáshoz</h4>
                    </div>
                    <div className="listItem">
                        <BsCheck2Circle className='check' />
                        <h4>Minőségi szolgáltatásunkat szakképzett kollégáink biztosítják</h4>
                    </div>
                    <div className="listItem">
                        <BsCheck2Circle className='check' />
                        <h4>Kiemelt figyelmet biztosítunk visszatérő vendégeink számára</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseUs;