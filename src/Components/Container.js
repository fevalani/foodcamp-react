import React from "react";
import data from "./data";
import BottomBar from "./BottomBar";
import DishesSection from "./DishesSection";

export default function Container() {
  const [foodCounter, setFoodCounter] = React.useState([]);
  const [drinkCounter, setDrinkCounter] = React.useState([]);
  const [dessertCounter, setDessertCounter] = React.useState([]);

  const { dishesTitles, food, drink, dessert } = data;

  return (
    <>
      <DishesSection
        dishes={food}
        title={dishesTitles[0]}
        dishesCounter={foodCounter}
        setDishesCounter={setFoodCounter}
      />
      <DishesSection
        dishes={drink}
        title={dishesTitles[1]}
        dishesCounter={drinkCounter}
        setDishesCounter={setDrinkCounter}
      />
      <DishesSection
        dishes={dessert}
        title={dishesTitles[2]}
        dishesCounter={dessertCounter}
        setDishesCounter={setDessertCounter}
      />
      <BottomBar
        foodCounter={foodCounter}
        drinkCounter={drinkCounter}
        dessertCounter={dessertCounter}
      />
    </>
  );
}
