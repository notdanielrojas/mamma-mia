import { useParams, useNavigate } from "react-router-dom";
import { PizzaContext } from "../context/PizzaProvider";
import { Container, Card, Button } from "react-bootstrap";
import { useContext } from "react";
import logoCarrito from "../assets/imgs/logo-carrito.png";

export function Pizza() {
  const { id } = useParams();
  const { pizzas, addCarrito, monedaLocal } = useContext(PizzaContext);
  const navigate = useNavigate();

  return (
    <Container>
      {pizzas
        .filter((pizza) => pizza.id === id)
        .map((pizza) => (
          <Card key={pizza.id} className='row flex-row py-3'>
            {" "}
            <Container className='col-12 col-md-4'>
              <Card.Img src={pizza.img} alt={pizza.name} />
            </Container>
            <Container className='col-12 col-md-8'>
              <Card.Header>
                <span className='text-capitalize fw-bold fs-5'>
                  {pizza.name}
                </span>
              </Card.Header>
              <Card.Body>
                <Card.Text>{pizza.desc}</Card.Text>
                Ingredientes:
                <ul>
                  {pizza.ingredients.map((ingredients, index) => (
                    <li className='fs-6' key={index}>
                      🍕 {ingredients}
                    </li>
                  ))}
                </ul>
              </Card.Body>
              <Card.Footer className='text-center'>
                <Card.Text className='d-flex justify-content-around align-items-center'>
                  <span className='fw-bold fs-5'>
                    {monedaLocal(pizza.price)}
                  </span>
                  <Button onClick={() => navigate("/")}>Volver 🍕</Button>
                  <Button onClick={() => addCarrito(pizza)}>
                    Añadir{" "}
                    <img
                      src={logoCarrito}
                      alt=''
                      className='logo-carrito-pizza'
                    />
                  </Button>
                </Card.Text>
              </Card.Footer>
            </Container>
          </Card>
        ))}
    </Container>
  );
}
