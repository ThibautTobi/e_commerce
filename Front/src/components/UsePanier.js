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


  // console.log(panierItems);
  // console.log(panierData);


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

/** en cours de debug **/

// import React, { createContext, useContext, useEffect, useMemo, useReducer, useCallback, useRef } from 'react';
// import Cookies from 'js-cookie';
// import donneesPlantes from '../data/Data';

// const PanierContext = createContext();

// const UPDATE_PANIER = 'UPDATE_PANIER';

// const panierReducer = (state, action) => {
//   switch (action.type) {
//     case UPDATE_PANIER:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// function PanierProvider({ children }) {
//   const [panierItems, dispatch] = useReducer(panierReducer, () => {
//     const panierData = localStorage.getItem('panier');
//     return panierData ? JSON.parse(panierData) : [];
//   });

//   const panierRef = useRef();

//   const updatePanier = (newPanierItems) => {
//     dispatch({ type: UPDATE_PANIER, payload: newPanierItems });
//     localStorage.setItem('panier', JSON.stringify(newPanierItems));
//   };

//   const updateQuantity = useCallback((plantId, quantity) => {
//     updatePanier(
//       panierItems.map((plant) =>
//         plant.id === plantId ? { ...plant, quantity } : plant
//       )
//     );
//   }, [panierItems]);

//   const addToPanier = useCallback((plant) => {
//     const existingPlant = panierItems.find((item) => item.id === plant.id);

//     if (existingPlant) {
//       updateQuantity(plant.id, existingPlant.quantity + 1);
//     } else {
//       updatePanier([...panierItems, { ...plant, quantity: 1 }]);
//     }
//   }, [panierItems, updateQuantity]);

//   const removeFromPanier = useCallback((plantId) => {
//     updatePanier(panierItems.filter((plant) => plant.id !== plantId));
//   }, [panierItems]);

//   const clearPanier = useCallback(() => {
//     updatePanier([]);
//   }, []);

//   const getTotalPrice = useMemo(() => {
//     return panierItems.reduce((total, plant) => total + getPlantPrice.current(plant.id) * plant.quantity, 0);
//   }, [panierItems]);

//   const getPlantPrice = useRef((plantId) => {
//     const planteInfo = donneesPlantes.find((plante) => plante.id === plantId);
//     return planteInfo ? planteInfo.price : 0;
//   });

//   useEffect(() => {
//     updatePanier(panierItems);
//   }, [panierItems]);

//   useEffect(() => {
//     panierRef.current = addToPanier;
//   }, [addToPanier]);

//   const genererNumeroCommande = () => {
//     const horodatage = new Date().getTime();
//     const nombreAleatoire = Math.floor(Math.random() * 10000);
//     return `COMMANDE-${horodatage}-${nombreAleatoire}`;
//   };

//   const handleConfirmerCommande = () => {
//     const commande = {
//       items: panierItems.map((plant) => ({
//         id: plant.id,
//         quantity: plant.quantity,
//       })),
//       total: getTotalPrice(),
//     };

//     const commandeJSON = JSON.stringify(commande);
//     const numeroCommande = genererNumeroCommande();

//     panierRef.current(commande);

//     Cookies.set('commande', commandeJSON, { expires: 1 });
//     Cookies.set('numeroCommande', numeroCommande, { expires: 1 });

//     clearPanier();
//   };

//   return (
//     <PanierContext.Provider
//       value={{
//         panierItems,
//         addToPanier,
//         removeFromPanier,
//         updateQuantity,
//         getTotalPrice,
//         handleConfirmerCommande,
//       }}
//     >
//       {children}
//     </PanierContext.Provider>
//   );
// }

// function usePanier() {
//   const context = useContext(PanierContext);
//   if (!context) {
//     throw new Error('Erreur du PanierProvider');
//   }
//   return context;
// }

// export { PanierProvider, usePanier };