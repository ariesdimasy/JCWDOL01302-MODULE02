import { Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Todo from "./pages/todo";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </>
  );
}

export default App;
