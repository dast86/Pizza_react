import { useState } from "react";
import "./Categories.css";

const Categories = () => {
  const [activeCategories, setActiveCategories] = useState(0);
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
              setActiveCategories(i);
            }}
            key={iteam}
            className={activeCategories === i ? "active" : ""}
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
