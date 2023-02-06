import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

export const GET_LOCATIONS = gql`
  query getLocations {
    locations {
      results {
        name
        id
      }
    }
  }
`;

export const useLocations = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  return {
    data,
    error,
    loading,
  };
};
