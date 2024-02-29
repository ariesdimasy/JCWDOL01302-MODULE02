import useCounter from "../hooks/useCounter";

export default function CounterNew() {
  const [count, increment, decrement] = useCounter(2, 3);

  return (
    <div>
      <h1> Counter {count}</h1>
      <button onClick={() => decrement()}> -</button>
      <button onClick={() => increment()}> + </button>
    </div>
  );
}

// fetch('jsonplaceholder.typicode.com/')
