# Notes prof

Distribuer aux étudiants le dossier `app/` contenant la base de l'application Node.js (Express)

### Pour les étudiants qui utilisent Docker :

Les étudiants doivent mettre à jour le fichier `stack.yml` avec celui fourni dans ce dossier de Challenge, qui contient le service `web` supplémentaire.

Les étudiants doivent placer le dossier `app/` à côté de leur fichier `stack.yml`

Il devront ensuite relancer Docker Compose :

```bash
docker-compose -f stack.yml up
```

### Pour les étudiants qui ont fait une install manuelle :

Il faut leur faire installer Node.js (au moins en `v16`) : https://nodejs.org/fr/

Ils doivent ensuite ouvrir un terminal vers le dossier `app/` et installer les dépendances :

```bash
npm install
```

Puis, il peuvent lancer l'application avec :

```bash
npm start
```

---

L'application Node écoute par défaut sur http://localhost:3002 et doit charger une page web qui affiche « Hello Mongo! »

Le moteur de templating utilisé est [Pug](https://pugjs.org/).

Dans un premier temps, laisser les étudiants observer la structure des fichiers, puis faire avec eux la connexion avec MongoDB (voir `Correction_prof/app/database.js`) + une requête type `find` pour leur montrer comment afficher une liste de restaurants sur la page web.

Les laisser avancer ensuite sur le reste du challenge.