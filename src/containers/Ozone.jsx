import Layout from '../layout/Layout';
import { OzoneContactSection, OzoneLandingSection, OzoneServiceSection } from '../components';

function Ozone() {
    return (
        <Layout>
            <OzoneLandingSection />
            <OzoneServiceSection />
            <OzoneContactSection />
        </Layout>
    )
}

export default Ozone;