export default function BottomBar() {
  return (
    <div class="bottom-bar">
      <div class="fake-button">Selecione os 3 itens para fechar o pedido</div>
    </div>
  );
}

function ConfirmButton() {
  return (
    <input class="confirm-button" type="button" value="Fechar pedido"></input>
  );
}

function FakeButton() {
  return (
    <div class="fake-button">Selecione os 3 itens para fechar o pedido</div>
  );
}
