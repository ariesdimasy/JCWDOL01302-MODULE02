//import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Todos from "./pages/Todos";
import Superhero from "./pages/Superhero";
import SuperheroDetail from "./pages/SuperheroDetail";
import User from "./pages/User";
import Register from "./pages/Register";

function App() {
  // useEffect(() => {
  //   localStorage.clear();
  // });

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Superhero />}></Route>
        <Route path="/superhero/:id" element={<SuperheroDetail />}></Route>
        <Route path="/todos" element={<Todos />}></Route>
        <Route path="/users" element={<User />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
