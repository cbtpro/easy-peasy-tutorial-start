import React from 'react';
import { Link } from 'react-router-dom';
import { useStoreState } from 'easy-peasy'; // 👈 import the hook

export default function BasketCount() {
  //       👇  map the state from store
  const basketCount = useStoreState((state) => state.basket.productIds.length);
  return (
    <div className="BasketCount">
      <Link to="/basket">Basket({basketCount} items)</Link>
    </div>
  );
}
