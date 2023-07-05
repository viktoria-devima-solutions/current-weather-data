import { Snackbar, Alert } from "@mui/material";
import styles from "./styles";
import useErrorSnackbar from "./useErrorSnackbar";
import { ErrorSnackbarProps } from "./types";
const ErrorSnackbar = ({ error }: ErrorSnackbarProps) => {
  const { open, closeSnackbar } = useErrorSnackbar(error);
  return (
    <Snackbar open={open} onClose={closeSnackbar}>
      <Alert onClose={closeSnackbar} severity="error" sx={styles.alert}>
        {error}
      </Alert>
    </Snackbar>
  );
};
export default ErrorSnackbar;
