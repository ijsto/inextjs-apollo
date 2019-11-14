import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";
// import { API_URL } from '../config';

function createClient({ headers }) {
  return new ApolloClient({
    uri: "http://localhost:1337/graphql",
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: "include"
        },
        headers
      });
    }
  });
}

export default withApollo(createClient);
