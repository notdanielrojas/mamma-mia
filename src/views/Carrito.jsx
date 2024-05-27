import { useContext } from "react";
import { PizzaContext } from "../context/PizzaProvider";
import { Container } from "react-bootstrap";
import PizzaCarrito from "../components/PizzaCarrito";

export const Carrito = () => {
  const { carrito } = useContext(PizzaContext);
  return (
    <Container className='carrito p-0 mt-3'>
      <h1 className='fs-4'>Detalle del pedido:</h1>
      {carrito.length === 0 ? (
        <p>Aun no añades pizzas al carrito.</p>
      ) : (
        <PizzaCarrito />
      )}
    </Container>
  );
};
