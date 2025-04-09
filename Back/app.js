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
const produits_Routes = require('./Routes/produits.route');
const user_Routes = require('./routes/user.route');
const admin_Routes = require('./routes/admin.route');

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
.catch((error) => console.error('Connexion à MongoDB échouée !',error));

// Utilisation du middleware Helmet pour la politique de ressource cross-origin
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));

// Middleware pour gérer les données JSON dans les requêtes
app.use(express.json());

// Configuration des en-têtes CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');//le * qui signifie toutes les source peut etre remplacer par des 'https://votre-domaine.com'
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');//en tete personnalier 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');//les types de methodes requete possibles
  //res.setHeader('Access-Control-Allow-Credentials', 'false');// si sur true Activer la prise en charge des informations d'authentification (cookies)
  //res.setHeader('Access-Control-Max-Age', '3600');// Définir la durée pendant laquelle les résultats de pré-vérification peuvent être mis en cache (en secondes) ici 1h(3600)
  
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
app.use(produits_Routes);
app.use(user_Routes);
app.use(admin_Routes);

// Gestion statique des fichiers images dans le sous-dossier 'images'
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;






/********
 ***************************** alternative cors
 
 exemple :

 const express = require('express');
const cors = require('cors'); // Import du module cors
const app = express();

// Utilisation du module cors pour simplifier la gestion des en-têtes CORS
app.use(cors());

// Le reste de votre code...

et si ont veux parametrer :
app.use(cors({ credentials: true }));


 ***************************** compression des donnés pour ameliorer les performances
 
 Gzip Compression : Gzip est un algorithme de compression très répandu. Lorsque le serveur reçoit une demande pour un fichier,
  il vérifie si le navigateur du client prend en charge Gzip. Si c'est le cas,
   le serveur compresse le fichier avec Gzip avant de l'envoyer.
    Le navigateur du client décompresse ensuite le fichier et l'affiche.

Brotli Compression : Brotli est un algorithme de compression plus récent et plus efficace que Gzip.
 Il offre généralement de meilleures taux de compression, ce qui signifie que les fichiers compressés sont plus petits.
 Cependant, il est pris en charge par un ensemble plus restreint de navigateurs que Gzip.

exemple :
const express = require('express');
const compression = require('compression');

const app = express();

app.use(compression()); // Utilisation du middleware de compression

niveau de compression :
(app.use(compression({ level: 6 })); // Niveau de compression de 6 (1 étant le plus rapide, 9 le plus élevé))


*********** gestion des deux si non supporter par le navigateur 

exemple :

const express = require('express');
const compression = require('compression'); // Import du module de compression
const expressStaticGzip = require('express-static-gzip'); // Import du module express-static-gzip
const app = express();

// Utilisation du module de compression pour compresser les réponses
app.use(compression());

// Utilisation du module express-static-gzip pour servir les fichiers statiques avec compression
app.use('/images', expressStaticGzip(path.join(__dirname, 'images'), {
  enableBrotli: true, // Activer Brotli si le client le prend en charge
  orderPreference: ['br', 'gzip'], // Préférence pour Brotli puis Gzip
}));

// Le reste de votre code...


Ce code utilise le module compression pour compresser les réponses de toutes les routes,
 et le module express-static-gzip pour servir les fichiers statiques (par exemple, les images) avec la compression activée,
  en utilisant Brotli si le client le prend en charge, sinon Gzip.

Assurez-vous que les fichiers statiques, comme les images, sont stockés dans le dossier 'images'
 (vous pouvez modifier cela en fonction de votre structure de fichiers).



******************************** journalisation des requettes

exemples :
const express = require('express');
const morgan = require('morgan');

const app = express();

// Utilisation de morgan pour la journalisation des requêtes
app.use(morgan('combined'));

// ... autres configurations et routes ...

utiliser. Il existe plusieurs formats prédéfinis, notamment :

'combined' : Format complet avec toutes les informations.
'common' : Format plus court mais incluant des informations importantes.
'tiny' : Format très court, idéal pour un aperçu rapide.

********************************** pagination 

exemple :

const itemsPerPage = 10;
const currentPage = 1; // L'utilisateur peut changer cette valeur

const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;

const currentPageItems = allItems.slice(startIndex, endIndex);


 ******/