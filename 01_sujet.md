# Node & MongoDB

Utilisez le modèle proposé pour démarrer le TP dans le dossier `/app`.

Vous gérerez les vues avec [Pug](https://pugjs.org/).

Pour chaque étape de ce challange, vous devez sur le serveur créer une url, un lien sera donc cliquable dans la `<nav>` du layout et il permettra d'afficher la page correspondantes à l'étape.

Vous utiliserez les promesses JS avec les mots-clé `async/await` pour communiquer avec la base Mongo dans votre app Node.

## Etapes du challenge

1. Créez une page `/restos` qui affiche un formulaire permettant de rechercher un restaurant par nom.
Utilisez la méthode GET pour votre formulaire.
La liste des résultats de recherche doit afficher les restaurants avec leur nom, type de cuisine et addresse complète.
Les résultats doivent s'afficher dans la même page.

---

2. Créez une page `/explore` qui affiche un formulaire permettant d'afficher les restaurants par quartier et par type de cuisine.
Le formulaire doit contenir 2 listes déroulantes `<select>` pour afficher tous les quartiers et cuisines distincts.
Utilisez la méthode GET pour votre formulaire.
Le formulaire envoyé doit afficher uniquement les restaurants correspondants à ces 2 critères.
La liste des restaurants doit afficher le nom, type de cuisine et addresse complète.

---

3. Imaginez une autre page ou recherche de votre choix faisant une (ou plusieurs) intéraction(s) avec la base MongoDB.

---

*Vous êtes libres sur les étapes d'implémenter des fonctionnalités supplémentaires comme la pagination des résultats, ou des critères de tri.*