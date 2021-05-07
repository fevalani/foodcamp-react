export default function Counter({
  setSelect,
  counter,
  setCounter,
  title,
  price,
  value,
  setValue,
}) {
  const selectedItem = counter.find((item) => item.title === title);
  let valueP = selectedItem !== undefined ? selectedItem.amount : 1;

  function addNumber() {
    valueP = value + 1;
    setValue(valueP);
    if (valueP === 1) {
      setCounter([
        ...counter,
        {
          title: title,
          price: price,
          amount: valueP,
        },
      ]);
      setSelect(true);
    } else {
      const arrayWithoutItem = counter.filter((item) => item !== selectedItem);
      setCounter([
        ...arrayWithoutItem,
        {
          title: title,
          price: price,
          amount: valueP,
        },
      ]);
      setSelect(true);
    }
  }

  function decrementNumber() {
    valueP = value - 1;
    const selectedItem = counter.filter((item) => item.title !== title);
    if (valueP === 0) {
      setValue(1);
      setSelect(false);
      setCounter([...selectedItem]);
    } else {
      setValue(valueP);
      setCounter([
        ...selectedItem,
        {
          title: title,
          price: price,
          amount: valueP,
        },
      ]);
    }
  }

  return (
    <div className="counter">
      <p className="subtract" onClick={decrementNumber}>
        -
      </p>
      <p className="value">{value}</p>
      <p className="add" onClick={addNumber}>
        +
      </p>
    </div>
  );
}
