import { useMemo, useState } from "react";

export default function SampleUseMemo() {
  const [number, setNumber] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const incrementNumber = () => setNumber((number: number) => number + 1);
  const incrementCount = () => setCount((count: number) => count + 1);

  const isNumberEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) {
      //console.log(i);
      i++;
    }

    return number % 2 === 0;
  }, [number]);

  return (
    <div>
      <button onClick={incrementNumber}> Number : {number}</button>
      <div>{isNumberEven ? "even" : "odd"}</div>
      <button onClick={incrementCount}> count : {count}</button>
    </div>
  );
}
