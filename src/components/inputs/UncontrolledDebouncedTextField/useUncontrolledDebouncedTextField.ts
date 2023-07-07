import { useState, type ChangeEvent } from 'react';

const useUncontrolledDebouncedTextField = () => {
  const [search, setSearch] = useState('');

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return { search, onSearchChange };
};

export default useUncontrolledDebouncedTextField;
