import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "/src/components/pages/HomeNew.jsx";
// import DetailPage from "/src/components/pages/DetailPage.jsx";
// import FormPage from "/src/components/pages/FormPage.jsx";
import LandingPage from "./components/pages/LandingPage.jsx";

const App = () => {
    return (
        <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/home" element={<HomePage />} />
            {/* 
      <Route exact path="/pokemon/:id" element={<DetailPage />} />
      <Route exact path="/form" element={<FormPage />} /> */}
        </Routes>
    );
};

export default App;

//  PI-Pokemon-main\client\src\components\pages\LandingPage.jsx
