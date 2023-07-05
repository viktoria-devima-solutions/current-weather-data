import { useState, useEffect } from "react";
const useErrorSnackbar = (error) => {
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(!!error), [error]);
  const closeSnackbar = () => setOpen(false);
  return { open, closeSnackbar };
};
export default useErrorSnackbar;
