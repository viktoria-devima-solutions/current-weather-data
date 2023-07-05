import { useState } from "react";
import debounce from "../../utils/debounce.util";
const useDebouncedTextField = (setDebouncedSearch) => {
  const [search, setSearch] = useState("");
  const onSearchChange = (e) => {
    setSearch(e.target.value);
    const debouncedFunc = debounce((e) => {
      setDebouncedSearch(e.target.value);
    }, 700);
    debouncedFunc(e);
  };
  return { search, onSearchChange };
};
export default useDebouncedTextField;
