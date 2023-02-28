import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { useEpisodes } from "src/graphql/hooks/get-episodes";
import { useCharactersEpisodes } from "src/graphql/hooks/get-episode-characters";
import EpisodeSelect from "src/components/UI/EpisodeSelect/EpisodeSelect";
import CircularIndeterminate from "src/components/UI/CircularInder/CircularInder";
import NoResults from "src/components/NoResults/NoResults";
import { SelectsWrapper } from "./style";

const Episode = () => {
  const [episodeName, setEpisodeName] = useState("");
  const getEpisodes = useEpisodes();
  const [searchParams, setSearchParams] = useSearchParams();
  const showEpisode = searchParams.get("ep");
  const getCharactersByEpisode = useCharactersEpisodes(showEpisode);

  if (getEpisodes.loading || getCharactersByEpisode.loading) {
    return <CircularIndeterminate />;
  }

  return (
    <>
      <SelectsWrapper>
        <EpisodeSelect
          setSearchParams={setSearchParams}
          data={getEpisodes.data}
          setEpisodeName={setEpisodeName}
          episodeName={episodeName}
        />
      </SelectsWrapper>
      <Typography fontSize={"24px"} textAlign={"center"}>
        Characters in this episode:
      </Typography>
      {episodeName !== "" ? (
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
          {getCharactersByEpisode?.data?.episode?.characters.map((item) => {
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
                  <Typography fontSize="24px" color="black">
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

export default Episode;
