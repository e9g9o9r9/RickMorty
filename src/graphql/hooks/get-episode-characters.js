import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

export const GET_EPISODES_CHARACTERS = gql`
  query getCharactersById($id: ID!) {
    episode(id: $id) {
      characters {
        name
        image
      }

      name
      id
    }
  }
`;

export const useCharactersEpisodes = (id) => {
  const { loading, error, data } = useQuery(GET_EPISODES_CHARACTERS, {
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
