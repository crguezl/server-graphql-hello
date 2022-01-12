# Node Express Graphql API

Node & Express GraphQL API Example

## Sqlite3 Notes

```
✗ brew search sqlite
==> Formulae
sqlite ✔                           sqlite-analyzer                    sqlite-utils                       sqliteodbc                         rqlite

==> Casks
db-browser-for-sqlite                                      sqlitemanager                                              homebrew/cask-versions/db-browser-for-sqlite-nightly
mesasqlite                                                 sqlitestudio
navicat-for-sqlite                                         sqlpro-for-sqlite

 ✗ brew install --cask sqlitemanager
➜  server git:(master) ✗ brew uninstall --cask sqlitemanager
➜  server git:(master) ✗ brew install --cask sqlitestudio
==> Moving App 'SQLiteStudio.app' to '/Applications/SQLiteStudio.app'
➜  server git:(master) ✗ open ./my.db
```

* See [pawelsalawa/sqlitestudio](https://github.com/pawelsalawa/sqlitestudio) and [wiki](https://github.com/pawelsalawa/sqlitestudio/wiki)
* The free version of sqlitemanager is quite limited. Not recommended. Using sqlitestudio instead


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

mutation create_jon {
    createContact(firstName: "Jon", lastName: "Snow", email: "jonsnow@thenightswatch.com") {
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
    id: 1, 
    firstName: "Aegon", 
    lastName: "Targaryen", 
    email: "aegontargaryen@tronodehierro.com")
}

mutation delete {
    deleteContact(id: 1)
}
```

## References

* [Build a GraphQL API with Node](https://blog.jscrambler.com/build-a-graphql-api-with-node/) By Ahmed Bouchefra
* [Building a CRUD App with Vue and GraphQL](https://blog.jscrambler.com/building-a-crud-app-with-vue-and-graphql/) By Ahmed Bouchefra