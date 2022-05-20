// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../../dataprouct.json";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const currenPage = Number(id);
  const sumProduct = data.length;
  const perPage = 5;
  const sumPage = sumProduct / perPage;
  if (currenPage === 1 && currenPage < sumPage) {
    const index = 0;
    const nextpage = index + perPage;
    const find = data.slice(index, nextpage);
    res.status(200).json({ data: find, status: 200 });
  } else if (currenPage === 2 && currenPage < sumPage) {
    const index = 5;
    const nextpage = index + perPage;
    const find = data.slice(index, nextpage);
    res.status(200).json({ data: find, status: 200 });
  } else if (currenPage === 3 && currenPage < sumPage) {
    const index = 10;
    const nextpage = index + perPage;
    const find = data.slice(index, nextpage);
    res.status(200).json({ data: find, status: 200 });
  } else if (currenPage === 4) {
    const index = 15;
    const nextpage = index + perPage;
    const find = data.slice(index, nextpage);
    res.status(200).json({ data: find, status: 200 });
  } else if (currenPage > sumPage) {
    res.status(200).json({ data: "find", status: 404 });
  }
}
