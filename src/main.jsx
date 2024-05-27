import React from "react"; // Importa la biblioteca principal de React
import ReactDOM from "react-dom/client"; // Importa el ReactDOM para renderizar la aplicación en el DOM
import App from "./App.jsx"; // Importa el componente principal de la aplicación
import "./index.css"; // Importa los estilos globales
import { BrowserRouter } from "react-router-dom"; // Importa BrowserRouter para el enrutamiento
import { PizzaProvider } from "./context/PizzaProvider.jsx"; // Importa el proveedor de contexto para los datos de pizza

// Renderiza la aplicación en el elemento con id "root" en el DOM
ReactDOM.createRoot(document.getElementById("root")).render(
  // Envuelve la aplicación en React.StrictMode para activar advertencias y modo estricto de React
  <React.StrictMode>
    {/* Usa BrowserRouter para proporcionar enrutamiento a la aplicación */}
    <BrowserRouter>
      {/* Usa PizzaProvider para proporcionar datos de pizza a toda la aplicación */}
      <PizzaProvider>
        {/* Renderiza el componente principal de la aplicación */}
        <App />
      </PizzaProvider>
    </BrowserRouter>
  </React.StrictMode>
);
