import { products as initialProducts } from './mocks/products.json';
import { IS_DEVELOPMENT } from './config';

import ProductsList from './components/Products';
import Header from './components/Header';
import Footer from './components/Footer';

import useFilters from './hooks/useFilters';

function App() {
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(initialProducts);

  return (
    <>
      <Header />
      <ProductsList products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </>
  );
}

export default App;

// Continue to learning on this point https://www.youtube.com/watch?v=B9tDYAZZxcE&list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29&index=7&ab_channel=midulive 1:09:50
