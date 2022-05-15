import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PestControl, Ozone, Ozone_temp, Documents } from './containers';


function App() {
    return (
        <BrowserRouter basename={"/frugi"}>
            <Routes>
                <Route path="/" element={ <PestControl /> }/>
                <Route path="/ozone" element={ <Ozone_temp /> }/>
                <Route path="/dokumentumok" element={ <Documents /> }/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
