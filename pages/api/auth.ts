import { ValidationError } from 'yup';

import ApiError from '../../src/exceptions/api.error';
import login from '../../src/services/auth/auth.service';
import LoginSchema from '../../src/validations/LoginSchema';

import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  email: string;
  password: string;
};

type Error = { message: string };
type Token = { token: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error | Token>,
) {
  const { email, password } = req.body;
  try {
    const result = await LoginSchema.validate({ email, password });
    const token = login(result.email, result.password);
    return res.status(200).json({ token });
  } catch (error) {
    if (error instanceof ApiError) {
      return res.status(error.getStatusCode()).json(error.getJsonResponse());
    }
    if (error instanceof ValidationError) {
      return res.status(400).json({ message: error.message });
    }

    return res.status(500).json({ message: 'Something went wrong. please try again later!!!' });
  }
}
