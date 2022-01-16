const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const {
  sequelize,
  Contact
} = require("./model");
const { graphqlHTTP } = require("express-graphql");
const graphql = require("graphql");
const buildSchema = graphql.buildSchema;

(async () => {
  await sequelize.sync();
  
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
    updateContact(id: ID!, firstName: String, lastName: String, email: String): Contact

    deleteContact(id: ID!): String
  }
`;
  const contactSchema = buildSchema(contactSchemaStr);

  const root = {
    contacts: () => Contact.findAll(),
    contact: ({id}) => Contact.findOne({where: {id: id}}),

    createContact: ({ firstName, lastName, email }) => Contact.create({ email: email, firstName: firstName, lastName: lastName}),
    updateContact: async ({ id, firstName, lastName, email }) => {
      let c = await Contact.findOne({where: {id: id}});
      await c.update({ firstName, lastName, email });
      return c;
    },
    deleteContact: ({ id }) => Contact.Destroy({ where: { id: id } }),
  };

  const app = express();
  app.use(morgan("combined")); // Standard Apache combined log output.

  app.use(cors());

  
  app.use(
    "/graphql",
    graphqlHTTP((request, response, next) => ({
      schema: contactSchema,
      rootValue: root,
      graphiql: true,
      context: { Contact: Contact, req: request, res: response, next: next },
    }))
  );

  const port = process.argv[2] || 4000;

  app.listen(port, () => {
    console.log(`Graphiql at http://localhost:${port}/graphql.`);
  });

})();
