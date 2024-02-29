import { useState, useEffect } from "react";
import styles from "./Counter.module.css";

interface ICounter {
  start: number | null | undefined;
}

export default function Counter(props: ICounter) {
  const { start } = props;
  const [counter, setCounter] = useState<number | null | undefined>(0);
  const [hobbies, setHobbies] = useState<{ id: number; title: string }[]>([
    {
      id: 1,
      title: "playing games",
    },
  ]);
  const [person, setPerson] = useState<{ id: number; name: string }>({});
  const [name, setName] = useState<string>("");

  // this.setState({ counter: counter + 1 })
  // set

  const handleIncrease = () => {
    if (typeof counter === "number") {
      setCounter(counter + 1);
    }

    hobbies.push({
      id: hobbies[hobbies.length - 1].id + 1,
      title: "playing games again",
    });

    setHobbies(hobbies);

    // person.id = 1;
    // person.name = "Dimas";

    setPerson({
      id: 1,
      name: "dimas",
    });
  };

  // useEffect(() => {
  //   alert(" component rendered ");
  // }, [counter]);

  // useEffect(() => {
  //   alert(" persen changed");
  // }, [person]);

  // useEffect(() => {
  //   console.log(name);
  // }, [name]);

  return (
    <div className={styles.counter} style={{ border: "1px solid black" }}>
      <h2 className="color-red">Counter : {counter}</h2>
      <h3>{JSON.stringify(hobbies)}</h3>
      <h3>{JSON.stringify(person)}</h3>
      <h2>Start : {start}</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <button onClick={() => handleIncrease()}> Increase </button>
    </div>
  );
}
