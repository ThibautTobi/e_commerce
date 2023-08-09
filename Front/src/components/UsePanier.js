import React, { createContext, useState, useContext, useEffect } from 'react';

const PanierContext = createContext();

function PanierProvider({ children }) {
  const [panierItems, setPanierItems] = useState(() => {
    const panierData = localStorage.getItem('panier');
    return panierData ? JSON.parse(panierData) : [];
  });

  // Fonction pour mettre à jour le panier et sauvegarder dans le localStorage
  const updatePanier = (newPanierItems) => {
    setPanierItems(newPanierItems);
    localStorage.setItem('panier', JSON.stringify(newPanierItems));
  };

    const addToPanier = (plant) => {
      // Vérifier si le produit existe déjà dans le panier
      const existingPlant = panierItems.find((item) => item.id === plant.id);
  
      if (existingPlant) {
        // Si le produit existe déjà, augmenter la quantité
        updateQuantity(plant.id, existingPlant.quantity + 1);
      } else {
        // Sinon, ajouter le produit au panier
        setPanierItems([...panierItems, { ...plant, quantity: 1 }]);
      }
  
      // updatePanier(panierItems); // Mettre à jour le localStorage après modification du panier
    };
  
    const removeFromPanier = (plantId) => {
      setPanierItems(panierItems.filter((plant) => plant.id !== plantId));
      // updatePanier(panierItems); // Mettre à jour le localStorage après modification du panier
    };
  
    const updateQuantity = (plantId, quantity) => {
      setPanierItems(
        panierItems.map((plant) =>
          plant.id === plantId ? { ...plant, quantity } : plant
        )
      );
      // updatePanier(panierItems); // Mettre à jour le localStorage après modification du panier
    };
  
    const clearPanier = () => {
      setPanierItems([]);
      // updatePanier(panierItems); // Mettre à jour le localStorage après modification du panier
    };
  

  // Effectuer une écoute des changements de panierItems
  useEffect(() => {
    // Mettre à jour le localStorage lorsque panierItems change
    updatePanier(panierItems);
  }, [panierItems]);


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
}

function usePanier() {
  const context = useContext(PanierContext);
  if (!context) {
    throw new Error('Erreur du PanierProvider');
  }
  return context;
}

export { PanierProvider, usePanier };


// import React, { createContext, useContext, useEffect, useReducer } from 'react';
// import cartReducer from '../reducers/CartReducer';

// const PanierContext = createContext();

// function PanierProvider({ children }) {
//   const initialState = { items: [] };
//   const [panierItems, dispatch] = useReducer(cartReducer, initialState, () => {
//     const panierData = localStorage.getItem('panier');
//     return panierData ? JSON.parse(panierData) : initialState; // Ajoutez cette condition
//   });

//   useEffect(() => {
//     localStorage.setItem('panier', JSON.stringify(panierItems));
//   }, [panierItems]);

//   // Fonction pour ajouter un article au panier
//   const addToPanier = (plant) => {
//     // Vérifier si le produit existe déjà dans le panier
//     const existingPlant = panierItems.find((item) => item.id === plant.id);

//     if (existingPlant) {
//       // Si le produit existe déjà, augmenter la quantité
//       dispatch({ type: 'UPDATE_QUANTITY', payload: { id: plant.id, quantity: existingPlant.quantity + 1 } });
//     } else {
//       // Sinon, ajouter le produit au panier
//       dispatch({ type: 'ADD_TO_CART', payload: { ...plant, quantity: 1 } });
//     }
//     console.log('sa ne marche pas')
//   };

//   // Fonction pour supprimer un article du panier
//   const removeFromPanier = (plantId) => {
//     dispatch({ type: 'REMOVE_FROM_CART', payload: { id: plantId } });
//   };

//   // Fonction pour mettre à jour la quantité d'un article dans le panier
//   const updateQuantity = (plantId, quantity) => {
//     dispatch({ type: 'UPDATE_QUANTITY', payload: { id: plantId, quantity } });
//   };

//   // Fonction pour vider complètement le panier
//   const clearPanier = () => {
//     dispatch({ type: 'CLEAR_CART' });
//   };

//   return (
//     <PanierContext.Provider value={{ panierItems, addToPanier, removeFromPanier, updateQuantity, clearPanier }}>
//       {children}
//     </PanierContext.Provider>
//   );
// };

// const usePanier = () => {
//   const context = useContext(PanierContext);
//   if (!context) {
//     throw new Error('Erreur du PanierProvider');
//   }
//   return context;
// };

// export { PanierProvider, usePanier };