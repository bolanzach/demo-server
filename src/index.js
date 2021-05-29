import { ApolloServer } from 'apollo-server';
import { myFunction } from './package';
import SomeClass from './someClass';
import resolvers from './gql/resolvers';
import typeDefs from './gql/typeDefs';

(function () {
  const message = myFunction() ?? '';
  const obj = {
    name: 'zach',
  };

  const obj2 = { ...obj, message };
  const me = new SomeClass(obj2.name);

  console.log(obj2);
  console.log(me.sayHello());

  const server = new ApolloServer({ typeDefs, resolvers });

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
})();
