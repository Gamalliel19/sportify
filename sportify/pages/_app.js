import '@/styles/globals.css';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://udlvnabfmielzamilnci.supabase.co/graphql',
  }),
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
