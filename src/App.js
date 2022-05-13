import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PestControl, Ozone, Ozone_temp } from './containers';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <PestControl /> }/>
                <Route path="/ozone" element={ <Ozone_temp /> }/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
