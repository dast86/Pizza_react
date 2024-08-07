// import { useState } from "react";
import type { RootState } from "../../../redux/store";

import { useSelector, useDispatch } from "react-redux";
import { stateFilter } from "../../../redux/slice/FilterSlice";
import "./Categories.css";

const Categories = () => {
  const value = useSelector((state: RootState) => state.filter.categoryId)
  const dispatch = useDispatch();
  
  // const [activeCategories, setActiveCategories] = useState(0);
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  return (
    <div className="categories">
      <ul>
        {categories.map((iteam, i) => (
          <li
            onClick={() => {
              dispatch(stateFilter(i));
            }}
            key={iteam}
            className={value === i ? "active" : ""}
          >
            {" "}
            {iteam}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
