'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    let livros = [{
        id: 1,
        titulo: "Recess: School's Out",
        total_paginas: 99,
        autor: "Cheryl Herculeson",
        ano_lancamento: "2005",
        estoque: 40,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 2,
        titulo: "'Human' Factor, The (Human Factor, The)",
        total_paginas: 393,
        autor: "Rickard Itschakov",
        ano_lancamento: "2001",
        estoque: 51,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 3,
        titulo: "idng Alone for Thousands of Miles (Qian li zou dan qi)",
        total_paginas: 42,
        autor: "Cicely Plid",
        ano_lancamento: "99",
        estoque: 33,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },

      {
        id: 4,
        titulo: "ayer, The",
        total_paginas: 178,
        autor: "Binny Tofpik",
        ano_lancamento: "2000",
        estoque: 64,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 5,
        titulo: "Needle, The (Igla)",
        total_paginas: 274,
        autor: "Charleen Gundrey",
        ano_lancamento: "1993",
        estoque: 56,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 6,
        titulo: "End of the Game (Der Richter und sein Henker)",
        total_paginas: 269,
        autor: "Peri Rigbye",
        ano_lancamento: "2008",
        estoque: 25,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 7,
        titulo: "Midin Sweden",
        total_paginas: 33,
        autor: "onstance Vatre",
        ano_lancamento: "2008",
        estoque: 42,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },

      {
        id: 8,
        titulo: "Why Stop Now",
        total_paginas: 307,
        autor: "Marice Rupprecht",
        ano_lancamento: "2009",
        estoque: 8,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 9,
        titulo: "Almost You",
        total_paginas: 90,
        autor: "Siana Mably",
        ano_lancamento: "1994",
        estoque: 44,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 10,
        titulo: "Prom Night III: The Last Kiss",
        total_paginas: 497,
        autor: "Parnell Corson",
        ano_lancamento: "2003",
        estoque: 96,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 11,
        titulo: "Bothersome Man, The (Brysomme mannen, Den)",
        total_paginas: 283,
        autor: "Sutherlan Newiss",
        ano_lancamento: "1991",
        estoque: 77,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 12,
        titulo: "Hustler, The",
        total_paginas: 218,
        autor: "Deeann Jochanany",
        ano_lancamento: "1996",
        estoque: 30,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 13,
        titulo: "Along Came Jones",
        total_paginas: 333,
        autor: "Alejandro Warters",
        ano_lancamento: "2008",
        estoque: 9,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 14,
        titulo: "Barbershop 2: Back in Business",
        total_paginas: 52,
        autor: "Carlie Shall",
        ano_lancamento: "2011",
        estoque: 58,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 15,
        titulo: "Bide, The (Die Brücke)",
        total_paginas: 30,
        autor: "Amber Blevin",
        ano_lancamento: "1990",
        estoque: 35,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 16,
        titulo: "Telling You",
        total_paginas: 252,
        autor: "Ignace MacDiarmond",
        ano_lancamento: "1998",
        estoque: 64,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 17,
        titulo: "Blood of Redemption",
        total_paginas: 428,
        autor: "Ignacius idsdale",
        ano_lancamento: "199",
        estoque: 2,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 18,
        titulo: "Carry on Spying (Agent Oooh!)",
        total_paginas: 490,
        autor: "Carlota Storm",
        ano_lancamento: "2000",
        estoque: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 19,
        titulo: "Nomads",
        total_paginas: 155,
        autor: "Galvin Barroux",
        ano_lancamento: "1996",
        estoque: 54,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 20,
        titulo: "Life and Death of Colonel Blimp, The",
        total_paginas: 500,
        autor: "Augie Levin",
        ano_lancamento: "1992",
        estoque: 16,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 21,
        titulo: "Waterloo",
        total_paginas: 284,
        autor: "Judd Oxbrough",
        ano_lancamento: "1999",
        estoque: 79,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 22,
        titulo: "Heart Is Deceitful Above All Things, The",
        total_paginas: 119,
        autor: "Loleta Comazzo",
        ano_lancamento: "2011",
        estoque: 3,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 23,
        titulo: "Soldiers of Fortune",
        total_paginas: 229,
        autor: "Mikaela Flintoffe",
        ano_lancamento: "2008",
        estoque: 3,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 24,
        titulo: "Simply Irresistible",
        total_paginas: 286,
        autor: "Tina Coldbathe",
        ano_lancamento: "1998",
        estoque: 32,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 25,
        titulo: "Subject Two",
        total_paginas: 109,
        autor: "Osbourn Darbey",
        ano_lancamento: "2007",
        estoque: 4,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 26,
        titulo: "Go for Broke!",
        total_paginas: 378,
        autor: "Alanna Plaster",
        ano_lancamento: "2010",
        estoque: 93,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 27,
        titulo: "Archie To Riverdale and Back Again",
        total_paginas: 417,
        autor: "Meggi Beadles",
        ano_lancamento: "1988",
        estoque: 59,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 28,
        titulo: "Alla älskar Alice",
        total_paginas: 225,
        autor: "Jeffry Gibbeson",
        ano_lancamento: "2004",
        estoque: 56,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 29,
        titulo: "Surgeon, The",
        total_paginas: 264,
        autor: "Garvey Cleworth",
        ano_lancamento: "1992",
        estoque: 87,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 30,
        titulo: "Daughter of Dr. Jeckyll",
        total_paginas: 165,
        autor: "Edythe Maurice",
        ano_lancamento: "2002",
        estoque: 89,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 31,
        titulo: "Chambermidon the Titanic, The (Femme de chambre du Titanic, La)",
        total_paginas: 115,
        autor: "Marnia Cubberley",
        ano_lancamento: "1998",
        estoque: 75,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 32,
        titulo: "The Hearts of Age",
        total_paginas: 378,
        autor: "Tymon Girodin",
        ano_lancamento: "2010",
        estoque: 68,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 33,
        titulo: "Mr. Kinky",
        total_paginas: 117,
        autor: "Russ Collocott",
        ano_lancamento: "2009",
        estoque: 66,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 34,
        titulo: "Play it to the Bone",
        total_paginas: 376,
        autor: "Haily Stilldale",
        ano_lancamento: "1976",
        estoque: 74,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 35,
        titulo: "Love Field",
        total_paginas: 126,
        autor: "Johna Burgin",
        ano_lancamento: "2012",
        estoque: 52,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 36,
        titulo: "Dirty Love",
        total_paginas: 210,
        autor: "Hort Restorick",
        ano_lancamento: "2012",
        estoque: 40,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 37,
        titulo: "The Beaver Trilogy",
        total_paginas: 127,
        autor: "Maurene Rickell",
        ano_lancamento: "1995",
        estoque: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 38,
        titulo: "Doppelgänger Paul",
        total_paginas: 51,
        autor: "Marrissa Woolford",
        ano_lancamento: "1994",
        estoque: 70,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 39,
        titulo: "Annabelle",
        total_paginas: 123,
        autor: "John Osbourn",
        ano_lancamento: "2003",
        estoque: 80,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 40,
        titulo: "Wild Wild West Revisited, The",
        total_paginas: 158,
        autor: "Daveen Boak",
        ano_lancamento: "2007",
        estoque: 40,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 41,
        titulo: "Aristocats, The",
        total_paginas: 77,
        autor: "Jason Ratie",
        ano_lancamento: "2009",
        estoque: 55,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 42,
        titulo: "Lionheart",
        total_paginas: 184,
        autor: "Adolf Detloff",
        ano_lancamento: "2009",
        estoque: 39,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 43,
        titulo: "Sometime in August (Mitte Ende August)",
        total_paginas: 480,
        autor: "Kitti Punshon",
        ano_lancamento: "2007",
        estoque: 13,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 44,
        titulo: "Criss Cross",
        total_paginas: 53,
        autor: "Ronica Shildrick",
        ano_lancamento: "2008",
        estoque: 94,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 45,
        titulo: "That Awkward Moment",
        total_paginas: 140,
        autor: "Trip Riguard",
        ano_lancamento: "1983",
        estoque: 50,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 46,
        titulo: "Last Days, The (Últimos días, Los)",
        total_paginas: 281,
        autor: "Armando Doswell",
        ano_lancamento: "2006",
        estoque: 86,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 47,
        titulo: "Fled",
        total_paginas: 134,
        autor: "Kenon Yong",
        ano_lancamento: "1995",
        estoque: 56,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 48,
        titulo: "Hope Springs",
        total_paginas: 65,
        autor: "Arther Mercy",
        ano_lancamento: "2006",
        estoque: 48,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 49,
        titulo: "Final Inquiry, The (Inquiry, The) (inchiesta, L')",
        total_paginas: 162,
        autor: "Hannie Seres",
        ano_lancamento: "1994",
        estoque: 70,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 50,
        titulo: "Resurrecting the Champ",
        total_paginas: 140,
        autor: "Fraze Whickman",
        ano_lancamento: "1997",
        estoque: 75,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 51,
        titulo: "Given Word, The (O Pagador de Promessas)",
        total_paginas: 121,
        autor: "Xever Nelsen",
        ano_lancamento: "2005",
        estoque: 69,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 52,
        titulo: "Cave, The",
        total_paginas: 448,
        autor: "Prince Saladine",
        ano_lancamento: "1995",
        estoque: 79,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 53,
        titulo: "Treasure of the Yankee Zephyr (Race for the Yankee Zephyr)",
        total_paginas: 470,
        autor: "Fawne Wakeham",
        ano_lancamento: "2007",
        estoque: 45,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 54,
        titulo: "Lake Plaid",
        total_paginas: 183,
        autor: "Genevieve Coe",
        ano_lancamento: "2007",
        estoque: 97,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 55,
        titulo: "Vivre sa vie: Film en douze tableaux (My Life to Live)",
        total_paginas: 412,
        autor: "Elle Patton",
        ano_lancamento: "1989",
        estoque: 34,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 56,
        titulo: "Kevin Hart: Let Me Explain",
        total_paginas: 244,
        autor: "Marwin Petrelluzzi",
        ano_lancamento: "1998",
        estoque: 52,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 57,
        titulo: "Return of the Secaucus 7",
        total_paginas: 110,
        autor: "Ervin Dowse",
        ano_lancamento: "1987",
        estoque: 76,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 58,
        titulo: "Flaming Star",
        total_paginas: 248,
        autor: "Jennee Warburton",
        ano_lancamento: "1997",
        estoque: 31,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 59,
        titulo: "Misunderstood",
        total_paginas: 149,
        autor: "Sarajane Kemball",
        ano_lancamento: "2008",
        estoque: 17,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 60,
        titulo: "Drones",
        total_paginas: 423,
        autor: "Kinsley Le Prevost",
        ano_lancamento: "2009",
        estoque: 67,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 61,
        titulo: "In Eagle Shadow Fist (Ding tian li di) (Fist of Anger)",
        total_paginas: 269,
        autor: "Johna Betteney",
        ano_lancamento: "1999",
        estoque: 6,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 62,
        titulo: "Istanbul",
        total_paginas: 149,
        autor: "Petra Clark",
        ano_lancamento: "2001",
        estoque: 87,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 63,
        titulo: "Anvil! The Story of Anvil",
        total_paginas: 430,
        autor: "Sallie Menloe",
        ano_lancamento: "1987",
        estoque: 6,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 64,
        titulo: "Thale",
        total_paginas: 437,
        autor: "Emelen Samples",
        ano_lancamento: "2001",
        estoque: 7,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 65,
        titulo: "Day of the Dolphin, The",
        total_paginas: 283,
        autor: "Rochella Alessandretti",
        ano_lancamento: "2007",
        estoque: 37,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 66,
        titulo: "Istanbul",
        total_paginas: 65,
        autor: "Don McKissack",
        ano_lancamento: "1999",
        estoque: 7,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 67,
        titulo: "HealtH",
        total_paginas: 173,
        autor: "Colette Lauga",
        ano_lancamento: "1995",
        estoque: 17,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 68,
        titulo: "Tales from the Script",
        total_paginas: 334,
        autor: "Malcolm Ionn",
        ano_lancamento: "2012",
        estoque: 10,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 69,
        titulo: "Desert Hearts",
        total_paginas: 355,
        autor: "Bernarr Rayne",
        ano_lancamento: "2005",
        estoque: 24,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 70,
        titulo: "Golden Coach, The (Le carrosse d'or)",
        total_paginas: 294,
        autor: "Elsie Petroselli",
        ano_lancamento: "1995",
        estoque: 46,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 71,
        titulo: "Patsy",
        total_paginas: 339,
        autor: "Laney Van Daalen",
        ano_lancamento: "1988",
        estoque: 11,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 72,
        titulo: "Jeff, Who Lives at Home",
        total_paginas: 281,
        autor: "Shandy Godain",
        ano_lancamento: "1992",
        estoque: 13,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 73,
        titulo: "Two Deaths",
        total_paginas: 385,
        autor: "Tyrus Tesyro",
        ano_lancamento: "1992",
        estoque: 17,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 74,
        titulo: "Thieves' Highway",
        total_paginas: 165,
        autor: "Bren Cartmail",
        ano_lancamento: "2011",
        estoque: 2,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 75,
        titulo: "Foosball (Metegol)",
        total_paginas: 265,
        autor: "Brandais Verman",
        ano_lancamento: "1993",
        estoque: 66,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 76,
        titulo: "Aelita: The Queen of Mars (Aelita)",
        total_paginas: 95,
        autor: "Gabriel Stitcher",
        ano_lancamento: "2010",
        estoque: 53,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 77,
        titulo: "Belarmino",
        total_paginas: 365,
        autor: "Lucina Ganniclifft",
        ano_lancamento: "2011",
        estoque: 49,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 78,
        titulo: "Unknown Soldier, The (Tuntematon sotilas)",
        total_paginas: 404,
        autor: "Martha Kembrey",
        ano_lancamento: "1997",
        estoque: 50,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 79,
        titulo: "Dawn of the Dead",
        total_paginas: 62,
        autor: "Ron Wadie",
        ano_lancamento: "2012",
        estoque: 74,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 80,
        titulo: "Sicko",
        total_paginas: 484,
        autor: "Alejoa Slimming",
        ano_lancamento: "1998",
        estoque: 92,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 81,
        titulo: "Greetings",
        total_paginas: 155,
        autor: "Alessandro MacNulty",
        ano_lancamento: "1993",
        estoque: 84,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 82,
        titulo: "Sexy Beast",
        total_paginas: 55,
        autor: "Barnaby Martyntsev",
        ano_lancamento: "1998",
        estoque: 14,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 83,
        titulo: "Scarlet Street",
        total_paginas: 423,
        autor: "Valli Skitteral",
        ano_lancamento: "2006",
        estoque: 18,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 84,
        titulo: "Trois",
        total_paginas: 489,
        autor: "Rosanne Grelka",
        ano_lancamento: "1997",
        estoque: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 85,
        titulo: "With a Bike, The (Le gamin au vélo)",
        total_paginas: 36,
        autor: "Dynah Trott",
        ano_lancamento: "2005",
        estoque: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 86,
        titulo: "Arsène Lupin",
        total_paginas: 346,
        autor: "Jacquenetta Worshall",
        ano_lancamento: "2000",
        estoque: 92,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 87,
        titulo: "Arn: The Knight Templar (Arn - Tempelidaren)",
        total_paginas: 75,
        autor: "Sloan Turfes",
        ano_lancamento: "1993",
        estoque: 10,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 88,
        titulo: "Satan Bug, The",
        total_paginas: 315,
        autor: "Orson Endricci",
        ano_lancamento: "2012",
        estoque: 98,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 89,
        titulo: "Devils on the Doorstep (Guizi lai le)",
        total_paginas: 436,
        autor: "Val Fealey",
        ano_lancamento: "2011",
        estoque: 10,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 90,
        titulo: "Wicked Little Things",
        total_paginas: 482,
        autor: "Aguie Leatherland",
        ano_lancamento: "1998",
        estoque: 54,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 91,
        titulo: "Indie Game: The Movie",
        total_paginas: 349,
        autor: "Emmit Robotham",
        ano_lancamento: "2011",
        estoque: 89,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 92,
        titulo: "Eden",
        total_paginas: 260,
        autor: "Fons Grigorini",
        ano_lancamento: "1999",
        estoque: 15,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 93,
        titulo: "Notorious C.H.O.",
        total_paginas: 404,
        autor: "Teddie Bradly",
        ano_lancamento: "2005",
        estoque: 78,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 94,
        titulo: "Hands Across the Table",
        total_paginas: 174,
        autor: "Boote Wildber",
        ano_lancamento: "2013",
        estoque: 91,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 95,
        titulo: "Honey (Miele)",
        total_paginas: 467,
        autor: "Brigitta Parkman",
        ano_lancamento: "2001",
        estoque: 43,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 96,
        titulo: "From Beyond the Grave (Creatures)",
        total_paginas: 170,
        autor: "Beau Pizer",
        ano_lancamento: "1998",
        estoque: 23,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 97,
        titulo: "Hangar 18",
        total_paginas: 236,
        autor: "Rancell Wickliffe",
        ano_lancamento: "1985",
        estoque: 33,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 98,
        titulo: "Sons and Lovers",
        total_paginas: 437,
        autor: "Chantal id",
        ano_lancamento: "195",
        estoque: 9,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 99,
        titulo: "Frost/Nixon",
        total_paginas: 202,
        autor: "Patrizia Fairbourne",
        ano_lancamento: "2009",
        estoque: 97,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 100,
        titulo: "Train of Shadows (Tren de sombras)",
        total_paginas: 413,
        autor: "Barry Briztman",
        ano_lancamento: "1986",
        estoque: 70,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
    ];

    await queryInterface.bulkInsert('livros', livros, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('livros', null, {});
  }
};