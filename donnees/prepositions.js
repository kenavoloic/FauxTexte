const _liste = [
["02304",{"nom":"La Fère","a":"à la Fère"}],
["02307",{"nom":"La Ferté-Milon","a":"à la Ferté-Milon"}],
["02558",{"nom":"Le Nouvion-en-Thiérache","a":"au Nouvion-en-Thiérache"}],
["03306",{"nom":"Le Vernet","a":"au Vernet"}],
["04079",{"nom":"L’Escale","a":"à l’Escale"}],
["04116",{"nom":"Les Mées","a":"aux Mées"}],
["05006",{"nom":"L’Argentière-la-Bessée","a":"à l’Argentière-la-Bessée"}],
["05017",{"nom":"La Bâtie-Neuve","a":"à la Bâtie-Neuve"}],
["05059",{"nom":"La Freissinouse","a":"à la Freissinouse"}],
["05079",{"nom":"Le Monêtier-les-Bains","a":"au Monêtier-les-Bains"}],
["05122",{"nom":"La Roche-de-Rame","a":"à la Roche-de-Rame"}],
["05123",{"nom":"La Roche-des-Arnauds","a":"à la Roche-des-Arnauds"}],
["05161",{"nom":"La Salle-les-Alpes","a":"à la Salle-les-Alpes"}],
["05162",{"nom":"La Saulce","a":"à la Saulce"}],
["06030",{"nom":"Le Cannet","a":"au Cannet"}],
["06044",{"nom":"La Colle-sur-Loup","a":"à la Colle-sur-Loup"}],
["06065",{"nom":"La Gaude","a":"à la Gaude"}],
["06108",{"nom":"La Roquette-sur-Siagne","a":"à la Roquette-sur-Siagne"}],
["07064",{"nom":"Le Cheylard","a":"au Cheylard"}],
["07181",{"nom":"Le Pouzin","a":"au Pouzin"}],
["07319",{"nom":"Le Teil","a":"au Teil"}],
["07334",{"nom":"Les Vans","a":"aux Vans"}],
["07349",{"nom":"La Voulte-sur-Rhône","a":"à la Voulte-sur-Rhône"}],
["08180",{"nom":"La Francheville","a":"à la Francheville"}],
["09042",{"nom":"La Bastide-de-Sérou","a":"à la Bastide-de-Sérou"}],
["09124",{"nom":"Le Fossat","a":"au Fossat"}],
["09181",{"nom":"Le Mas-d’Azil","a":"au Mas-d’Azil"}],
["09312",{"nom":"La Tour-du-Crieu","a":"à la Tour-du-Crieu"}],
["10081",{"nom":"La Chapelle-Saint-Luc","a":"à la Chapelle-Saint-Luc"}],
["10265",{"nom":"Les Noës-près-Troyes","a":"aux Noës-près-Troyes"}],
["10321",{"nom":"La Rivière-de-Corps","a":"à la Rivière-de-Corps"}],
["12063",{"nom":"La Cavalerie","a":"à la Cavalerie"}],
["12146",{"nom":"Le Monastère","a":"au Monastère"}],
["13028",{"nom":"La Ciotat","a":"à la Ciotat"}],
["13037",{"nom":"La Fare-les-Oliviers","a":"à la Fare-les-Oliviers"}],
["13071",{"nom":"Les Pennes-Mirabeau","a":"aux Pennes-Mirabeau"}],
["14027",{"nom":"Les Monts d’Aunay","a":"aux Monts,d’Aunay"}],
["15268",{"nom":"Le Rouget-Pers","a":"au Rouget-Pers"}],
["16113",{"nom":"La Couronne","a":"à la Couronne"}],
["16166",{"nom":"L’Isle-d’Espagnac","a":"à l’Isle-d’Espagnac"}],
["16281",{"nom":"La Rochefoucauld-en-Angoumois","a":"à la Rochefoucauld-en-Angoumois"}],
["17093",{"nom":"Le Château-d’Oléron","a":"au Château-d’Oléron"}],
["17300",{"nom":"La Rochelle","a":"à la Rochelle"}],
["17452",{"nom":"La Tremblade","a":"à la Tremblade"}],
["18003",{"nom":"Les Aix-d’Angillon","a":"aux Aix-d’Angillon"}],
["18050",{"nom":"La Chapelle-Saint-Ursin","a":"à la Chapelle-Saint-Ursin"}],
["18108",{"nom":"La Guerche-sur-l’Aubois","a":"à la Guerche-sur-l’Aubois"}],
["22046",{"nom":"Le Mené","a":"au Mené"}],
["23067",{"nom":"La Courtine","a":"à la Courtine"}],
["23095",{"nom":"Le Grand-Bourg","a":"au Grand-Bourg"}],
["23176",{"nom":"La Souterraine","a":"à la Souterraine"}],
["24067",{"nom":"Le Bugue","a":"au Bugue"}],
["24222",{"nom":"La Force","a":"à la Force"}],
["24354",{"nom":"La Roche-Chalais","a":"à la Roche-Chalais"}],
["25240",{"nom":"Les Fins","a":"aux Fins"}],
["25315",{"nom":"L’Isle-sur-le-Doubs","a":"à l’Isle-sur-le-Doubs"}],
["26271",{"nom":"La Roche-de-Glun","a":"à la Roche-de-Glun"}],
["27016",{"nom":"Les Andelys","a":"aux Andelys"}],
["27022",{"nom":"Le Val d’Hazey","a":"au Val,d’Hazey"}],
["27428",{"nom":"Le Neubourg","a":"au Neubourg"}],
["27528",{"nom":"Le Vaudreuil","a":"au Vaudreuil"}],
["28110",{"nom":"Le Coudray","a":"au Coudray"}],
["28214",{"nom":"La Loupe","a":"à la Loupe"}],
["28422",{"nom":"Les Villages Vovéens","a":"aux Villages,Vovéens"}],
["29235",{"nom":"Le Relecq-Kerhuon","a":"au Relecq-Kerhuon"}],
["2B134",{"nom":"L’Île-Rousse","a":"à l’Île-Rousse"}],
["30011",{"nom":"Les Angles","a":"aux Angles"}],
["30132",{"nom":"La Grand-Combe","a":"à la Grand-Combe"}],
["30133",{"nom":"Le Grau-du-Roi","a":"au Grau-du-Roi"}],
["31526",{"nom":"La Salvetat-Saint-Gilles","a":"à la Salvetat-Saint-Gilles"}],
["31561",{"nom":"L’Union","a":"à l’Union"}],
["32155",{"nom":"Le Houga","a":"au Houga"}],
["32160",{"nom":"L’Isle-Jourdain","a":"à l’Isle-Jourdain"}],
["33069",{"nom":"Le Bouscat","a":"au Bouscat"}],
["33200",{"nom":"Le Haillan","a":"au Haillan"}],
["33519",{"nom":"Le Taillan-Médoc","a":"au Taillan-Médoc"}],
["33529",{"nom":"La Teste-de-Buch","a":"à la Teste-de-Buch"}],
["34090",{"nom":"Le Crès","a":"au Crès"}],
["34344",{"nom":"La Grande-Motte","a":"à la Grande-Motte"}],
["35240",{"nom":"Le Rheu","a":"au Rheu"}],
["36018",{"nom":"Le Blanc","a":"au Blanc"}],
["36046",{"nom":"La Châtre","a":"à la Châtre"}],
["36154",{"nom":"Le Pêchereau","a":"au Pêchereau"}],
["36159",{"nom":"Le Poinçonnet","a":"au Poinçonnet"}],
["37195",{"nom":"La Riche","a":"à la Riche"}],
["37273",{"nom":"La Ville-aux-Dames","a":"à la Ville-aux-Dames"}],
["38022",{"nom":"Les Avenières Veyrins-Thuellin","a":"aux Avenières,Veyrins-Thuellin"}],
["38193",{"nom":"L’Isle-d’Abeau","a":"à l’Isle-d’Abeau"}],
["38317",{"nom":"Le Pont-de-Claix","a":"au Pont-de-Claix"}],
["38509",{"nom":"La Tour-du-Pin","a":"à la Tour-du-Pin"}],
["39470",{"nom":"Les Rousses","a":"aux Rousses"}],
["41047",{"nom":"La Chaussée-Saint-Victor","a":"à la Chaussée-Saint-Victor"}],
["41059",{"nom":"Le Controis-en-Sologne","a":"au Controis-en-Sologne"}],
["42044",{"nom":"Le Chambon-Feugerolles","a":"au Chambon-Feugerolles"}],
["42071",{"nom":"Le Coteau","a":"au Coteau"}],
["42103",{"nom":"La Grand-Croix","a":"à la Grand-Croix"}],
["42183",{"nom":"La Ricamarie","a":"à la Ricamarie"}],
["42305",{"nom":"La Talaudière","a":"à la Talaudière"}],
["43051",{"nom":"Le Chambon-sur-Lignon","a":"au Chambon-sur-Lignon"}],
["43157",{"nom":"Le Puy-en-Velay","a":"au Puy-en-Velay"}],
["44035",{"nom":"La Chapelle-sur-Erdre","a":"à la Chapelle-sur-Erdre"}],
["44055",{"nom":"La Baule-Escoublac","a":"à la Baule-Escoublac"}],
["44198",{"nom":"Les Sorinières","a":"aux Sorinières"}],
["45075",{"nom":"La Chapelle-Saint-Mesmin","a":"à la Chapelle-Saint-Mesmin"}],
["45146",{"nom":"La Ferté-Saint-Aubin","a":"à la Ferté-Saint-Aubin"}],
["45191",{"nom":"Le Malesherbois","a":"au Malesherbois"}],
["46197",{"nom":"Le Montat","a":"au Montat"}],
["46334",{"nom":"Le Vigan","a":"au Vigan"}],
["47201",{"nom":"Le Passage","a":"au Passage"}],
["48034",{"nom":"La Canourgue","a":"à la Canourgue"}],
["48051",{"nom":"Le Collet-de-Dèze","a":"au Collet-de-Dèze"}],
["48090",{"nom":"Le Malzieu-Ville","a":"au Malzieu-Ville"}],
["49080",{"nom":"Les Hauts-d’Anjou","a":"aux Hauts-d’Anjou"}],
["49246",{"nom":"Les Ponts-de-Cé","a":"aux Ponts-de-Cé"}],
["50041",{"nom":"La Hague","a":"à la Hague"}],
["50236",{"nom":"La Haye","a":"à la Haye"}],
["50402",{"nom":"Les Pieux","a":"aux Pieux"}],
["52331",{"nom":"La Porte du Der","a":"à la Porte,du,Der"}],
["52405",{"nom":"Le Montsaugeonnais","a":"au Montsaugeonnais"}],
["53015",{"nom":"La Baconnière","a":"à la Baconnière"}],
["53103",{"nom":"Le Genest-Saint-Isle","a":"au Genest-Saint-Isle"}],
["53119",{"nom":"L’Huisserie","a":"à l’Huisserie"}],
["58059",{"nom":"La Charité-sur-Loire","a":"à la Charité-sur-Loire"}],
["58151",{"nom":"La Machine","a":"à la Machine"}],
["59368",{"nom":"La Madeleine","a":"à la Madeleine"}],
["61167",{"nom":"La Ferté-en-Ouche","a":"à la Ferté-en-Ouche"}],
["61168",{"nom":"La Ferté Macé","a":"à la Ferté,Macé"}],
["61214",{"nom":"L’Aigle","a":"à l’Aigle"}],
["63069",{"nom":"Le Cendre","a":"au Cendre"}],
["63214",{"nom":"Les Martres-de-Veyre","a":"aux Martres-de-Veyre"}],
["65069",{"nom":"La Barthe-de-Neste","a":"à la Barthe-de-Neste"}],
["66017",{"nom":"Le Barcarès","a":"au Barcarès"}],
["66024",{"nom":"Le Boulou","a":"au Boulou"}],
["66195",{"nom":"Le Soler","a":"au Soler"}],
["67519",{"nom":"La Wantzenau","a":"à la Wantzenau"}],
["71059",{"nom":"Le Breuil","a":"au Breuil"}],
["71090",{"nom":"La Chapelle-de-Guinchay","a":"à la Chapelle-de-Guinchay"}],
["71153",{"nom":"Le Creusot","a":"au Creusot"}],
["72024",{"nom":"La Bazoge","a":"à la Bazoge"}],
["72132",{"nom":"La Ferté-Bernard","a":"à la Ferté-Bernard"}],
["72154",{"nom":"La Flèche","a":"à la Flèche"}],
["72176",{"nom":"Le Lude","a":"au Lude"}],
["72181",{"nom":"Le Mans","a":"au Mans"}],
["72346",{"nom":"La Suze-sur-Sarthe","a":"à la Suze-sur-Sarthe"}],
["73051",{"nom":"Le Bourget-du-Lac","a":"au Bourget-du-Lac"}],
["73150",{"nom":"La Plagne Tarentaise","a":"à la Plagne,Tarentaise"}],
["73179",{"nom":"La Motte-Servolex","a":"à la Motte-Servolex"}],
["73213",{"nom":"La Ravoire","a":"à la Ravoire"}],
["73257",{"nom":"Les Belleville","a":"aux Belleville"}],
["74224",{"nom":"La Roche-sur-Foron","a":"à la Roche-sur-Foron"}],
["76322",{"nom":"Le Grand-Quevilly","a":"au Grand-Quevilly"}],
["76351",{"nom":"Le Havre","a":"au Havre"}],
["76498",{"nom":"Le Petit-Quevilly","a":"au Petit-Quevilly"}],
["77285",{"nom":"Le Mée-sur-Seine","a":"au Mée-sur-Seine"}],
["78126",{"nom":"La Celle-Saint-Cloud","a":"à la Celle-Saint-Cloud"}],
["78158",{"nom":"Le Chesnay-Rocquencourt","a":"au Chesnay-Rocquencourt"}],
["78165",{"nom":"Les Clayes-sous-Bois","a":"aux Clayes-sous-Bois"}],
["78440",{"nom":"Les Mureaux","a":"aux Mureaux"}],
["78650",{"nom":"Le Vésinet","a":"au Vésinet"}],
["79048",{"nom":"La Crèche","a":"à la Crèche"}],
["79123",{"nom":"La Forêt-sur-Sèvre","a":"à la Forêt-sur-Sèvre"}],
["82076",{"nom":"L’Honor-de-Cos","a":"à l’Honor-de-Cos"}],
["82096",{"nom":"La Ville-Dieu-du-Temple","a":"à la Ville-Dieu-du-Temple"}],
["83016",{"nom":"Le Beausset","a":"au Beausset"}],
["83047",{"nom":"La Crau","a":"à la Crau"}],
["83054",{"nom":"La Farlède","a":"à la Farlède"}],
["83062",{"nom":"La Garde","a":"à la Garde"}],
["83071",{"nom":"La Londe-les-Maures","a":"à la Londe-les-Maures"}],
["83073",{"nom":"Le Luc","a":"au Luc"}],
["83086",{"nom":"Le Muy","a":"au Muy"}],
["83098",{"nom":"Le Pradet","a":"au Pradet"}],
["83126",{"nom":"La Seyne-sur-Mer","a":"à la Seyne-sur-Mer"}],
["83144",{"nom":"La Valette-du-Var","a":"à la Valette-du-Var"}],
["84054",{"nom":"L’Isle-sur-la-Sorgue","a":"à l’Isle-sur-la-Sorgue"}],
["84092",{"nom":"Le Pontet","a":"au Pontet"}],
["84132",{"nom":"Le Thor","a":"au Thor"}],
["84133",{"nom":"La Tour-d’Aigues","a":"à la Tour-d’Aigues"}],
["85088",{"nom":"Le Fenouiller","a":"au Fenouiller"}],
["85089",{"nom":"La Ferrière","a":"à la Ferrière"}],
["85096",{"nom":"La Garnache","a":"à la Garnache"}],
["85109",{"nom":"Les Herbiers","a":"aux Herbiers"}],
["85113",{"nom":"L’Île-d’Yeu","a":"à l’Île-d’Yeu"}],
["85152",{"nom":"Les Achards","a":"aux Achards"}],
["85178",{"nom":"Le Poiré-sur-Vie","a":"au Poiré-sur-Vie"}],
["85191",{"nom":"La Roche-sur-Yon","a":"à la Roche-sur-Yon"}],
["85194",{"nom":"Les Sables-d’Olonne","a":"aux Sables-d’Olonne"}],
["87113",{"nom":"Le Palais-sur-Vienne","a":"au Palais-sur-Vienne"}],
["87205",{"nom":"Le Vigen","a":"au Vigen"}],
["88075",{"nom":"La Bresse","a":"à la Bresse"}],
["88468",{"nom":"Le Thillot","a":"au Thillot"}],
["88487",{"nom":"Le Val-d’Ajol","a":"au Val-d’Ajol"}],
["91692",{"nom":"Les Ulis","a":"aux Ulis"}],
["92035",{"nom":"La Garenne-Colombes","a":"à la Garenne-Colombes"}],
["92060",{"nom":"Le Plessis-Robinson","a":"au Plessis-Robinson"}],
["93007",{"nom":"Le Blanc-Mesnil","a":"au Blanc-Mesnil"}],
["93027",{"nom":"La Courneuve","a":"à la Courneuve"}],
["93045",{"nom":"Les Lilas","a":"aux Lilas"}],
["93057",{"nom":"Les Pavillons-sous-Bois","a":"aux Pavillons-sous-Bois"}],
["94038",{"nom":"L’Haÿ-les-Roses","a":"à l’Haÿ-les-Roses"}],
["94043",{"nom":"Le Kremlin-Bicêtre","a":"au Kremlin-Bicêtre"}],
["94058",{"nom":"Le Perreux-sur-Marne","a":"au Perreux-sur-Marne"}],
["94059",{"nom":"Le Plessis-Trévise","a":"au Plessis-Trévise"}],
["97101",{"nom":"Les Abymes","a":"aux Abymes"}],
["97113",{"nom":"Le Gosier","a":"au Gosier"}],
["97117",{"nom":"Le Moule","a":"au Moule"}],
["97201",{"nom":"L’Ajoupa-Bouillon","a":"à l’Ajoupa-Bouillon"}],
["97202",{"nom":"Les Anses-d’Arlet","a":"aux Anses-d’Arlet"}],
["97204",{"nom":"Le Carbet","a":"au Carbet"}],
["97206",{"nom":"Le Diamant","a":"au Diamant"}],
["97210",{"nom":"Le François","a":"au François"}],
["97213",{"nom":"Le Lamentin","a":"au Lamentin"}],
["97214",{"nom":"Le Lorrain","a":"au Lorrain"}],
["97216",{"nom":"Le Marigot","a":"au Marigot"}],
["97217",{"nom":"Le Marin","a":"au Marin"}],
["97218",{"nom":"Le Morne-Rouge","a":"au Morne-Rouge"}],
["97222",{"nom":"Le Robert","a":"au Robert"}],
["97230",{"nom":"La Trinité","a":"à la Trinité"}],
["97230",{"nom":"La Trinité","a":"à la Trinité"}],
["97231",{"nom":"Les Trois-Îlets","a":"aux Trois-Îlets"}],
["97232",{"nom":"Le Vauclin","a":"au Vauclin"}],
["97233",{"nom":"Le Morne-Vert","a":"au Morne-Vert"}],
["97401",{"nom":"Les Avirons","a":"aux Avirons"}],
["97404",{"nom":"L’Étang-Salé","a":"à l’Étang-Salé"}],
["97406",{"nom":"La Plaine-des-Palmistes","a":"à la Plaine-des-Palmistes"}],
["97407",{"nom":"Le Port","a":"au Port"}],
["97408",{"nom":"La Possession","a":"à la Possession"}],
["97422",{"nom":"Le Tampon","a":"au Tampon"}],
["97423",{"nom":"Les Trois-Bassins","a":"aux Trois-Bassins"}],
];
const liste =  new Map(_liste);
export default liste;
