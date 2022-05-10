// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../data.json";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const find = data.find((item) => item.id.toString() === id);
  res.status(200).json({ find });
}
