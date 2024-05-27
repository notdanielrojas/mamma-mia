import { Container } from "react-bootstrap"; // Importa el componente Container de React Bootstrap

export function NotFound() {
  return (
    <Container className='d-flex flex-column justify-content-center align-items-center mt-5'>
      <h1 className='display-1'>⛔</h1>{" "}
      {/* Muestra un icono de señal de tráfico de prohibición */}
      <p className='error fs-1'>Error 404 - Ruta no encontrada.</p>{" "}
      {/* Muestra un mensaje de error */}
    </Container>
  );
}
