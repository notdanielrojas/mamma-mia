import { useContext } from "react";
import { PizzaContext } from "../context/PizzaProvider";
import { Container, Button } from "react-bootstrap";
import PizzaCarrito from "../components/PizzaCarrito";
import { useNavigate } from "react-router-dom";

export const Carrito = () => {
  const { carrito } = useContext(PizzaContext);
  const navigate = useNavigate();
  return (
    <Container className='carrito p-0 mt-3'>
      <h1 className='fs-4'>Detalle del pedido:</h1>
      {carrito.length === 0 ? (
        <p>Aun no añades pizzas al carrito.</p>
      ) : (
        <PizzaCarrito />
      )}
      <Button onClick={() => navigate("/")}>Volver 🍕</Button>
    </Container>
  );
};
