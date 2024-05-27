import { Table, Button, Container } from "react-bootstrap"; // Importación de componentes de React Bootstrap
import { useContext } from "react"; // Importación del hook useContext de React
import { PizzaContext } from "../context/PizzaProvider"; // Importación del contexto de PizzaProvider
import { useNavigate } from "react-router-dom"; // Importación del hook useNavigate de React Router

export default function PizzaCarrito() {
  // Extracción de datos del contexto de PizzaProvider
  const { carrito, aumentar, disminuir, totalCarrito, monedaLocal } =
    useContext(PizzaContext);
  const navigate = useNavigate(); // Inicialización de la función navigate de React Router

  return (
    <>
      {/* Tabla para mostrar las pizzas en el carrito */}
      <Table responsive>
        <tbody>
          {carrito.map((pizza, index) => (
            <tr key={index}>
              <td>
                <img src={pizza.img} alt={pizza.name} />{" "}
                {/* Imagen de la pizza */}
              </td>
              <td className='w-75 text-capitalize'>{pizza.name}</td>{" "}
              {/* Nombre de la pizza */}
              <td>
                <Button onClick={() => disminuir(index)}>-</Button>{" "}
                {/* Botón para disminuir la cantidad */}
              </td>
              <td>{pizza.count}</td> {/* Cantidad de la pizza */}
              <td>
                <Button onClick={() => aumentar(index)}>+</Button>{" "}
                {/* Botón para aumentar la cantidad */}
              </td>
              <td>=</td> {/* Signo de igual */}
              <td>{monedaLocal(pizza.count * pizza.price)}</td>{" "}
              {/* Precio total de la pizza */}
            </tr>
          ))}
        </tbody>
        {/* Footer de la tabla que muestra el total del carrito */}
        <tfoot>
          <tr>
            <td colSpan='5' className='text-end fw-bold'>
              Total
            </td>{" "}
            {/* Etiqueta para el total */}
            <td>=</td> {/* Signo de igual */}
            <td className='fw-bold'>{monedaLocal(totalCarrito)}</td>{" "}
            {/* Total del carrito */}
          </tr>
        </tfoot>
      </Table>
      {/* Contenedor para los botones de navegación */}
      <Container className='pizza-carrito'>
        <Button onClick={() => navigate("/")}>Volver 🍕</Button>{" "}
        {/* Botón para volver a la página principal */}
        <Button className='float-end'>Ir a pagar</Button>{" "}
        {/* Botón para ir a pagar */}
      </Container>
    </>
  );
}
