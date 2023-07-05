import React from 'react';
import './Produit.scss';

const Produit = () => {
  return (
    <div className="produit">
      <div className="produit__image">
        <img src="product.jpg" alt="Produit" />
      </div>
      <div className="produit__details">
        <h1 className="produit__title">Nom du produit</h1>
        <p className="produit__description">
          Description détaillée du produit.
        </p>
        <div className="produit__price">$99.99</div>
        <button className="produit__cta">Ajouter au panier</button>
      </div>
    </div>
  );
};

export default Produit;
/***
 import React from 'react';
import { Typography, Button, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  produit: {
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    flex: '0 0 40%',
    marginRight: theme.spacing(2),

    '& img': {
      width: '100%',
      height: 'auto',
    },
  },
  details: {
    flex: 1,

    '& > *': {
      marginBottom: theme.spacing(1),
    },

    '& .title': {
      fontSize: theme.typography.h5.fontSize,
      color: theme.palette.primary.main,
    },

    '& .description': {
      fontSize: theme.typography.body1.fontSize,
    },

    '& .price': {
      fontSize: theme.typography.h6.fontSize,
      fontWeight: 'bold',
    },

    '& .cta': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      padding: theme.spacing(1, 2),
      fontSize: theme.typography.h6.fontSize,
      borderRadius: theme.shape.borderRadius,
      cursor: 'pointer',
      transition: 'background-color 0.3s',

      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
    },
  },
}));

const Produit = () => {
  const classes = useStyles();

  return (
    <div className={classes.produit}>
      <div className={classes.image}>
        <img src="product.jpg" alt="Produit" />
      </div>
      <div className={classes.details}>
        <Typography variant="h5" className="title">
          Nom du produit
        </Typography>
        <Typography variant="body1" className="description">
          Description détaillée du produit.
        </Typography>
        <Typography variant="h6" className="price">
          $99.99
        </Typography>
        <Button variant="contained" className="cta">
          Ajouter au panier
        </Button>
      </div>
    </div>
  );
};

export default Produit;

 ***/