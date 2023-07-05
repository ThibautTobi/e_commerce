import React, { useState } from 'react';
import './Categories.scss';

const Categories = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="categories">
      <div className="categories__sidebar">
        <h3>Categories</h3>
        <ul className="categories__list">
          <li className="categories__category">Category 1</li>
          <li className="categories__category">Category 2</li>
          <li className="categories__category">Category 3</li>
          {/* Add more categories */}
        </ul>
      </div>

      <div className={`categories__menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="categories__menu-toggle" onClick={toggleMenu}>
          Menu
        </button>
        <ul className="categories__list">
          <li className="categories__category">Category 1</li>
          <li className="categories__category">Category 2</li>
          <li className="categories__category">Category 3</li>
          {/* Add more categories */}
        </ul>
      </div>
    </div>
  );
};

export default Categories;

/***
import React from 'react';
import { Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
  },
  navigation: {
    flex: '0 0 20%',
    backgroundColor: theme.palette.grey[200],
    padding: theme.spacing(2),
  },
  content: {
    flex: 1,
    padding: theme.spacing(2),
  },
}));

const CategoryPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.navigation}>
        <Typography variant="h5">Catégories</Typography>
        <Divider />
        <List component="nav">
          <ListItem button>
            <ListItemText primary="Catégorie 1" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Catégorie 2" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Catégorie 3" />
          </ListItem>
        </List>
      </div>
      <div className={classes.content}>
        <Typography variant="h4">Contenu de la catégorie</Typography>
    {/* Ajoute le contenu spécifique de la catégorie ici */
//}
    //     </div>
    //     </div>
    //   );
    // };
    
    // export default CategoryPage;
    