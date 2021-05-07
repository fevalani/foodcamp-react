import ConfirmButton from "./ConfirmButton";
import FakeButton from "./FakeButton";

export default function BottomBar({
  foodCounter,
  drinkCounter,
  dessertCounter,
}) {
  return foodCounter.length !== 0 &&
    drinkCounter.length !== 0 &&
    dessertCounter.length !== 0 ? (
    <ConfirmButton
      foodCounter={foodCounter}
      drinkCounter={drinkCounter}
      dessertCounter={dessertCounter}
    />
  ) : (
    <FakeButton />
  );
}
