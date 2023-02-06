import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query getAllCharacters(
    $page: Int!
    $name: String
    $status: String
    $species: String
    $gender: String
    $type: String
  ) {
    characters(
      page: $page
      filter: {
        name: $name
        status: $status
        species: $species
        gender: $gender
        type: $type
      }
    ) {
      results {
        id
        type
        gender
        species
        status
        name
        image

        location {
          name
        }
      }

      info {
        pages
      }
    }
  }
`;

export const useCharacters = (page, name, status, species, gender, type) => {
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: {
      page,
      name,
      status,
      species,
      gender,
      type,
    },
  });

  return {
    loading,
    error,
    data,
  };
};
