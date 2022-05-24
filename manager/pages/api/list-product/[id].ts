// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../../dataprouct.json"
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const itemPerPage = 5;
  const currenPage = Number(id);
  const indexOfLastItem = currenPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItem = data.slice(indexOfFirstItem, indexOfLastItem);
  res.status(200).json({ data: currentItem, status: 200 });
}
