[Job router API] :

Avant de commencer:
Cette Api Jobrouter consiste à mettre en relation le projet Jobs( petites annonces en react) et mongoDB ou sont stockées les données. Pour commencer, voici une explication la plus complête possible sur L'API Job router.
Dans un premier temps, verifier que vous avez installer Node JS sur votre ordinateur.
Si ce n'est pas la cas, sous windows ou Mac : https://nodejs.org/en/download
Cela vous permettra de pouvoir utiliser NPM qui est le de gestionnaire de Packages de Node.js.
------------------------------------------------------------------------------------------
Ouvrir le projet du Job Router Api depuis VS CODE.
Avant toute chose vous devez installer les packages dont l'api router aura besoin en tapant cette commande depuis le terminal de VS CODE :
npm install mongoose express dotenv cors
puis npm install -D nodemon

Mongoose est une bibliothèque qui facilite la gestion des interactions avec une base de données MongoDB dans une application Node.js.
Express est un framework populaire pour Node.js qui permet de créer des applications web en fournissant une architecture de base pour gérer les requêtes HTTP, les routes, les middlewares, etc.
Dotenv est une bibliothèque qui permet de charger des variables d'environnement à partir d'un fichier ".env" afin de les utiliser dans l'application.
Cors est un middleware qui permet de gérer les problèmes de sécurité liés aux requêtes cross-origin dans les applications web.
-----------------------------------------------------
Utilisation de l'API router :
Une fois les opération ci-dessus faite, vous aurez un nouveau dossier 'Node_modules.
Pour lancer l'API Router, tapez : npm start
Si tout est correctement installé vous verrez dans le terminal que le serveur se lance et se connecte via le port 8000 et se connecte à MongoDB.
Ce qui veut dire que le serveur est prêt pour recevoir les requête.
------------------------------------------------------
Le model JobsShema :(dossier Model / jobs.js) :
Le mongoose Schema utilisé pour cette Api :
company de type string  : Nom de la société,
Logo : Url généré aléatoirement,
position de type strinf : nom du poste,
postedAt : Date de l'annonce lorsqu'elle à été postée;
contract de type Boolean : type de contact en temps plein ou temps partiel,
location de type sting : correspond au pays du contrat,
website de type string : correspond l'Url du site de la société
apply : correspond à un lien fake pour simuler le fait de postuler a l'annonce,
description de type string : description de l'annonce,
requierementsContent de type string : corresponds aux exigences requises,
roleContent de type string : Texte correspondant aux roles et taches demandées.
--------------------------------------------------------------
Les routes du Router.js :
router.get("/jobs", getJobs); permet de recup toutes les annonces
router.get("/jobs/:jobID", getJobsID) permet de récup un ID d'une anoonce
router.post("/jobs", createJob); permet de créer une annonce
router.put("/jobs/:jobID", updateJob) permet de mettre à jours une annonce par son ID
router.delete("/jobs/:jobID", deleteJob); permet de supprimer définitiement une annonce par son ID
------------------------------------------------------------------------

apply : correspond à un lien fake pour simuler le fait de postuler a l'annonce,
description de type string : description de l'annonce,
requierementsContent de type string : corresponds aux exigences requises,
roleContent de type string : Texte correspondant aux roles et taches demandées.
--------------------------------------------------------------
Les routes du Router.js :
router.get("/jobs", getJobs); permet de recup toutes les annonces
router.get("/jobs/:jobID", getJobsID) permet de récup un ID d'une anoonce
router.post("/jobs", createJob); permet de créer une annonce
router.put("/jobs/:jobID", updateJob) permet de mettre à jours une annonce par son ID
router.delete("/jobs/:jobID", deleteJob); permet de supprimer définitiement une annonce par son ID
------------------------------------------------------------------------
