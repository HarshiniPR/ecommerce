import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/About/About";
import Home from "./components/Home/Home";
import ScrollToTop from "./components/ScrollToTop";
import Wishlist from "./components/Wishlist/Wishlist";
import Orders from "./components/Orders/Orders";
function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/wishlist" element={<Wishlist />} />
          <Route exact path="/order" element={<Orders />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
