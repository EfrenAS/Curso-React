import { createContext, useReducer } from 'react';
import { carInitialState, carReducer } from '../reducers/carReducer';

// 1.- Crear el Contexto
export const CartContext = createContext();

// useReducer necesita un estado inicial, puede ser string, number, [],{} cualquier estado que se necesite
function useCarReducer() {
  const [state, dispatch] = useReducer(carReducer, carInitialState);

  const addToCar = (product) =>
    dispatch({
      type: 'ADD_TO_CAR',
      payload: product,
    });

  const removeFromCar = (product) =>
    dispatch({
      type: 'REMOVE_FROM_CAR',
      payload: product,
    });

  const clearCar = () =>
    dispatch({
      type: 'CLEAR_CAR',
    });

  return { state, addToCar, removeFromCar, clearCar };
}

// 2.- Crear el Provider
export function CartProvider({ children }) {
  const { state, addToCar, clearCar, removeFromCar } = useCarReducer();

  return (
    <CartContext.Provider
      value={{ car: state, addToCar, clearCar, removeFromCar }}
    >
      {children}
    </CartContext.Provider>
  );
}
