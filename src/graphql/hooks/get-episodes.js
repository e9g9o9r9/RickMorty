import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

export const GET_EPISODES = gql`
  query getEpisodes {
    episodes {
      results {
        name
        id
      }
    }
  }
`;

export const useEpisodes = () => {
  const { loading, error, data } = useQuery(GET_EPISODES);
  
  return {
    data,
    error,
    loading,
  };
};
