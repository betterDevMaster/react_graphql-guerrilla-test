// ApolloClient.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphql.contentful.com/content/v1/spaces/vyvd54sdd5jm',
  headers: {
    Authorization: 'Bearer TVMyOuOqkY3kNh_wDrlce2zwju8TDkI-96twtPci8fk',
  },
  cache: new InMemoryCache(),
});

export default client;
