// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../dataprouct.json";
interface product {
  id?: number;
  image?: string;
  title?: string;
  name?: string;
  price: number;
}
type Data = {
  data: product[];
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ data: data });
}
  