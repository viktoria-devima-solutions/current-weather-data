import { useState } from "react";
import debounce from "../../utils/debounce.util";
const useDebouncedTextField = (setDebouncedSearch, debouncedDelay) => {
  const [search, setSearch] = useState("");

  const debouncedFunc = debounce((e) => {
    setDebouncedSearch(e.target.value);
  }, debouncedDelay);

  const onSearchChange = (e) => {
    setSearch(e.target.value);
    debouncedFunc(e);
  };

  return { search, onSearchChange };
};
export default useDebouncedTextField;
