import React from 'react';
import '../style/homePages.scss';

function HomePage (){

  function Accueil () {

    return (
      <div className="accueil">
        <h1 className="accueil__title">Bienvenue sur notre site e-commerce</h1>
        <p className="accueil__description">
          Découvrez nos produits de qualité à des prix compétitifs.
        </p>
        <button className="accueil__cta">Découvrir</button>   
        <section className="featured-products">
          <h2 className="featured-products__title">Produits en vedette</h2>
          <div className="featured-products__grid">
            <div className="product-card">
              <img className="product-card__image" src="product1.jpg" alt="Produit 1" />
              <h3 className="product-card__title">Produit 1</h3>
              <p className="product-card__description">Description du produit 1</p>
            </div>
            <div className="product-card">
              <img className="product-card__image" src="product2.jpg" alt="Produit 2" />
              <h3 className="product-card__title">Produit 2</h3>
              <p className="product-card__description">Description du produit 2</p>
            </div>
            {/* Ajoute d'autres cartes de produits ici */}
          </div>
        </section>
      </div>
    );
  };


  return(
      <div>
        <Accueil />
      </div>
    )
}

export default HomePage;


/**
import React from 'react';
import { Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: 'center',
    padding: theme.spacing(4),
  },
  title: {
    fontSize: theme.typography.h2.fontSize,
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  description: {
    fontSize: theme.typography.body1.fontSize,
    marginBottom: theme.spacing(2),
  },
  cta: {
    marginTop: theme.spacing(2),
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h2" className={classes.title}>
        Bienvenue sur notre site e-commerce !
      </Typography>
      <Typography variant="body1" className={classes.description}>
        Découvrez notre large sélection de produits de qualité.
      </Typography>
      <Button variant="contained" color="primary" className={classes.cta}>
        Commencer les achats
      </Button>
    </div>
  );
};

export default HomePage;
  
**/