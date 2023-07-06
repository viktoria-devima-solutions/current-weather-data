import { Snackbar, Alert } from '@mui/material';

import styles from './styles';
import useErrorSnackbar from './useErrorSnackbar';

import type { IErrorSnackbarProps } from './types';

const ErrorSnackbar = ({ error }: IErrorSnackbarProps) => {
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
