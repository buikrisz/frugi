import React, { useState } from "react";
import "./PestServices.css";
import { PestServiceCard, PestServiceDetails } from "..";
import csotany from "../../images/csotany.png";
import agyipoloska from "../../images/agyipoloska.png";
import ragcsalo from "../../images/patkany.png";
import darazs from "../../images/darazs.png";
import hangya from "../../images/hangya.png";
import moly from "../../images/moly.png";
import epuletek from "../../images/epuletek.png";

function Services() {
  const services = [
    {
      id: 0,
      img: agyipoloska,
      title: "Ágyi poloska irtás",
      intro: `Az ágyi poloska kizárólag vérrel táplálkozik, ezért téves az a közhiedelem, hogy
        takarítatlan helyen jelenik meg.`,
      text: `Az ágyi poloska kizárólag vérrel táplálkozik, ezért téves az a közhiedelem, hogy
        takarítatlan helyen jelenik meg. Rozsdabarna színű 4-8 mm hosszú, szipókás
        rovar. Az ivarérett nőstény ágyi poloska naponta 2-3 petét rak, melyből 10-14 nap
        alatt kelnek ki a lárvák. Az ágyi poloska rejtőzködő életmódjának köszönhetően
        nappal (világosban) nehezen hozzáférhető helyeken ablak-, ajtókeretek,
        konnektorok, kapcsolók, karnisok, csillárok alatt, ülő-, fekvőbútorok környékén
        (résekben, repedésekben, drapéria-, ágybetét varrásaiban) húzzák meg magukat.
        Az ágyi poloskák előfordulhatnak könyvek és ruhák között is. Amikor a
        tápcsatornájuk kiürült, éjjel sötétben kelnek útra a kártevők, az embereket az
        általuk kibocsátott hő és párakülönbségről találják meg. Kisebb fertőzöttségnél
        lehet házilagos megoldásokkal próbálkozni, azonban ez nem szokott tartós
        eredményt hozni. A lakossági felhasználásra árusított szereknél a kártevőirtó
        szakemberek által használt professzionális irtószerek nagyobb hatóanyag
        tartalommal bírnak és különböző technológiával juttathatók ki. Így a
        permetezésen kívül hidegköd képzéssel vagy ULV eljárással is hatékonyabban
        elvégezhetik az ágyi poloska irtását. A hidegköd képzés és ULV eljárás nagyon
        finom porlasztással permetezi be a légteret, így a résekbe repedésekbe is bejut
        az irtószer vagy a kiűzőszer. Ez utóbbinak köszönhetően még nappal is elhagyják
        búvóhelyeiket az ágyi poloskák és így biztosabban találkoznak az irtószerrel. A
        csótányokhoz hasonlóan az ágyi poloskák ellen pete állapotban hatékonyan
        nem lehet fellépni, ezért célszerű az első kezelés után 10-14 nappal - az újabb
        ágyi poloska nemzedék kikelése után – kártevőirtást végrehajtani.`,
    },
    {
      id: 1,
      img: csotany,
      title: "Csótányirtás",
      intro: `A csótányok az ágyi poloskákhoz hasonlóan rejtőzködő életmódot folytatnak,
        azonban jobban szeretik a párásabb környezetet.`,
      text: `A csótányok az ágyi poloskákhoz hasonlóan rejtőzködő életmódot folytatnak,
        azonban jobban szeretik a párásabb környezetet. Erősen lapított testű, ovális
        körvonalú rovarok a csótányok. Rágó szájszerveik vannak, mindenevők. A
        csótány petéiből a lárvák 2-4 hónap alatt kelnek ki, ez függ a hőmérséklettől és a
        páratartalomtól. A német csótány a helységekben bárhol, elsősorban magasabb
        helyeken fordulhat elő. A konyhai csótány és az amerikai csótány inkább
        padlószinthez közel (csatornákban, bútorok, berendezések alatt) tartózkodnak.
        Irtásukra kártevőirtó szakemberek permetezésen, hidegköd képzésen, illetve
        ULV eljáráson kívül még csótányirtó gélt (mérgezett csalétek) is alkalmazhatnak.
        Olyan helyen, ahol nem lehet irtószert használni, illetve felmérésre
        irtószermentes állomást (ragacsoslapot) is használhatunk. Ahogy az ágyi
        poloskáknál is a csótányok esetében is célszerű egy második kezelést is
        egyeztetni a kártevőirtó szakemberrel a fertőzöttség függvényében.`,
    },
    {
      id: 2,
      img: ragcsalo,
      title: "Rágcsáló irtás",
      intro: `Hazánkban két patkányfaj fordul elő a vándorpatkány és a házi patkány.`,
      text: "Hazánkban két patkányfaj fordul elő a vándorpatkány és a házi patkány. Térségünkben először a házi patkány jelent meg, de mára a vándorpatkány kiszorította és csak néha találkozunk vele. A patkányok megtalálhatóak föld alatti járatokban, csatornákban, fa- és téglarakásokban készített fészkeikben, talajszinten de házak, épületek padlásain is. Ahol megjelennek ott gyorsan elszaporodhatnak, ugyanis szaporák és három hónapos korukra ivaréretté válnak. Különböző betegségek terjesztésén kívül rágásukkal is jelentős kárt okoznak. Megrágják az épület tartószerkezeteit, villany-, vízvezetékeit. Alkalmanként nem kis kárt okozva ezzel.",
    },
    {
      id: 3,
      img: darazs,
      title: "Darázs irtás",
      intro: `A darazsak általában az embert nem bántják, kivéve ha veszélyeztetve érzik magukat, kolóniájukat.`,
      text: "A darazsak általában az embert nem bántják, kivéve ha veszélyeztetve érzik magukat, kolóniájukat. A darazsak fullánkjukat a méhektől eltérően többször is tudják használni, a befecskendezett méreg a kellemetlen csípő érzésen kívül allergiás reakciót is kiválthat. Jellemzően tavasszal kezdik meg a fészek építést, de más évszakban is szükség lehet az irtásukra.",
    },
    {
      id: 4,
      img: hangya,
      title: "Hangyairtás",
      intro: `A hangyák is kozmopolita élőlények. Hazánkban is megtalálhatók udvarokon és zárt helyeken, lakásokban, irodákban is.`,
      text: "A hangyák is kozmopolita élőlények. Hazánkban is megtalálhatók udvarokon és zárt helyeken, lakásokban, irodákban is. A szapora rovarok bolyokban élnek. Bármilyen épületben megtalálják a bejutás lehetőségét és ha kell maguk is képesek bejáratott útvonalat készíteni. Irtásukra a mérgezett csalétek gél kihelyezése és a permetezés szokott a leg célravezetőbb lenni.",
    },
    {
      id: 5,
      img: epuletek,
      title: "Vállalkozásoknak",
      intro: `Vállaljuk lakások, társasházak, vendéglátóhelyek, szálláshelyek, üzletek, iparterületek, raktárak kötelező, egyedi és rendszeres (HACCP) kártevőirtását.`,
      text: `Vállaljuk lakások, társasházak, vendéglátóhelyek, szálláshelyek, üzletek, iparterületek, raktárak kötelező, egyedi és rendszeres (HACCP) kártevőirtását.`,
    },
  ];

  const [showDetails, setShowDetails] = useState({ show: false, id: null });

  return (
    <div id="szolgaltatasok" className="pestServicesSection">
      <h3 className="title">Szolgáltatásaink</h3>
      <div className="serviceCards">
        {services.map((service) => (
          <PestServiceCard
            key={service.id}
            id={service.id}
            img={service.img}
            title={service.title}
            intro={service.intro}
            setShowDetails={setShowDetails}
          />
        ))}
      </div>
      {showDetails.show && (
        <PestServiceDetails
          img={services[showDetails.id].img}
          title={services[showDetails.id].title}
          text={services[showDetails.id].text}
          setShowDetails={setShowDetails}
        />
      )}
    </div>
  );
}

export default Services;
