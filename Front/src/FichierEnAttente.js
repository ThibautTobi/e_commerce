
// // Fonction pour récupérer les détails d'une commande depuis le backend
// export const getOrderDetails = (orderId) => {
//     return fetch(`${API_BASE_URL}/api/orders/${orderId}`).then(handleResponse);
//   };
  
//   // Fonction pour mettre à jour une commande existante dans le backend
//   export const updateOrder = (orderId, orderData) => {
//     return fetch(`${API_BASE_URL}/api/orders/${orderId}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(orderData),
//     }).then(handleResponse);
//   };
  
//   // Fonction pour supprimer une commande du backend
//   export const deleteOrder = (orderId) => {
//     return fetch(`${API_BASE_URL}/api/orders/${orderId}`, {
//       method: 'DELETE',
//     }).then(handleResponse);
//   };  




//   import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { createOrder, getOrderDetails, updateOrder, deleteOrder } from './api';

// function UserPanel() {
//   const userRole = useSelector((state) => state.user.role); // Assurez-vous que l'utilisateur est connecté et a le rôle d'administrateur

//   const [orderData, setOrderData] = useState({
//     // Initialisez les données de commande ici (par exemple, nom, adresse, articles, etc.)
//     // Ces données peuvent être saisies par l'utilisateur dans un formulaire
//   });

//   const [orderId, setOrderId] = useState(null);
//   const [orderDetails, setOrderDetails] = useState(null);

//   // Fonction pour créer une nouvelle commande
//   const handleCreateOrder = () => {
//     createOrder(orderData)
//       .then((newOrder) => {
//         setOrderId(newOrder.id);
//         console.log('Nouvelle commande créée:', newOrder);
//       })
//       .catch((error) => {
//         console.error('Erreur lors de la création de la commande:', error.message);
//       });
//   };

//   // Fonction pour récupérer les détails d'une commande existante
//   const handleGetOrderDetails = () => {
//     getOrderDetails(orderId)
//       .then((orderDetails) => {
//         setOrderDetails(orderDetails);
//         console.log('Détails de la commande:', orderDetails);
//       })
//       .catch((error) => {
//         console.error('Erreur lors de la récupération des détails de la commande:', error.message);
//       });
//   };

//   // Fonction pour mettre à jour une commande existante
//   const handleUpdateOrder = () => {
//     updateOrder(orderId, orderData)
//       .then((updatedOrder) => {
//         setOrderDetails(updatedOrder);
//         console.log('Commande mise à jour:', updatedOrder);
//       })
//       .catch((error) => {
//         console.error('Erreur lors de la mise à jour de la commande:', error.message);
//       });
//   };

//   // Fonction pour supprimer une commande
//   const handleDeleteOrder = () => {
//     deleteOrder(orderId)
//       .then(() => {
//         setOrderDetails(null);
//         console.log('Commande supprimée avec succès.');
//       })
//       .catch((error) => {
//         console.error('Erreur lors de la suppression de la commande:', error.message);
//       });
//   };

//   // Utilisez useEffect pour appeler les fonctions appropriées en fonction de l'action souhaitée par l'utilisateur

//   useEffect(() => {
//     if (orderId) {
//       handleGetOrderDetails();
//     }
//   }, [orderId]);

//   return (
//     <div>
//       {userRole === 'admin' && (
//         <div>
//           {/* Affichez ici le formulaire pour saisir les données de la nouvelle commande */}
//           <button onClick={handleCreateOrder}>Créer une nouvelle commande</button>
//           {orderId && (
//             <div>
//               {/* Affichez ici les détails de la commande sélectionnée */}
//               <button onClick={handleUpdateOrder}>Mettre à jour la commande</button>
//               <button onClick={handleDeleteOrder}>Supprimer la commande</button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default UserPanel;
