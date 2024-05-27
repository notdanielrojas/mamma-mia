import { Table, Button, Container } from "react-bootstrap";
import { useContext } from "react";
import { PizzaContext } from "../context/PizzaProvider";
import { useNavigate } from "react-router-dom";

export default function PizzaCarrito() {
  const { carrito, aumentar, disminuir, totalCarrito, monedaLocal } =
    useContext(PizzaContext);
  const navigate = useNavigate();
  return (
    <>
      <Table responsive>
        <tbody>
          {carrito.map((pizza, index) => (
            <tr key={index}>
              <td>
                <img src={pizza.img} alt={pizza.name} />
              </td>
              <td className='w-75 text-capitalize'>{pizza.name}</td>
              <td>
                <Button onClick={() => disminuir(index)}>-</Button>
              </td>
              <td>{pizza.count}</td>
              <td>
                <Button onClick={() => aumentar(index)}>+</Button>
              </td>
              <td>=</td>
              <td>{monedaLocal(pizza.count * pizza.price)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan='5' className='text-end fw-bold'>
              Total
            </td>
            <td>=</td>
            <td className='fw-bold'>{monedaLocal(totalCarrito)}</td>
          </tr>
        </tfoot>
      </Table>
      <Container className='pizza-carrito'>
        <Button onClick={() => navigate("/")}>Volver 🍕</Button>
        <Button className='float-end'>Ir a pagar</Button>
      </Container>
    </>
  );
}
