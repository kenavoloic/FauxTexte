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

const odonymiques = [
    ...arboretum,
    ...bordeaux,
    ...capitales,
    ...fields,
    ...hydro,
    ...nobel,
    ...olympiens,
    ...personnalites,
    ...tdf
];
export {types, odonymiques};
