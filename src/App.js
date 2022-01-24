import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Offcanvas from "./components/Offcanvas/Offcanvas";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <Header setShow={setShow} />
      {show && <Offcanvas setShow={setShow} />}
    </div>
  );
}

export default App;
