import React, { useState } from 'react';
import Layout from '../layout/Layout';
import { PestLandingSection, PestAboutSection, Pdfs, ContactSection } from '../components';
import { CgFileDocument } from 'react-icons/cg';

function PestControl() {
    const [showPdfs, setShowPdfs] = useState(false);

    return (
        <Layout>
            <PestLandingSection />
            <PestAboutSection />
            <button className='pdf' onClick={() => setShowPdfs(!showPdfs)}><CgFileDocument className='pdfIcon'/></button>
            {showPdfs && <Pdfs setShowPdfs={setShowPdfs} /> }
            <ContactSection />
        </Layout>
    )
}

export default PestControl;