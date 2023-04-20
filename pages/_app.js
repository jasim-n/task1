import LayoutPage from '../Components/LayoutPAge';
import '../styles/globals.css'

// import client from "../apolloClient";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
const client = new ApolloClient({
  uri: 'https://profound-marmot-29.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
});
export default function App({ Component, pageProps }) {

  return  <ApolloProvider client={client}>
    <LayoutPage>
   <Component {...pageProps} />
   </LayoutPage></ApolloProvider>
}
