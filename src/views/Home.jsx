import { useContext } from "react";
import { PizzaContext } from "../context/PizzaProvider";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import logoCarrito from "../assets/imgs/logo-carrito.png";

export function Home() {
  const { pizzas, addCarrito, removeCarrito, monedaLocal, carrito } =
    useContext(PizzaContext);
  const navigate = useNavigate();

  return (
    <>
      <Container className='home mb-3'>
        <div className='home-body'>
          <h1 className='fw-bold'>Pizzería Mamma Mia!</h1>
          <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
          <hr />
        </div>
      </Container>
      <Container>
        <Row xs={1} sm={1} md={3} lg={4} className='g-3 mb-3'>
          {pizzas.map((pizza) => (
            <Col key={pizza.id}>
              <Card className='card-hover'>
                <Card.Img src={pizza.img} alt={pizza.name} />
                <Card.Header>
                  <span className='text-capitalize fw-bold'>{pizza.name}</span>
                </Card.Header>
                <div className='card-details'>
                  <Card.Body>
                    Ingredientes:
                    <ul>
                      {pizza.ingredients.map((ingredients, index) => (
                        <li key={index}>🍕 {ingredients}</li>
                      ))}
                    </ul>
                  </Card.Body>
                  <Card.Footer className='text-center'>
                    <Card.Text className='fw-bold mb-2'>
                      {monedaLocal(pizza.price)}
                    </Card.Text>
                    <div className='d-flex justify-content-around'>
                      <Button onClick={() => navigate(`/pizza/${pizza.id}`)}>
                        Ver más 👀
                      </Button>
                      {carrito.some((item) => item.id === pizza.id) ? (
                        <Button onClick={() => removeCarrito(pizza.id)}>
                          Remover{" "}
                          <img
                            src={logoCarrito}
                            alt=''
                            className='logo-carrito-home'
                          />
                        </Button>
                      ) : (
                        <Button onClick={() => addCarrito(pizza)}>
                          Añadir{" "}
                          <img
                            src={logoCarrito}
                            alt=''
                            className='logo-carrito-home'
                          />
                        </Button>
                      )}
                    </div>
                  </Card.Footer>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
