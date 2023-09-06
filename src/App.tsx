import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
import RoutesComponent from "./Routes";

const GET_EXAMPLE = gql`
  query MyQuery {
    example_table {
      id
      name
    }
  }
`;

function App() {

  const createApolloClient = () => {
    return new ApolloClient({
      link: new HttpLink({
        uri: "https://star-anteater-92.hasura.app/v1/graphql",
        headers: {
          "x-hasura-admin-secret":
            "QlB3Tz8YQaL48IgqfF0PpS9VvaFySp8eElu2i3EbLekAwNEQGvSa8IUT06Nuo3A1",
        },
      }),
      cache: new InMemoryCache(),
    });
  };

  const [client] = useState(createApolloClient());

  return (
    <ApolloProvider client={client}>
    <RoutesComponent/>
    </ApolloProvider>
  );
}

export default App;
