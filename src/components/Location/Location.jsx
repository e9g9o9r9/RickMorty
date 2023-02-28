import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { useLocations } from "src/graphql/hooks/get-locations";
import { useCharactersLocations } from "src/graphql/hooks/get-location-characters";
import LocationSelect from "src/components/UI/LocationSelect/LocationSelect";
import CircularIndeterminate from "src/components/UI/CircularInder/CircularInder";
import NoResults from "src/components/NoResults/NoResults";
import { LocationsWrapper } from "./style";

const Location = () => {
  const getLocations = useLocations();
  const [searchParams, setSearchParams] = useSearchParams();
  const showLocation = searchParams.get("loc");
  const getCharactersByLocation = useCharactersLocations(showLocation);
  const [locationName, setLocationName] = useState("");

  if (getLocations.loading || getCharactersByLocation.loading) {
    return <CircularIndeterminate />;
  }

  return (
    <>
      <LocationsWrapper>
        <LocationSelect
          data={getLocations.data}
          setSearchParams={setSearchParams}
          showLocation={showLocation}
          locationName={locationName}
          setLocationName={setLocationName}
        />
      </LocationsWrapper>
      <Typography fontSize={"24px"} textAlign={"center"}>
        Residents of this location:
      </Typography>
      {locationName !== "" ? (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xl: "1fr 1fr 1fr 1fr",
              lg: "1fr 1fr 1fr",
              md: "1fr 1fr",
              sm: "0.5fr",
            },
            justifyContent: "center",
          }}
        >
          {getCharactersByLocation?.data?.location?.residents.map((item) => {
            return (
              <Link
                to={`/home/characters/${item.id}`}
                style={{ textDecoration: "none" }}
                key={item.id}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "24px",
                  }}
                  key={item.name}
                >
                  <CardMedia src={item.image} component="img" />
                  <Typography fontSize={"24px"} color="black">
                    {item.name}
                  </Typography>
                </Box>
              </Link>
            );
          })}
        </Box>
      ) : (
        <NoResults />
      )}
    </>
  );
};

export default Location;
