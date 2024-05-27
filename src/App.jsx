// Importando los componentes y estilos necesarios
import { Navigation } from "./components/Navigation"; // Componente de navegación
import { Route, Routes } from "react-router-dom"; // Componentes para la gestión de rutas
import { Home } from "./views/Home"; // Vista de la página principal
import { Carrito } from "./views/Carrito"; // Vista de la página del carrito
import { Pizza } from "./views/Pizza"; // Vista de la página de detalles de la pizza
import { NotFound } from "./views/NotFound.jsx"; // Vista de la página de error 404
import "./App.css"; // Archivo de estilos principal
import "bootstrap/dist/css/bootstrap.min.css"; // Estilos de Bootstrap

// Definiendo el componente principal de la aplicación
function App() {
  return (
    <>
      <Navigation /> {/* Componente de navegación */}
      <Routes>
        {/* Definición de rutas para la navegación */}
        <Route path='/' element={<Home />} />{" "}
        {/* Ruta para la página principal */}
        <Route path='/carrito' element={<Carrito />} />{" "}
        {/* Ruta para la página del carrito */}
        <Route path='/pizza/:id' element={<Pizza />} />{" "}
        {/* Ruta para la página de detalles de la pizza */}
        <Route path='*' element={<NotFound />} />{" "}
        {/* Ruta para la página de error 404 */}
      </Routes>
    </>
  );
}

export default App; // Exportando el componente App por defecto
