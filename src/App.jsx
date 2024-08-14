
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Homepage from "./pages/Homepage";
import Blogpage from "./pages/Blogpage";
import Aboutpage from "./pages/Aboutpage";
import Contactpage from "./pages/Contactpage";
import PageNotFound from "./pages/PageNotFound";

import "aos/dist/aos.css";
import AOS from "aos";
AOS.init();


function App() {


  return (
    <>
       <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blog" element={<Blogpage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/404" element={<PageNotFound />} />
          <Route path="/contact" element={<Contactpage />} />

        </Routes>
        </Router>
    </>
  )
}

export default App
