import React from 'react';
import { Link } from 'react-router-dom';
import { useStoreState } from 'easy-peasy'; // 👈 import the hook

export default function ProductList() {
  //       👇  map the state from store
  const products = useStoreState((state) => state.products.items);
  return (
    <div>
      <h2>Our products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
