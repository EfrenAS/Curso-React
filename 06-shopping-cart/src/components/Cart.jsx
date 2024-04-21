import { useId } from 'react';
import useCart from '../hooks/useCart';
import { CartIcon, ClearCartIcon } from './Icons';
import './Cart.css';

function CartItem({ thumbnail, price, title, quantity, addToCar }) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - $ {price}
      </div>
      <footer>
        <small>
          Qty: {quantity}
          <button onClick={addToCar}>+</button>
        </small>
      </footer>
    </li>
  );
}

export function Cart() {
  const CartCheckboxId = useId();
  const { car, clearCar, addToCar } = useCart();
  return (
    <>
      <label className="cart-button" htmlFor={CartCheckboxId}>
        <CartIcon />
      </label>
      <input id={CartCheckboxId} type="checkbox" hidden />
      <aside className="cart">
        <ul>
          {car.map((product) => (
            <CartItem
              key={product.id}
              addToCar={() => addToCar(product)}
              {...product}
            />
          ))}
        </ul>
        <button onClick={clearCar}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
