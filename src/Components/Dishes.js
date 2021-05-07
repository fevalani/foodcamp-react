import React from "react";

export default function Dishes(props) {
  const [select, setSelect] = React.useState("");
  const [value, setValue] = React.useState(0);
  const [sectionCounter, setSectionCounter] = React.useState();

  const { counter, setCounter, image, alt, title, description, price } = props;

  function selectOne(title, price, value) {
    if (select) {
      setSelect("select");
      sectionCounter = (
        <Counter
          value={value}
          setValue={setValue}
          select={select}
          setSelect={setSelect}
        />
      );
      setCounter([
        ...counter,
        {
          name: { title },
          price: { price },
          qtd: { value },
        },
      ]);
      setValue(1);
    }
  }

  return (
    <>
      <li
        className={"food-option " + select}
        onClick={() => selectOne(title, price, value)}
      >
        <img src={image} alt={alt} />
        <p className="option-title">{title}</p>
        <p className="option-description">{description}</p>
        <div className="option-bottom">
          <p className="price">R$ {price}</p>
          {sectionCounter}
        </div>
      </li>
    </>
  );
}

function Counter(props) {
  const { value, setValue, select, setSelect } = props;

  function changeNumber(num) {
    if (num === "+") {
      setValue(value + 1);
    } else if (num === "-" && value !== 0) {
      if (value === 1) {
        setValue(value - 1);
        setSelect("");
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
