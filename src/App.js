import "./App.css";
// import { useState } from "react";
import Home from "./components/home";
// import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Work from "./components/Work";
import OurGoals from "./components/OurGoals";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    
    <BrowserRouter>
    <>
        <Routes>
          <Route path="/Portfolio-react" element={<Home/>}></Route>
          {/* <Route path="contact" element={<Contact/>}></Route>      */}
          <Route path="about" element= {<AboutUs/>}></Route>
          <Route path="goals" element={<OurGoals/>}></Route>
          <Route path="work" element={<Work/>}></Route>    
        </Routes>

    </>
    </BrowserRouter>
  );
}

export default App;
