import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

const NativeSelectDemo = ({ name, handleChange }) => {
  return (
    <Box sx={{ minWidth: 160, marginRight: "20px" }}>
      <FormControl fullWidth>
        <InputLabel
          variant="standard"
          htmlFor="uncontrolled-native"
          shrink={true}
        >
          {name.name}
        </InputLabel>
        <NativeSelect
          multiple={false}
          value={name.value}
          name={`${name.name}`.toLowerCase()}
          onChange={(event) =>
            handleChange(event.target.value, event.target.name)
          }
        >
          <option value="">none</option>
          {name.items.map((item, index) => {
            return (
              <option value={item} key={index}>
                {item}
              </option>
            );
          })}
        </NativeSelect>
      </FormControl>
    </Box>
  );
};

export default NativeSelectDemo;
