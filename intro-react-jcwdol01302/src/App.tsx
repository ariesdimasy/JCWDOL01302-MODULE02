import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Counter from "./Counter";
import "./App.css";

function App() {
  return (
    <div>
      <h1 className="color-red"> Welcome to React Router </h1>
      <hr></hr>
      <a href="/"> Home </a> | <a href="/counter"> Counter</a>
      <hr></hr>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter start={2} />} />
      </Routes>
    </div>
  );
}

export default App;
