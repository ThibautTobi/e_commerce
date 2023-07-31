import React, { useContext } from 'react';
import { Button, AppBar, Toolbar, Typography, IconButton, TextField, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from './Theme';
import { usePanier } from '../components/UsePanier';
//import Panier from './Panier';
import '../style/navbar.scss';

// modification des thèmes de composants avec les styles souhaités
const lightTheme = createTheme({
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
            color: 'black', 
          },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
                color:'black',
              },
      },
    },
    MuiFormControlLabel:{
      styleOverrides:{
        root:{
          color: 'green',
        }
      }
    },
    MuiFormControl:{
      styleOverrides:{
        root:{
          color: 'green',
        }
      }
    },
    MuiAppBar:{
      styleOverrides:{
        root:{
          backgroundColor: 'transparent',
        }
      }
    }
  },
});

const darkTheme = createTheme({

  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: '#393939',
          color: 'white',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
        color:'white',
        },
      },
    },
    MuiFormControlLabel:{
      styleOverrides:{
        root:{
          color: 'white',
        }
      }
    },
    MuiFormControl:{
      styleOverrides:{
        root:{
          color: 'white',
        }
      }
    },
    MuiIconButton:{
      styleOverrides:{
        root:{
          color: 'white',
        }
      }
    },
    MuiInputLabel:{
      styleOverrides:{
        root:{
          color: 'white',
        }
      }
    },
    MuiOutlinedInput:{
      styleOverrides:{
        root:{
          borderColor: 'white',
        },
        // '&:hover': {
        //   color: 'white', // Couleur du texte de l'input lorsqu'il est survolé
        // },
        // '&:focus': {
        //   borderColor: 'white', // Couleur de la bordure de l'input lorsqu'il a le focus
        // },
      }
    },
    MuiInputBase:{
      styleOverrides:{
        root:{
          color: 'white',
        }
      }
    },
  },
});

function Navbar() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const { panierItems } = usePanier();

  // Calculer le nombre total d'articles dans le panier
  const totalPlantesDansPanier = panierItems.reduce((total, plant) => total + plant.quantity, 0);

  const handlePanierIconClick = () => {
    navigate('/Panier');
  };

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <AppBar position="static" className="navbar">
        <Toolbar className="navbar__toolbar">
          <Typography className="navbar__typo" variant="h1" component="div" sx={{ flexGrow: 1 }}>
            Shopping Jungle
          </Typography>
          <nav className="navbar__navigation">
            <ul className="navbar__ul">
              <li>
                <Button className="navbar__ul__li" variant="text" href="/">
                  Home
                </Button>
              </li>
              <li>
                <Button className="navbar__ul__li" variant="text" href="/Produits">
                  Produits
                </Button>
              </li>
              <li>
                <Button className="navbar__ul__li" variant="text" href="/contact">
                  Contact
                </Button>
              </li>
              <li>
                <Button className="navbar__ul__li" variant="text" href="/login">
                  Login
                </Button>
              </li>
              {/* ou Logout si connecté */}
            </ul>
          </nav>
          <div className="navbar__search">
            <TextField
              id="search"
              label="Rechercher"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <IconButton edge="end" size="large">
                    <SearchIcon />
                  </IconButton>
                ),
              }}
            />
          </div>
          <IconButton color="inherit" size="large" onClick={handlePanierIconClick}>
            <Badge badgeContent={totalPlantesDansPanier} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;