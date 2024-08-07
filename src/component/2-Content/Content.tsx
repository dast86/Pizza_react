import { useState, useEffect } from "react";
import { dataPizzaType } from "../1-App/dataPizza/dataPizza";
import Categories from "./2.1-Categories/Categories";
import Sort from "./2.2-Sort/Sort";
import Skeleton from "../8-Skeleton/Skeleton";
import PizzaIteams from "./2.4 - PizzaIteams/PizzaIteams";
import axios from "axios";

// redux-toolkit
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
// 








const Content = () => {

  const [dataPizza, setDataPizza] = useState<dataPizzaType[]>([]);
  const [loding, setLoding] = useState(true);

  const activeCategories: number = useSelector(
    (state: RootState) => state.filter.categoryId
  );
  const poputIdContent: number = useSelector(
    (state: RootState) => state.filter.poputId
  );
  const sortArr = ["rating", `price`, `title`];

  useEffect(() => {
    setLoding(true);
    axios
      .get(
        activeCategories
          ? `https://66a7959a53c13f22a3d04f19.mockapi.io/iteams?sortBy=${sortArr[poputIdContent]}&order=desc&category=${activeCategories}`
          : `https://66a7959a53c13f22a3d04f19.mockapi.io/iteams?sortBy=${sortArr[poputIdContent]}&order=desc`
      )
      .then((res) => {
        setDataPizza(() => res.data);
        setLoding(false);
      });
  }, [activeCategories, poputIdContent]);


 

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        {loding ? <Skeleton /> : <PizzaIteams dataPizza={dataPizza} />}
      </div>
    </div>
  );
};

export default Content;
