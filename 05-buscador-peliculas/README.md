## ENUNCIADO

Crear una aplicacion para buscar peliculas

API a usar:

- https://www.omdbapi.com
- API_KEY: f4133c37

# REQUERIMIENTOS

- ✅ Necesita mostrar un input y un boton para realizar la busqueda
- ✅ Listas las peliculas encontradas extrayendo el titulo, anyo y poster
- ✅ Realizar un grid responsive para mostrar la lista de peliculas

# Primera iteracion

- ✅ Evitar que se haga la misma busqueda dos veces seguidas.
- ✅ Haz que la busqueda se haga automaticamente al escribir.
- Evita que la busqueda se haga continuamente al escribir (debounce).

# Hooks utilizados

useRef .- Es un hook que permite crear una referencia mutable que persiste durante todo el ciclo de vida de un componente.
No vuelve a renderizar al componente a diferencia del useState que cada vez que cambia vuelve a renderiza el componente.

          Para recuperar informacion de formularios muchas veces, es mal utilizado useRef, pues con javascript vanilla se puede recuperar sin problemas y es mas eficiente utilizando window.formData

useMemo .- Memoriza un valor para no tener que volvel a calcular dependiendo de una lista de dependencias.

useCallback .- Tiene la misma funcion que useMemo, pero esta pensado para el uso con funciones y poder tener mas legibilidad en el codigo
