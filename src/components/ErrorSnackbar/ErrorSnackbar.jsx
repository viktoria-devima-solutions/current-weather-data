import { Snackbar, Alert } from "@mui/material";
import styles from "./styles";
import useErrorSnackbar from "./useErrorSnackbar";
const ErrorSnackbar = ({ error }) => {
  const { open, closeSnackbar } = useErrorSnackbar(error);
  return (
    <Snackbar open={open} onClose={closeSnackbar}>
      <Alert onClose={closeSnackbar} severity="error" sx={styles.alert}>
        {error?.response?.data.message}
      </Alert>
    </Snackbar>
  );
};
export default ErrorSnackbar;
