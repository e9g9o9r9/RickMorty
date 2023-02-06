import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ActionAreaCard = ({ character }) => {
  return (
    <Card
      sx={{
        width: {
          sm: 300,
          xl: 345,
        },
        margin: "24px",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={character.image}
          alt="character"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {character.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {character.status} - {character.species}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {character.location.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ActionAreaCard;
