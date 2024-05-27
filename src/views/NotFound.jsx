import { Container } from "react-bootstrap";

export function NotFound() {
  return (
    <Container className='d-flex flex-column justify-content-center align-items-center mt-5'>
      <h1 className='display-1'>⛔</h1>
      <p className='error fs-1'>Error 404 - Ruta no encontrada.</p>
    </Container>
  );
}
