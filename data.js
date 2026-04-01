// ==========================================
// data.js - TOUTES LES DONNÉES DU JEU
// ==========================================

//const cubeData = {
//    "222": [["Alaric Pouchain", "1.48", "2019POUC01"], ["Anael Champion", "1.57", "2017CHAM02"], ["Juliette Sébastien", "1.58", "2014SEBA01"], ["Diego Fraile", "1.60", "2013FRAI01"], ["Elian Beguec", "1.62", "2014BEGU01"]],
//    "333": [["Juliette Sébastien", "5.98", "2014SEBA01"], ["Mathis Luc", "6.21", "2018LUCM01"], ["Alexandre Carlier", "6.64", "2012CARL03"], ["Quentin Rivault", "2017RIVA09", "2017RIVA09"], ["Nicolas Gertner Kilian", "6.85", "2013GERT01"]],
//    "444": [["Juliette Sébastien", "26.58", "2014SEBA01"], ["Jules Desjardin", "26.59", "2010DESJ01"], ["Alexandre Carlier", "26.60", "2012CARL03"], ["Lucas Déglise", "27.04", "2015DEGL01"], ["Abdelhak Kaddour", "27.46", "2010KADD01"]],
//    "555": [["Abdelhak Kaddour", "49.50", "2010KADD01"], ["Louis Fertier", "50.19", "2013FERT01"], ["Lucas Déglise", "51.03", "2015DEGL01"], ["Peter Grassard", "51.44", "2016GRAS01"], ["Baptiste Bery", "51.68", "2021BERY01"]],
//    "666": [["Peter Grassard", "1:29.87", "2016GRAS01"], ["Abdelhak Kaddour", "1:32.29", "2010KADD01"], ["Maxence Baudry", "1:38.79", "2014BAUD02"], ["Lucas Déglise", "1:38.79", "2015DEGL01"], ["Louis Fertier", "1:39.55", "2013FERT01"]],
//    "777": [["Maxence Baudry", "2:13.57", "2014BAUD02"], ["Peter Grassard", "2:14.93", "2016GRAS01"], ["Abdelhak Kaddour", "2:19.16", "2010KADD01"], ["Étienne Aubry", "2:34.72", "2018AUBR01"], ["Valentin Hoffmann", "2:35.18", "2011HOFF02"]],
//    "333oh": [["Juliette Sébastien", "9.11", "2014SEBA01"], ["Nicolas Gertner Kilian", "10.80", "2013GERT01"], ["Victor Colin", "11.86", "2013COLI02"], ["Mathis Luc", "12.00", "2018LUCM01"], ["Elian Beguec", "12.21", "2014BEGU01"]],
//    "clock": [["Baptiste Bery", "2.97", "2021BERY01"], ["Romain Velcin", "3.17", "2023VELC01"], ["César Essling", "3.36", "2022ESSL01"], ["Manu Dutheil", "3.91", "2018DUTH01"], ["Virgile Perrot", "4.18", "2017PERR02"]],
//    "minx": [["Rémi Perrin", "31.77", "2018PERR04"], ["Juliette Sébastien", "34.78", "2014SEBA01"], ["Théo Paris", "38.26", "2016PARI08"], ["Gabriel De Noni", "39.97", "2022NONI01"], ["Ilona Ansel", "41.09", "2016ANSE02"]],
//    "pyram": [["Jaimy Mfoumou", "1.98", "2023MFOU01"], ["Jules Desjardin", "2.16", "2010DESJ01"], ["Anthony Lafourcade", "2.16", "2014LAFO01"], ["Lev Azaria Doron", "2.66", "2024DORO01"], ["Luc Gély", "2.68", "2024GELY01"]],
//    "skewb": [["Anthony Lafourcade", "1.89", "2014LAFO01"], ["Adrien Romain", "2.10", "2022ROMA05"], ["Maxence Baudry", "2.51", "2014BAUD02"], ["Lucas Déglise", "2.86", "2015DEGL01"], ["Lev Azaria Doron", "3.05", "2024DORO01"]],
//    "sq1": [["Paul Luciw", "7.95", "2015LUCI02"], ["Arthur Provot", "8.06", "2018PROV01"], ["Lucas Déglise", "8.12", "2015DEGL01"], ["Basile Chandon", "8.48", "2022CHAN39"], ["Elouann Marfil", "9.14", "2017MARF01"]],
//    "333bf": [["Charles Daloz-Baltenberger", "13.22", "2018DALO01"], ["Arthur Garcin", "15.54", "2014GARC27"], ["Maxime Madrzyk", "15.65", "2018MADR02"], ["Quentin Rivault", "18.61", "2017RIVA09"], ["Marius Chaudesaygues", "20.26", "2022CHAU04"]],
//    "444bf": [["Arthur Garcin", "1:56.37", "2014GARC27"], ["Tiago Eche", "2:22.03", "2022ECHE01"], ["William Phommaha", "2:23.67", "2015PHOM01"], ["Jonathan Dammann", "2:32.81", "2021DAMM01"], ["Manu Dutheil", "2:43.76", "2018DUTH01"]],
//    "555bf": [["Arthur Garcin", "5:52.42", "2014GARC27"], ["William Phommaha", "6:34.10", "2015PHOM01"], ["Maxime Madrzyk", "6:50.77", "2018MADR02"], ["Jonathan Dammann", "7:18.96", "2021DAMM01"], ["Rodolphe Rouyrre", "7:55.56", "2020ROUY01"]],
//    "333mbf": [["Marius Chaudesaygues", "65/3490", "2022CHAU04"], ["Maxime Madrzyk", "69/3394", "2018MADR02"], ["Arthur Garcin", "77/3043", "2014GARC27"], ["Jonathan Dammann", "77/3169", "2021DAMM01"], ["Manu Dutheil", "78/3503", "2018DUTH01"]],
//    "333fm": [["Louis-Marie Ratto", "20.67", "2019RATT02"], ["Adrien Neveu", "21.00", "2018NEVE02"], ["Nicolas Gertner Kilian", "21.33", "2013GERT01"], ["Louis Sarthou", "22.00", "2012SART01"], ["Quentin Rivault", "22.33", "2017RIVA09"]]
//};

const debats = [
    "Quel est pour toi l'event le plus intéressant et pourquoi ?",
    "Quel event mérite encore d'être creusé et pourquoi ?",
    "Quel est pour toi le prochain record de France à être battu ?",
    "Cite un Français présent qui fera un podium l'année prochaine (mais pas cette année)",
    "Qui gère le mieux la pression en finale ?",
    "Pourquoi la méthode ZB n'a pas encore conquis de multiples Français ?",
    "Finale 3x3 : La limite était de 8.44 l'an dernier. Pronostic pour 2026 ?",
    "Qui fera le plus de podiums durant ce CDF ?",
    "Différences entre un CDF d'aujourd'hui et celui d'il y a 10/20 ans ?",
    "Une méthode 'peu populaire' à explorer ?",
    "Qui fera son premier podium de CDF cette année ?"
];

const gridsData = {
    grille_cdf2025: [
        { id: "mot_st_aubin", mot: "SAINTAUBINDETERREGATTE", indice: "Le nom de ville le plus long où une compétition a eu lieu.", hintText: "Cube en Baie Open 2025", x: 5, y: 10, direction: "horizontale" },
        { id: "mot_vieux_hab", mot: "VIEUXHABITANTS", indice: "La compétition en outre-mer.", hintText: "C'est fou comme ils sont vieux les habitants là-bas !", x: 6, y: 4, direction: "verticale" },
        { id: "mot_chanteloup", mot: "CHANTELOUPENBRIE", indice: "La première compétition de l'année 2026.", hintText: "On voit Mickey au loin", x: 16, y: 5, direction: "verticale" },
        { id: "mot_montagne", mot: "LAMONTAGNE", indice: "C'est la première édition dans cette ville depuis 12 ans.", hintText: "On n'y fait pas du ski", x: 23, y: 4, direction: "verticale" },
        { id: "mot_parthenay", mot: "PARTHENAY", indice: "Le nom de la salle sur la WCA s'appelle \"Cité des Jeux\".", hintText: "Les dortoirs y sont très confortables", x: 1, y: 6, direction: "horizontale" },
        { id: "mot_hayange", mot: "HAYANGE", indice: "La dernière compétition avant les championnats de France.", hintText: "C'est le Luxembourg ou la France ici ?", x: 19, y: 8, direction: "horizontale" },
        { id: "mot_chelles", mot: "CHELLES", indice: "La compétition qui a attiré le plus de compétiteurs.", hintText: "Un changement de salle pour accueillir encore plus de monde !", x: 14, y: 20, direction: "horizontale" }
    ],
    grille_etrangers: [
        { id: "etr_eden", mot: "EDENROBINSONRECHAVI", indice: "Je suis dans le top 3 single de 3x3 dans 2 pays différents.", hintText: "(Suisse)", anecdote: "2e Français avec 4.56 single et 3e Suisse avec 4.76", x: 2, y: 11, direction: "horizontale" },
        { id: "etr_konst", mot: "KONSTANTINJAEHNE", indice: "Je suis l'étranger avec le plus de participation à des championnats de France.", hintText: "(Allemagne)", anecdote: "7 Championnats de France depuis 2018 en comptant 2026 !", x: 10, y: 9, direction: "verticale" },
        { id: "etr_vale", mot: "VALERIOLOCATELLI", indice: "Je suis l'actuel Champion de France.", hintText: "(Italie)", anecdote: "J'ai gagné l'édition 2025 avec une moyenne de 6.08", x: 16, y: 2, direction: "verticale" },
        { id: "etr_dhruva", mot: "DHRUVASAIMERUVA", indice: "J'ai le meilleur classement mondial parmi tous les étrangers présents ici.", hintText: "(Suisse)", anecdote: "Eh oui, un WR holder aux CDF !", x: 6, y: 9, direction: "verticale" },
        { id: "etr_ciaran", mot: "CIARANBEAHAN", indice: "Ma Description LinkedIn est Executive Officer, Youth Affairs Unit, Department of Education and Youth.", hintText: "(Irlande)", anecdote: "CIAARAAANNNN BEAHAANNN CLAP CLAP CLAP CLAP CLAP", x: 8, y: 5, direction: "verticale" },
        { id: "etr_daniel", mot: "DANIELRUSH", indice: "Il est la même heure dans mon pays qu'en France actuellement mais pourtant 8000 km nous séparent.", hintText: "(Afrique du Sud)", anecdote: "L'Afrique du Sud a 1h de décalage avec nous en hiver et 0 en été !", x: 11, y: 4, direction: "horizontale" },
        { id: "etr_alwin", mot: "ALWINROLZ", indice: "Je suis un des meilleurs à utiliser Hoya sur les bigs cubes.", hintText: "(Suisse)", anecdote: "Eh oui, si vous faites Hoya au 4 cest pas perdu pour vous, alors faites des bigs !", x: 14, y: 1, direction: "verticale" }
    ],
    grille_marques: [
        { id: "mrq_east", mot: "EASTSHEEN", indice: "Les premiers \"bons\" 2x2, 4x4 et 5x5.", hintText: "Une face rose ou violette au lieu du orange", anecdote: "Eastsheen n'a jamais produit de 3x3 !", x: 6, y: 9, direction: "horizontale" },
        { id: "mrq_moyu", mot: "MOYU", indice: "A commercialisé le WeiSu.", hintText: "魔域", anecdote: "La marque MoYu a été créée vers 2012 comme plateforme pour permettre aux designers externes de fournir des designs à YJ pour la production, le marketing, etc.", x: 12, y: 7, direction: "horizontale" },
        { id: "mrq_dayan", mot: "DAYAN", indice: "A collaboré avec MF8 pour sortir un 4x4.", hintText: "A inventé le torpedo", anecdote: "Et oui, Dayan est peut-être la marque qui a le plus révolutionné l'hardware.", x: 14, y: 5, direction: "verticale" },
        { id: "mrq_wit", mot: "WITEDEN", indice: "A commercialisé les \"Type-C\".", hintText: "Est également très célèbre pour ses cuboïdes comme le 3x3x9", anecdote: "Bien joué !", x: 4, y: 15, direction: "horizontale" },
        { id: "mrq_cong", mot: "CONGSDESIGN", indice: "Sous-marque de Moyu avec un logo en forme de pastèque à lunettes.", hintText: "Principalement connu pour le 3x3 MeiYing", anecdote: "Pas facile celui-là !", x: 10, y: 5, direction: "verticale" },
        { id: "mrq_lan", mot: "LANLAN", indice: "On se servait de ses ressorts pour rendre les Shengshou Skewb \"bons\".", hintText: "A commercialisé beaucoup de shape mods", anecdote: "Pas mal !", x: 7, y: 8, direction: "verticale" },
        { id: "mrq_qiyi", mot: "QIYI", indice: "Marque représentée par Mats Valk durant de nombreuses années.", hintText: "Marque mère de la marque X-man Design", anecdote: "Un des big 3 durant de nombreuses années avec Moyu et Gan !", x: 3, y: 11, direction: "verticale" },
        { id: "mrq_yuxin", mot: "YUXIN", indice: "Cube utilisé par Collin Burns pour son 5.25.", hintText: "Kevin Hays a représenté cette marque de nombreuses années", anecdote: "Une des marques les plus populaires entre 2015 et 2019", x: 3, y: 13, direction: "horizontale" }
    ],
    grille_champions: [
        { id: "champ_jul", mot: "JULIETTESEBASTIEN", indice: "2024, 2025", hintText: "Pas d'indice pour les champions, fais appel à ta mémoire !", anecdote: "Juliette Sébastien a remporté les deux dernières éditions !", x: 14, y: 7, direction: "verticale" },
        { id: "champ_pie", mot: "PIERREMEUNIER", indice: "2023", hintText: "Pas d'indice pour les champions, fais appel à ta mémoire !", anecdote: "Bien joué, c'est Pierre Meunier !", x: 2, y: 25, direction: "horizontale" },
        { id: "champ_jul_d", mot: "JULESDESJARDIN", indice: "2014, 2018, 2022", hintText: "Pas d'indice pour les champions, fais appel à ta mémoire !", anecdote: "Jules Desjardin est le maître des années paires !", x: 6, y: 15, direction: "verticale" },
        { id: "champ_ale", mot: "ALEXANDRECARLIER", indice: "2013, 2015, 2016, 2017, 2019", hintText: "Pas d'indice pour les champions, fais appel à ta mémoire !", anecdote: "Alexandre Carlier a dominé la décennie 2010 !", x: 4, y: 18, direction: "horizontale" },
        { id: "champ_kan", mot: "KANNETISAEHAN", indice: "2010, 2011, 2012", hintText: "Pas d'indice pour les champions, fais appel à ta mémoire !", anecdote: "Kanneti Sae Han a réussi le triplé 2010-2012 !", x: 11, y: 22, direction: "verticale" },
        { id: "champ_edo", mot: "EDOUARDCHAMBON", indice: "2005, 2007, 2008, 2009", hintText: "Pas d'indice pour les champions, fais appel à ta mémoire !", anecdote: "Edouard Chambon, la légende française des débuts !", x: 9, y: 1, direction: "verticale" },
        { id: "champ_thi", mot: "THIBAUTJACQUINOT", indice: "2006", hintText: "Pas d'indice pour les champions, fais appel à ta mémoire !", anecdote: "Bien joué, c'est Thibaut Jacquinot !", x: 5, y: 5, direction: "horizontale" },
        { id: "champ_tho", mot: "THOMASTEMPLIER", indice: "2004", hintText: "Pas d'indice pour les champions, fais appel à ta mémoire !", anecdote: "Thomas Templier a remporté l'édition 2004 !", x: 6, y: 11, direction: "horizontale" }
    ],
    grille_methodes: [
        { id: "meth_hoya", mot: "HOYA", indice: "Concurrent à yau", hintText: "Consiste à faire 4 centres puis les arrêtes de la croix", anecdote: "Plus Hoya ou Yau ?", x: 9, y: 9, direction: "horizontale" },
        { id: "meth_vanden", mot: "VANDENBERGH", indice: "Méthode en 5 look", hintText: "Les meilleurs ont réduits cette méthode à 3look voir 2look!", anecdote: "Et Lin alors on en parle ?", x: 4, y: 13, direction: "horizontale" },
        { id: "meth_fridrich", mot: "FRIDRICH", indice: "La méthode avancée la plus connue au 3x3", hintText: "CFOP", anecdote: "Classique !", x: 9, y: 2, direction: "verticale" },
        { id: "meth_reduc", mot: "REDUCTION", indice: "Max Park ne lâchera jamais", hintText: "Utilisé principalement sur les big cubes", anecdote: "Très facile à apprendre mais de moins en moins populaire !", x: 11, y: 15, direction: "horizontale" },
        { id: "meth_westlund", mot: "WESTLUND", indice: "Méthode concurrente à Bálint", hintText: "Tout le monde l'utilise au Megaminx", anecdote: "La base !", x: 2, y: 5, direction: "horizontale" },
        { id: "meth_nutella", mot: "NUTELLA", indice: "subset de TopFirst au pyraminx", hintText: "Hmmmm c'est boooonnnnn", anecdote: "Souvent combiné avec 1flip et WO", x: 19, y: 15, direction: "verticale" },
        { id: "meth_corners", mot: "CORNERSFIRST", indice: "Méthode utilisée pour le premier record du monde", hintText: "Les coins puis les arrêtes", anecdote: "Propre !", x: 12, y: 11, direction: "verticale" },
        { id: "meth_oldpoch", mot: "OLDPOCHMANN", indice: "Ici on aime les pll Y et T", hintText: "Méthode de blind très populaire chez les débutants", anecdote: "M2 pour les edges au moins ?", x: 6, y: 4, direction: "verticale" },
        { id: "meth_roux", mot: "ROUX", indice: "Méthode inventée par Gilles", hintText: "Utilisée par Neo Cuares pour gagner un event aux words 2025", anecdote: "Roux = le futur de l'OH ?", x: 9, y: 6, direction: "horizontale" }
    ],
    grille_hardcore: [
        { id: "hard_philippe", mot: "PHILIPPEVIROULEAU", indice: "Champion de FM 2016", hintText: "Pas d'indice pour le moment !", anecdote: "Bravo !", x: 5, y: 10, direction: "horizontale" },
        { id: "hard_clement", mot: "CLEMENTCHERBLANC", indice: "Champion de 4blind 2017", hintText: "Pas d'indice pour le moment !", anecdote: "Bravo !", x: 12, y: 8, direction: "verticale" },
        { id: "hard_jules", mot: "JULESDESJARDIN", indice: "Champion de Square-1 2016", hintText: "Pas d'indice pour le moment !", anecdote: "Bravo !", x: 17, y: 9, direction: "verticale" },
        { id: "hard_telian", mot: "TELIANDELANNOY", indice: "Champion de clock 2019", hintText: "Pas d'indice pour le moment !", anecdote: "Bravo !", x: 7, y: 22, direction: "horizontale" },
        { id: "hard_diego", mot: "DIEGODURANDET", indice: "Champion de Pyraminx 2018", hintText: "Pas d'indice pour le moment !", anecdote: "Bravo !", x: 10, y: 21, direction: "verticale" },
        { id: "hard_galaad", mot: "GALAADLANGLOIS", indice: "Champion de multi 2022", hintText: "Pas d'indice pour le moment !", anecdote: "Bravo !", x: 3, y: 29, direction: "horizontale" },
        { id: "hard_theo", mot: "THEOPARIS", indice: "Champion de Megaminx 2019", hintText: "Pas d'indice pour le moment !", anecdote: "Bravo !", x: 14, y: 26, direction: "verticale" },
        { id: "hard_elian", mot: "ELIANBEGUEC", indice: "Champion de Skewb 2017", hintText: "Pas d'indice pour le moment !", anecdote: "Bravo !", x: 12, y: 33, direction: "horizontale" },
        { id: "hard_hugo", mot: "HUGOSPITZ", indice: "Champion de OH 2018", hintText: "Pas d'indice pour le moment !", anecdote: "Bravo !", x: 19, y: 31, direction: "verticale" }
    ]
};
