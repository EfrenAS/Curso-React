# Enunciado

1. Ecommerce

✅ Muestra una lista de productos que vienen de un JSON
✅ Anade un filtro por categoria
✅ Anade un filtro por precio
✅ Haz uso de useContext para evitar pasar los props innecesarios

2. Shopping Cart

✅ Haz que se puedan anadir los productos a un carrito.
✅ Haz que se puedan eliminar los productos del carrito.
✅ Haz que se puedan modificar la cantidad los productos del carrito.
✅ Sincroniza los cambios del carrito con la lista de productos.

✅ Guarda en un localStorage el carrito para que se pueda recuperar al recargar la pagina.(Da puntos)

# Hooks de React vistos y aplicados en este ejercicio:

# useId

- Crear un id unico para cada elemento que siempre va a ser el mismo y que ademas sirve con SSR

# useContext

- Permite compartir datos entre componentes sin necesidad de pasarlos por props y evita hacer prop driling entre componentes

# useReducer

- Es un hook que nos permite manejar el estado de manera escalable, porque se basa en que recibe en una funcion el estado actual y la accion que se tiene que hacer y permite manejar el estado de una aplicacion de forma mas sencilla

En el apartado de useCOntext en una aplicacion, hay que tener mucho cuidado con tener dos fuentes de la verdad, es decir, que para un componente se tengan dos estados totalmente diferentes. Uno que se maneja de manera local en el componente y otro que venga del estado global de la aplicacion a traves de algun contexto. De cual hay que fiarse?! PROCURAR SIEMPRE tomar el que viene del estado globa.
