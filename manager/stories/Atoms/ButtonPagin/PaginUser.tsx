import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { IPage } from "../../../types/interface";
const data = {
  page: 1,
  per_page: 6,
  total: 12,
  total_pages: 2,
  data: [
    {
      id: 1,
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
    },
    {
      id: 2,
      email: "janet.weaver@reqres.in",
      first_name: "Janet",
      last_name: "Weaver",
      avatar: "https://reqres.in/img/faces/2-image.jpg",
    },
    {
      id: 3,
      email: "emma.wong@reqres.in",
      first_name: "Emma",
      last_name: "Wong",
      avatar: "https://reqres.in/img/faces/3-image.jpg",
    },
    {
      id: 4,
      email: "eve.holt@reqres.in",
      first_name: "Eve",
      last_name: "Holt",
      avatar: "https://reqres.in/img/faces/4-image.jpg",
    },
    {
      id: 5,
      email: "charles.morris@reqres.in",
      first_name: "Charles",
      last_name: "Morris",
      avatar: "https://reqres.in/img/faces/5-image.jpg",
    },
    {
      id: 6,
      email: "tracey.ramos@reqres.in",
      first_name: "Tracey",
      last_name: "Ramos",
      avatar: "https://reqres.in/img/faces/6-image.jpg",
    },
  ],
};
interface IPagination {
  itemPage: number;
  pageNumerLitmit: number;
  maxPageNumerLitmit: number;
  data: IPage |undefined;
  path: string;
}
const PaginUser = (paginationProps: IPagination) => {
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
    i <= Math.ceil(data?.total / data.per_page);
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
export default PaginUser;
