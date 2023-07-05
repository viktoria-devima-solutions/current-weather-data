import { TextField } from "@mui/material";
import useDebouncedTextField from "./useDebouncedTextField";
import { IDebouncedTextFieldProps } from "./types";
const DebouncedTextField = ({
  setDebouncedSearch,
  debouncedDelay = 700,
}: IDebouncedTextFieldProps) => {
  const { search, onSearchChange } = useDebouncedTextField({
    setDebouncedSearch,
    debouncedDelay,
  });
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
