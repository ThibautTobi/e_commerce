import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Data from '../data/Data';
import '../style/cartPage.scss';
import { usePanier } from '../components/UsePanier';

//MuiCard-root modifier (border)

function ProductCard() {
  const [filter, setFilter] = useState('all'); // État pour gérer le filtre
  const { addToPanier, } = usePanier();

  // Filtrer les plantes en fonction du filtre sélectionné
  const filteredPlants = filter === 'all' ? Data : Data.filter((plant) => plant.categori === filter);

  // console.log(addToPanier)
  // console.log(panierItem)
  
  return (
    <div className='product'>
      <div className="product__filters">
        {/* Boutons pour toutes les plantes, les plantes d'intérieur et les plantes d'extérieur */}
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
                  addToPanier(plante) // Ajouter la plante au panier
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