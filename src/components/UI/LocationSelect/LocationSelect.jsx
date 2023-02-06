import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";

const LocationSelect = ({
  data,
  setSearchParams,
  setLocationName,
  locationName,
}) => {
  const handleChange = (event) => {
    setLocationName(event.target.value);
    setSearchParams({ loc: event.target.value.id });
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
          Select location
        </Typography>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={locationName}
          onChange={handleChange}
        >
          {data?.locations?.results.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default LocationSelect;
