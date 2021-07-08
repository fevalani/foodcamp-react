import React from "react";

export default function ConfirmButton({
  foodCounter,
  drinkCounter,
  dessertCounter,
}) {
  function foodString(foodCounter, drinkCounter, dessertCounter) {
    let price = 0;
    let foodText = "";
    let drinkText = "";
    let dessertText = "";

    foodCounter.forEach((item) => {
      price = price + item.amount * parseFloat(item.price.replace(",", "."));

      foodText =
        foodText + "\n" + (item.title + " " + "(" + item.amount + "x)");
    });

    drinkCounter.forEach((item) => {
      price = price + item.amount * parseFloat(item.price.replace(",", "."));

      drinkText =
        drinkText + "\n" + (item.title + " " + "(" + item.amount + "x)");
    });

    dessertCounter.forEach((item) => {
      price = price + item.amount * parseFloat(item.price.replace(",", "."));

      dessertText =
        dessertText + "\n" + (item.title + " " + "(" + item.amount + "x)");
    });

    let whatsAppMessageLink = `
          Olá, gostaria de fazer o pedido: \n- Prato: ${foodText}\n- Bebida: ${drinkText}\n- Sobremesa: ${dessertText}\nTotal: R$ ${price.toFixed(
      2
    )}
      `;
    return whatsAppMessageLink;
  }

  return (
    <div className="bottom-bar">
      <a
        href={
          "https://wa.me/5521999999999?text=" +
          encodeURIComponent(
            foodString(foodCounter, drinkCounter, dessertCounter)
          )
        }
      >
        <input
          className="confirm-button"
          type="button"
          value="Fechar pedido"
        ></input>
      </a>
    </div>
  );
}
