import { Route, Routes } from "react-router-dom";
// import HomePage from "/src/components/pages/HomeNew.jsx";s
// import DetailPage from "/src/components/pages/DetailPage.jsx";
// import FormPage from "/src/components/pages/FormPage.jsx";
import LandingPage from "./components/pages/LandingPage.jsx";
import HomePageNew from "./components/pages/HomePageNew.jsx";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/home" element={<HomePageNew />} />
      {/* 
      <Route exact path="/pokemon/:id" element={<DetailPage />} />
      <Route exact path="/form" element={<FormPage />} /> */}
    </Routes>
  );
};

export default App;
