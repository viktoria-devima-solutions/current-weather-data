import { TextField } from "@mui/material";
import useDebouncedTextField from "./useDebouncedTextField";

const DebouncedTextField = ({ setDebouncedSearch }) => {
  const { search, onSearchChange } = useDebouncedTextField(setDebouncedSearch);
  return (
    <TextField
      id="outlined-basic"
      label="Location"
      variant="outlined"
      value={search}
      onChange={onSearchChange}
    />
  );
};
export default DebouncedTextField;
