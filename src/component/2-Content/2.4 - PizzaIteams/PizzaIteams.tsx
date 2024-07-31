import PizzaBlock from "../2.3-PizzaBlock/PizzaBlock";
import { FC } from "react";
import { dataPizzaType } from "../../1-App/dataPizza/dataPizza";


type dataPizzaProps = {
    dataPizza: dataPizzaType[]
}

const PizzaIteams:FC<dataPizzaProps> = ({dataPizza})=>{


    return(
        <div className="content__items">
        {dataPizza.map((iteamPizza) => (
          <PizzaBlock key={iteamPizza.id} {...iteamPizza} />
        ))}
      </div>
    )
}

export default PizzaIteams