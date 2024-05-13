import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './Footer/footer1.js';
// import Navbar from './NavBar/Nav';
import About from './About/components/App';
import Home from './Home/Section2/section2.js';
// import Contact from './Contact/ContactLink';
// import FSD from './Services/Pages/fsd';
// import GenAI from './Services/Pages/genai';
// import SAP from './Services/Pages/sap';
// import ML from './Services/Pages/ml';
// import UIUX from './Services/Pages/uiux';
// import Edu from './Services/Pages/events';
// import Portfolio from './Portfolios/portfolio';

const App = () => {
  // const location = useLocation();
  // const isPortfolioRoute = location.pathname === '/about/employee/portfolio/mfai001';

  return (
    <>
      {/* <Navbar /> */}
      <Router>
      <Routes>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        {/* <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/Service/FSD" element={<FSD/>}></Route>
        <Route path="/Service/UIUX" element={<UIUX/>}></Route>
        <Route path="/Service/GenAI" element={<GenAI/>}></Route>
        <Route path="/Service/SAP" element={<SAP/>}></Route>
        <Route path="/Service/ML" element={<ML/>}></Route>
        <Route path="/Service/Edu" element={<Edu/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about/employee/portfolio/mfai001" element={<Portfolio/>}></Route> */} 
      </Routes>
      {/* {!isPortfolioRoute && <Footer />} */}
      </Router>
      <Footer/>
    </> 
  );
};

export default App;
