--
-- File generated with SQLiteStudio v3.3.3 on vie ene 14 13:33:29 2022
--
-- Text encoding used: UTF-8
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: contacts
DROP TABLE IF EXISTS contacts;

CREATE TABLE contacts (
    id        INTEGER PRIMARY KEY,
    firstName TEXT,
    lastName  TEXT,
    email     TEXT    UNIQUE
);

INSERT INTO contacts (
                         id,
                         firstName,
                         lastName,
                         email
                     )
                     VALUES (
                         3,
                         'Jon',
                         'Snow',
                         'jonsnow@thenightswatch.com'
                     );

INSERT INTO contacts (
                         id,
                         firstName,
                         lastName,
                         email
                     )
                     VALUES (
                         5,
                         'Buenaventura',
                         'Rodríguez Perez',
                         'buena@ull.edu.es'
                     );

INSERT INTO contacts (
                         id,
                         firstName,
                         lastName,
                         email
                     )
                     VALUES (
                         7,
                         'Aegon',
                         'Veranos Largos',
                         'aegontargaryen@tronodehierro.es'
                     );

INSERT INTO contacts (
                         id,
                         firstName,
                         lastName,
                         email
                     )
                     VALUES (
                         8,
                         'Casiano',
                         'Rodriguez Leon',
                         'casiano.rodriguez.leon@gmail.com'
                     );

INSERT INTO contacts (
                         id,
                         firstName,
                         lastName,
                         email
                     )
                     VALUES (
                         13,
                         'Casiano',
                         'Rodriguez Leon',
                         'casiano@ull.es'
                     );

INSERT INTO contacts (
                         id,
                         firstName,
                         lastName,
                         email
                     )
                     VALUES (
                         14,
                         'Fulanito',
                         'Perez',
                         'mallorca@ull.es'
                     );

INSERT INTO contacts (
                         id,
                         firstName,
                         lastName,
                         email
                     )
                     VALUES (
                         15,
                         'Maria',
                         'Magdalena',
                         'maria@elcielo.com'
                     );


COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
