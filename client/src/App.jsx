import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "/src/components/pages/LandingPage.jsx";
import HomePage from "/src/components/pages/HomePage.jsx";
import DetailPage from "/src/components/pages/DetailPage.jsx";
import FormPage from "/src/components/pages/FormPage.jsx";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/home" component={HomePage} />
                <Route exact path="/pokemon/:id" component={DetailPage} />
                <Route exact path="/form" component={FormPage} />
            </Switch>
        </Router>
    );
};

export default App;

//  PI-Pokemon-main\client\src\components\pages\LandingPage.jsx
