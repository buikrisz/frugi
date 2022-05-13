import React, { useState } from 'react';
import Layout from '../layout/Layout';
import { PestLandingSection, PestAboutSection, Pdfs } from '../components';
import { CgFileDocument } from 'react-icons/cg';

function PestControl() {
    const [showPdfs, setShowPdfs] = useState(false);

    return (
        <Layout>
            <PestLandingSection />
            <PestAboutSection />
            <button className='pdf' onClick={() => setShowPdfs(!showPdfs)}><CgFileDocument className='pdfIcon'/></button>
            {showPdfs && <Pdfs setShowPdfs={setShowPdfs} /> }
        </Layout>
    )
}

export default PestControl;