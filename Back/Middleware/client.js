const jwt = require('jsonwebtoken');
const User = require('./models/User'); // Assurez-vous d'importer correctement votre modèle User

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; // Récupère le token de l'en-tête
    const decodedToken = jwt.verify(token, 'your-secret-key'); // Décode le token avec la clé secrète

    // Recherche l'utilisateur dans la base de données en fonction de l'ID du token
    const user = await User.findById(decodedToken.userId);

    if (!user) {
      // Si l'utilisateur n'est pas trouvé, renvoie une réponse 401 (non autorisée)
      return res.status(401).json({ message: 'Utilisateur non trouvé' });
    }

    // Si l'utilisateur est trouvé, stocke les données de l'utilisateur dans req.userData
    req.userData = { userId: user._id, role: user.role };

    // Continuez vers la prochaine étape, quelle que soit la valeur du rôle
    next();
  } catch (error) {
    // En cas d'erreur (token invalide, expiré, etc.), renvoie une réponse 401 (non autorisée)
    res.status(401).json({ message: 'Vous n\'êtes pas authentifié' });
  }
};