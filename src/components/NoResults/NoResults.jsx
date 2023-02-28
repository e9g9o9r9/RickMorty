import { Box, CardMedia, Typography } from "@mui/material";

const NoResults = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "50px"
        
      }}
    >
      <CardMedia
        component="img"
        sx={{
          maxWidth: "300px",
          height: "300px",
        }}
        image={
          "https://play-lh.googleusercontent.com/yfiIOdk6OF5T_ekvwQKSTjnP0ZQwGDbqXUQp6oBgqmFSX86xAfBEaEG3xCOBCtMjCA"
        }
      />
      <Typography fontSize="36px">No Results...</Typography>
    </Box>
  );
};

export default NoResults;
