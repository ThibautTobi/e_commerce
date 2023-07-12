import React from 'react';
import { Button, AppBar, Toolbar, Typography, IconButton, TextField, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../style/navbar.scss';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary : {
      main: '#124116',
    }
  },
  typography: {
    fontFamily: 'Arial',
  }
});

function Navbar() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" className="navbar">
        <Toolbar>
          <Typography variant="h6" color="secondary" component="div" sx={{ flexGrow: 1 }}>
            Shopping Jungle
          </Typography>
          <nav className="navbar__navigation">
            <ul className="navbar__list">
              <li>
                <Button variant="text"color="secondary" href="/">
                  Home
                </Button>
              </li>
              <li>
                <Button variant="text" color="secondary" href="/Produits">
                  Produits
                </Button>
              </li>
              <li>
                <Button variant="text" color="secondary" href="/contact">
                  Contact
                </Button>
              </li>
              <li>
                <Button variant="text" color="secondary" href="/login">
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
                  <IconButton edge="end" color="secondary" size="large">
                    <SearchIcon />
                  </IconButton>
                ),
              }}
            />
          </div>
          <IconButton color="inherit" size="large">
            <Badge badgeContent={0} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;