
# Node Express Graphql Server with Vue Client

Lab to learn how to build both sides: a GraphQL Server using a SQL DataBase and a Vue.js Client 


## Super repo for this lab

* <https://github.com/crguezl/fullstack-graphql-vue>

## Read

* [Build a GraphQL API with Node](https://blog.jscrambler.com/build-a-graphql-api-with-node/) By Ahmed Bouchefra
* [Building a CRUD App with Vue and GraphQL](https://blog.jscrambler.com/building-a-crud-app-with-vue-and-graphql/) By Ahmed Bouchefra

## Solution

For the solution see branch [solution](https://github.com/crguezl/server-graphql-hello/tree/solution) in this repo [crguezl/server-graphql-hello](https://github.com/crguezl/server-graphql-hello)

## Super repo

* <https://github.com/crguezl/fullstack-graphql-vue>

## Technologies Used

```
➜  server git:(main) ✗ jq '.dependencies'  package.json
{
  "cors": "latest",
  "express": "latest",
  "express-graphql": "latest",
  "graphql": "latest",
  "morgan": "latest",
  "sequelize": "^6.13.0",
  "sqlite3": "latest"
}
```

## Sequelize

I have written a minimal intro to sequelize in [crguezl/learning-sequelize](https://github.com/crguezl/learning-sequelize)

* [Getting Sarted](https://sequelize.org/v7/manual/getting-started.html)
* [Geters and Setters](https://sequelize.org/master/manual/getters-setters-virtuals.html)
* [API Reference](https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html)
* [Updating an Instance](https://sequelize.org/master/manual/model-instances.html#updating-an-instance)
* [Deleting an Instance](https://sequelize.org/master/manual/model-instances.html#deleting-an-instance)

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

See the queries in file [requests-examples.gql](requests-examples.gql)

## Heroku 

* [Deploying Node.js Apps on Heroku](https://devcenter.heroku.com/articles/deploying-nodejs)

## References

* [Build a GraphQL API with Node](https://blog.jscrambler.com/build-a-graphql-api-with-node/) By Ahmed Bouchefra
* [Building a CRUD App with Vue and GraphQL](https://blog.jscrambler.com/building-a-crud-app-with-vue-and-graphql/) By Ahmed Bouchefra
* [A similar example is in crguezl/message-board-fullstack](https://github.com/crguezl/message-board-fullstack) it is based in the "[Build a full stack message board with Node/Express/MongoDB/Vue.js/Bootstrap](https://youtu.be/2xIoWm08SBM)" YouTube video by Coding Garden (2h. 15 min. approx.). It includes a deploy in Heroku
* Another similar example including authentication is the one base on freeCodeCamp.org video [Full Stack Web App in Vue.js & Express.js](https://ull-mii-sytws-2122.github.io/tema3-web/full-stack-web-app-using-vuejs-and-express.html)