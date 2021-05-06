import React from "react";
import Food from "./Food";
import data from "./data";

export default function Container() {
  const [foodCounter, setFoodCounter] = React.useState(0);
  const [drinkCounter, setDrinkCounter] = React.useState(0);
  const [dessertCounter, setDessertCounter] = React.useState(0);

  const { foodTitles, food, drink, dessert } = data;
  const array = [food, drink, dessert];
  const object = { food, drink, dessert };

  return (
    <>
      <p className="food-title">Primeiro, seu prato</p>
      <ul className="food-list">
        {food.map((t) => (
          <Food
            counter={null}
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
