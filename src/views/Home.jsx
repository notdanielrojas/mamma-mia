// Importando los hooks y componentes necesarios de React, React Router y React Bootstrap
import { useContext } from "react"; // Hook useContext para acceder al contexto
import { PizzaContext } from "../context/PizzaProvider"; // PizzaContext para obtener el estado y las funciones del contexto
import { useNavigate } from "react-router-dom"; // Hook useNavigate para navegar programáticamente
import { Container, Row, Col, Card, Button } from "react-bootstrap"; // Componentes de Bootstrap para el diseño y estilo
import logoCarrito from "../assets/imgs/logo-carrito.png"; // Importando una imagen para el logo del carrito

// Definiendo el componente Home
export function Home() {
  // Desestructurando valores de PizzaContext
  const { pizzas, addCarrito, removeCarrito, monedaLocal, carrito } =
    useContext(PizzaContext);
  const navigate = useNavigate(); // Inicializando la función navigate de useNavigate

  return (
    <>
      {/* Contenedor principal con margen inferior */}
      <Container className='home mb-3'>
        {/* Sección para el encabezado de la página principal y el texto introductorio */}
        <div className='home-body'>
          <h1 className='fw-bold'>Pizzería ¡Mamma Mia!</h1>{" "}
          {/* Título principal */}
          <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>{" "}
          {/* Texto descriptivo */}
          <hr /> {/* Separador horizontal */}
        </div>
      </Container>
      {/* Contenedor para mostrar las tarjetas de las pizzas */}
      <Container>
        <Row xs={1} sm={1} md={3} lg={4} className='g-3 mb-3'>
          {/* Mapeando el array de pizzas para mostrar cada pizza */}
          {pizzas.map((pizza) => (
            <Col key={pizza.id}>
              {" "}
              {/* Columna para cada tarjeta de pizza */}
              <Card className='card-hover'>
                {" "}
                {/* Tarjeta con efecto hover */}
                <Card.Img src={pizza.img} alt={pizza.name} />{" "}
                {/* Imagen de la pizza */}
                <Card.Header>
                  <span className='text-capitalize fw-bold'>{pizza.name}</span>{" "}
                  {/* Nombre de la pizza */}
                </Card.Header>
                <div className='card-details'>
                  <Card.Body>
                    Ingredientes: {/* Lista de ingredientes */}
                    <ul>
                      {pizza.ingredients.map((ingredient, index) => (
                        <li key={index}>🍕 {ingredient}</li> // Elemento de ingrediente
                      ))}
                    </ul>
                  </Card.Body>
                  <Card.Footer className='text-center'>
                    <Card.Text className='fw-bold mb-2'>
                      {monedaLocal(pizza.price)}{" "}
                      {/* Mostrando el precio de la pizza en la moneda local */}
                    </Card.Text>
                    <div className='d-flex justify-content-around'>
                      <Button onClick={() => navigate(`/pizza/${pizza.id}`)}>
                        Ver más 👀{" "}
                        {/* Botón para ver más detalles de la pizza */}
                      </Button>
                      {/* Comprobando si la pizza está en el carrito */}
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
