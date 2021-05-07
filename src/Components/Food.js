import React from "react";

export default function Food(props) {
  const [select, setSelect] = React.useState("");
  const [counter, setCounter] = React.useState();
  console.log(props.counter);
  console.log(setCounter);
  console.log(setSelect);

  function selectOne() {
    setSelect("select");
    setCounter(
      <Counter
        setDishesCounter={props.Counter}
        setCounter={setCounter}
        setSelect={setSelect}
      />
    );
    props.Counter(1);
  }

  return (
    <>
      <li className={"food-option " + select} onClick={selectOne}>
        <img src={props.image} />
        <p className="option-title">{props.title}</p>
        <p className="option-description">{props.description}</p>
        <div className="option-bottom">
          <p className="price">R$ {props.price}</p>
          {counter}
        </div>
      </li>
    </>
  );
}

function Counter(props) {
  const [value, setValue] = React.useState(1);
  const { setCounter, setSelect, setDishesCounter } = props;
  console.log(value);

  function changeNumber(num) {
    if (num === "+") {
      setValue(value + 1);
    } else if (num === "-" && value !== 0) {
      if (value === 1) {
        console.log("on");
        setValue(value - 1);
        setSelect("");
        setCounter();
        setDishesCounter(0);
        return;
      } else {
        setValue(value - 1);
      }
    }
  }

  return (
    <div className="counter">
      <p className="subtract" onClick={() => changeNumber("-")}>
        -
      </p>
      <p className="value">{value}</p>
      <p className="add" onClick={() => changeNumber("+")}>
        +
      </p>
    </div>
  );
}
