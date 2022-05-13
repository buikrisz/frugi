import React from 'react';
import Layout from '../layout/Layout';
import { PestLandingSection, PestAboutSection } from '../components';

function PestControl() {
    return (
        <Layout>
            <PestLandingSection />
            <PestAboutSection />
        </Layout>
    )
}

export default PestControl;