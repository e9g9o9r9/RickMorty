import React from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useCharacter } from "src/graphql/hooks/get-character";
import CircularIndeterminate from "src/components/UI/CircularInder/CircularInder";
import { CharacterWrapper } from "./style";

const Character = () => {
  const { id } = useParams();
  const { loading, error, data } = useCharacter(id);

  if (loading) {
    return <CircularIndeterminate />;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <CharacterWrapper>
      <Card
        sx={{
          height: "100%",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={data.character.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="h6" component="p">
              Name - {data.character.name}
            </Typography>
            <Typography variant="h6" component="p">
              Status - {data.character.status}
            </Typography>
            <Typography variant="h6" component="p">
              Species - {data.character.species}
            </Typography>
            <Typography variant="h6" component="p">
              Location - {data.character.location.name}
            </Typography>
            <Typography variant="h6" component="p">
              Gender - {data.character.gender}
            </Typography>
            <Typography variant="h6" component="p">
              Type - {data.character.type}
            </Typography>
            <Typography variant="h6" component="p">
              Episodes:
              {data.character.episode.map((ep) => {
                return (
                  <Typography component="p" key={ep.name}>
                    {ep.name} - {ep.episode}
                  </Typography>
                );
              })}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </CharacterWrapper>
  );
};

export default Character;
