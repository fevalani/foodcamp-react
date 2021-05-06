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
  const { setCounter, setSelect } = props;

  function changeNumber(num) {
    if (num === "+") {
      setValue(value + 1);
    } else if (num === "-" && value !== 0) {
      if (value === 1) {
        setValue(value - 1);
        setSelect("");
        setCounter();
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
