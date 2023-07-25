import React, { createContext, useState, useContext, useEffect } from 'react';

const PanierContext = createContext();

function PanierProvider({ children }) {
  const [panierItems, setPanierItems] = useState([]);

    // Charger le panier à partir du localStorage lors du montage du composant
    useEffect(() => {
      const panierData = localStorage.getItem('panier');
      if (panierData) {
        setPanierItems(JSON.parse(panierData));
        console.log(panierData);
      } else {
        // Si le localStorage n'existe pas, initialiser le panier avec un tableau vide
        setPanierItems([]);
      }
    }, []);
  
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
  };

  const removeFromPanier = (plantId) => {
    setPanierItems(panierItems.filter((plant) => plant.id !== plantId));
  };

  const updateQuantity = (plantId, quantity) => {
    setPanierItems(
      panierItems.map((plant) =>
        plant.id === plantId ? { ...plant, quantity } : plant
      )
    );
  };

  const clearPanier = () => {
    setPanierItems([]);
  };

  console.log(panierItems);
  // console.log(panierData);

  return (
    <PanierContext.Provider
      value={{
        panierItems,
        addToPanier,
        removeFromPanier,
        updateQuantity,
        clearPanier,
        updatePanier,
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