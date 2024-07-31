import { useState, useEffect } from "react";
import { dataPizzaType } from "../1-App/dataPizza/dataPizza";
import Categories from "./2.1-Categories/Categories";
import Sort from "./2.2-Sort/Sort";
import Skeleton from "../8-Skeleton/Skeleton";
import PizzaIteams from "./2.4 - PizzaIteams/PizzaIteams";

const Content = () => {
  const [dataPizza, setDataPizza] = useState<dataPizzaType[]>([]);
  const [loding, setLoding] = useState(true);

  useEffect(() => {
    fetch("https://66a7959a53c13f22a3d04f19.mockapi.io/iteams")
      .then((res) => res.json())
      .then((res) => {
        setDataPizza(() => res);
        setLoding(false);
      });
  }, []);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        {loding ? <Skeleton /> : <PizzaIteams dataPizza={dataPizza}/>}
      </div>
    </div>
  );
};

export default Content;
