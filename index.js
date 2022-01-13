const express = require("express");
const cors = require("cors");
const {
  database,
  createContactTable,
  getContact,
  getContacts,
  createContact,
  updateContact,
  deleteContact,
} = require("./model");
const { graphqlHTTP } = require("express-graphql")
const graphql = require("graphql");
const buildSchema = graphql.buildSchema;

createContactTable();

contactSchemaStr = `
  type Contact {
      id: ID!
      firstName: String
      lastName: String
      email: String!
  }

  type Query {
	"""
	To get all contacts
	"""
	contacts: [ Contact ]
	contact(id: ID!): Contact
  }

  type Mutation {
    createContact(firstName: String, lastName: String, email: String!): Contact

	"""
	To modify the contact
	"""
    updateContact(firstName: String, lastName: String, email: String!): Contact

    deleteContact(id: ID!): Contact
  }
`;
const contactSchema = buildSchema(contactSchemaStr)
const root = {
    contacts: getContacts,
    contact: getContact,
    createContact: createContact,
    updateContact: updateContact,
    deleteContact: deleteContact,
}

const app = express();
app.use(cors());

app.use(
    '/graphql',
    graphqlHTTP((request, response, next) => ({
      schema: contactSchema,
      rootValue: root,
      graphiql: true,
      context: { database: database, req: request, res: response, next: next }
    })),
  );

const port = process.argv[2] || 4000;

app.listen(port, () => {
  console.log(`Graphiql at http://localhost:${port}/graphql.`);
});
