import React from 'react';
import { Link } from 'react-router-dom';
import { useStoreActions, useStoreState } from 'easy-peasy';

export default function Basket() {
  //  map our action 👇
  const removeProductFromBasket = useStoreActions(
    (actions) => actions.basket.removeProduct
  );

  //       👇  map the state from store
  const basketProducts = useStoreState((state) =>
    // take the product ids from our basket...
    state.basket.productIds.map((productId) =>
      // and map them to products
      state.products.items.find((product) => product.id === productId)
    )
  );
  return (
    <div>
      <h2>The merchandise</h2>
      <ul>
        {basketProducts.map((product, idx) => (
          <li key={idx}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>{' '}
            {/*                  dispatch the action 👇                      */}
            <button onClick={() => removeProductFromBasket(idx)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
