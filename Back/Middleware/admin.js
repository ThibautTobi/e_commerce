// const jwt = require('jsonwebtoken');
// const User = require('./models/User');

// module.exports = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization.split(' ')[1]; // Récupère le token de l'en-tête
//     const decodedToken = jwt.verify(token, 'your-secret-key'); // Décode le token avec la clé secrète

//     // Recherche l'utilisateur dans la base de données en fonction de l'ID du token
//     const user = await User.findById(decodedToken.userId);

//     if (!user) {
//       // Si l'utilisateur n'est pas trouvé, renvoie une réponse 401 (non autorisée)
//       return res.status(401).json({ message: 'Utilisateur non trouvé' });
//     }

//     // Si l'utilisateur est trouvé, stocke les données de l'utilisateur dans req.userData
//     req.userData = { userId: user._id, role: user.role };

//     if (req.userData.role === 'admin') {
//       // Si le rôle de l'utilisateur est 'admin', continuez vers la prochaine étape
//       next(); // Continue vers la route suivante (route avec l'accès admin)
//     } else {
//       // Si le rôle n'est pas 'admin', renvoie une réponse 401 (non autorisée)
//       res.status(401).json({ message: 'Accès non autorisé' });
//     }
//   } catch (error) {
//     // En cas d'erreur (token invalide, expiré, etc.), renvoie une réponse 401 (non autorisée)
//     res.status(401).json({ message: 'Vous n\'êtes pas authentifié' });
//   }
// };