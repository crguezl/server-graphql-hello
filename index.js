const express = require("express");
const cors = require("cors");
const {
  createContactTable,
  getById,
  getAll,
  insert,
  updateContacts,
  deleteContact,
} = require("./model");
const ExpressGraphQL = require("express-graphql");
const graphql = require("graphql");

const app = express();

createContactTable();

const ContactType = new graphql.GraphQLObjectType({
  name: "Contact",
  fields: {
    id: { type: graphql.GraphQLID },
    firstName: { type: graphql.GraphQLString },
    lastName: { type: graphql.GraphQLString },
    email: { type: graphql.GraphQLString },
  },
});
var queryType = new graphql.GraphQLObjectType({
  name: "Query",
  fields: {
    contacts: {
      type: graphql.GraphQLList(ContactType),
      resolve: (root, args, context, info) => getAll(),
    },
    contact: {
      type: ContactType,
      args: {
        id: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLID),
        },
      },
      resolve: (root, { id }, context, info) => getById(id),
    },
  },
});

var mutationType = new graphql.GraphQLObjectType({
  name: "Mutation",
  fields: {
    createContact: {
      type: ContactType,
      args: {
        firstName: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLString),
        },
        lastName: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLString),
        },
        email: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLString),
        },
      },
      resolve: (root, { firstName, lastName, email }) =>
        insert({ firstName, lastName, email }),
    },
    updateContact: {
      type: graphql.GraphQLString,
      args: {
        id: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLID),
        },
        firstName: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLString),
        },
        lastName: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLString),
        },
        email: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLString),
        },
      },
      resolve: (root, { id, firstName, lastName, email }) => updateContacts({ id, firstName, lastName, email }),
    },
    deleteContact: {
      type: graphql.GraphQLString,
      args: {
        id: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLID),
        },
      },
      resolve: (root, { id }) => deleteContact({ id }),
    },
  },
});

const schema = new graphql.GraphQLSchema({
  query: queryType,
  mutation: mutationType,
});

app.use(cors());
app.use("/graphql", ExpressGraphQL({ schema: schema, graphiql: true }));

app.listen(4000, () => {
  console.log("GraphQL server running at http://localhost:4000.");
});
