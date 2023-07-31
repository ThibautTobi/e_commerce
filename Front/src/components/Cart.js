import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Button, Collapse } from '@mui/material';
import plantes from '../data/Data';
import '../style/cart.scss';

function Cart() {
  const { id } = useParams();

  // Convertir l'ID extrait en nombre
  const productId = parseInt(id);

  // Recherche du produit correspondant à l'ID dans les données
  const product = plantes.find((plante) => productId === plante.id);

  // State pour gérer l'expansion de la section d'informations supplémentaires
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function BadFind (){

    return(
          <div className='Badfind'>
            <p className='Badfind__p'>Produit non trouvé</p>
          </div>
          )
  };
  // Gérer le cas où le produit n'est pas trouvé
  if (!product) {
    return (
      <BadFind />
    )
  }

  return (
    <div className="cart">
      <Card className="cart__card">
        <CardMedia className="cart__media" image={product.image} title={product.title} />
        <CardContent className="cart__content">
          <Typography variant="h6" component="div" className="cart__title">
            {product.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div" className="cart__categori">
            Catégorie: {product.categori}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div" className="cart__description">
            {product.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div" className="cart__price">
            Prix: {product.price} €
          </Typography>
          <Button onClick={handleExpandClick} variant="outlined" size="small" className="cart__button">
            Informations supplémentaires
          </Button>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Typography variant="body2" color="textSecondary" component="div" className="cart__information">
              {product.information}
            </Typography>
          </Collapse>
        </CardContent>
      </Card>
    </div>
  );
}

export default Cart;

/****** requete back end */

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { Card, CardMedia, CardContent, Typography, Button, Collapse } from '@mui/material';
// import { getProductById } from '../Api/api';
// import '../style/cart.scss';

// function Cart() {
//   const { id } = useParams();
//   const productId = parseInt(id);
//   const [product, setProduct] = useState(null);
//   const [expanded, setExpanded] = useState(false);

//   useEffect(() => {
//     // Faites une requête GET à votre backend pour récupérer les informations du produit en fonction de l'ID
//     getProductById(productId)
//       .then((data) => {
//         setProduct(data); // Stockez les informations du produit dans le state "product"
//       })
//       .catch((error) => {
//         console.error('Erreur lors de la récupération des informations du produit :', error.message);
//       });
//   }, [productId]);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   if (!product) {
//     return <div>Chargement en cours...</div>;
//   }

//   return (
//     <div className="cart">
//       <Card className="cart__card">
//         <CardMedia className="cart__media" image={product.image} title={product.title} />
//         <CardContent className="cart__content">
//           <Typography variant="h6" component="div" className="cart__title">
//             {product.title}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="div" className="cart__categori">
//             Catégorie: {product.category}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="div" className="cart__description">
//             {product.description}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="div" className="cart__price">
//             Prix: {product.price} €
//           </Typography>
//           <Button onClick={handleExpandClick} variant="outlined" size="small" className="cart__button">
//             Informations supplémentaires
//           </Button>
//           <Collapse in={expanded} timeout="auto" unmountOnExit>
//             <Typography variant="body2" color="textSecondary" component="div" className="cart__information">
//               {product.information}
//             </Typography>
//           </Collapse>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default Cart;


/** en cours de debug **/

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { Card, CardMedia, CardContent, Typography, Button, Collapse } from '@mui/material';
// import plantes from '../data/Data';
// import '../style/cart.scss';
// import { usePanier } from '../components/UsePanier';

// function Cart() {
//   const { id } = useParams();

//   // Convertir l'ID extrait en nombre
//   const productId = parseInt(id);

//   // Recherche du produit correspondant à l'ID dans les données
//   const product = plantes.find((plante) => productId === plante.id);

//   // State pour gérer l'expansion de la section d'informations supplémentaires
//   const [expanded, setExpanded] = useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   // Utiliser useEffect pour afficher un message lorsque le composant est monté
//   useEffect(() => {
//     console.log('Le composant "Cart" est monté.');
//     // Effectuer d'autres opérations si nécessaire lors du montage du composant...
//     return () => {
//       console.log('Le composant "Cart" sera démonté.');
//       // Effectuer d'autres opérations de nettoyage si nécessaire lors du démontage du composant...
//     };
//   }, []); // Utiliser un tableau vide pour que le useEffect s'exécute seulement lors du montage initial

//   function BadFind () {
//     return (
//       <div className='Badfind'>
//         <p className='Badfind__p'>Produit non trouvé</p>
//       </div>
//     );
//   };

//   // Gérer le cas où le produit n'est pas trouvé
//   if (!product) {
//     return (
//       <BadFind />
//     )
//   }

//   return (
//     <div className="cart">
//       <Card className="cart__card">
//         <CardMedia className="cart__media" image={product.image} title={product.title} />
//         <CardContent className="cart__content">
//           <Typography variant="h6" component="div" className="cart__title">
//             {product.title}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="div" className="cart__categori">
//             Catégorie: {product.categori}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="div" className="cart__description">
//             {product.description}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="div" className="cart__price">
//             Prix: {product.price} €
//           </Typography>
//           <Button onClick={handleExpandClick} variant="outlined" size="small" className="cart__button">
//             Informations supplémentaires
//           </Button>
//           <Collapse in={expanded} timeout="auto" unmountOnExit>
//             <Typography variant="body2" color="textSecondary" component="div" className="cart__information">
//               {product.information}
//             </Typography>
//           </Collapse>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default Cart;
