import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";

const EpisodeSelect = ({
  data,
  setEpisodeName,
  episodeName,
  setSearchParams,
}) => {
  const handleChange = (event) => {
    setEpisodeName(event.target.value);
    setSearchParams({ ep: event.target.value.id });
  };

  return (
    <>
      <FormControl
        sx={{
          m: 1,
          width: {
            xs: "300px",
            sm: "320px",
            md: "350px",
            lg: "380px",
            xl: "400px",
          },
        }}
      >
        <Typography textAlign={"center"} fontSize={"24px"}>
          Select episode
        </Typography>
        <Select
          multiple={false}
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={episodeName}
          onChange={handleChange}
        >
          {data?.episodes?.results.map((item, index) => (
            <MenuItem key={index} value={item}>
              EP: {item.id} - {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default EpisodeSelect;
