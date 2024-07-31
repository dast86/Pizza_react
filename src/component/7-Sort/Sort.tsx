import "./Sort.css";
import { useState } from "react";

const Sort = () => {
  
  const [open, setOpen] = useState<boolean>(false);
  const [poputActive, setPoputActive] = useState<number>(0)
  const sortPopup = ["популярности", "цене", "алфавиту"];

  const popup = () => {
    return (
      <div className="sort__popup">
        <ul>
          {sortPopup.map((iteamPopup,index) => (
            <li onClick={()=>clickPoput(index)} className={poputActive=== index ? 'active':''}>{iteamPopup}</li>
          ))}
        </ul>
      </div>
    );
  };

  const clickPoput = (i:number)=>{
    setPoputActive(i)
    setOpen(false)
  }

  return (
    <div className="sort">
      <div className="sort__label">
        <b>Сортировка по:</b>
        <span onClick={()=>setOpen(!open)} >{sortPopup[poputActive]}</span>
      </div>
        {open && popup()}
    </div>
  );
};

export default Sort;
