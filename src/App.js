import React from "react";
import "./styles/global.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./pages/PageNotFound";

const App = () => (
  <Router>
    <Banner />
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
