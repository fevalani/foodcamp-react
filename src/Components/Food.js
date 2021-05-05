import React from "react";

export default function Food() {
  return (
    <>
      <p class="food-title">Primeiro, seu prato</p>
      <ul class="food-list">
        <li class="food-option" onClick={selectOne}>
          <img src="./imagens/feijoada.jpeg" />
          <p class="option-title">Feijoada bolada</p>
          <p class="option-description">
            Uma monte de pedaço de porco diferente
          </p>
          <div class="option-bottom">
            <p class="price">R$ 17,40</p>
            <Counter />
          </div>
        </li>
      </ul>
    </>
  );
}

function Counter() {
  const [value, setValue] = React.useState(0);
  function changeNumber(num) {
    if (num === "+") {
      console.log("mais um");
      setValue(value + 1);
    } else if (num === "-") {
      console.log("menos um");
      setValue(value - 1);
    }
  }

  return (
    <div class="counter">
      <p class="subtract" onClick={() => changeNumber("-")}>
        -
      </p>
      <p class="value">{value}</p>
      <p class="add" onClick={() => changeNumber("+")}>
        +
      </p>
    </div>
  );
}

function selectOne() {}
