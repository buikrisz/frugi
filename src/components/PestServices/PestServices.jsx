import React, { useState } from 'react';
import './PestServices.css';
import { PestServiceCard, PestServiceDetails } from '..';
import csotany from '../../images/csotany.JPG';
import agyipoloska from '../../images/poloska.JPG';
import ragcsalo from '../../images/ragcsalo.JPG';
import legy from '../../images/legy.JPG';
import hangya from '../../images/hangya.JPG';
import moly from '../../images/moly.JPG';

function Services() {
    const services = [
        {id:0, img: agyipoloska, title: "Ágyi poloska irtás", text: `Az ágyi poloska kizárólag vérrel táplálkozik ezért téves az a közhiedelem, hogy takarítatlan helyen jelenik meg. Kisebb fertőzöttségnél lehet házilagos megoldásokkal próbálkozni, azonban ez nem szokott tartós eredményt hozni. Az ágyi poloskák rejtőzködő életmódjának köszönhetően nappal (világosban) nehezen hozzáférhető helyeken karnisok, csillárok alatt (résekben, repedésekben, drapéria-, ágybetét varrásaiban) húzzák meg magukat. Éjjel sötétben kelnek útra, az embereket az általuk kibocsátott hő és párakülönbségről találják meg. A lakossági felhasználásra árusított szereknél a szakemberek által használt professzionális irtószerek nagyobb hatóanyag tartalommal bírnak és különböző technológiával juttathatók ki. Így a permetezésen kívül hidegköd képzéssel vagy ULV eljárással is hatékonyabban felléphetünk az ágyi poloskák ellen. A hidegköd képzés és ULV eljárás nagyon finom porlasztással permetezi be a légteret, így a résekbe repedésekbe is bejut az irtószer vagy a kiűzőszer. Ez utóbbinak köszönhetően még nappal is elhagyják búvóhelyeiket az ágyi poloskák és így biztosabban találkoznak az irtószerrel. Pete állapotban hatékonyan nem lehet ellenük fellépni ezért célszerű az első kezelés után 10-14 nappal egy újabb irtást megrendelni.`},
        {id:1, img: csotany, title: "Csótányirtás", text: "A csótány is rejtőzködő életmódot folytat azonban jobban szereti a párásabb környezetet. A német csótány a helységekben bárhol, elsősorban magasabb helyeken fordulhatnak elő. A konyhai csótány és az amerikai csótány inkább padlószinthez közel (csatornákban, bútorok, berendezések alatt) tartózkodnak. Irtásukra szakemberek permetezésen, hidegköd képzésen, illetve ULV eljáráson kívül még csótányirtó gélt (mérgezett csalétek) is alkalmazhatnak. Olyan helyen, ahol nem lehet irtószert használni, illetve felmérésre irtószermentes állomást (ragacsos lapot) is használhatunk. Csótányok esetében is célszerű egy második kezelést is tervezni a fertőzöttség függvényében."},
        {id:2, img: ragcsalo, title: "Rágcsáló irtás", text: "Hazánkban két patkányfaj fordul elő a vándorpatkány és a házi patkány. Térségünkben először a házi patkány jelent meg, de mára a vándorpatkány kiszorította és csak néha találkozunk vele. A patkányok megtalálhatóak föld alatti járatokban, csatornákban, fa- és téglarakásokban készített fészkeikben, talajszinten de házak, épületek padlásain is. Ahol megjelennek ott gyorsan elszaporodhatnak, ugyanis szaporák és három hónapos korukra ivaréretté válnak. Különböző betegségek terjesztésén kívül rágásukkal is jelentős kárt okoznak. Megrágják az épület tartószerkezeteit, villany-, vízvezetékeit. Alkalmanként nem kis kárt okozva ezzel."},
        {id:3, img: legy, title: "Darázs irtás", text: "A darazsak általában az embert nem bántják, kivéve ha veszélyeztetve érzik magukat, kolóniájukat. A darazsak fullánkjukat a méhektől eltérően többször is tudják használni, a befecskendezett méreg a kellemetlen csípő érzésen kívül allergiás reakciót is kiválthat. Jellemzően tavasszal kezdik meg a fészek építést, de más évszakban is szükség lehet az irtásukra."},
        {id:4, img: hangya, title: "Hangyairtás", text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione deserunt, libero odit atque aspernatur voluptatum, sit, dolores consectetur quis sequi sunt! Quidem recusandae modi iste temporibus nobis perspiciatis, nemo possimus?"},
        {id:5, img: moly, title: "Molyirtás", text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione deserunt, libero odit atque aspernatur voluptatum, sit, dolores consectetur quis sequi sunt! Quidem recusandae modi iste temporibus nobis perspiciatis, nemo possimus?"}
    ];

    const [showDetails, setShowDetails] = useState({ show: false, id: null })

    return (
        <div id='services'>
            <h3 className='title'>Szolgáltatásaink</h3>
            <div className='serviceCards'>
                {services.map(service => <PestServiceCard key={service.id} id={service.id} img={service.img} title={service.title} setShowDetails={setShowDetails} /> )}
            </div>
            { showDetails.show && <PestServiceDetails img={services[showDetails.id].img} title={services[showDetails.id].title} text={services[showDetails.id].text} setShowDetails={setShowDetails} />}
        </div>
    )
}

export default Services