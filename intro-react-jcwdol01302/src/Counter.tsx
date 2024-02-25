import { useState, useEffect } from "react";
import styles from "./Counter.module.css";

interface ICounter {
  start: number;
}

export default function Counter(props: ICounter) {
  const { start } = props;
  const [counter, setCounter] = useState<number>(0);

  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    if (start) {
      setCounter(start);
    }
  }, [start]);

  return (
    <div className={styles.counter} style={{ border: "1px solid black" }}>
      <h2 className="color-red">Counter : {counter}</h2>
      <h2>Start : {start}</h2>
      <button onClick={() => handleIncrease()}> Increase </button>
    </div>
  );
}
