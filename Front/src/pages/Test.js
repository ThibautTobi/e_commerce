import React, { useState } from 'react';

function TestComponent() {
  const [items, setItems] = useState([]);

  const addToCart = (product) => {
    console.log('Current items:', items);
    console.log('Adding product:', product);

    // Use setItems to update the items array
    setItems([...items, product]);
  };

  return (
    <div>
      <button onClick={() => addToCart({ id: 1, name: 'Product 1', price: 10 })}>
        Add Product 1 to Cart
      </button>
      <button onClick={() => addToCart({ id: 2, name: 'Product 2', price: 20 })}>
        Add Product 2 to Cart
      </button>

      <h2>Current Cart Items:</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default TestComponent;
