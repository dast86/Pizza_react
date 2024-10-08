import { useState } from "react";
import { dataPizzaType } from "../../1-App/dataPizza/dataPizza";
import { FC } from "react";

// redux-toolkit
import { useDispatch, useSelector } from "react-redux";
import { stateAddItem } from "../../../redux/slice/ItemSlice";
import { statePutPizza } from "../../../redux/slice/ItemPizza";
import type { RootState } from "../../../redux/store";
//
import "./PizzaBlock.css";

const PizzaBlock: FC<dataPizzaType> = (props) => {
  const [activTypes, serActivTypes] = useState(0);
  const [activSizes, serActivSizes] = useState(0);
  const { imageUrl, title, types, sizes, price, id } = props;
  const pizzaTypes = ["тонкое", "традиционное"];

  const itemPizzaBasket = useSelector((state: RootState) => state.pizza.item.find((pizzaIt) => pizzaIt.id === id))
  const putPizza = useSelector((state:RootState) => state.itemPizzas.putPizza)

  const dispatch = useDispatch()

  const deletPizza = () => {
    fetch(`https://66a7959a53c13f22a3d04f19.mockapi.io/iteams/${id}`,
      {
        method: 'DELETE',
      }).then(res => res.json())
      .then(() => dispatch(statePutPizza(!putPizza))) //Это я тут вызываю, для перезагрузки страницы, этот statePutPizza отслеживается в useEffect в компоненте Content)
  }

  const addItemBasket = () => {
    dispatch(stateAddItem({
      title,
      id,
      price,
      imageUrl,
      count: 1
    }))
  };

  return (
    <div className="pizza-block">
      <span className="close"
        onClick={deletPizza}>X</span>
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((iteam) => (
            <li
              onClick={() => serActivTypes(iteam)}
              className={activTypes === iteam ? "active" : ""}
              key={iteam}
            >
              {pizzaTypes[iteam]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((iteam, i) => (
            <li
              onClick={() => serActivSizes(i)}
              className={activSizes === i ? "active" : ""}
              key={i}
            >
              {" "}
              {iteam} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div
          onClick={addItemBasket}
          className="button button--outline button--add"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>{itemPizzaBasket?.count || 0}</i>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
