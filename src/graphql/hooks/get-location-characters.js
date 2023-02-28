import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

export const GET_CHARACTERS_LOCATIONS = gql`
  query getCharactersById($id: ID!) {
    location(id: $id) {
      residents {
        image
        name
        id
      }

      name
      id
    }
  }
`;

export const useCharactersLocations = (id) => {
  const { loading, error, data } = useQuery(GET_CHARACTERS_LOCATIONS, {
    variables: {
      id,
    },
  });

  return {
    data,
    error,
    loading,
  };
};
