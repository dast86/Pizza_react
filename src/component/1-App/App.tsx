import { useState, useEffect } from "react";
import Header from "../2-Header/Header";
import Categories from "../3-Categories/Categories";
import Sort from "../4-Sport/Sort";
import PizzaBlock from "../5-PizzaBlock/PizzaBlock";
import { dataPizzaType } from "./dataPizza/dataPizza";
import "./App.css";

function App() {
  const [dataPizza, setDataPizza] = useState<dataPizzaType[]>([]);

  useEffect(() => {
    fetch("https://66a7959a53c13f22a3d04f19.mockapi.io/iteams")
      .then((res) => res.json())
      .then((res) => setDataPizza(() => res));
  }, []);

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {dataPizza.map((iteamPizza) => (
                <PizzaBlock key={iteamPizza.id}{...iteamPizza} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
