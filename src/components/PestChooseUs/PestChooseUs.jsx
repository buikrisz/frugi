import { useState } from 'react';
import './PestChooseUs.css';
import { HiPlusCircle } from 'react-icons/hi';
import { BsCheck2Circle } from 'react-icons/bs';
import about_us from '../../images/about_us.jpg';
import tools from '../../images/tools.jpg';

function ChooseUs() {
    const [showTools, setShowTools] = useState(false);
    return (
        <section id='rolunk' className='pestChooseUsSection'>
            <h3 className='title'>Miért minket válasszon?</h3>
            <div className='content'>
                <div className='contentSeparator leftContent'>
                    <button className="left" onClick={() => setShowTools(true)}>
                        <h4>Teljes felszereltség</h4>
                        <HiPlusCircle className='icon' />
                    </button>
                    <div className="imgDiv">
                        <img src={about_us} alt="About us" className={showTools ? "aboutUs hide" : "aboutUs"} />
                        <img src={tools} alt="About us" className={showTools ? "toolsImg" : "toolsImg hide"} />
                    </div>
                    <button className='right' onClick={() => setShowTools(false)}>
                        <HiPlusCircle className='icon' />
                        <h4>Kiemelkedő szolgáltatás</h4>
                    </button>
                </div>
                <div className='contentSeparator rightContent'>
                    <h2>FrugiOzone Kártevőirtás</h2>
                    <h3>Legjobb minőségű szolgáltatásokat biztosítjuk kártevő problémáira!</h3>
                    <div className="listItem">
                        <BsCheck2Circle className='check' />
                        <h4>Szakképzett kollégáink minőségi szolgáltatást biztosítanak, ügyfeleink elégedettségét és biztonságát szem előtt tartva</h4>
                    </div>
                    <div className="listItem">
                        <BsCheck2Circle className='check' />  
                        <h4>Hatékony, környezetbarát szereket használunk a rovarírtáshoz, melyeknek biztonsági adatlapjait <a href="/dokumentumok.html" className='linkToDocs'>itt</a> találhatják meg</h4>
                    </div>
                    <div className="listItem">
                        <BsCheck2Circle className='check' />
                        <h4>Fő szolgáltatásaink: ágyi poloska irtás, csótányirtás, rágcsáló irtás, darázs irtás, hangyairtás, molyirtás</h4>
                    </div>
                    <div className="listItem">
                        <BsCheck2Circle className='check' />
                        <h4>Vállaljuk magánházak, lakások, társasházak, vendéglátóhelyek, szálláshelyek,
                            üzletek, iparterületek, raktárak kötelező, egyedi és rendszeres (HACCP)
                            kártevőirtását.
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChooseUs;