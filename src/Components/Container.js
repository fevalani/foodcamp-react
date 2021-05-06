import React from "react";
import Food from "./Food";
import data from "./data";

export default function Container() {
  const [foodObj, setFoodObj] = React.useState(data.food);
  const [drinkObj, setDrinkObj] = React.useState(data.drink);
  const [dessertObj, setDessertObj] = React.useState(data.dessert);

  return (
    <>
      <p className="food-title">Primeiro, seu prato</p>
      <ul className="food-list">
        {foodObj.map((t) => (
          <Food
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
        {drinkObj.map((t) => (
          <Food
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
        {dessertObj.map((t) => (
          <Food
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
