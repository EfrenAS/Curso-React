import { Link } from '../components/Link';

export function Page404() {
  return (
    <>
      <div>
        <h1>404 - Not Found!</h1>
        <img
          src="https://media1.tenor.com/m/L4rjYt7wOQoAAAAC/april-fools-joke.gif"
          alt="Quemandose vivo"
        />
      </div>
      <Link to="/"> Ir al inicio </Link>
    </>
  );
}
