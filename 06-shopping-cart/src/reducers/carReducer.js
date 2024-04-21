export const carInitialState =
  JSON.parse(window.localStorage.getItem('car')) || [];

export const CAR_ACTION_TYPES = {
  ADD_TO_CAR: 'ADD_TO_CAR',
  REMOVE_FROM_CAR: 'REMOVE_FROM_CAR',
  CLEAR_CAR: 'CLEAR_CAR',
};

// Update localStorage when state for shopping car
export const updateLocalStorage = (state) => {
  window.localStorage.setItem('car', JSON.stringify(state));
};

// Reducer for shopping car

export const carReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case CAR_ACTION_TYPES.ADD_TO_CAR: {
      const { id } = actionPayload;

      // Check if product is already in cart
      const productInCartIndex = state.findIndex((item) => item.id === id);

      if (productInCartIndex >= 0) {
        // One chance to add more than one product to the cart is using structureClone
        const newState = structuredClone(state);
        newState[productInCartIndex].quantity += 1;

        updateLocalStorage(newState);
        return newState;
      }

      // Product is not in Shopping car
      const newState = [
        ...state,
        {
          ...actionPayload, //product
          quantity: 1,
        },
      ];

      updateLocalStorage(newState);
      return newState;
    }

    case CAR_ACTION_TYPES.REMOVE_FROM_CAR: {
      console.log('Actualizar el carrito');

      const { id } = actionPayload;
      const newState = state.filter((item) => item.id !== id);

      updateLocalStorage(newState);
      return newState;
    }

    case CAR_ACTION_TYPES.CLEAR_CAR: {
      console.log('limpiar el carrito');

      updateLocalStorage([]);
      return [];
    }
  }

  return state;
};
