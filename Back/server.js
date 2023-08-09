// Importe le module Node.js 'http' pour créer un serveur HTTP
const http = require('http');

// Importe l'application Express depuis le fichier app.js
const app = require('./app');

// Crée un serveur en utilisant l'application Express
const server = http.createServer(app);

// Détermine le port sur lequel le serveur écoutera les requêtes
const port = normalizePort(process.env.PORT || '4000');
app.set('port', port);

// Écoute les événements de connexion et de démarrage du serveur
server.listen(port, () => console.log(`Serveur en écoute sur le port ${port}`));





/*****
 * 
 
// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();

// Remplacez '<votre_base_de_donnees>' par l'URL de votre base de données MongoDB
mongoose.connect('<votre_base_de_donnees>', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connecté à MongoDB'))
  .catch((err) => console.error('Erreur de connexion à MongoDB', err));

// Modèle utilisateur pour stocker les informations des utilisateurs dans la base de données
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.json());

// Point d'accès pour la connexion de l'utilisateur
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Recherchez l'utilisateur dans la base de données par email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Identifiants invalides" });
    }

    // Vérifiez le mot de passe
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Identifiants invalides" });
    }

    // Créez un token JWT pour l'utilisateur authentifié
    const token = jwt.sign({ userId: user._id, email: user.email }, 'secret', { expiresIn: '1h' });

    // Renvoyer le token JWT en réponse
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la connexion" });
  }
});

// Point d'accès pour la création d'un nouvel utilisateur
app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Vérifiez si l'utilisateur existe déjà dans la base de données
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Cet e-mail est déjà utilisé par un autre utilisateur" });
    }

    // Hachez le mot de passe avant de l'enregistrer dans la base de données
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créez un nouvel utilisateur dans la base de données
    const newUser = await User.create({ email, password: hashedPassword });

    // Renvoyer une réponse de succès
    res.status(201).json({ message: "Compte créé avec succès" });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la création du compte" });
  }
});

// Middleware pour vérifier le token JWT lors des requêtes protégées
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Token manquant" });
  }

  try {
    const decodedToken = jwt.verify(token, 'secret');
    req.userData = decodedToken;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token invalide" });
  }
};

// Exemple de point d'accès protégé qui nécessite un token JWT valide
app.get('/api/secure', verifyToken, (req, res) => {
  // Accès autorisé car le token est valide
  res.json({ message: "Accès autorisé" });
});

// Port d'écoute du serveur
const port = 5000;
app.listen(port, () => console.log(`Serveur en écoute sur le port ${port}`));


 * 
 */