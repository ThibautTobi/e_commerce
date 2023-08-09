import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './components/Theme';
import { Provider } from 'react-redux';
import { PanierProvider } from './components/UsePanier';
import ErrorBoundary from './components/ErreurBoundary';
import store from './redux/store';
import App from './App';
import './style/index.scss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <PanierProvider>
          <ThemeProvider>
            <Provider store={store}>
              <App />
            </Provider>
          </ThemeProvider>
        </PanierProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);

/*** 
Panier d'achat :
Une page où les utilisateurs peuvent voir les produits qu'ils ont ajoutés à leur panier, les quantités, les prix et passer à la caisse.

Page de paiement :
Une page sécurisée où les utilisateurs peuvent saisir leurs informations de paiement pour finaliser leur commande.

Pages de compte utilisateur :
Des pages permettant aux utilisateurs de créer un compte, de se connecter, de gérer leurs informations personnelles, leurs adresses de livraison, leur historique de commande, etc.

Page de suivi des commandes :
Une page où les utilisateurs peuvent suivre l'état de leur commande et obtenir des informations sur la livraison.

Page de contact :
Une page permettant aux utilisateurs de contacter le service client pour poser des questions, signaler des problèmes ou demander des informations supplémentaires.

Page de politique de retour :
Une page expliquant la politique de retour du site, les conditions, les délais, etc.

Pages promotionnelles :
Des pages spéciales pour les ventes, les offres spéciales, les événements promotionnels, etc.

Blog ou page d'actualités :
Une section où des articles, des guides d'achat, des conseils ou des actualités liées aux produits sont publiés.

Ces pages sont généralement essentielles pour un site e-commerce, mais selon la nature de ton entreprise et les besoins spécifiques de ton site, tu peux également ajouter des pages supplémentaires ou personnaliser ces pages de base.
***/