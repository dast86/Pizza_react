import { Routes, Route } from "react-router-dom";

import Header from "../4-Header/Header";
import Content from "../2-Content/Content";
import Basket from "../6-Basket/Basket";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="*" element={<Content />} />
      </Routes>
    </div>
  );
}

export default App;
