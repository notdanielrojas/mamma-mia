import { Navigation } from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { Carrito } from "./views/Carrito";
import { Pizza } from "./views/Pizza";
import { NotFound } from "./views/NotFound.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/carrito' element={<Carrito />} />
        <Route path='/pizza/:id' element={<Pizza />} />
        <Route path='*' element={<NotFound />} />{" "}
      </Routes>
    </>
  );
}

export default App;
