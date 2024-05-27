// Importando los componentes necesarios de React y React Bootstrap
import { Container, Navbar } from "react-bootstrap"; // Componentes de Bootstrap para el diseño y estilo
import { useContext } from "react"; // Hook useContext para acceder al contexto
import { Link } from "react-router-dom"; // Componente Link para la navegación
import { PizzaContext } from "../context/PizzaProvider"; // PizzaContext para obtener el estado y las funciones del contexto
import logoCarrito from "../assets/imgs/logo-carrito.png"; // Importando una imagen para el logo del carrito
import logo from "../assets/imgs/logo.png"; // Importando una imagen para el logo principal

// Definiendo el componente Navigation
export const Navigation = () => {
  const { totalCarrito, monedaLocal } = useContext(PizzaContext); // Desestructurando valores de PizzaContext

  return (
    <Navbar sticky='top'>
      {" "}
      {/* Barra de navegación fija en la parte superior */}
      <Container>
        {" "}
        {/* Contenedor para centrar el contenido */}
        <Link to={"/"} className='navegacion'>
          {" "}
          {/* Enlace a la página principal */}
          <img src={logo} alt='Logo Pizza' className='logo' />{" "}
          {/* Logo principal */}
          <span>Pizzería ¡Mamma Mia!</span> {/* Nombre de la pizzería */}
        </Link>
        <div className='logo-carrito-container'>
          {" "}
          {/* Contenedor del logo del carrito */}
          <Link
            to={"/carrito"} // Enlace a la página del carrito
            className={totalCarrito ? "logo-carrito-price" : "carrito"} // Clase condicional según si hay items en el carrito
          >
            <img src={logoCarrito} alt='' className='logo-carrito' />{" "}
            {/* Logo del carrito */}
            {totalCarrito ? "  " + monedaLocal(totalCarrito) : null}{" "}
            {/* Mostrar el total del carrito si no está vacío */}
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};
