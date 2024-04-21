import '../Products.css';
import useCart from '../hooks/useCart';

import { AddToCartIcon, RemoveFromCartIcon } from './Icons';

export default function Products({ products }) {
  const { addToCar, removeFromCar, car } = useCart();

  const checkProductInCar = (product) => {
    return car.some((item) => item.id === product.id);
  };

  return (
    <main>
      <ul className="products">
        {products.map((product) => {
          const isProductInCar = checkProductInCar(product);
          return (
            <li key={product.id} className="product">
              <img src={product.thumbnail} alt={product.description} />
              <h3>
                {product.title} - $ {product.price}
              </h3>
              <button
                className={isProductInCar ? 'cart-button--remove' : ''}
                onClick={() =>
                  isProductInCar ? removeFromCar(product) : addToCar(product)
                }
              >
                {isProductInCar ? <RemoveFromCartIcon /> : <AddToCartIcon />}
              </button>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
