import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  id: number;
  email: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log(req);
}
