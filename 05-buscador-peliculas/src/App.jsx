import { useCallback, useEffect, useRef, useState } from 'react';
import debounce from 'just-debounce-it';

import { useMovies } from './hooks/useMovies';

import Movies from './components/Movies';
import './App.css';

function useSearch() {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === '';
      return;
    }

    if (search === '') {
      setError('No se puede buscar una pelicula sin un titulo');
      return;
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con numero');
      return;
    }

    if (search.length < 3) {
      setError('No se puede buscar una pelicula con menos de 3 letras');
      return;
    }

    setError(null);
  }, [search]);

  return { search, setSearch, error };
}

function App() {
  const [sort, setSort] = useState(false);
  const { search, setSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, sort });
  // const inputRef = useRef(); //Utilizando useRef nuevo hook aprendido

  const debouncedGetMovies = useCallback(
    debounce((search) => {
      getMovies({ search });
    }, 500),
    []
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });
    // const fields = Object.fromEntries(new FormData(event.target));
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
    debouncedGetMovies(newSearch);
  };

  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            name="query"
            type="text"
            onChange={handleChange}
            value={search}
            placeholder="John Wick, Start Wars, Lord of Rings..."
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        {loading ? <p>Loading...</p> : null}
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
