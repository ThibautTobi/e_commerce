// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { Card, CardMedia, CardContent, Typography, Button, Collapse } from '@mui/material';
// import plantes from '../data/Data';
// import '../style/cart.scss';

// function Cart() {
//   const { productId } = useParams();

//   // Recherche du produit correspondant à l'ID dans les données
//   const product = plantes.find((plante) => plante.id === parseInt(productId));

//   if (!product) {
//     // Gérer le cas où le produit n'est pas trouvé
//     return <Typography variant="h6">Produit non trouvé</Typography>;
//   }

//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

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
//               {/* Afficher d'autres informations si nécessaire */}
//             </Typography>
//           </Collapse>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default Cart;

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
