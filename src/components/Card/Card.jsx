import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box/Box";
import ActionAreaCard from "src/components/UI/ActionAreaCard/ActionAreaCard";

const Card = ({ data }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      {data?.characters?.results.map((character) => {
        return (
          <Link
            to={`/home/characters/${character.id}`}
            style={{ textDecoration: "none" }}
            key={character.id}
          >
            <ActionAreaCard character={character} />
          </Link>
        );
      })}
    </Box>
  );
};

export default Card;
