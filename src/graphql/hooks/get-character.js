import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

export const GET_CHARACTER = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      id
      type
      gender
      species
      status
      name
      image
      
      episode {
        episode
        name
      }

      location {
        name
      }
    }
  }
`;

export const useCharacter = (id) => {
  const { loading, error, data } = useQuery(GET_CHARACTER, {
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
