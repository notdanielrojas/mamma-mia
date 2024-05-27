// Importando los hooks y componentes necesarios de React y React Bootstrap
import { useContext } from "react"; // Hook useContext para acceder al contexto
import { PizzaContext } from "../context/PizzaProvider"; // Contexto de pizzas
import { Container, Button } from "react-bootstrap"; // Componentes de Bootstrap para el diseño y estilo
import PizzaCarrito from "../components/PizzaCarrito"; // Componente personalizado para mostrar las pizzas en el carrito
import { useNavigate } from "react-router-dom"; // Hook useNavigate para navegar programáticamente

// Definiendo el componente Carrito
export const Carrito = () => {
  const { carrito } = useContext(PizzaContext); // Obteniendo el estado del carrito del contexto PizzaContext
  const navigate = useNavigate(); // Inicializando la función navigate de useNavigate

  return (
    <Container className='carrito p-0 mt-3'>
      <h1 className='fs-4'>Detalle del pedido:</h1> {/* Título de la sección */}
      {carrito.length === 0 ? ( // Verificando si el carrito está vacío
        <p>Aún no has añadido pizzas al carrito.</p> // Mensaje cuando el carrito está vacío
      ) : (
        <PizzaCarrito /> // Componente para mostrar las pizzas en el carrito
      )}
      {carrito.length === 0 && ( // Verifica si el carrito está vacío para renderizar el botón
        <Button onClick={() => navigate("/")}>Volver 🍕</Button> // Botón para volver a la página principal
      )}
    </Container>
  );
};
