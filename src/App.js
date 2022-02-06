import { useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LogoBar from "./components/LogoBar/LogoBar";
import Offcanvas from "./components/Offcanvas/Offcanvas";
import Products from "./components/Products/Products";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <Header setShow={setShow} />
      {show && <Offcanvas setShow={setShow} />}
      <LogoBar />
      <Products />
      <Contacts />
      <About />
      <Footer />
    </div>
  );
}

export default App;
