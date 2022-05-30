import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAppSelector } from "../../../hook";
import { IProduct } from "../../../types/interface";
import CHeadmain from "../../molecules/headmain";
import TProduct from "../../molecules/table/TProduct";
interface IProps {
  products: IProduct[];
  status: number;

}
interface IButton {
  toAddProduct?: () => (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const ListProduct = (props: IProps) => {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");
  const products = useAppSelector((state) => state.product.propsProducts);
  const arrProduct = Object.assign([], ...products);

  const toAddProduct = (props: React.MouseEvent<HTMLButtonElement>) => {

    router.push("/list-product/add-product");
  };
  const handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const filteredProduct = props.products?.filter((item) => {
    const query = search.toLowerCase();
    return (
      item.title.toLowerCase().indexOf(query) >= 0 ||
      item.category.toLowerCase().indexOf(query) >= 0 ||
      item.description.toLowerCase().indexOf(query) >= 0
    );
  });

  return (
    <>
      <Box padding={"0 24px"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          padding={"24px 0"}
        >
          {" "}
          <CHeadmain
            onChangeSearch={handelChange}
            title="List product"
            placeholder="Search for something..."
            titleBtn="+ Add product"
            onClickBtn={toAddProduct}
          />
        </Box>
        <Box shadow={"2xl"} borderRadius={"10px"} padding={"24px 0"}>
          <TProduct
            data={arrProduct}
            status={props.status}
            filteredProduct={filteredProduct}
          />
        </Box>
      </Box>
    </>
  );
};
export default ListProduct;
