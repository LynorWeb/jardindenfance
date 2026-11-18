# Rendez-vous Jardin d'enfance — fiche d'arguments

Boutique : Jardin d'enfance, 86 rue du Général Moulin, 14000 Caen · 02 31 73 28 80
Site actuel : https://www.jardindenfance.fr/ (fait avec Jimdo Creator)

## Ce qui ne va pas sur son site actuel (constaté le 17/11/2026)

1. **On ne peut rien commander en ligne.** Les bouquets et le deuil affichent juste « à partir de 30 € » : le client doit appeler. Ses concurrents (Interflora, Aquarelle…) prennent la commande à sa place.
2. **Le message principal est noyé.** L'accueil, c'est un grand logo, une photo de fond et un texte dans un cadre blanc. Rien ne dit « commander », « appeler » ou « horaires ».
3. **Mauvais pour Google :**
   - aucun titre principal (H1) sur la page d'accueil ;
   - 9 photos sur 10 n'ont pas de description (Google ne « voit » pas les bouquets) ;
   - aucune fiche « Fleuriste » lisible par Google (horaires, adresse, téléphone structurés).
4. **Fautes visibles** : « a vu **lu** jour », « **dés** à présent ».
5. **Pages presque vides** : « Les fleurs » = une phrase ; la page s'appelle en plus « Du nouveau chez jardin d'enfance ».
6. **Contact peu pratique** : la carte Google ne s'affiche pas tant qu'on n'accepte pas les cookies, et il y a un widget « Météo Caen » inutile.
7. **Gros bandeau cookies** qui cache la moitié de l'écran à la première visite.
8. **Liens techniques visibles** : « Connexion », « Connexion à Facebook » en bas de page.
9. Horaires uniquement sur la page Contact, rien qui dise « ouvert / fermé maintenant ».

## Ce que montre la maquette (dossier `fleurs de france`)

Identité visuelle tirée de **son** univers (« jardin d'enfance », rustique, parfum d'antan) : vert d'eau de son logo, framboise, papier kraft, écriture manuscrite, polaroïds, étiquettes de prix, carte postale. Volontairement différente de Fleurs d'Élégance.

**5 pages**, chacune avec son propre titre Google :

| Page | Ce qu'on y trouve |
|---|---|
| `index.html` Accueil | Enseigne **Ouvert / Fermé en direct**, accroche, 4 portes « Mes univers », bouquets les plus demandés, production normande, infos pratiques |
| `bouquets.html` | Comment ça marche en 3 étapes, tous les bouquets à commander, questions fréquentes (livraison, carte, retrait) |
| `deuil.html` | Les 8 compositions et leurs prix sous forme de carte, lieux livrés (crématorium, églises, pompes funèbres), numéro bien visible |
| `mariage.html` | Pellicule photo, « comment on travaille ensemble », formulaire de rendez-vous façon carnet |
| `boutique.html` | Son histoire en carte postale, horaires, livraison, accès, formulaire de contact |

- **Commande en ligne** depuis n'importe quelle page : taille (Classique / Généreux / Prestige), carte écrite à la main offerte, retrait ou livraison (9 € Caen, 12 € périphérie), date, paiement CB / Apple Pay / Google Pay. Le panier (façon ticket de caisse) **suit le client d'une page à l'autre**.
- Sur téléphone : boutons flottants **Commander** + **Appeler**.
- Emplacement pour ses **avis Google**.
- Fiche Google « Fleuriste » intégrée (horaires, adresse, téléphone) + descriptions sur toutes les photos.

## Déroulé conseillé (10 minutes)

1. Ouvrir **son site sur ton téléphone** devant elle : « Imaginez, un client veut un bouquet pour ce soir. Que fait-il ? » → il doit appeler.
2. Ouvrir **la maquette sur le même téléphone** : montrer l'enseigne « Ouvert / Fermé », cliquer sur Commander, choisir un bouquet, ajouter une carte, choisir la livraison → panier.
3. Passer sur la page Deuil (souvent des commandes urgentes, passées le soir) : le panier est toujours là.
4. Montrer la page Mariage (le carnet) et la page Boutique (la carte postale avec son texte à elle).
5. Montrer la version ordinateur.
6. Terminer sur : elle garde la main (ajout de produits, photos, fermetures depuis un espace admin), et tu proposes un devis.

## À savoir avant le rendez-vous

- **Il faut une connexion internet** : les photos viennent de son site actuel. Partage de connexion du téléphone au besoin.
- Pour lancer la maquette : ouvrir le dossier et lancer `python -m http.server 5173`, puis aller sur http://localhost:5173 (ou ouvrir directement `index.html` dans Chrome).
- **Prix des tailles « Généreux » et « Prestige » : inventés.** Seuls les prix « à partir de » viennent de son site. À dire clairement, et à lui faire valider.
- **Photos du deuil** : l'association photo / nom de composition a été faite d'après l'ordre de sa page, à vérifier avec elle.
- Le bouton « Payer » et le formulaire mariage n'envoient rien (démo). Une bannière en haut indique « Maquette de démonstration ».
- Ne pas mettre la maquette en ligne publiquement sans son accord (elle utilise ses photos, son logo et son nom).
