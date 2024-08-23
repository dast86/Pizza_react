import { useEffect } from "react";
import Categories from "./2.1-Categories/Categories";
import Sort from "./2.2-Sort/Sort";
import Skeleton from "../8-Skeleton/Skeleton";
import PizzaIteams from "./2.4 - PizzaIteams/PizzaIteams";

// redux-toolkit
import { useSelector,useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import { fetchPizzas } from "../../redux/slice/ItemPizza";
// 


const Content =  () => {
  
  const dispatch:AppDispatch = useDispatch()
  const {itemPizza, loding} = useSelector((state:RootState) => state.itemPizzas)

  const activeCategories: number = useSelector(
    (state: RootState) => state.filter.categoryId
  );
  const poputIdContent: number = useSelector(
    (state: RootState) => state.filter.poputId
  );
  const sortArr = ["rating", `price`, `title`];

  // Тут используется axios вместо fetch
  useEffect(() => {
    
    dispatch( fetchPizzas({
      sortArr,
      poputIdContent,
      activeCategories
    }))
   
  }, [activeCategories,poputIdContent]);


 

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        {loding === "loding" ? <Skeleton /> : <PizzaIteams dataPizza={itemPizza} />}
      </div>
    </div>
  );
};

export default Content;
