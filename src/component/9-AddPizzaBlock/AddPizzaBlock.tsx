import { FC, useEffect, useRef, useState } from "react";
// Redux-tolkit  
import { useDispatch, useSelector } from "react-redux";
import { statePutPizza } from "../../redux/slice/ItemPizza";
import { AppDispatch, RootState } from "../../redux/store";

import "./AddPizzaBlock.css"


type AddPizzaBlockProps ={
    flagModal: (open:boolean) => void
}

const AddPizzaBlock:FC<AddPizzaBlockProps> = ({flagModal}) => {

    const putPizza = useSelector((state:RootState) => state.itemPizzas.putPizza)
    const dispatch:AppDispatch = useDispatch()

    const [title, setTitle] = useState(``)
    const [price, setPrice] = useState('')


    const onChangeName = (fn:(value:string) =>void) => (e:React.ChangeEvent<HTMLInputElement>) =>{
        const value = e.target.value;
        fn(value)
    }
    
    const addForm = (event:React.FormEvent<HTMLFormElement>)=> {
        event.preventDefault()
        const newPizza = {
            category: 2,
            id: 5, 
            imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg",
            price: Number(price),
            rating:2,
            sizes: [30, 40],
            title: title,
            types: [0]
        }
        fetch("https://66a7959a53c13f22a3d04f19.mockapi.io/iteams",
            {
                method: "POST",
                headers: {'content-type':'application/json'},
                body: JSON.stringify(newPizza)
            }).then(res => res.json())
            .then(() => {
                flagModal(false)
                dispatch(statePutPizza(!putPizza)) //Это я тут вызываю, для ререндера компонента 2-Content, этот statePutPizza отслеживается в useEffect Content и тем самым после добавления новой пиццы она появлсяется на странице
            }
         )
    }
   
// ------------------Скрытие модального окна после появления
    const modalRef = useRef<HTMLDivElement>(null);
    const closeModal = (event: MouseEvent) => {
        if (
          modalRef.current &&
          !modalRef.current.contains(event.target as Node) // данную строчку сделал через чат GPT
        ) {
            flagModal(false);
        }
      };
    
      useEffect(() => {
          document.addEventListener('mousedown', closeModal );
        return () => {
          document.removeEventListener('mousedown', closeModal);
        };
      }, []);
//---------------------------------- 



    return (
        <div className="modal">
            <div className="modal-content"
            ref={modalRef}>
                <h2>Добавить пиццу</h2>
                <form onSubmit={addForm}>
                    <div>
                        <label>Название пиццы:</label>
                        <input type="text"  value={title} onChange={onChangeName(setTitle)}/>
                    </div>
                    <div>
                        <label>Стоимость:</label>
                        <input type="number" value={price}  onChange={onChangeName(setPrice)} />
                    </div>
                    <button type="submit" >Добавить</button>
                </form>
            </div>
        </div>
    )
}


export default AddPizzaBlock