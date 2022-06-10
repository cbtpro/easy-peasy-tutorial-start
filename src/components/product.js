import React, { useCallback, useState } from 'react';
import * as basketService from '../services/basket-service';
import { useStoreActions, useStoreState } from 'easy-peasy';

export default function Product({ id }) {
  //       👇  map the state from store
  const product = useStoreState((state) =>
    state.products.items.find((product) => product.id === id)
  );

  // state to track when we are saving to basket
  const [adding, setAdding] = useState(false);

  //  map our action 👇
  const addProductToBasket = useStoreActions(
    (actions) => actions.basket.addProduct
  );
  // callback to handle click, saving to basket
  const onAddToBasketClick = useCallback(async () => {
    setAdding(true);
    addProductToBasket(product.id); // 👈 dispatch our action
    setAdding(false);
  }, [product, addProductToBasket]);

  return (
    <div>
      <h2>{product.name}</h2>
      <p>
        <em>£ {product.price}</em>
      </p>
      {adding ? (
        'Adding...'
      ) : (
        <button onClick={onAddToBasketClick}>Add to basket</button>
      )}
    </div>
  );
}
