import { computed, memo } from 'easy-peasy';

const productsModel = {
  items: [
    { id: 1, name: 'Broccoli', price: 2.5 },
    { id: 2, name: 'Carrots', price: 4 }
  ],
  getById: computed(state => memo(id => state.items.find(product => product.id === id)), 100),
};

export default productsModel;
