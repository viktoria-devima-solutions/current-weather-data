import { string, object } from 'yup';

const LoginSchema = object().shape({
  email: string().trim().email('Invalid email').required('No email provided.'),
  password: string().trim().required('No password provided.'),
});
export default LoginSchema;
