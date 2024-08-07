import PizzaBlock from "../2.3-PizzaBlock/PizzaBlock";
import { FC } from "react";
import { dataPizzaType } from "../../1-App/dataPizza/dataPizza";

import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

type dataPizzaProps = {
  dataPizza: dataPizzaType[];
};

const PizzaIteams: FC<dataPizzaProps> = ({ dataPizza }) => {
  const pizzaInputProps = useSelector(
    (state: RootState) => state.search.textInput
  );

  return (
    <div className="content__items">
      {dataPizza
        .filter((iteamFilter) =>
          iteamFilter.title
            .toLowerCase()
            .includes(pizzaInputProps.toLowerCase())
        )
        .map((iteamPizza) => (
          <PizzaBlock key={iteamPizza.id} {...iteamPizza} />
        ))}
    </div>
  );
};

export default PizzaIteams;
