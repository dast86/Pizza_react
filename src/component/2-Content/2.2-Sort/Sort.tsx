import { useSelector, useDispatch } from "react-redux";
import { statePoput } from "../../../redux/slice/FilterSlice";
import { RootState } from "../../../redux/store";
import { useState } from "react";
import "./Sort.css";



const Sort = () => {

  const popupId = useSelector((state: RootState) => state.filter.poputId)
  const dispatch = useDispatch();
  
  const [open, setOpen] = useState<boolean>(false);
  const sortPopup = ["популярности", "цене", "алфавиту"];

  const popup = () => {
    return (
      <div className="sort__popup">
        <ul>
          {sortPopup.map((iteamPopup,index) => (
            <li key={index} onClick={()=>clickPoput(index)} className={popupId=== index ? 'active':''}>{iteamPopup}</li>
          ))}
        </ul>
      </div>
    );
  };

  const clickPoput = (i:number)=>{
    dispatch(statePoput(i))
    setOpen(false)
  }

  return (
    <div className="sort">
      <div className="sort__label">
        <b>Сортировка по:</b>
        <span onClick={()=>setOpen((!open))} >{sortPopup[popupId]}</span>
      </div>
        {open && popup()}
    </div>
  );
};

export default Sort;
