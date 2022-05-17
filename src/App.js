import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PestControl, Ozone, Ozone_temp, Documents, PrivacyPolicy } from './containers';


function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={ <PestControl /> }/>
                <Route path="/ozone" element={ <Ozone /> }/>
                <Route path="/dokumentumok" element={ <Documents /> }/>
                <Route path="/adatvedelmi" element={ <PrivacyPolicy /> }/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
