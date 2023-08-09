import React, { useState,useMemo } from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Data from '../data/Data';
import '../style/cartPage.scss';
import { usePanier } from '../components/UsePanier';

//MuiCard-root modifier (border)

function ProductCard() {
  const [filter, setFilter] = useState('all'); // État pour gérer le filtre
  const { panierItems, addToPanier } = usePanier();

console.log(panierItems);
  // Filtrer les plantes en fonction du filtre sélectionné
  //const filteredPlants = filter === 'all' ? Data : Data.filter((plant) => plant.categori === filter);
  const filteredPlants = useMemo(() => {
    return filter === 'all' ? Data : Data.filter((plant) => plant.categori === filter);
  }, [filter]);
  

  // console.log("Type of state.items:", Array.isArray(filteredPlants));// verification tableau
  
  return (
    <div className='product'>
      <div className="product__filters">
        <Button onClick={() => setFilter('all')} variant="outlined" className={filter === 'all' ? 'active' : ''}>
          Toutes les plantes
        </Button>
        <Button onClick={() => setFilter('interieur')} variant="outlined" className={filter === 'interieur' ? 'active' : ''}>
          Plantes d'intérieur
        </Button>
        <Button onClick={() => setFilter('exterieur')} variant="outlined" className={filter === 'exterieur' ? 'active' : ''}>
          Plantes d'extérieur
        </Button>
      </div>
      <div className='product__card'>
      {filteredPlants.map((plante) => (
        <Card key={plante.id} className="product__card__display">
          <CardMedia className="product__card__media" image={plante.image} title={plante.title} />
          <CardContent className="product__card__content">
            <Typography variant="h6" component="div" className="product__card__title">
              {plante.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="div" className="product__card__price">
              {plante.price}
            </Typography>
            <Link to={`/cart/${plante.id}`} key={plante.id}>
              <p className='product__card__fiche'>
                Fiche complète
              </p>
            </Link>
            <Button
                variant="outlined"
                size="small"
                className="product__card__button"
                onClick={() => {
                  console.log('Adding to cart:', plante);
                  addToPanier(plante);
                }}
              >
                Ajouter au panier
            </Button>
          </CardContent>
        </Card>
      ))}
      </div>
    </div>
  );
}

export default ProductCard;


/*****  import back end */

// import React, { useState, useEffect } from 'react';
// import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { allProducts } from '../Api/api'; // Import de la route allProducts de l'API
// import '../style/cartPage.scss';
// import { usePanier } from '../components/UsePanier';

// function ProductCard() {
//   const [filter, setFilter] = useState('all');
//   const [products, setProducts] = useState([]); // État pour stocker les produits récupérés depuis l'API
//   const { addToPanier } = usePanier();

//   useEffect(() => {
//     // Récupérer les produits depuis l'API au chargement du composant
//     allProducts()
//       .then((data) => {
//         setProducts(data); // Mettre à jour l'état avec les produits récupérés depuis l'API
//       })
//       .catch((error) => {
//         console.error('Erreur lors de la récupération des produits :', error.message);
//       });
//   }, []);

//   const filteredProducts = filter === 'all' ? products : products.filter((product) => product.category === filter);

//   return (
//     <div className='product'>
//       <div className="product__filters">
//         <Button onClick={() => setFilter('all')} variant="outlined" className={filter === 'all' ? 'active' : ''}>
//           Toutes les plantes
//         </Button>
//         <Button onClick={() => setFilter('interieur')} variant="outlined" className={filter === 'interieur' ? 'active' : ''}>
//           Plantes d'intérieur
//         </Button>
//         <Button onClick={() => setFilter('exterieur')} variant="outlined" className={filter === 'exterieur' ? 'active' : ''}>
//           Plantes d'extérieur
//         </Button>
//       </div>
//       <div className='product__card'>
//         {filteredProducts.map((product) => (
//           <Card key={product.id} className="product__card__display">
//             <CardMedia className="product__card__media" image={product.image} title={product.title} />
//             <CardContent className="product__card__content">
//               <Typography variant="h6" component="div" className="product__card__title">
//                 {product.title}
//               </Typography>
//               <Typography variant="body2" color="textSecondary" component="div" className="product__card__price">
//                 {product.price}
//               </Typography>
//               <Link to={`/cart/${product.id}`} key={product.id}>
//                 <p className='product__card__fiche'>
//                   Fiche complète
//                 </p>
//               </Link>
//               <Button
//                 variant="outlined"
//                 size="small"
//                 className="product__card__button"
//                 onClick={() => {
//                   addToPanier(product);
//                 }}
//               >
//                 Ajouter au panier
//               </Button>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductCard;


/** en cours de debug **/

// import React, { useState } from 'react';
// import { usePanier } from '../components/UsePanier';
// import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
// import { Link } from 'react-router-dom';
// import Data from '../data/Data';
// import '../style/cartPage.scss';

// function ProductCard() {
//   const [filter, setFilter] = useState('all'); // État pour gérer le filtre
//   const { addToPanier, removeFromPanier } = usePanier();

//   // Filtrer les plantes en fonction du filtre sélectionné
//   const filteredPlants = filter === 'all' ? Data : Data.filter((plant) => plant.categori === filter);

//   return (
//     <div className='product'>
//       <div className="product__filters">
//         <Button onClick={() => setFilter('all')} variant="outlined" className={filter === 'all' ? 'active' : ''}>
//           Toutes les plantes
//         </Button>
//         <Button onClick={() => setFilter('interieur')} variant="outlined" className={filter === 'interieur' ? 'active' : ''}>
//           Plantes d'intérieur
//         </Button>
//         <Button onClick={() => setFilter('exterieur')} variant="outlined" className={filter === 'exterieur' ? 'active' : ''}>
//           Plantes d'extérieur
//         </Button>
//       </div>
//       <div className='product__card'>
//       {filteredPlants.map((plante) => (
//         <Card key={plante.id} className="product__card__display">
//           <CardMedia className="product__card__media" image={plante.image} title={plante.title} />
//           <CardContent className="product__card__content">
//             <Typography variant="h6" component="div" className="product__card__title">
//               {plante.title}
//             </Typography>
//             <Typography variant="body2" color="textSecondary" component="div" className="product__card__price">
//               {plante.price}
//             </Typography>
//             <Link to={`/cart/${plante.id}`} key={plante.id}>
//               <p className='product__card__fiche'>
//                 Fiche complète
//               </p>
//             </Link>
//             <Button
//                 variant="outlined"
//                 size="small"
//                 className="product__card__button"
//                 onClick={() => {
//                   addToPanier(plante)
//                 }}
//               >
//                 Ajouter au panier
//             </Button>
//           </CardContent>
//         </Card>
//       ))}
//       </div>
//     </div>
//   );
// }

// export default ProductCard;
