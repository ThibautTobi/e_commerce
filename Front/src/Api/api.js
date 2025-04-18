const API_BASE_URL = 'http://localhost:3001';

// Fonction utilitaire pour gérer les réponses HTTP
const handleResponse = (response) => {
  if (!response.ok) {
    throw new Error('Erreur lors de la requête vers le backend');
  }
  return response.json();
};

// Fonction pour récupérer tous les produits depuis le backend
export const allProducts = () => {
  return fetch(`${API_BASE_URL}/api/products`).then(handleResponse);
};

// Fonction pour récupérer un produit spécifique depuis le backend en fonction de son ID
export const getProductById = (productId) => {
  return fetch(`${API_BASE_URL}/api/products/${productId}`).then(handleResponse);
};

// Fonction pour ajouter un nouveau produit dans le backend
export const addProduct = (productData) => {
  return fetch(`${API_BASE_URL}/api/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productData),
  }).then(handleResponse);
};

// Fonction pour mettre à jour un produit existant dans le backend
export const updateProduct = (productId, productData) => {
  return fetch(`${API_BASE_URL}/api/products/${productId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productData),
  }).then(handleResponse);
};

// Fonction pour supprimer un produit du backend
export const deleteProduct = (productId) => {
  return fetch(`${API_BASE_URL}/api/products/${productId}`, {
    method: 'DELETE',
  }).then(handleResponse);
};

// Fonction pour se connecter
export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message);
    }

    const data = await response.json();
    return data.token;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Fonction pour créer un nouvel utilisateur
export const signup = async (email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message);
    }

    const data = await response.json();
    return data.message;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Fonction pour enregistrer une nouvelle commande dans le backend
export const createOrder = (orderData) => {
  return fetch(`${API_BASE_URL}/api/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderData),
  }).then(handleResponse);
};