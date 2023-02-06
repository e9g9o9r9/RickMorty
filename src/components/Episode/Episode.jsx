import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { useEpisodes } from "src/graphql/hooks/get-episodes";
import { useCharactersEpisodes } from "src/graphql/hooks/get-episode-characters";
import EpisodeSelect from "src/components/UI/MultipleSelect/EpisodeSelect";
import CircularIndeterminate from "src/components/UI/CircularInder/CircularInder";
import { SelectsWrapper } from "./style";

const Episode = () => {
  const [episodeName, setEpisodeName] = useState("");
  const getEpisodes = useEpisodes();
  const [searchParams, setSearchParams] = useSearchParams();
  const showLocation = searchParams.get("ep");
  const getCharactersByEpisode = useCharactersEpisodes(showLocation);

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
      {getCharactersByEpisode?.data?.episode?.characters.map((item) => {
        return (
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
            <CardMedia
              src={item.image}
              component="img"
              sx={{
                width: "300px",
                height: "300px",
              }}
            />
            <Typography fontSize={"24px"}>{item.name}</Typography>
          </Box>
        );
      })}
    </>
  );
};

export default Episode;
