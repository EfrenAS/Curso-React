import '../Products.css';

import { AddToCartIcon } from './Icons';

export default function Products({ products }) {
  return (
    <main>
      <ul className="products">
        {products.map((product) => (
          <li key={product.id} className="product">
            <img src={product.thumbnail} alt={product.description} />
            <h3>
              {product.title} - $ {product.price}
            </h3>
            <button>
              <AddToCartIcon />
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
