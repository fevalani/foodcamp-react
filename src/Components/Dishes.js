import React from "react";
import Counter from "./Counter";

export default function Dishes(props) {
  const [select, setSelect] = React.useState(false);
  const [value, setValue] = React.useState(1);

  const { counter, setCounter, image, alt, title, description, price } = props;

  function selectOne() {
    if (!select) {
      setSelect(true);
      setCounter([
        ...counter,
        {
          title: title,
          price: price,
          amount: value,
        },
      ]);
    }
  }

  return (
    <>
      <li
        className={select ? "food-option select" : "food-option"}
        onClick={selectOne}
      >
        <img src={image} alt={alt} />
        <p className="option-title">{title}</p>
        <p className="option-description">{description}</p>
        <div className="option-bottom">
          <p className="price">R$ {price}</p>
          {select && (
            <Counter
              value={value}
              setValue={setValue}
              price={price}
              title={title}
              setSelect={setSelect}
              counter={counter}
              setCounter={setCounter}
            />
          )}
        </div>
      </li>
    </>
  );
}
