import { useRef, useCallback, useState } from "react";

import debounce from "lodash.debounce";

import { Link } from "react-router-dom";
import pizzaLogo from "../../img/pizza-logo.svg";

// Redux-tolkit  
import { useDispatch, useSelector } from "react-redux";
import { stateInput } from "../../redux/slice/SearchSlice";
import { RootState } from "../../redux/store";


import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const [textLocal, setTextLocal] = useState(``) 
  const iteamPizzaHeader = useSelector((state:RootState)=>state.pizza.item)

  const quantityPizza = iteamPizzaHeader.reduce((accumulator,iteam)=>accumulator + iteam.count,0) // Количество пицц в шапке 
  const sumPizza = iteamPizzaHeader.reduce((accumulator,iteam)=>accumulator + (iteam.price * iteam.count),0)// сумма пицц в шапке

  //  тут типа простой пример использования useRef, мол когда я кликаю на картнку лого, то у меня фокус смещается на импут. 
  const handelCkicl = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  // 

// Тут логига для того, что бы поиск запрашивал на сервере данные через секунду после того,  как мы ввели что то в поле инпут 
  const debonInput = useCallback(
    debounce((str) => {
      dispatch(stateInput(str));
    }, 1000),
    []
  );
  const onChangeSerchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextLocal(event.target.value)
    debonInput(event.target.value);
  };
// 


  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img
            onClick={() => handelCkicl()}
            width="38"
            src={pizzaLogo}
            alt="Pizza logo"
          />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <input
          ref={inputRef}
          type="text"
          value={textLocal}
          onChange={onChangeSerchInput}
        />
        <div className="header__cart">
          <Link to="/basket" className="button button--cart">
            <span>{sumPizza>0?sumPizza:0} ₽</span>
            <div className="button__delimiter"></div>
            <span>{quantityPizza >0?quantityPizza:0 }</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
