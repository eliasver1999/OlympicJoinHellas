import React from "react";
import "./App.css";
import { Routes } from "react-router";
import { Route } from "react-router";
import Home from "./pages/Home";
import Elasmatikes from "./pages/Elasmatikes";
import NotFound from "./pages/NotFound";
import CookieConsent from "./component/CookieConsent/CookieConsent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="elasmatourgikes" element={<Elasmatikes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CookieConsent />
    </>
  );
}

export default App;
