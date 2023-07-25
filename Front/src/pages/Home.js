import React from 'react';
import Annonce from '../components/Annonce';
import '../style/home.scss';
import Banniere from '../components/Banniere';

function HomePage (){

// function Vedette (){
// // import de la base de donnée ajouter au shema : "ventes: 10,"
// const produits = data; 
// // Triez les trois produits par ventes de manière décroissante
// const meilleuresVentes = produits.sort((a, b) => b.ventes - a.ventes).slice(0, 3);

// return (
//   <section className="accueil__display">
//     <div className="featured-products__grid">
//       {meilleuresVentes.map((produit) => (
//         <div key={produit.id} className="product-card">
//           <img className="product-card__image" src={produit.image} alt={produit.nom} />
//           <h3 className="product-card__title">{produit.nom}</h3>
//           <p className="product-card__description">{produit.description}</p>
//         </div>
//       ))}
//     </div>
//   </section>
// );
// }

  function Accueil () {

    return (
      <div className="accueil">
        <Banniere />
        <Annonce />
        <h1 className="accueil__title">Bienvenue sur notre site Shopping Web</h1>
        <p className="accueil__description">
          Découvrez nos produits de qualité à des prix compétitifs.
        </p>
        <h2 className="featured-products__title">Produits en vedette</h2>
        {/* <Vedette /> */}
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