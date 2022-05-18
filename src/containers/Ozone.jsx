import Layout from '../layout/Layout';
import { OzoneChooseUsSection, OzoneContactSection, OzoneLandingSection, OzoneServiceSection } from '../components';

function Ozone() {
    return (
        <Layout>
            <OzoneLandingSection />
            <OzoneChooseUsSection />
            <OzoneServiceSection />
            <OzoneContactSection />
        </Layout>
    )
}

export default Ozone;