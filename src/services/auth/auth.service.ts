import jwt from 'jsonwebtoken';

import { users } from '../../constants/api.constant';
import ApiError from '../../exceptions/api.error';

const login = (email: string, password: string) => {
  const user = users.find((element) => element.email === email && element.password === password);
  if (!user) {
    throw new ApiError("User with these email or password doesn't exist");
  }
  const token = jwt.sign({ id: user.id, email: user.email }, process.env.PRIVATE_KEY as string, {
    expiresIn: process.env.TOKEN_EXPIRES_IN,
  });
  return token;
};
export default login;
