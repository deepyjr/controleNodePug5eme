const express = require('express');
const router = new express.Router()
Restaurant = require('../controllers/restaurant-controller');

/**
 * Déclaration des routes de l'app
 */

router.get("/", getHome);

/**
 * Déclaration des controlleurs de l'app
 */

/**
 * GET /
 * Page d'accueil
 */
function getHome(req, res) {
  res.render('index');
}

// Exporte le routeur pour le fichier principal
module.exports = router;