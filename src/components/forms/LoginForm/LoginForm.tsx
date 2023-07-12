import { Box, Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Formik, Form } from 'formik';

import LoginSchema from '../../../validations/LoginSchema';
import ErrorSnackbar from '../../ErrorSnackbar/ErrorSnackbar';

import useLoginForm from './useLoginForm';

const LoginForm = () => {
  const { initialValues, handleSubmit, error } = useLoginForm();
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={LoginSchema}>
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <Form>
          <Box sx={{ width: 300, height: 300, justifyContent: 'center' }}>
            <Typography variant="h3" component="div">
              Sign in
            </Typography>
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Email"
              value={values.email}
              error={!!errors.email && !!touched.email}
              helperText={errors?.email && touched.email ? errors.email : ' '}
            />
            <TextField
              name="password"
              label="Password"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Password"
              value={values.password}
              type="password"
              error={!!errors.password && !!touched.password}
              helperText={errors?.password && touched.password ? errors.password : ' '}
            />
            <Button variant="contained" type="submit" sx={{ width: '100%' }}>
              Login
            </Button>
          </Box>
          <ErrorSnackbar error={error} />
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
