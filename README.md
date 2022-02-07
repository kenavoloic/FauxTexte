# FauxTexte
Moteur de génération aléatoire de données.

Le faux-texte aléatoire produit contient les lettres, accents et signes de ponctuation propres à la graphie de la langue française. Il en va de même pour les patronymes et les prénoms. Par ailleurs, si les adresses produites sont entièrement fictives, les noms de communes sont authentiques. Ils correspondent aux vrais départements français ainsi qu’aux régions actuelles.

*FauxTexte* est exclusivement écrit en JavaScript.

## Constructeur

```javascript
const faux = new FauxTexte(seed, mpp={minimum:6, maximum:12}, ppp={minimum:3, maximum:6}, np = 23);
```

**seed**, chaîne de caractères, graine aléatoire.  
**mpp**, *entier*, nombre de mots par phrase.  
**ppp**, *entier*, nombre de phrases par paragraphes.  
**np**, *entier*, nombre premier.  

```javascript
const faux = new FauxTexte("Louison Bobet");
```

## Méthodes

### Texte et nombre

#### FauxTexte.mots(entier)
Retourne un tableau de chaînes de caractères.

```javascript
const sixMots = faux.mots(6);
```

#### FauxTexte.mot()
Retourne une chaîne de caractères.

```javascript
const titre = faux.mot();
```

#### FauxTexte.paragraphes(entier)
Retourne un tableau de chaînes de caractères. La première lettre de chaque chaîne est une majuscule.
```javascript
const treizeParagraphes = faux.paragraphes(13);
```

#### FauxTexte.paragraphe()
Retourne une chaîne de caractères. La première lettre du paragraphe est une majuscule.
```javascript
const pitch = faux.paragraphe();
```

#### FauxTexte.nombreLettres(entier)
Retourne une chaîne de caractères.
*entier* doit être supérieur ou égal à zéro et inférieur ou égal à cent.
La valeur par défaut est zéro.
```javascript
const nombres = [7,18,29,54,98];
const lettres = nombres.map(faux.nombreLettres);
```

#### FauxTexte.aleaCentaine()
Retourne une valeur entière comprise entre *0* et *99*.
```javascript
const pourcentages = Array.from({length:10}, () => faux.aleaCentaine());
```

#### FauxTexte.aleaMillier()
Retourne une valeur entière comprise entre *0* et *999*.
```javascript
const kilometrages = Array.from({length:250}, () => faux.aleaMillier() * 1000);
```

#### FauxTexte.zeroUn()
Retourne *0* ou *1*.
```javascript
const civilite = faux.zeroUn() ? "Madame" : "Monsieur";
```

### Noms propres

#### FauxTexte.prenomsFeminins(entier)
Retourne un tableau de chaînes de caractères.
```javascript
const mecaniciennes = faux.prenomsFeminins(10);
```

#### FauxTexte.prenomFeminin()
Retourne une chaîne de caractères.
```javascript
const prenomDirectrice = faux.prenomFeminin();
```

#### FauxTexte.prenomsMasculins(entier)
Retourne un tableau de chaînes de caractères.
```javascript
const carrossiers = faux.prenomsMasculins(10);
```

#### FauxTexte.prenomMasculin()
Retourne une chaîne de caractères. 
```javascript
const prenomAssureur = faux.prenomMasculin();
```

#### FauxTexte.prenom()
Retourne un objet *prenom*.
```javascript
const {homme,femme} = faux.prenom();
```

#### FauxTexte.patronyme()
Retourne une chaîne de caractères.
```javascript
const nomDeFamille = faux.patronyme();

```

#### FauxTexte.patronymes(entier)
Retourne un tableau de chaînes de caractères.
```javascript
const nomsDeFamille = faux.patronymes(10);

```

### Voirie


#### FauxTexte.typeVoie()
Retourne une chaîne de caractères.
```javascript
const voie = faux.typeVoie();
```

#### FauxTexte.typesVoies(entier)
Retourne un tableau de chaînes de caractères.
```javascript
const voies = faux.typesVoies(10);

```

#### FauxTexte.nomVoie()
Retourne un objet.
```javascript
const {nom, booleen} = faux.nomVoie();
```
Certaines dénomination de voie ne nécessitent pas de mention de type de voie. C'est le cas de *Grand’Rue* ou de *Grande Rue*. Dans de tels cas, la valeur de booleen est false.

#### FauxTexte.nomsVoies(entier)
Retourne un tableau de chaînes de caractères.
```javascript
const nomsDeVoie = faux.nomsVoies(10);
```

#### FauxTexte.adresse()
Retourne un objet *adresse*.
```javascript
const domicile = faux.adresse();
const {numero, nom, booleen, type, chaine} = domicile;
```
*numero* numéro de voie, chaîne de caractères.  
*nom* nom de voie, chaîne de caractères.  
*chaine* adresse, chaîne de caractères.
*booleen* false ou true. Cf *nomVoie*.

#### FauxTexte.nomVille()
Retourne un objet *ville*.
```javascript
const domicile = faux.nomVille();
const {nom, codeInsee, codeCommune, codePostal, numeroDepartement, nomDepartement, nomRegion, isoRegion, regionAlphabetique, departements} = domicile;
```
Chaînes de caractères :
* *nom*
* *codeInsee*
* *codeCommune*
* *codePostal* 
* *numeroDepartement*
* *nomRegion*
* *isoRegion*
* *regionAlphabetique*

*departements* tableau des départements constituant la même région. Chaînes de caractères.

#### FauxTexte.nomsVilles(entier)
Retourne un tableau d’objets *ville*.
```javascript
const villesFournisseurs = faux.nomsVilles(20);
```

#### FauxTexte.communesDepartement(departement)
Retourne un tableau des noms de communes du département.
*departement* est de type chaîne de caractères.
```javascript
const domicile = nomVille();
const communesDepartements = faux.communesDepartement(domicile.numeroDepartement);
```

#### FauxTexte.communesRegion(regionIso)
Retourne un tableau des noms de communes du département.
*regionIso* est de type chaîne de caractères.

```javascript
const domicile = nomVille();
const communesRegionales = faux.communesRegionales(domicile.isoRegion);
```
Voici la liste des régions métropolitaines et ultramarines : *fr-ara*, *fr-bfc*, *fr-bre*, *fr-cor*, *fr-cvl*, *fr-ges*, *fr-guf*, *fr-gua*, *fr-hdf*, *fr-idf*, *fr-mtq*, *fr-naq*, *fr-nor*, *fr-occ*, *fr-pac*, *fr-pdl*, *fr-lre*, *fr-may*.

### Dates
#### FauxTexte.generateurDatePlancherPlafond(chaine1, chaine2)
Retourne l’objet suivant {plancher:anneePlancher, generateur:generateurJourCalendaire, dureeJour:dureeJour}
```javascript
const {generateur:generateurDateConstitutionSociete} = faux.generateurDatePlancherplafond("1.1.2000", "31.12.2010");
```

#### FauxTexte.generateurDateDepuis(chaine)
Retourne l’objet suivant {plancher:anneePlancher, generateur:generateurJourCalendaire, dureeJour:dureeJour}

```javascript
const {generateur:generateurDateConstitutionSociete} = faux.generateurDatePlancherplafond("26/05/1993");
```

#### FauxTexte.jourCalendaire(anneePlancher=1945, anneePlafond=2020)
Retourne un objet *Date*.
```javascript
const dateConstitutionSociete = faux.jourCalendaire(2000,2005);
console.log(dateConstitutionsociete.toLocaleString('fr-FR', {day:'numeric', month:'numeric', year:'numeric'}));

```


### Générateurs de liste

#### FauxTexte.generateurListe(tableau)
Retourne un générateur à partir d’une liste.
```javascript
const listeMarques = ["Alfa Romeo","Audi","BMW","Citroën","Dacia","DS"];
const generateurMarques = faux.generateurListe(listeMarques);
const dixMarques = Array.from({length:10}, () => generateurMarques());
console.log(dixMarques);

```
#### FauxTexte.generateurValeur(entier1, entier2)
Retourne un générateur de valeurs comprises entre *entier1* et *entier2*.
```javascript
    const generateurNombreFournisseurs = faux.generateurValeur(10, 50);
    const dixFournisseurs = Array.from({length:10}, () => generateurNombreFournisseurs());
    console.log(dixFournisseurs);   
```

#### FauxTexte.melangeur()
Retourne une valeur aléatoire comprise entre *0* et *1* et permet de réorganiser un tableau en indexant chacun de ses éléments.

```javascript
const magasins = ['Bordeaux', 'Lille', 'Lyon',  'Marseille', 'Montpellier', 'Nantes', 'Nice',  'Paris', 'Rennes', 'Strasbourg', 'Toulouse'];
const l1 = magasins.map(x => ({tri: faux.melangeur(), valeur:x})).sort((a,b) => a.tri - b.tri).map(x => x.valeur);
console.log(l1);

const l2 = magasins.map(x => ({tri: faux.melangeur(), valeur:x})).sort((a,b) => a.tri - b.tri).map(x => x.valeur);
console.log(l2);

const l3 = magasins.map(x => ({tri: faux.melangeur(), valeur:x})).sort((a,b) => a.tri - b.tri).map(x => x.valeur);
console.log(l3);
```

### Seed


