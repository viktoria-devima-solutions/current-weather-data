import { ChangeEvent, useState } from "react";
import debounce from "../../utils/debounce.util";
import { IDebouncedTextFieldProps } from "./types";
const useDebouncedTextField = ({
  setDebouncedSearch,
  debouncedDelay = 700,
}: IDebouncedTextFieldProps) => {
  const [search, setSearch] = useState("");

  const debouncedFunc = debounce((e: ChangeEvent<HTMLInputElement>) => {
    setDebouncedSearch(e.target.value);
  }, debouncedDelay);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    debouncedFunc(e);
  };

  return { search, onSearchChange };
};
export default useDebouncedTextField;
