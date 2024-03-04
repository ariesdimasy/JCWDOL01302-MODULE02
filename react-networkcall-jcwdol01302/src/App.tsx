//import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Todos from "./pages/Todos";
import Superhero from "./pages/Superhero";
import SuperheroDetail from "./pages/SuperheroDetail";

function App() {
  // useEffect(() => {
  //   localStorage.clear();
  // });

  return (
    <>
      <Routes>
        <Route path="/" element={<Superhero />}></Route>
        <Route path="/superhero/:id" element={<SuperheroDetail />}></Route>
        <Route path="/todos" element={<Todos />}></Route>
      </Routes>
    </>
  );
}

export default App;
