INSERT INTO utilisateurs (mail, password, pseudo, role)
VALUES ('jordanserafini.74@gmail.com', 'pass123', 'sjordan', '1');


-- Insertion des données de test dans la table poi
INSERT INTO poi (name, description, url, lon, lat, owner) VALUES
    ('Lac d\'Annecy', 'Magnifique lac situé près de la ville d\'Annecy.', 'https://example.com/lac_annecy.jpg', 6.1296, 45.8491, NULL),
    ('Palais de l\'Isle', 'Ancienne prison au milieu du Thiou, à Annecy.', 'https://example.com/palais_isle.jpg', 6.1218, 45.8992, NULL),
    ('Pont des Amours', 'Pont romantique enjambant le canal du Vassé, à Annecy.', 'https://example.com/pont_amours.jpg', 6.1369, 45.9007, NULL),
    ('Château d\'Annecy', 'Ancien château surplombant la vieille ville d\'Annecy.', 'https://example.com/chateau_annecy.jpg', 6.1259, 45.9000, NULL),
    ('Jardins de l\'Europe', 'Beaux jardins publics près du lac d\'Annecy.', 'https://example.com/jardins_europe.jpg', 6.1293, 45.8930, NULL);

-- Insertion des données de test dans la table pokemon
INSERT INTO poi (name, description, url, lon, lat, owner) VALUES
    ('Pikachu', 'Un Pokémon électrique adorable.', 'https://example.com/pikachu.jpg', 6.1290, 45.8495, NULL),
    ('Bulbasaur', 'Un Pokémon de type plante.', 'https://example.com/bulbasaur.jpg', 6.1240, 45.9001, NULL),
    ('Charmander', 'Un Pokémon de type feu.', 'https://example.com/charmander.jpg', 6.1227, 45.8982, NULL),
    ('Squirtle', 'Un Pokémon de type eau.', 'https://example.com/squirtle.jpg', 6.1273, 45.8953, NULL),
    ('Jigglypuff', 'Un Pokémon de type fée.', 'https://example.com/jigglypuff.jpg', 6.1315, 45.8907, NULL),
    ('Snorlax', 'Un Pokémon paresseux.', 'https://example.com/snorlax.jpg', 6.1366, 45.8876, NULL),
    ('Eevee', 'Un Pokémon polyvalent.', 'https://example.com/eevee.jpg', 6.1398, 45.8832, NULL),
    ('Mewtwo', 'Un Pokémon légendaire puissant.', 'https://example.com/mewtwo.jpg', 6.1352, 45.8791, NULL),
    ('Gengar', 'Un Pokémon fantomatique.', 'https://example.com/gengar.jpg', 6.1297, 45.8763, NULL),
    ('Dragonite', 'Un Pokémon dragon majestueux.', 'https://example.com/dragonite.jpg', 6.1246, 45.8719, NULL),
    ('Mew', 'Un Pokémon rare et mystérieux.', 'https://example.com/mew.jpg', 6.1185, 45.8675, NULL),
    ('Articuno', 'Un Pokémon légendaire de glace.', 'https://example.com/articuno.jpg', 6.1141, 45.8627, NULL),
    ('Zapdos', 'Un Pokémon légendaire électrique.', 'https://example.com/zapdos.jpg', 6.1107, 45.8591, NULL),
    ('Moltres', 'Un Pokémon légendaire de feu.', 'https://example.com/moltres.jpg', 6.1063, 45.8556, NULL),
    ('Ditto', 'Un Pokémon qui peut se transformer en tout autre Pokémon.', 'https://example.com/ditto.jpg', 6.1020, 45.8520, NULL);
