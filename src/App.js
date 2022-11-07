import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PestControl, Ozone } from "./containers";
import CookieConsent from "react-cookie-consent";

// Google Analytics tracking setup
import ReactGA from "react-ga";
const TRACKING_ID = "UA-228937825-1";
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <BrowserRouter basename={window.location.pathname}>
        <Routes>
          <Route path="/" element={<PestControl />} />
          <Route path="/ozone" element={<Ozone />} />
        </Routes>
      </BrowserRouter>
      <CookieConsent
        location="bottom"
        buttonText="Értem"
        cookieName="CookieConsent"
        style={{
          background: "#010252",
          "justify-content": "center",
        }}
        buttonStyle={{ background: "#34b74a", color: "#fff", fontSize: "13px" }}
        acceptOnScroll="true"
      >
        <span className="cookieText">
          Weboldalunk{" "}
          <a href="/adatvedelmi" target="_blank" className="cookieLink">
            cookie-kat (sütiket)
          </a>{" "}
          használ, hogy weboldalunk használata során a lehető legjobb
          szolgáltatást nyújthassuk ügyfeleinknek.
        </span>
      </CookieConsent>
    </>
  );
}

export default App;
