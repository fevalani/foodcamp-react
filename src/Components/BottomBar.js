export default function BottomBar() {
  return (
    <div className="bottom-bar">
      <div className="fake-button">
        Selecione os 3 itens para fechar o pedido
      </div>
    </div>
  );
}

function ConfirmButton() {
  return (
    <input
      className="confirm-button"
      type="button"
      value="Fechar pedido"
    ></input>
  );
}

function FakeButton() {
  return (
    <div className="fake-button">Selecione os 3 itens para fechar o pedido</div>
  );
}
