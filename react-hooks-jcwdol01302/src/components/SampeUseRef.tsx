import { useEffect, useRef, useState } from "react";

export default function SampleUseRef() {
  const [name, setName] = useState("");
  const [counter, setCounter] = useState<number>(0);
  const renderCount = useRef<number | HTMLInputElement>(0);
  const inputRef = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    console.log("render");
    inputRef.current?.focus();
  }, []);

  const handleClick = () => {
    inputRef.current?.focus();
    alert(inputRef.current?.value);
  };

  useEffect(() => {
    console.log(inputRef.current?.value);
  }, [inputRef]);

  useEffect(() => {
    //renderCount.current = renderCount.current + 1;
    //setCounter(counter + 1);
    setCounter(counter + 1);
    console.log("render");
  }, [name]);

  const hanldeClickButton = () => {

  }

  const loadDataUser = () => [
    
  ]

  return (
    <div className="App">
      <input type="text" ref={inputRef} />
      <div>{JSON.stringify(inputRef.current?.value)}</div>
      <button onClick={() => handleClick()}> Focus </button>
      <hr></hr>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>Your name : {name}</div>
      <div>Render Count : {counter} </div>
    </div>
  );
}
