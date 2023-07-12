import React, { createContext, useState } from 'react';

/** a finir **/
// const PanierContext = createContext();

function PanierProvider ({ children }) {
    const PanierContext = createContext();
    const [panierItems, setPanierItems] = useState([]);

  const addToPanier = (cart) => {
    // Ajoute le produit au panier
  };

  const removeFromPanier = (cartId) => {
    setPanierItems(0)
    // Supprime le produit du panier
  };

  const updateQuantity = (cartId, quantity) => {
    // Met à jour la quantité du produit dans le panier
  };

  const clearPanier = () => {
    // Vide le panier
  };

  return (
    <PanierContext.Provider
      value={{
        panierItems,
        addToPanier,
        removeFromPanier,
        updateQuantity,
        clearPanier,
      }}
    >
      {children}
    </PanierContext.Provider>
  );
};

export default PanierProvider;

/******* alternative parraléle a panierUtils *****/

// import { addToCart, removeFromCart, updateCartItemQuantity } from './PanierUtils';

// function Product({ product }) {
//   const handleAddToCart = () => {
//     addToCart(product);
//   };

//   // Autres codes du composant
// }

// function CartItem({ item }) {
//   const handleRemoveFromCart = () => {
//     removeFromCart(item.id);
//   };

//   const handleQuantityChange = (e) => {
//     const newQuantity = parseInt(e.target.value);
//     updateCartItemQuantity(item.id, newQuantity);
//   };

//   // Autres codes du composant
// }
