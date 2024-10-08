import { createContext, useEffect, useState } from "react";
import pizza from "../pizzas.json";

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);

  const addCarrito = ({ id, price, name, img }) => {
    const pEindex = carrito.findIndex((p) => p.id === id);
    const producto = { id, price, name, img, count: 1 };

    if (pEindex >= 0) {
      carrito[pEindex].count++;
      setCarrito([...carrito]);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  const removeCarrito = (id) => {
    const newCarrito = carrito.filter((item) => item.id !== id);
    setCarrito(newCarrito);
  };

  const aumentar = (index) => {
    carrito[index].count++;
    setCarrito([...carrito]);
  };

  const disminuir = (index) => {
    const newCarrito = [...carrito];
    if (newCarrito[index].count === 1) {
      newCarrito.splice(index, 1);
    } else {
      newCarrito[index].count--;
    }
    setCarrito(newCarrito);
  };

  const totalCarrito = carrito.reduce(
    (acumulador, { price, count }) => acumulador + price * count,
    0
  );

  useEffect(() => {
    setPizzas(pizza);
  }, []);

  const monedaLocal = (valor) =>
    valor.toLocaleString("es-CL", { style: "currency", currency: "CLP" });

  return (
    <PizzaContext.Provider
      value={{
        pizzas,
        carrito,
        setPizzas,
        addCarrito,
        removeCarrito,
        aumentar,
        disminuir,
        monedaLocal,
        totalCarrito,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};
