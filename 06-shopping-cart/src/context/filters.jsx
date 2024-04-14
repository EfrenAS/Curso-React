import { createContext, useState } from 'react';

// 1.- Crear el contexto y es que se tiene que consumir
export const FiltersContext = createContext();

// 2.- Crear el provider, para proveer el contexto y es el que nos provee de acceso al contexto
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 250,
  });

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
