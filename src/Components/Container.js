import Food from "./Food";

const food = [
  {
    image: "./imagens/feijoada.jpeg",
    title: "Feijoada bolada",
    description: "Uma monte de pedaço de porco diferente",
    price: "17,40",
  },
  {
    image: "./imagens/feijoada.jpeg",
    title: "Feijoada bolada",
    description: "Uma monte de pedaço de porco diferente",
    price: "17,40",
  },
];
const drink = [{ image: "", title: "", description: "", price: "" }];
const dessert = [{ image: "", title: "", description: "", price: "" }];

export default function Container() {
  return (
    <>
      <p class="food-title">Primeiro, seu prato</p>
      <ul class="food-list">
        {food.map((t) => (
          <Food
            image={t.image}
            title={t.title}
            description={t.description}
            price={t.price}
          />
        ))}
      </ul>
      <p class="food-title">Agora, sua bebida</p>
      <ul class="food-list">
        <Food
          image="./imagens/feijoada.jpeg"
          title="Feijoada bolada"
          description="Uma monte de pedaço de porco diferente"
          price="17,40"
        />
      </ul>
      <p class="food-title">Por fim, sua sobremesa</p>
      <ul class="food-list">
        <Food
          image="./imagens/feijoada.jpeg"
          title="Feijoada bolada"
          description="Uma monte de pedaço de porco diferente"
          price="17,40"
        />
      </ul>
    </>
  );
}
