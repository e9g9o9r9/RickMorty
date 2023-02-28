import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box/Box";
import Pagination from "@mui/material/Pagination";
import { useCharacters } from "src/graphql/hooks/get-characters";
import NativeSelectDemo from "src/components/UI/NativeSelectDemo/NativeSelectDemo";
import CircularIndeterminate from "src/components/UI/CircularInder/CircularInder";
import Card from "src/components/Card/Card";
import Error from "src/components/Error/Error";
import NoResults from "src/components/NoResults/NoResults";
import { SearchWrapper, SelectsWrapper, CharactersWrapper } from "./style";

const Characters = () => {
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

  useEffect(() => {
    if (searchParams.get("page") === null) {
      searchParams.set("page", 1);
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams]);

  const params = [];

  const getPage = parseInt(searchParams.get("page"));

  searchParams.forEach((value, key) => {
    params[key] = value;
  });

  const { loading, error, data } = useCharacters(
    getPage,
    params.name,
    params.status,
    params.species,
    params.gender,
    params.type
  );

  const filterNames = [
    {
      name: "Status",
      items: ["Alive", "Dead", "Unknown"],
      value: filters.status,
    },

    {
      name: "Species",
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
      name: "Gender",
      items: ["Male", "Female", "Genderless", "Unknown"],
      value: filters.gender,
    },

    {
      name: "Type",
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
    searchParams.set("name", searchInput);
    setSearchParams(searchParams);
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
    searchParams.set("status", filters.status);
    searchParams.set("species", filters.species);
    searchParams.set("gender", filters.gender);
    searchParams.set("type", filters.type);
    setSearchParams(searchParams);
    setIsError(false);
  };

  const handlePage = (event, value) => {
    searchParams.set("page", value);
    setSearchParams(searchParams);
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
            value={params.name}
            InputLabelProps={{ shrink: true }}
            onChange={(event) => setSearchInput(event.currentTarget.value)}
            sx={{
              marginRight: "20px",
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

      {data?.characters?.results.length !== 0 ? (
        <>
          <Card data={data} />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Pagination
              count={data?.characters?.info?.pages}
              defaultPage={1}
              page={getPage}
              onChange={handlePage}
              color="primary"
            />
          </Box>
        </>
      ) : (
        <NoResults />
      )}
    </CharactersWrapper>
  );
};

export default Characters;
