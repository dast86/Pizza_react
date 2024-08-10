import { useSelector, useDispatch } from "react-redux";
import { statePoput } from "../../../redux/slice/FilterSlice";
import { RootState } from "../../../redux/store";
import { useEffect, useRef, useState } from "react";
import "./Sort.css";

const Sort = () => {
  const popupId = useSelector((state: RootState) => state.filter.poputId);
  const dispatch = useDispatch();
  const sortRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const sortPopup = ["популярности", "цене", "алфавиту"];

  const popup = () => {
    return (
      <div className="sort__popup">
        <ul>
          {sortPopup.map((iteamPopup, index) => (
            <li
              key={index}
              onClick={() => clickPoput(index)}
              className={popupId === index ? "active" : ""}
            >
              {iteamPopup}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const clickPoput = (i: number) => {
    dispatch(statePoput(i));
    setOpen(false);
  };

  // Код который скрывает выпатающую сортировку при клике вне ее области
  useEffect(() => {
    document.body.addEventListener(`click`, (event) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setOpen(false);
      }
    });
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>{sortPopup[popupId]}</span>
      </div>
      {open && popup()}
    </div>
  );
};

export default Sort;
