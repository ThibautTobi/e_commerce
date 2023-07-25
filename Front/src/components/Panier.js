import React from 'react';
import { usePanier } from '../components/UsePanier';
import '../style/panier.scss';
import Cookies from 'js-cookie'; // Importer js-cookie
import donneesPlantes from '../data/Data';

function Panier() {
  const { panierItems, removeFromPanier, updateQuantity } = usePanier();

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

    // Fonction pour enregistrer la commande dans les cookies
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
    };

    const numeroCommande = Cookies.get('numeroCommande');

  return (
    <div>
      <h2>Votre panier</h2>
      {panierItems.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          <div className="panier__items">
            {panierItems.map((plant) => {
              // Trouver les informations sur la plante à partir des données importées
              const planteInfo = donneesPlantes.find((plante) => plante.id === plant.id);

              if (!planteInfo) {
                // Si les informations sur la plante ne sont pas trouvées, gérer l'erreur
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
          </div>
          <div className="panier__total">
            <p>Total : {getTotalPrice()} €</p>
          </div>
          <button onClick={handleConfirmerCommande}>Confirmer</button>
          {numeroCommande && <p>Numéro de commande : {numeroCommande}</p>}
        </>
      )}
    </div>
  );
}

export default Panier;
