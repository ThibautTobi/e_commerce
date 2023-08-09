const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// Middleware pour la sécurité des en-têtes HTTP et contre les attaques XSS
const helmet = require('helmet');

// Middleware pour prévenir les attaques d'injection de code malveillant dans les requêtes MongoDB
const mongoSanitize = require('mongo-sanitize');

// Configuration des variables d'environnement
require('dotenv').config();

// Middleware pour limiter le taux de requêtes
const rateLimit = require('express-rate-limit');

// Import des routes
const books_Routes = require('./routes/books.route');
const user_Routes = require('./routes/user.route');

const app = express();

// Configuration du rate limiter
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // Fenêtre de temps (5 minutes en millisecondes)
  max: 200, // Nombre maximal de requêtes autorisées dans la fenêtre de temps
  message: 'Trop de requêtes. Veuillez réessayer plus tard.', // Message d'erreur en cas de dépassement du taux limite
});

app.use(limiter);

// Connexion à la base de données MongoDB
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

// Utilisation du middleware Helmet pour la politique de ressource cross-origin
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));

// Middleware pour gérer les données JSON dans les requêtes
app.use(express.json());

// Configuration des en-têtes CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Middleware pour nettoyer les données de requête contre les attaques d'injection
app.use((req, res, next) => {
  // Nettoie les valeurs des paramètres de requête
  req.body = mongoSanitize(req.body);
  req.query = mongoSanitize(req.query);
  next();
});

// Utilisation des routes
app.use(books_Routes);
app.use(user_Routes);

// Gestion statique des fichiers images dans le sous-dossier 'images'
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;
