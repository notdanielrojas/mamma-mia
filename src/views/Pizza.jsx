// Importando los hooks y componentes necesarios de React y React Bootstrap
import { useParams, useNavigate } from "react-router-dom"; // Hooks para obtener parámetros de la URL y navegación programática
import { PizzaContext } from "../context/PizzaProvider"; // Contexto de pizzas
import { Container, Card, Button } from "react-bootstrap"; // Componentes de Bootstrap para el diseño y estilo
import { useContext } from "react"; // Hook useContext para acceder al contexto
import logoCarrito from "../assets/imgs/logo-carrito.png"; // Importando una imagen para el logo del carrito

// Definiendo el componente Pizza
export function Pizza() {
  const { id } = useParams(); // Obteniendo el parámetro 'id' de la URL
  const { pizzas, addCarrito, monedaLocal } = useContext(PizzaContext); // Desestructurando valores de PizzaContext
  const navigate = useNavigate(); // Inicializando la función navigate de useNavigate

  return (
    <Container>
      {/* Filtrando el array de pizzas para encontrar la pizza con el id coincidente */}
      {pizzas
        .filter((pizza) => pizza.id === id)
        .map((pizza) => (
          <Card key={pizza.id} className='row flex-row py-3'>
            <Container className='col-12 col-md-4'>
              <Card.Img src={pizza.img} alt={pizza.name} />{" "}
              {/* Imagen de la pizza */}
            </Container>
            <Container className='col-12 col-md-8'>
              <Card.Header>
                <span className='text-capitalize fw-bold fs-5'>
                  {pizza.name} {/* Nombre de la pizza */}
                </span>
              </Card.Header>
              <Card.Body>
                <Card.Text>{pizza.desc}</Card.Text>{" "}
                {/* Descripción de la pizza */}
                Ingredientes:
                <ul>
                  {pizza.ingredients.map((ingredient, index) => (
                    <li className='fs-6' key={index}>
                      🍕 {ingredient} {/* Listado de ingredientes */}
                    </li>
                  ))}
                </ul>
              </Card.Body>
              <Card.Footer className='text-center'>
                <Card.Text className='d-flex justify-content-around align-items-center'>
                  <span className='fw-bold fs-5'>
                    {monedaLocal(pizza.price)}{" "}
                    {/* Precio de la pizza en la moneda local */}
                  </span>
                  <Button onClick={() => navigate("/")}>Volver 🍕</Button>{" "}
                  {/* Botón para volver a la página principal */}
                  <Button onClick={() => addCarrito(pizza)}>
                    Añadir{" "}
                    <img
                      src={logoCarrito}
                      alt=''
                      className='logo-carrito-pizza'
                    />{" "}
                    {/* Botón para añadir la pizza al carrito */}
                  </Button>
                </Card.Text>
              </Card.Footer>
            </Container>
          </Card>
        ))}
    </Container>
  );
}
