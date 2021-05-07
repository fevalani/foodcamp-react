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
  let currentAmount = selectedItem !== undefined ? selectedItem.amount : 1;

  function addNumber() {
    currentAmount = value + 1;
    setValue(currentAmount);
    if (currentAmount === 1) {
      setCounter([
        ...counter,
        {
          title: title,
          price: price,
          amount: currentAmount,
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
          amount: currentAmount,
        },
      ]);
      setSelect(true);
    }
  }

  function decrementNumber() {
    currentAmount = value - 1;
    const selectedItem = counter.filter((item) => item.title !== title);
    if (currentAmount === 0) {
      setValue(1);
      setSelect(false);
      setCounter([...selectedItem]);
    } else {
      setValue(currentAmount);
      setCounter([
        ...selectedItem,
        {
          title: title,
          price: price,
          amount: currentAmount,
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
