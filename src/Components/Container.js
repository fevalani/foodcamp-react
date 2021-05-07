import React from "react";
import Food from "./Food";
import data from "./data";

export default function Container() {
  const [foodCounter, setFoodCounter] = React.useState([]);
  const [drinkCounter, setDrinkCounter] = React.useState([]);
  const [dessertCounter, setDessertCounter] = React.useState([]);

  const { foodTitles, food, drink, dessert } = data;

  const array = ["food", "drink", "dessert"];

  return (
    <>
      <DishesSection
        dishes={food}
        title={foodTitles[0]}
        foodCounter={foodCounter}
        setFoodCounter={setFoodCounter}
      />
      <p className="food-title">Primeiro, seu prato</p>
      <ul className="food-list">
        {food.map((t) => (
          <Food
            counter={foodCounter}
            setCounter={setFoodCounter}
            image={t.image}
            alt={t.alt}
            title={t.title}
            description={t.description}
            price={t.price}
          />
        ))}
      </ul>

      <p className="food-title">Agora, sua bebida</p>
      <ul className="food-list">
        {drink.map((t) => (
          <Food
            counter={setDrinkCounter}
            image={t.image}
            alt={t.alt}
            title={t.title}
            description={t.description}
            price={t.price}
          />
        ))}
      </ul>

      <p className="food-title">Por fim, sua sobremesa</p>
      <ul className="food-list">
        {dessert.map((t) => (
          <Food
            counter={setDessertCounter}
            image={t.image}
            alt={t.alt}
            title={t.title}
            description={t.description}
            price={t.price}
          />
        ))}
      </ul>
    </>
  );
}

/*dishes={food}
title={foodTitles[0]}
foodCounter={foodCounter}
setFoodCounter={setFoodCounter}

export default */

function DishesSection(props) {
  console.log(props);
  return (
    <>
      <p className="food-title">{props.title}</p>
      <ul className="food-list">
        {props.dishes.map((t) => (
          <Food
            counter={props.foodCounter}
            setCounter={props.setFoodCounter}
            image={t.image}
            alt={t.alt}
            title={t.title}
            description={t.description}
            price={t.price}
          />
        ))}
      </ul>
    </>
  );
}
