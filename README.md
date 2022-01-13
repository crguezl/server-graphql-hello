# Node Express Graphql API

Node & Express GraphQL API Example

## Sqlite3 Notes

### Installation

```
✗ brew search sqlite
==> Formulae
sqlite ✔                           sqlite-analyzer                    sqlite-utils                       sqliteodbc                         rqlite

==> Casks
db-browser-for-sqlite                                      sqlitemanager                                              homebrew/cask-versions/db-browser-for-sqlite-nightly
mesasqlite                                                 sqlitestudio
navicat-for-sqlite                                         sqlpro-for-sqlite
```

### Repl

```
➜  server git:(master) ✗ sqlite3 my.db 
SQLite version 3.37.0 2021-11-27 14:13:22
Enter ".help" for usage hints.
sqlite> .schema
```
```sql
CREATE TABLE contacts (
        id integer PRIMARY KEY,
        firstName text,
        lastName text,
        email text UNIQUE);
```

### Sqlite Studio

```
 ✗ brew install --cask sqlitemanager
➜  server git:(master) ✗ brew uninstall --cask sqlitemanager
```
* The free version of sqlitemanager is quite limited. Not recommended. Using sqlitestudio instead

```
➜  server git:(master) ✗ brew install --cask sqlitestudio
==> Moving App 'SQLiteStudio.app' to '/Applications/SQLiteStudio.app'
➜  server git:(master) ✗ open ./my.db
```

* See [pawelsalawa/sqlitestudio](https://github.com/pawelsalawa/sqlitestudio) and [wiki](https://github.com/pawelsalawa/sqlitestudio/wiki)

### The npm module

* [mapbox/node-sqlite3](https://github.com/mapbox/node-sqlite3)


## Examples of GraphQL Queries 

One you have installed the dependencies and run `npm i`  and `npm start` you can make graphql queries and mutations visiting the 
graphql playground at <localhost:4000/graphql>

```gql 
query contacts {
  contacts {
    id
    firstName
    lastName
    email
  }
}

query contact {
  contact(id: 7) {
    id
    firstName
    lastName
    email
  }
}

mutation create_jon {
    createContact(firstName: "Jon", lastName: "Snow", email: "jonsnow@thenightswatch.com") {
        id,
        firstName,
        lastName,
        email
    }
}

mutation create_nuevo {
    createContact(firstName: "Juanita", lastName: "Xiu", email: "juanita@chuchu.com") {
        id,
        firstName,
        lastName,
        email
    }
}

mutation create_aegon {
    createContact(firstName: "Aegon", lastName: "Targaryen", email: "aegontargaryen@ironthrone.com") {
        id,
        firstName,
        lastName,
        email
    }
}

mutation update_aegon {
  updateContact(
    id: 7,
    firstName: "Aegon", 
    lastName: "Veranos Largos", 
    email: "aegontargaryen@tronodehierro.es") {
    id
    firstName
    lastName
    email
  }
}

mutation delete {
    deleteContact(id: 12)
}
```

## Heroku 

* [Deploying Node.js Apps on Heroku](https://devcenter.heroku.com/articles/deploying-nodejs)


## References

* [Build a GraphQL API with Node](https://blog.jscrambler.com/build-a-graphql-api-with-node/) By Ahmed Bouchefra
* [Building a CRUD App with Vue and GraphQL](https://blog.jscrambler.com/building-a-crud-app-with-vue-and-graphql/) By Ahmed Bouchefra