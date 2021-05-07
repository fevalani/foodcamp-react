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
        key={0}
        dishes={food}
        title={dishesTitles[0]}
        dishesCounter={foodCounter}
        setDishesCounter={setFoodCounter}
      />
      <DishesSection
        key={1}
        dishes={drink}
        title={dishesTitles[1]}
        dishesCounter={drinkCounter}
        setDishesCounter={setDrinkCounter}
      />
      <DishesSection
        key={2}
        dishes={dessert}
        title={dishesTitles[2]}
        dishesCounter={dessertCounter}
        setDishesCounter={setDessertCounter}
      />
      <BottomBar
        key={3}
        foodCounter={foodCounter}
        drinkCounter={drinkCounter}
        dessertCounter={dessertCounter}
      />
    </>
  );
}
