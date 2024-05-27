import { Container, Navbar } from "react-bootstrap";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { PizzaContext } from "../context/PizzaProvider";
import logoCarrito from "../assets/imgs/logo-carrito.png";
import logo from "../assets/imgs/logo.png";

export const Navigation = () => {
  const { totalCarrito, monedaLocal } = useContext(PizzaContext);

  return (
    <Navbar sticky='top'>
      <Container>
        <Link to={"/"} className='navegacion'>
          <img src={logo} alt='Logo Pizza' className='logo' />
          <span>Pizzeria Mamma Mia!</span>
        </Link>
        <div className='logo-carrito-container'>
          {" "}
          <Link
            to={"/carrito"}
            className={totalCarrito ? "logo-carrito-price" : "carrito"}
          >
            <img src={logoCarrito} alt='' className='logo-carrito' />
            {totalCarrito ? "  " + monedaLocal(totalCarrito) : null}
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};
