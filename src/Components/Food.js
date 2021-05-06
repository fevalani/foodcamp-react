import React from "react";

export default function Food(props) {
  const [select, setSelect] = React.useState("");
  const [counter, setCounter] = React.useState();

  function selectOne() {
    setSelect("select");
    setCounter(<Counter setCounter={setCounter} setSelect={setSelect} />);
  }

  return (
    <>
      <li class={"food-option " + select} onClick={selectOne}>
        <img src={props.image} />
        <p class="option-title">{props.title}</p>
        <p class="option-description">{props.description}</p>
        <div class="option-bottom">
          <p class="price">R$ {props.price}</p>
          {counter}
        </div>
      </li>
    </>
  );
}

function Counter(props) {
  const [value, setValue] = React.useState(1);

  function changeNumber(num) {
    if (num === "+") {
      setValue(value + 1);
    } else if (num === "-" && value !== 0) {
      setValue(value - 1);
      if (value === 1) {
        props.setSelect("");
        props.setCounter();
      }
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
