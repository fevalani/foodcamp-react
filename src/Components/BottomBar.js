export default function BottomBar({
  foodCounter,
  drinkCounter,
  dessertCounter,
}) {
  return foodCounter === [] && drinkCounter === [] && dessertCounter === []
    ? ConfirmButton()
    : FakeButton();
}

function ConfirmButton() {
  return (
    <div className="bottom-bar">
      <input
        className="confirm-button"
        type="button"
        value="Fechar pedido"
      ></input>
    </div>
  );
}

function FakeButton() {
  return (
    <div className="bottom-bar">
      <div className="fake-button">
        Selecione os 3 itens para fechar o pedido
      </div>
    </div>
  );
}
