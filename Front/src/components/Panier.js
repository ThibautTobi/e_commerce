import React ,{ useState } from 'react';
import { usePanier } from '../components/UsePanier';
import '../style/panier.scss';
import Cookies from 'js-cookie';
import donneesPlantes from '../data/Data';

function Panier() {
  const { panierItems, removeFromPanier, updateQuantity } = usePanier();
  console.log(panierItems);

  const panierData = localStorage.getItem('panier');

  console.log(panierData);

  // État local pour gérer l'affichage conditionnel
  const [commandeEnregistree, setCommandeEnregistree] = useState(false);

  // Fonction pour incrémenter la quantité d'un article dans le panier
  const handleIncrement = (plantId) => {
    const plant = panierItems.find((item) => item.id === plantId);
    if (plant) {
      updateQuantity(plantId, plant.quantity + 1);
    }
  };

  // Fonction pour décrémenter la quantité d'un article dans le panier
  const handleDecrement = (plantId) => {
    const plant = panierItems.find((item) => item.id === plantId);
    if (plant && plant.quantity > 1) {
      updateQuantity(plantId, plant.quantity - 1);
    }
  };

  // Fonction pour supprimer un article du panier
  const handleRemove = (plantId) => {
    removeFromPanier(plantId);
  };

  // Fonction pour calculer le prix total du panier
  const getTotalPrice = () => {
    return panierItems.reduce((total, plant) => total + getPlantPrice(plant.id) * plant.quantity, 0);
  };

  // Fonction pour obtenir le prix d'une plante en fonction de son ID
  const getPlantPrice = (plantId) => {
    const planteInfo = donneesPlantes.find((plante) => plante.id === plantId);
    return planteInfo ? planteInfo.price : 0;
  };

  // Fonction pour générer un numéro de commande unique
  function genererNumeroCommande  ()  {
    const horodatage = new Date().getTime();
    const nombreAleatoire = Math.floor(Math.random() * 10000);
    return `COMMANDE-${horodatage}-${nombreAleatoire}`;
  };

  // Fonction pour enregistrer la commande dans les cookies et remettre à un tableau vide le localStorage
  const handleConfirmerCommande = () => {
    // Créez un objet contenant les détails de la commande
    const commande = {
      items: panierItems.map((plant) => ({
        id: plant.id,
        quantity: plant.quantity,
      })),
      total: getTotalPrice(),
    };

    // Convertissez l'objet en chaîne JSON
    const commandeJSON = JSON.stringify(commande);

    // Générer un numéro de commande unique
    const numeroCommande = genererNumeroCommande();

    // Enregistrez la commande dans les cookies
    Cookies.set('commande', commandeJSON, { expires: 1 }); // Définissez la durée de validité du cookie ici (1 jour dans cet exemple)
    Cookies.set('numeroCommande', numeroCommande, { expires: 1 });

    // Mettre à jour l'état pour afficher le message de confirmation
    setCommandeEnregistree(true);

    // Remettre à un tableau vide le localStorage
    localStorage.setItem('panier', JSON.stringify([]));
  };

    const numeroCommande = Cookies.get('numeroCommande');

  return (
    <div className='panier'>
      {commandeEnregistree ? ( // Afficher le message de confirmation si la commande est enregistrée
        <div className='panier__enregistre'>
          <p>Votre commande est enregistrée. Numéro de commande : {numeroCommande}</p>
        </div>
      ) : ( // Sinon, afficher le panier et le bouton pour confirmer la commande
        <div className='panier__display'>
          <h2>Votre panier</h2>
          {panierItems.length === 0 ? (
            <p>Votre panier est vide.</p>
          ) : (
            <div className="panier__items">
              {panierItems.map((plant) => {
                const planteInfo = donneesPlantes.find((plante) => plante.id === plant.id);
                if (!planteInfo) {
                  console.error(`Informations manquantes pour la plante avec l'ID : ${plant.id}`);
                  return null;
                }
                return (
                  <div key={plant.id} className="panier__item">
                    <div className="panier__item__info">
                      <p>{planteInfo.title}</p>
                      <p>Prix : {planteInfo.price} €</p>
                      <p>Quantité : {plant.quantity}</p>
                      {/* Vous pouvez afficher d'autres informations ici */}
                    </div>
                    <div className="panier__item__buttons">
                      <button onClick={() => handleDecrement(plant.id)}>-</button>
                      <button onClick={() => handleIncrement(plant.id)}>+</button>
                      <button onClick={() => handleRemove(plant.id)}>Supprimer</button>
                    </div>
                  </div>
                );
              })}
              <div className="panier__total">
                <p>Total : {getTotalPrice()} €</p>
              </div>
                <button onClick={handleConfirmerCommande}>Confirmer</button>
              
            </div>
          )}
    </div>
    )}
  </div>
  );
  
  

}

export default Panier;



// import React, { useEffect } from 'react';
// import { Button } from '@mui/material';
// import { usePanier } from '../components/UsePanier';
// import Cookies from 'js-cookie';
// import donneesPlantes from '../data/Data';

// function Panier() {
//   const { panierItems, dispatch } = usePanier();

//   // État local pour gérer l'affichage conditionnel
//   const [commandeEnregistree, setCommandeEnregistree] = React.useState(false);

//   // Fonction pour incrémenter la quantité d'un article dans le panier
//   const handleIncrement = (plantId) => {
//     const plant = panierItems.find((item) => item.id === plantId);
//     if (plant) {
//       dispatch({ type: 'UPDATE_QUANTITY', payload: { id: plantId, quantity: plant.quantity + 1 } });
//     }
//   };

//   // Fonction pour décrémenter la quantité d'un article dans le panier
//   const handleDecrement = (plantId) => {
//     const plant = panierItems.find((item) => item.id === plantId);
//     if (plant && plant.quantity > 1) {
//       dispatch({ type: 'UPDATE_QUANTITY', payload: { id: plantId, quantity: plant.quantity - 1 } });
//     }
//   };

//   // Fonction pour supprimer un article du panier
//   const handleRemove = (plantId) => {
//     dispatch({ type: 'REMOVE_FROM_CART', payload: { id: plantId } });
//   };

//   // Fonction pour calculer le prix total du panier
//   const getTotalPrice = () => {
//     return panierItems.reduce((total, plant) => total + getPlantPrice(plant.id) * plant.quantity, 0);
//   };

//   // Fonction pour obtenir le prix d'une plante en fonction de son ID
//   const getPlantPrice = (plantId) => {
//     const planteInfo = donneesPlantes.find((plante) => plante.id === plantId);
//     return planteInfo ? planteInfo.price : 0;
//   };

//   // Fonction pour générer un numéro de commande unique
//   const genererNumeroCommande = () => {
//     const horodatage = new Date().getTime();
//     const nombreAleatoire = Math.floor(Math.random() * 10000);
//     return `COMMANDE-${horodatage}-${nombreAleatoire}`;
//   };

//   // Fonction pour enregistrer la commande dans les cookies et remettre à un tableau vide le localStorage
//   const handleConfirmerCommande = () => {
//     // Créez un objet contenant les détails de la commande
//     const commande = {
//       items: panierItems.map((plant) => ({
//         id: plant.id,
//         quantity: plant.quantity,
//       })),
//       total: getTotalPrice(),
//     };

//     // Convertissez l'objet en chaîne JSON
//     const commandeJSON = JSON.stringify(commande);

//     // Générer un numéro de commande unique
//     const numeroCommande = genererNumeroCommande();

//     // Enregistrez la commande dans les cookies
//     Cookies.set('commande', commandeJSON, { expires: 1 }); // Définissez la durée de validité du cookie ici (1 jour dans cet exemple)
//     Cookies.set('numeroCommande', numeroCommande, { expires: 1 });

//     // Mettre à jour l'état pour afficher le message de confirmation
//     setCommandeEnregistree(true);

//     // Remettre à un tableau vide le localStorage
//     dispatch({ type: 'CLEAR_CART' });
//   };

//   // Effectuer une écoute des changements de panierItems
//   useEffect(() => {
//     // Mettre à jour le localStorage lorsque panierItems change
//     localStorage.setItem('panier', JSON.stringify(panierItems));
//   }, [panierItems]);

//   const numeroCommande = Cookies.get('numeroCommande');

//   return (
//     <div className='panier'>
//       {commandeEnregistree ? ( // Afficher le message de confirmation si la commande est enregistrée
//         <div className='panier__enregistre'>
//           <p>Votre commande est enregistrée. Numéro de commande : {numeroCommande}</p>
//         </div>
//       ) : ( // Sinon, afficher le panier et le bouton pour confirmer la commande
//         <div className='panier__display'>
//           <h2>Votre panier</h2>
//           {panierItems.length === 0 ? (
//             <p>Votre panier est vide.</p>
//           ) : (
//             <div className='panier__items'>
//               {panierItems.map((plant) => {
//                 const planteInfo = donneesPlantes.find((plante) => plante.id === plant.id);
//                 if (!planteInfo) {
//                   console.error(`Informations manquantes pour la plante avec l'ID : ${plant.id}`);
//                   return null;
//                 }
//                 return (
//                   <div key={plant.id} className='panier__item'>
//                     <div className='panier__item__info'>
//                       <p>{planteInfo.title}</p>
//                       <p>Prix : {planteInfo.price} €</p>
//                       <p>Quantité : {plant.quantity}</p>
//                       {/* Vous pouvez afficher d'autres informations ici */}
//                     </div>
//                     <div className='panier__item__buttons'>
//                       <Button onClick={() => handleDecrement(plant.id)}>-</Button>
//                       <Button onClick={() => handleIncrement(plant.id)}>+</Button>
//                       <Button onClick={() => handleRemove(plant.id)}>Supprimer</Button>
//                     </div>
//                   </div>
//                 );
//               })}
//               <div className='panier__total'>
//                 <p>Total : {getTotalPrice()} €</p>
//               </div>
//               <Button onClick={handleConfirmerCommande}>Confirmer</Button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Panier;





/********** requete back end  */

// import React ,{ useState } from 'react';
// import { usePanier } from '../components/UsePanier';
// import '../style/panier.scss';
// import Cookies from 'js-cookie';
// import { createOrder } from '../Api/api';
// import donneesPlantes from '../data/Data';

// function Panier() {
//   const { panierItems, removeFromPanier, updateQuantity } = usePanier();
//   console.log(panierItems);

//   const panierData = localStorage.getItem('panier');

//   console.log(panierData);

//   // État local pour gérer l'affichage conditionnel
//   const [commandeEnregistree, setCommandeEnregistree] = useState(false);

//   // Fonction pour incrémenter la quantité d'un article dans le panier
//   const handleIncrement = (plantId) => {
//     const plant = panierItems.find((item) => item.id === plantId);
//     if (plant) {
//       updateQuantity(plantId, plant.quantity + 1);
//     }
//   };

//   // Fonction pour décrémenter la quantité d'un article dans le panier
//   const handleDecrement = (plantId) => {
//     const plant = panierItems.find((item) => item.id === plantId);
//     if (plant && plant.quantity > 1) {
//       updateQuantity(plantId, plant.quantity - 1);
//     }
//   };

//   // Fonction pour supprimer un article du panier
//   const handleRemove = (plantId) => {
//     removeFromPanier(plantId);
//   };

//   // Fonction pour calculer le prix total du panier
//   const getTotalPrice = () => {
//     return panierItems.reduce((total, plant) => total + getPlantPrice(plant.id) * plant.quantity, 0);
//   };

//   // Fonction pour obtenir le prix d'une plante en fonction de son ID
//   const getPlantPrice = (plantId) => {
//     const planteInfo = donneesPlantes.find((plante) => plante.id === plantId);
//     return planteInfo ? planteInfo.price : 0;
//   };

//   // Fonction pour générer un numéro de commande unique
//   function genererNumeroCommande  ()  {
//     const horodatage = new Date().getTime();
//     const nombreAleatoire = Math.floor(Math.random() * 10000);
//     return `COMMANDE-${horodatage}-${nombreAleatoire}`;
//   };

//     const numeroCommande = Cookies.get('numeroCommande');


    
//     // Fonction pour enregistrer la commande
//   const handleConfirmerCommande = () => {
//     // Créez un objet contenant les détails de la commande
//     const commande = {
//       items: panierItems.map((plant) => ({
//         id: plant.id,
//         quantity: plant.quantity,
//       })),
//       total: getTotalPrice(),
//       // Vous pouvez ajouter d'autres informations ici, comme les informations de paiement de l'utilisateur
//     };

//     // Appelez l'API backend pour enregistrer la commande
//     createOrder(commande)
//       .then((response) => {
//         // La commande a été enregistrée avec succès, affichez le message de confirmation avec le numéro de commande
//         const numeroCommande = response.numeroCommande; // Assurez-vous que votre API backend renvoie le numéro de commande après l'enregistrement
//         setCommandeEnregistree(true);
//         // Remettre à un tableau vide le localStorage
//         localStorage.setItem('panier', JSON.stringify([]));
//         // Supprimez également les cookies liés à la commande s'ils sont stockés
//         Cookies.remove('commande');
//         Cookies.remove('numeroCommande');
//       })
//       .catch((error) => {
//         console.error('Erreur lors de l\'enregistrement de la commande :', error.message);
//       });
//   };



//   return (
//     <div>
//       {commandeEnregistree ? ( // Afficher le message de confirmation si la commande est enregistrée
//         <div>
//           <p>Votre commande est enregistrée. Numéro de commande : {numeroCommande}</p>
//         </div>
//       ) : ( // Sinon, afficher le panier et le bouton pour confirmer la commande
//         <div>
//           <h2>Votre panier</h2>
//           {panierItems.length === 0 ? (
//             <p>Votre panier est vide.</p>
//           ) : (
//             <div className="panier__items">
//               {panierItems.map((plant) => {
//                 const planteInfo = donneesPlantes.find((plante) => plante.id === plant.id);
//                 if (!planteInfo) {
//                   console.error(`Informations manquantes pour la plante avec l'ID : ${plant.id}`);
//                   return null;
//                 }
//                 return (
//                   <div key={plant.id} className="panier__item">
//                     <div className="panier__item__info">
//                       <p>{planteInfo.title}</p>
//                       <p>Prix : {planteInfo.price} €</p>
//                       <p>Quantité : {plant.quantity}</p>
//                       {/* Vous pouvez afficher d'autres informations ici */}
//                     </div>
//                     <div className="panier__item__buttons">
//                       <button onClick={() => handleDecrement(plant.id)}>-</button>
//                       <button onClick={() => handleIncrement(plant.id)}>+</button>
//                       <button onClick={() => handleRemove(plant.id)}>Supprimer</button>
//                     </div>
//                   </div>
//                 );
//               })}
//               <div className="panier__total">
//                 <p>Total : {getTotalPrice()} €</p>
//               </div>
//                 <button onClick={handleConfirmerCommande}>Confirmer</button>
              
//             </div>
//           )}
//     </div>
//     )}
//   </div>
//   );
// }

// export default Panier;