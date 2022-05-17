import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PestControl, Ozone, Ozone_temp, Documents, PrivacyPolicy } from './containers';

// Google Analytics tracking setup
import ReactGA from 'react-ga';
const TRACKING_ID = "UA-228937825-1";
ReactGA.initialize(TRACKING_ID);

function App() {
    useEffect(
        () => {
            ReactGA.pageview(window.location.pathname + window.location.search);
        },
        []
    )
    return (
        <BrowserRouter basename={window.location.pathname}>
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
