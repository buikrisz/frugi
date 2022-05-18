import React from 'react';
import './OzoneChooseUsSection.css';
import windIcon from '../../images/wind_icon.png';

function OzoneChooseUsSection() {
    return (
        <section id='rolunk' className='ozoneChooseUsSection'>
            <div className="ozoneChooseUsTitleDiv">
                <img src={windIcon} alt="Wind Icon" className='windIcon windLeftIcon'/>
                <div>
                    <h3 className='title'>Miért minket válasszon?</h3>
                    <h4>- Ügyfeleink elégedettsége az első -</h4>
                    <h5>- Alapos, minőségi munkát végzünk -</h5>
                </div>
                <img src={windIcon} alt="Wind Icon" className='windIcon windRightIcon'/>
            </div>
            <div className='ozoneChooseUsContent'>
                <div className='ozoneChooseUsContentCard'>
                    <h3>Kik vagyunk?</h3>
                    <h6>Cégünk kártevőirtással, vegyszeres- illetve ózongenerátoros fertőtlenítő tisztítással foglalkozik. Szakképzett kollégáink minőségi munkájukkal egy tiszta- és egészséges légkört teremtenek meg ügyfeleink számára.</h6>
                </div>
                <div className='ozoneChooseUsContentCard'>
                    <h3>Mi a célunk?</h3>
                    <h6>Célunk, hogy felhívjuk ügyfeleink figyelmét az egészséges környezet kialakításának fontosságára, és az ennek hiányából fakadó veszélyekre. A COVID járványból tanulva, mindenkinek érdemes magasabb hangsúlyt fektetni a vírusok és baktériumok elleni védelemre.</h6>
                </div>
                <div className='ozoneChooseUsContentCard'>
                    <h3>Hogyan segítünk?</h3>
                    <h6>Minőségi tisztítást végzünk, vegyszeres- illetve ózongenerátoros megoldással is. Csak magyar nyelvű CE megfelelőségi nyilatkozatú eszközöket használunk, melyhez biztonsági adatlapot is biztosít a gyártó.</h6>
                </div>
            </div>
        </section>
    )
}

export default OzoneChooseUsSection;