CREATE TABLE utilisateurs (
    id SERIAL PRIMARY KEY,
    mail VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    pseudo VARCHAR(50) NOT NULL,
    role INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE poi (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    url TEXT,
    lon REAL NOT NULL,
    lng REAL NOT NULL,
    owner VARCHAR(100) ,
    level INTEGER  DEFAULT 1
);

CREATE TABLE attaque (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    power INTEGER NOT NULL,
    type VARCHAR(100) NOT NULL

);

CREATE TABLE poi_attaque (
    id SERIAL PRIMARY KEY,
    id_poi INTEGER NOT NULL,
    id_attaque INTEGER NOT NULL,
    FOREIGN KEY (id_poi) REFERENCES poi(id),
    FOREIGN KEY (id_attaque) REFERENCES attaque(id)
);
