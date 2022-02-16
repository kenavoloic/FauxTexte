import arboretum from './arboretum.js';
import bordeaux from './bordeaux.js';
import capitales from './capitales.js';
import fields from './fields.js';
import hydro from './hydro.js';
import nobel from './nobel.js';
import olympiens from './olympiens.js';
import personnalites from './personnalites.js';
import tdf from './tdf.js';

const types = ["rue","place","cours","quai","boulevard","avenue","allée","voie","passage", "route", "impasse", "chemin", "square"];
// const bdx = [		
//     {nom:"Ampère", booleen: true},
//     {nom:"Ausone", booleen: true},
//     {nom:"Beaurepaire", booleen: true},
//     {nom:"Bir-Hakeim", booleen: true},
//     {nom:"Branly", booleen: true},
//     {nom:"Brutus", booleen: true},
//     {nom:"Casablanca", booleen: true},
//     {nom:"Citoyenne", booleen: true},
//     {nom:"Civique", booleen: true},
//     {nom:"Esprit-des-Lois", booleen: true},
//     {nom:"Fructidor", booleen: true},
//     {nom:"Grand’Rue", booleen: false},
//     {nom:"Grande Rue", booleen: false},
//     {nom:"Haine-aux-Tyrans", booleen: true},
//     {nom:"Judaïque", booleen: true},
//     {nom:"Longchamps", booleen: true},
//     {nom:"Messidor", booleen: true},
//     {nom:"Montaigne", booleen: true},
//     {nom:"Nationale", booleen: true},
//     {nom:"Neuve Saint-Seurin", booleen: true},
//     {nom:"Pey-Berland", booleen: true},
//     {nom:"Picard", booleen: true},
//     {nom:"Plus-de-Rois", booleen: true},
//     {nom:"Primidi", booleen: true},
//     {nom:"Principale", booleen: true},
//     {nom:"Richelieu", booleen: true},
//     {nom:"Saint Christoly", booleen: true},
//     {nom:"Saint Projet", booleen: true},
//     {nom:"Saint-Bruno", booleen: true},
//     {nom:"Saint-Martial", booleen: true},
//     {nom:"Saint-Paul-Saint-Seurin", booleen: true},
//     {nom:"Saint-Pierre", booleen: true},
//     {nom:"Saint-Étienne", booleen: true},
//     {nom:"Sainte Eulalie", booleen: true},
//     {nom:"Sainte-Catherine", booleen: true},
//     {nom:"Sainte-Croix", booleen: true},
//     {nom:"Sainte-Sophie", booleen: true},
//     {nom:"Sainte-Thérèse", booleen: true},

//     {nom:"Stalingrad", booleen: true},
//     {nom:"Taciturne", booleen: true},
//     {nom:"Thermidor", booleen: true},

//     {nom:"Vivre-Libre-Ou-Mourir", booleen: true},
//     {nom:"de Bacalan", booleen: true},
//     {nom:"de Castelmoron", booleen: true},
//     {nom:"de Créon", booleen: true},
//     {nom:"de Gemmapes", booleen: true},
//     {nom:"de Lerme", booleen: true},
//     {nom:"de Leyre", booleen: true},
//     {nom:"de Montbazon", booleen: true},
//     {nom:"de Moscou", booleen: true},
//     {nom:"de Paludate", booleen: true},
//     {nom:"de la Bourse", booleen: true},
//     {nom:"de la Chartreuse", booleen: true},
//     {nom:"de la Comédie", booleen: true},
//     {nom:"de la Conciliation", booleen: true},
//     {nom:"de la Concorde", booleen: true},
//     {nom:"de la Convention", booleen: true},
//     {nom:"de la Croix-Blanche", booleen: true},
//     {nom:"de la Dauphine", booleen: true},
//     {nom:"de la Douane", booleen: true},
//     {nom:"de la Délivrance", booleen: true},
//     {nom:"de la Ferme de Richemont", booleen: true},
//     {nom:"de la Fidélité", booleen: true},
//     {nom:"de la Fontaine", booleen: true},
//     {nom:"de la Fraternité", booleen: true},
//     {nom:"de la Frugalité", booleen: true},
//     {nom:"de la Gare", booleen: true},
//     {nom:"de la Grave", booleen: true},
//     {nom:"de la Joyeuse Entrée", booleen: true},
//     {nom:"de la Justice", booleen: true},
//     {nom:"de la Liberté", booleen: true},
//     {nom:"de la Libération", booleen: true},
//     {nom:"de la Lumière", booleen: true},
//     {nom:"de la Mairie", booleen: true},
//     {nom:"de la Monnaie", booleen: true},
//     {nom:"de la Montagne", booleen: true},
//     {nom:"de la Raison", booleen: true},
//     {nom:"de la Régénération", booleen: true},
//     {nom:"de la République", booleen: true},
//     {nom:"de la Section du 10 août", booleen: true},
//     {nom:"de la Surveillance", booleen: true},
//     {nom:"de la Victoire", booleen: true},
//     {nom:"de la botte molle", booleen: true},
//     {nom:"de la plaine", booleen: true},
//     {nom:"de l’Amitié", booleen: true},
//     {nom:"de l’Arbre-Chéri", booleen: true},
//     {nom:"de l’Empire-des-Lois", booleen: true},
//     {nom:"de l’Europe", booleen: true},
//     {nom:"de l’Indivisibilité", booleen: true},
//     {nom:"de l’Opinion", booleen: true},
//     {nom:"de l’Orme", booleen: true},
//     {nom:"de l’Unité", booleen: true},
//     {nom:"de l’Égalité", booleen: true},
//     {nom:"de l’Église Saint-Augustin", booleen: true},
//     {nom:"de l’Église", booleen: true},
//     {nom:"des Amarantes", booleen: true},
//     {nom:"des Amarillis", booleen: true},
//     {nom:"des Basques", booleen: true},
//     {nom:"des Capucins", booleen: true},
//     {nom:"des Catherinettes", booleen: true},
//     {nom:"des Chartrons", booleen: true},
//     {nom:"des Chouans", booleen: true},
//     {nom:"des Cordeliers", booleen: true},
//     {nom:"des Cèdres", booleen: true},
//     {nom:"des Droits-de-l’Homme", booleen: true},
//     {nom:"des Faures", booleen: true},
//     {nom:"des Grands-Hommes", booleen: true},
//     {nom:"des Hommes Libres", booleen: true},
//     {nom:"des Jardins", booleen: true},
//     {nom:"des Lauriers", booleen: true},
//     {nom:"des Martyrs de la Résistance", booleen: true},
//     {nom:"des Nations Libres", booleen: true},
//     {nom:"des Palanques", booleen: true},
//     {nom:"des Picques", booleen: true},
//     {nom:"des Pêches", booleen: true},
//     {nom:"des Queyries", booleen: true},
//     {nom:"des Quinconces", booleen: true},
//     {nom:"des Salinières", booleen: true},
//     {nom:"des Sans-Culottes", booleen: true},
//     {nom:"des Tonneliers", booleen: true},
//     {nom:"des navets", booleen: true},
//     {nom:"des Écoles", booleen: true},
//     {nom:"du 10 août", booleen: true},
//     {nom:"du 11 novembre", booleen: true},
//     {nom:"du 14-juillet", booleen: true},
//     {nom:"du 17 septembre", booleen: true},
//     {nom:"du Basilic", booleen: true},
//     {nom:"du Bec d’Ambès", booleen: true},
//     {nom:"du Bœuf", booleen: true},
//     {nom:"du Bonheur", booleen: true},
//     {nom:"du Chamois", booleen: true},
//     {nom:"du Champ de Mars", booleen: true},
//     {nom:"du Chapelet", booleen: true},
//     {nom:"du Château", booleen: true},
//     {nom:"du Coq", booleen: true},
//     {nom:"du Couvent", booleen: true},
//     {nom:"du Département", booleen: true},
//     {nom:"du Français libre", booleen: true},
//     {nom:"du Jardin-Public", booleen: true},
//     {nom:"du Jeune-Barra", booleen: true},
//     {nom:"du Marché des Chartrons", booleen: true},
//     {nom:"du Marché-Royal", booleen: true},
//     {nom:"du Maroc", booleen: true},
//     {nom:"du Moulin", booleen: true},
//     {nom:"du Palais", booleen: true},
//     {nom:"du Parlement", booleen: true},
//     {nom:"du Peuple-Souverain", booleen: true},
//     {nom:"du Pont-Long", booleen: true},
//     {nom:"du Romarin", booleen: true},
//     {nom:"du Réveil", booleen: true},
//     {nom:"du Silence", booleen: true},
//     {nom:"du Sommeil", booleen: true},
//     {nom:"du Stade", booleen: true},
//     {nom:"du Temple-Décadaire", booleen: true},
//     {nom:"d’Arlac", booleen: true},
//     {nom:"d’Armagnac", booleen: true},
//     {nom:"d’Arès", booleen: true},
//     {nom:"l’Immortelle", booleen: true},
//     {nom:"Ça-tiendra", booleen: true},
//     {nom:"Ça-va", booleen: true}
// ];

const choixPersonnel = [
    {nom:"Claude Debussy", booleen: true},
    {nom:"Gabriel Fauré", booleen: true},
    {nom:"Hector Berlioz", booleen: true},
    {nom:"Henri Dunant ", booleen: true},
    {nom:"Jean Jaurès", booleen: true},
    {nom:"Jean Moulin", booleen: true},
    {nom:"John Coltrane", booleen: true},
    {nom:"Marin Marais", booleen: true},
    {nom:"Maupassant", booleen: true},
    {nom:"Pasteur", booleen: true},
    {nom:"Émile Zola", booleen: true},
    {nom:"du chant des vagues", booleen: true},
    {nom:"du Sénégal", booleen: true},
    {nom:"Satie", booleen: true},
    {nom:"Victor-Hugo", booleen: true},
];

// //https://fr.wikipedia.org/wiki/Liste_des_fleuves_de_France
// const fleuvesMetro = [
//     {nom:"de l’Aa", booleen: true},
//     {nom:"de l’Abatesco", booleen: true},
//     {nom:"de l’Aber-Benoît", booleen: true},
//     {nom:"de l’Aber-Ildut", booleen: true},
//     {nom:"de l’Aber-Wrac’h", booleen: true},
//     {nom:"de l’Acqua Tignese", booleen: true},
//     {nom:"de l’Adour", booleen: true},
//     {nom:"de l’Agay", booleen: true},
//     {nom:"de l’Agly", booleen: true},
//     {nom:"de l’Alesani", booleen: true},
//     {nom:"de l’Aliso", booleen: true},
//     {nom:"de l’Alistro", booleen: true},
//     {nom:"de l’Arc", booleen: true},
//     {nom:"de l’Argens", booleen: true},
//     {nom:"du Riou de l’Argentière", booleen: true},
//     {nom:"de l’Arguenon", booleen: true},
//     {nom:"de l’Arques", booleen: true},
//     {nom:"de l’Aude", booleen: true},
//     {nom:"de l’Aulne", booleen: true},
//     {nom:"de l’Authie", booleen: true},
//     {nom:"de l’Auzance", booleen: true},
//     {nom:"de l’Aven", booleen: true},
//     {nom:"de l’Ay", booleen: true},
//     {nom:"de la Baillaury", booleen: true},
//     {nom:"du Baraci", booleen: true},
//     {nom:"du Batailler", booleen: true},
//     {nom:"du Bélon", booleen: true},
//     {nom:"du Bevinco", booleen: true},
//     {nom:"de la Bidassoa", booleen: true},
//     {nom:"du Blavet", booleen: true},
//     {nom:"du Boivre", booleen: true},
//     {nom:"du Borrigo", booleen: true},
//     {nom:"du Boscq", booleen: true},
//     {nom:"du Boudigau", booleen: true},
//     {nom:"de la Brague", booleen: true},
//     {nom:"de la Bravona", booleen: true},
//     {nom:"de la Bresle", booleen: true},
//     {nom:"du Buccatoggio", booleen: true},
//     {nom:"du Buggiu", booleen: true},
//     {nom:"du Butturacci", booleen: true},
//     {nom:"de la Cagne", booleen: true},
//     {nom:"de la Canche", booleen: true},
//     {nom:"du Canella", booleen: true},
//     {nom:"du Careï", booleen: true},
//     {nom:"du Cavo", booleen: true},
//     {nom:"de la Charente", booleen: true},
//     {nom:"du Chiola", booleen: true},
//     {nom:"du Chiosura", booleen: true},
//     {nom:"du Chiuni", booleen: true},
//     {nom:"du Couesnon", booleen: true},
//     {nom:"du Courant d’Huchet", booleen: true},
//     {nom:"du Courant de Contis", booleen: true},
//     {nom:"du Courant de Mimizan", booleen: true},
//     {nom:"du Courant de Soustons", booleen: true},
//     {nom:"du Curé", booleen: true},
//     {nom:"du Dardo", booleen: true},
//     {nom:"de la Dives", booleen: true},
//     {nom:"de la Divette", booleen: true},
//     {nom:"de la Dordogne", booleen: true},
//     {nom:"du Dourduff", booleen: true},
//     {nom:"du Douron", booleen: true},
//     {nom:"de la Douve", booleen: true},
//     {nom:"du Drochon", booleen: true},
//     {nom:"du Dun", booleen: true},
//     {nom:"de la Durdent", booleen: true},
//     {nom:"de l’Ellé", booleen: true},
//     {nom:"de l’Élorn", booleen: true},
//     {nom:"de l’Escaut", booleen: true},
//     {nom:"de la Rivière d’Étel", booleen: true},
//     {nom:"de l’Eygoutier", booleen: true},
//     {nom:"du Falleron", booleen: true},
//     {nom:"du Fango", booleen: true},
//     {nom:"de la Figarella", booleen: true},
//     {nom:"du Fium’Albino", booleen: true},
//     {nom:"du Fium’Alto", booleen: true},
//     {nom:"du Fiume Santu", booleen: true},
//     {nom:"du Fiumorbo", booleen: true},
//     {nom:"de la Flèche", booleen: true},
//     {nom:"de la Flora", booleen: true},
//     {nom:"du Fossan", booleen: true},
//     {nom:"du Francolu", booleen: true},
//     {nom:"du Frémur", booleen: true},
//     {nom:"du Gapeau", booleen: true},
//     {nom:"de la Garonne", booleen: true},
//     {nom:"de l’Estuaire de la Gironde", booleen: true},
//     {nom:"de la Giscle", booleen: true},
//     {nom:"du Golo", booleen: true},
//     {nom:"du Gorbio", booleen: true},
//     {nom:"du Gouessant", booleen: true},
//     {nom:"du Gouët", booleen: true},
//     {nom:"du Goyen", booleen: true},
//     {nom:"du Grand Vallat", booleen: true},
//     {nom:"de la Grande Frayère", booleen: true},
//     {nom:"du Guillec", booleen: true},
//     {nom:"du Guyoult", booleen: true},
//     {nom:"de l’Hérault", booleen: true},
//     {nom:"de l’Horn", booleen: true},
//     {nom:"de l’Huveaune", booleen: true},
//     {nom:"de l’Ic", booleen: true},
//     {nom:"de l’Isole", booleen: true},
//     {nom:"du Jaudy", booleen: true},
//     {nom:"du Kerdu", booleen: true},
//     {nom:"du Lagunienu", booleen: true},
//     {nom:"de la Laïta", booleen: true},
//     {nom:"du Las", booleen: true},
//     {nom:"du Lava", booleen: true},
//     {nom:"du Lay", booleen: true},
//     {nom:"du Léguer", booleen: true},
//     {nom:"de la Lerre", booleen: true},
//     {nom:"du Lez", booleen: true},
//     {nom:"du Liamone", booleen: true},
//     {nom:"de la Liane", booleen: true},
//     {nom:"du Libron", booleen: true},
//     {nom:"du Liscia", booleen: true},
//     {nom:"du Liscu", booleen: true},
//     {nom:"de la Loire", booleen: true},
//     {nom:"du Loup", booleen: true},
//     {nom:"du Luri", booleen: true},
//     {nom:"du Magnan", booleen: true},
//     {nom:"du Maravenne", booleen: true},
//     {nom:"de la Marle", booleen: true},
//     {nom:"de la Massane", booleen: true},
//     {nom:"de la Maye", booleen: true},
//     {nom:"de la Meuse", booleen: true},
//     {nom:"du Minaouët", booleen: true},
//     {nom:"de la Rivière de Morlaix", booleen: true},
//     {nom:"du Moros", booleen: true},
//     {nom:"de la Nivelle", booleen: true},
//     {nom:"de la Rivière de Noyalo", booleen: true},
//     {nom:"de l’Odet", booleen: true},
//     {nom:"de la Rivière d’Olmeta", booleen: true},
//     {nom:"de l’Orb", booleen: true},
//     {nom:"de l’Orne", booleen: true},
//     {nom:"de l’Ortolo", booleen: true},
//     {nom:"de l’Oso", booleen: true},
//     {nom:"de l’Ostriconi", booleen: true},
//     {nom:"du Paillon", booleen: true},
//     {nom:"du Pellegrin", booleen: true},
//     {nom:"de la Rivière de Penerf", booleen: true},
//     {nom:"du Penfeld", booleen: true},
//     {nom:"du Penzé", booleen: true},
//     {nom:"du ruisseau de Pietracorbara", booleen: true},
//     {nom:"du Poggiolo", booleen: true},
//     {nom:"de la Rivière de Pont-l’Abbé", booleen: true},
//     {nom:"du Porto", booleen: true},
//     {nom:"du Préconil", booleen: true},
//     {nom:"du Prunelli", booleen: true},
//     {nom:"du Quillimadec", booleen: true},
//     {nom:"de la Rance", booleen: true},
//     {nom:"du Ravaner", booleen: true},
//     {nom:"du Fiume di Regino", booleen: true},
//     {nom:"de la Reppe", booleen: true},
//     {nom:"du Rhin", booleen: true},
//     {nom:"du Rhône", booleen: true},
//     {nom:"de la Riberette", booleen: true},
//     {nom:"du Rizzanese", booleen: true},
//     {nom:"du Roscoat", booleen: true},
//     {nom:"du Roubaud", booleen: true},
//     {nom:"de la Roya", booleen: true},
//     {nom:"de la Saâne", booleen: true},
//     {nom:"du Sagone", booleen: true},
//     {nom:"de la Saigue", booleen: true},
//     {nom:"de la Rivière Saint-Éloi", booleen: true},
//     {nom:"de la Saire", booleen: true},
//     {nom:"de la Scie", booleen: true},
//     {nom:"du Scorff", booleen: true},
//     {nom:"du Fiume Seccu", booleen: true},
//     {nom:"de la Sée", booleen: true},
//     {nom:"de la Seine", booleen: true},
//     {nom:"de la Sélune", booleen: true},
//     {nom:"de la Seudre", booleen: true},
//     {nom:"de la Seulles", booleen: true},
//     {nom:"de la Sèvre Niortaise", booleen: true},
//     {nom:"de la Siagne", booleen: true},
//     {nom:"de la Sienne", booleen: true},
//     {nom:"de la Sinope", booleen: true},
//     {nom:"du ruisseau de Sisco", booleen: true},
//     {nom:"de la Slack", booleen: true},
//     {nom:"de la Solenzara", booleen: true},
//     {nom:"de la Somme", booleen: true},
//     {nom:"du Stabiacciu", booleen: true},
//     {nom:"du Taravo", booleen: true},
//     {nom:"du Tavignano", booleen: true},
//     {nom:"du Tech", booleen: true},
//     {nom:"du Ter", booleen: true},
//     {nom:"de la Têt", booleen: true},
//     {nom:"du Thar", booleen: true},
//     {nom:"de la Touloubre", booleen: true},
//     {nom:"de la Touques", booleen: true},
//     {nom:"du Travo", booleen: true},
//     {nom:"du Trieux", booleen: true},
//     {nom:"de l’U Guadu Grande", booleen: true},
//     {nom:"de l’Uhabia", booleen: true},
//     {nom:"de l’Untxin", booleen: true},
//     {nom:"de la Valmont", booleen: true},
//     {nom:"de la Vanlée", booleen: true},
//     {nom:"du Var", booleen: true},
//     {nom:"de la Ventilegne", booleen: true},
//     {nom:"de la Veules", booleen: true},
//     {nom:"du Vidourle", booleen: true},
//     {nom:"de la Vie", booleen: true},
//     {nom:"de la Vilaine", booleen: true},
//     {nom:"du Vincin", booleen: true},
//     {nom:"de la Vire", booleen: true},
//     {nom:"du Vistre", booleen: true},
//     {nom:"de la Warrenne", booleen: true},
//     {nom:"du Yar", booleen: true},
//     {nom:"de l’Yères", booleen: true},
//     {nom:"de l’Yser", booleen: true}
// ];


// //Réunion
// const reunion = [
//     {nom:"de la Rivière d’Abord", booleen: true},
//     {nom:"de la Rivière de l’Est", booleen: true},
//     {nom:"de la Rivière des Galets", booleen: true},
//     {nom:"de la Rivière Langevin", booleen: true},
//     {nom:"de la Rivière des Marsouins", booleen: true},
//     {nom:"de la Rivière du Mât", booleen: true},
//     {nom:"de la Rivière des Pluies", booleen: true},
//     {nom:"de la Rivière des Remparts", booleen: true},
//     {nom:"de la Rivière des Roches", booleen: true},
//     {nom:"de la Rivière Saint-Denis", booleen: true},
//     {nom:"de la Rivière Saint-Étienne", booleen: true},
//     {nom:"de la Ravine Saint-Gilles", booleen: true},
//     {nom:"de la Rivière Saint-Jean", booleen: true},
//     {nom:"de la Rivière Sainte-Suzanne", booleen: true},
// ];

// const guadeloupe = [
//     {nom:"de la Grande Rivière à Goyaves", booleen: true},
//     {nom:"de la Lézarde", booleen: true},
//     {nom:"de la Grande Rivière des Vieux-Habitants", booleen: true},
//     {nom:"de la Rivière Moustique ", booleen: true},
//     {nom:"de la Grande Rivière de la Capesterre", booleen: true},
//     {nom:"de la Rivière la Rose", booleen: true},
//     {nom:"de la Petite Rivière à Goyave", booleen: true},
//     {nom:"de la Rivière du Grand Carbet", booleen: true},
//     {nom:"de la Rivière du Pérou", booleen: true},
//     {nom:"de la Galion", booleen: true},
//     {nom:"de la Rivière de Sainte-Marie", booleen: true},
//     {nom:"de la Rivière des Pères", booleen: true},
//     {nom:"de la Rivière de Beaugendre", booleen: true},
//     {nom:"de la Rivière du Petit Carbet", booleen: true},
//     {nom:"de la Rivière Grande Anse", booleen: true},
//     {nom:"de la Rivière du Plessis", booleen: true},
//     {nom:"de la Rivière du Lamentin", booleen: true},
//     {nom:"de la Rivière la Sarcelle", booleen: true},
//     {nom:"de la Rivière Lostau", booleen: true},
//     {nom:"de la Rivière Grande Plaine", booleen: true},
//     {nom:"de la Rivière du Baillif", booleen: true},
//     {nom:"de la Rivière Petite Plaine", booleen: true},
//     {nom:"de la Rivière du Bananier", booleen: true},
//     {nom:"de la Rivière Bourceau", booleen: true},
//     {nom:"de la Rivière de Baille-Argent", booleen: true},
//     {nom:"de la Rivière aux Herbes", booleen: true}
// ];

// const guyane = [
//     {nom:"du Maroni", booleen:true},
//     {nom:"de l’Oyapock", booleen:true},
//     {nom:"de la Mana", booleen:true},
//     {nom:"de l’Approuague", booleen:true},
//     {nom:"du Sinnamary", booleen:true},
//     {nom:"du Mahury", booleen:true},
//     {nom:"de l’Iracoubo", booleen:true},
//     {nom:"du Kourou", booleen:true},
//     {nom:"de l’Organabo", booleen:true},
// ];

// const estuaires = [
//     {nom:"de l’Estuaire de la Loire", booleen: true},
//     {nom:"de la baie du Mont-Saint-Michel", booleen:true},
//     {nom:"de la baie de l’Aiguillon", booleen:true},
//     {nom:"de la baie de Somme", booleen:true},
//     {nom:"de la baie des Veys", booleen:true},
//     {nom:"de la baie de Txingudi", booleen: true}
// ];

//const odonymiques = [...bdx, ...fleuvesMetro, ...guyane, ...reunion, ...guadeloupe, ...estuaires];
//const odonymiques = [...bordeaux, ...fleuvesMetro, ...guyane, ...arboretum, ...olympiens, ...personnalites, ...nobel, ...fields, ...tdf, ...capitales];
const odonymiques = [
    ...arboretum,
    ...bordeaux,
    ...capitales,
    ...fields,
    //...guyane,
    ...hydro,
    ...nobel,
    ...olympiens,
    ...personnalites,
    ...tdf
];
export {types, odonymiques};
