import Dishes from "./Dishes";

export default function DishesSection({
  title,
  dishes,
  dishesCounter,
  setDishesCounter,
}) {
  return (
    <>
      <p className="food-title">{title}</p>
      <ul className="food-list">
        {dishes.map((t) => (
          <Dishes
            counter={dishesCounter}
            setCounter={setDishesCounter}
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
