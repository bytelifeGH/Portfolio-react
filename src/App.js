import "./App.css";
import { useState } from "react";
import Home from "./components/home";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Work from "./components/Work";

function App() {
  const [showHome, setShowHome] = useState(true);

  const handleHome = ()=>{
    setShowHome(false);
  }

  return (
    <BrowserRouter>
    <>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="contact" element={<Contact/>}></Route>    
          <Route path="work" element={<Work/>}></Route>    
        </Routes>

    </>
    </BrowserRouter>
  );
}

export default App;
