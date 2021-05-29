const { gql } = require('apollo-server');

export default gql`
  type Query {
    hello: String!
  }
`;
