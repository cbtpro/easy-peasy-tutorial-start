import React from 'react';
import { Link } from 'react-router-dom';
import { useStoreState } from 'easy-peasy'; // 👈 import the hook

export default function BasketCount() {
  const basketCount = useStoreState(state => state.basket.count);
  return (
    <div className="BasketCount">
      <Link to="/basket">Basket({basketCount} items)</Link>
    </div>
  );
}
