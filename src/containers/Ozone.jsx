import React from 'react';
import Layout from '../layout/Layout';
import { OzoneLandingSection, OzoneServiceSection } from '../components';


function Ozone() {
    return (
        <Layout>
            <OzoneLandingSection />
            <OzoneServiceSection />
        </Layout>
    )
}

export default Ozone;