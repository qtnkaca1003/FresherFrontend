import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { IProduct } from "../../../types/interface";
const data = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
  },
  {
    id: 11,
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
  },
  {
    id: 12,
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
  },
  {
    id: 14,
    title:
      "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
  },
  {
    id: 16,
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
  },
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
  },
];
interface IPagination {
  itemPage: number;
  pageNumerLitmit: number;
  maxPageNumerLitmit: number;
  data: any;
  path: string;
}
const PaginProduct = (PaginProductProps: IPagination) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemPage, setItemPage] = useState<number>(PaginProductProps.itemPage);
  const [pageNumerLitmit, setpageNumerLitmit] = useState<number>(
    PaginProductProps.pageNumerLitmit
  );
  const [maxPageNumerLitmit, setmaxPageNumerLitmit] = useState<number>(
    PaginProductProps.maxPageNumerLitmit
  );
  const [minPageNumerLitmit, setminPageNumerLitmit] = useState<number>(0);

  const handelClick = (e: any) => {
    setCurrentPage(Number(e.target.id));
    router.push(`${PaginProductProps.path}` + Number(e.target.id));
  };
  // page number
  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemPage); i++) {
    pages.push(i);
  }
  const renderPageNumber = pages.map((number: number) => {
    if (number < maxPageNumerLitmit + 1 && number > minPageNumerLitmit) {
      return (
        <Button
          m={1}
          onClick={handelClick}
          id={number.toString()}
          className={currentPage === number ? "active" : ""}
          key={number}
        >
          {number}
        </Button>
      );
    } else {
      return null;
    }
  });
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    router.push(`${PaginProductProps.path}` + Number(currentPage + 1));
    if (currentPage + 1 > maxPageNumerLitmit) {
      setmaxPageNumerLitmit(maxPageNumerLitmit + pageNumerLitmit);
      setminPageNumerLitmit(minPageNumerLitmit + pageNumerLitmit);
    }
  };
  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
    router.push(`${PaginProductProps.path}` + Number(currentPage - 1));
    if ((currentPage - 1) % pageNumerLitmit === 0) {
      setmaxPageNumerLitmit(maxPageNumerLitmit - pageNumerLitmit);
      setminPageNumerLitmit(minPageNumerLitmit - pageNumerLitmit);
    }
  };
  let pageIncrementBtn;
  if (pages?.length > maxPageNumerLitmit) {
    pageIncrementBtn = (
      <Button
        disabled={currentPage === pages[pages?.length - 1] ? true : false}
        m={2}
        onClick={handleNext}
      >
        ...
      </Button>
    );
  }
  let pageDecrementBtn;
  if (pages?.length > maxPageNumerLitmit) {
    pageDecrementBtn = (
      <Button
        disabled={currentPage === pages[0] ? true : false}
        m={2}
        onClick={handlePrev}
      >
        ...
      </Button>
    );
  }
  return (
    <>
      <Box>
        <Button
          disabled={currentPage === pages[0] ? true : false}
          onClick={handlePrev}
        >
          Prev
        </Button>
        {pageDecrementBtn}
        {renderPageNumber}
        {pageIncrementBtn}
        <Button
          disabled={currentPage === pages[pages?.length - 1] ? true : false}
          onClick={handleNext}
        >
          Next
        </Button>
      </Box>
    </>
  );
};
export default PaginProduct;
