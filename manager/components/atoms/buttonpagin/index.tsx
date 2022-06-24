import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { IPage } from "../../../types/interface";
interface IPagination {
  itemPage: number;
  pageNumerLitmit: number;
  maxPageNumerLitmit: number;
  data: IPage;
  path: string;
}
const Pagination = (paginationProps: IPagination) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemPage, setItemPage] = useState<number>(paginationProps.itemPage);
  const [pageNumerLitmit, setpageNumerLitmit] = useState<number>(
    paginationProps.pageNumerLitmit
  );
  const [maxPageNumerLitmit, setmaxPageNumerLitmit] = useState<number>(
    paginationProps.maxPageNumerLitmit
  );
  const [minPageNumerLitmit, setminPageNumerLitmit] = useState<number>(0);

  const handelClick = (e: any) => {
    setCurrentPage(Number(e.target.id));
    router.push(`${paginationProps.path}` + Number(e.target.id));
  };
  // page number
  const pages = [];
  for (
    let i = 1;
    i <= Math.ceil(paginationProps.data?.total / paginationProps.data.per_page);
    i++
  ) {
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
    router.push(`${paginationProps.path}` + Number(currentPage + 1));
    if (currentPage + 1 > maxPageNumerLitmit) {
      setmaxPageNumerLitmit(maxPageNumerLitmit + pageNumerLitmit);
      setminPageNumerLitmit(minPageNumerLitmit + pageNumerLitmit);
    }
  };
  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
    router.push(`${paginationProps.path}` + Number(currentPage - 1));
    if ((currentPage - 1) % pageNumerLitmit === 0) {
      setmaxPageNumerLitmit(maxPageNumerLitmit - pageNumerLitmit);
      setminPageNumerLitmit(minPageNumerLitmit - pageNumerLitmit);
    }
  };
  let pageIncrementBtn;
  if (pages.length > maxPageNumerLitmit) {
    pageIncrementBtn = (
      <Button
        disabled={currentPage === pages[pages.length - 1] ? true : false}
        m={2}
        onClick={handleNext}
      >
        ...
      </Button>
    );
  }
  let pageDecrementBtn;
  if (pages.length > maxPageNumerLitmit) {
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
          disabled={currentPage === pages[pages.length - 1] ? true : false}
          onClick={handleNext}
        >
          Next
        </Button>
      </Box>
    </>
  );
};
export default Pagination;
