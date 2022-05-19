import React, { useState } from 'react';
import Layout from '../layout/Layout';
import { PestLandingSection, PestAboutSection, Pdfs, ContactSection } from '../components';
import { CgFileDocument } from 'react-icons/cg';
import MetaTags from 'react-meta-tags';

function PestControl() {
    const [showPdfs, setShowPdfs] = useState(false);

    const pestServiceStructuredData = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        headline: "Kártevőirtás",
        description: "Minőségi kártevőirtás (ágyi poloska, csótány, patkány, darázs, hangya, moly)",
        address: "2120, Dunakeszi Mária utca 23.",
        email: "frugiozone@gmail.com",
        founder: "Kovács Tibor Géza",
        keywords: "ágyi poloska, csótány, patkány, darázs, hangya, moly, irtás, rovar, rovarirtás, kártevő, rágcsáló",
        legalName: "Frugi-Cont Kft.",
        telephone: "+36-70-338-4734"
    };

    return (
        <Layout>
            <script type="application/ld+json">
                {JSON.stringify(pestServiceStructuredData)}
            </script>
            <MetaTags>
                <title>FrugiOzone Kártevőirtás</title>
                <meta name="description" content="Hatékony és tartós kártevőirtás. Szabaduljon meg az ágyi poloska, csótány, rágcsálók, darázs, hangya és moly okozta kellemetlenségektől. Cégünk szakemberei minőségi irtószerekkel teszik kellemesebbé mindennapjaikat."/>
            </MetaTags>
            <PestLandingSection />
            <PestAboutSection />
            <button className='pdf' onClick={() => setShowPdfs(!showPdfs)}><CgFileDocument className='pdfIcon'/></button>
            {showPdfs && <Pdfs setShowPdfs={setShowPdfs} /> }
            <ContactSection />
        </Layout>
    )
}

export default PestControl;