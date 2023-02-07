import { Link } from "react-router-dom";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import { stackNames } from "src/constants";

const ProjectInfo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          maxWidth: "1000px",
          height: "400px",
        }}
        image={
          "https://w0.peakpx.com/wallpaper/717/162/HD-wallpaper-rick-and-morty-netflix-2020-rick-and-morty-season-4-rick-and-morty-tv-shows-deviantart.jpg"
        }
        alt="img"
      />
      <Box
        sx={{
          marginTop: "60px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
          }}
        >
          Project Stack:
        </Typography>
        {stackNames.map((element, index) => {
          return (
            <Typography variant="h5" textAlign="center" key={index}>
              {element}
            </Typography>
          );
        })}
        <Button
          component={Link}
          to="/home/characters"
          sx={{
            marginTop: "20px",
            width: "100%",
            backgroundColor: "#FFD700",
            color: "black",
            fontSize: "24px",
          }}
        >
          Start
        </Button>
      </Box>
    </Box>
  );
};

export default ProjectInfo;
