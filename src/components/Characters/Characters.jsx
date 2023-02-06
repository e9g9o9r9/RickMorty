import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box/Box";
import Pagination from "@mui/material/Pagination";
import { useCharacters } from "src/graphql/hooks/get-characters";
import NativeSelectDemo from "src/components/UI/NativeSelectDemo/NativeSelectDemo";
import CircularIndeterminate from "src/components/UI/CircularInder/CircularInder";
import Card from "src/components/Card/Card";
import { SearchWrapper, SelectsWrapper, CharactersWrapper } from "./style";
import Error from "src/components/Error/Error";

const Characters = () => {
  const [page, setPage] = useState(1);
  const [isError, setIsError] = useState(false);
  const [textError, setTextError] = useState("");
  const [filters, setFilters] = useState({
    status: "",
    species: "",
    gender: "",
    type: "",
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState("");

  const params = [];

  searchParams.forEach((value, key) => {
    params[key] = value;
  });

  const { loading, error, data } = useCharacters(
    page,
    params.name,
    params.status,
    params.species,
    params.gender,
    params.type
  );

  const filterNames = [
    {
      name: "status",
      items: ["Alive", "Dead", "Unknown"],
      value: filters.status,
    },

    {
      name: "species",
      items: [
        "Human",
        "Alien",
        "Humanoid",
        "Poppybutthole",
        "Mythological",
        "Unknown",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg",
        "Planet",
      ],
      value: filters.species,
    },

    {
      name: "gender",
      items: ["Male", "Female", "Genderless", "Unknown"],
      value: filters.gender,
    },

    {
      name: "type",
      items: [
        "Genetic experiment",
        "Parasite",
        "Human with antennae",
        "Fish-Person",
        "Cromulon",
        "Mytholog",
        "Superhuman",
        "-",
      ],
      value: filters.type,
    },
  ];

  if (loading) {
    return <CircularIndeterminate />;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  const handleChange = (value, name) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const searchCharacters = () => {
    if (searchInput === "" || null) {
      setIsError(true);
      setTextError("Поле поиска должно быть заполнено");
      return;
    }
    setIsError(false);
    setSearchParams({ name: searchInput });
    setPage(1);
  };

  const filterCharacters = () => {
    if (
      filters.status === "" &&
      filters.species === "" &&
      filters.gender === "" &&
      filters.type === ""
    ) {
      setIsError(true);
      setTextError("Хотя бы одно поле фильтрации должно быть заполнено");

      return;
    }

    setSearchParams({
      status: filters.status,
      species: filters.species,
      gender: filters.gender,
      type: filters.type,
    });
    setPage(1);
    setIsError(false);
  };

  return (
    <CharactersWrapper>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "center",
            xl: "flex-end",
          },

          flexDirection: {
            xs: "column",
            sm: "column",
            md: "column",
            lg: "column",
            xl: "row",
          },
        }}
      >
        <SearchWrapper>
          <TextField
            id="standard-search"
            label="Search character"
            type="search"
            variant="standard"
            value={searchInput}
            onChange={(event) => setSearchInput(event.currentTarget.value)}
            sx={{
              width: {
                xs: "250px",
                sm: "280px",
                md: "450px",
                lg: "480px",
                xl: "500px",
              },
            }}
          />
          <Button variant="contained" onClick={searchCharacters}>
            Search
          </Button>
        </SearchWrapper>

        <SelectsWrapper>
          {filterNames.map((name, index) => {
            return (
              <NativeSelectDemo
                name={name}
                handleChange={handleChange}
                index={index}
                key={index}
              />
            );
          })}
          <Button
            variant="contained"
            onClick={filterCharacters}
            sx={{
              marginTop: {
                xs: "20px",
                sm: "20px",
                md: "20px",
                lg: "20px",
                xl: "0",
              },
            }}
          >
            Aplly filters
          </Button>
        </SelectsWrapper>
      </Box>
      {isError && (
        <Error
          textError={textError}
          isError={isError}
          setIsError={setIsError}
        />
      )}
      <Card data={data} />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          count={data?.characters?.info?.pages}
          page={page}
          onChange={(event, value) => setPage(value)}
          color="primary"
        />
      </Box>
    </CharactersWrapper>
  );
};

export default Characters;
