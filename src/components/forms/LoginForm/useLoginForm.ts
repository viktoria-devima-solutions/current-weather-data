import { useCallback, useState } from 'react';

import loginService from '../../../services/login/login.service';

import type { FormikHelpers } from 'formik';

const useLoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = useCallback(
    (values: typeof initialValues, helpers: FormikHelpers<typeof initialValues>) => {
      setError(null);
      loginService.login(values.email, values.password).catch((e) => {
        setError(e.response.data.message);
      });
    },
    [],
  );
  return { initialValues, handleSubmit, error };
};
export default useLoginForm;
