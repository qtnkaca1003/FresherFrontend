// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../../dataprouct.json";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const perpage = Number(id);
  const index = 0;

  const find = data.slice(index, index + perpage);
  res.status(200).json({ find });
}
