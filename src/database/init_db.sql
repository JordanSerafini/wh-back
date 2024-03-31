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
    url VARCHAR(255),
    lon REAL NOT NULL,
    lat REAL NOT NULL,
    owner VARCHAR(100) NOT NULL
);
