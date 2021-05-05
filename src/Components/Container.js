import Food from "./Food";

export default function Container() {
  return (
    <>
      <p class="food-title">Primeiro, seu prato</p>
      <Food
        img="./imagens/feijoada.jpeg"
        title="Feijoada bolada"
        discription="Uma monte de pedaço de porco diferente"
        price="17,40"
      />
      <p class="food-title">Agora, sua bebida</p>
      {/*<Drinks />*/}
      <p class="food-title">Por fim, sua sobremesa</p>
      {/*<Dessert />*/}
    </>
  );
}
