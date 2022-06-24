import { Box, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hook";
import { deleteProduct } from "../../../../redux/slices/productSlices";
import { IProduct } from "../../../../types/interface";
import CHeadmain from "../../../Molecules/HeadMain/index";
import TProduct from "../../../Molecules/Table/TProduct";
interface IProps {
  products: IProduct[];
  status: number;
}
const dataProduct = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
];
const ListProduct = (listProductProps: IProps) => {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");
  const product = useAppSelector((state) => state.product.propsProduct);
  const products = useAppSelector((state) => state.product.propsProducts);
  const { colorMode, toggleColorMode } = useColorMode();
  //const arrProduct = Object.assign([], ...products);
  const dispatch = useAppDispatch();
  const toAddProduct = (props: React.MouseEvent<HTMLButtonElement>) => {
    router.push("/list-product/add-product");
  };
  const handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const filteredProduct = dataProduct?.filter((item) => {
    const query = search.toLowerCase();
    return (
      item.title.toLowerCase().indexOf(query) >= 0 ||
      item.category.toLowerCase().indexOf(query) >= 0 ||
      item.description.toLowerCase().indexOf(query) >= 0
    );
  });

  const handleDelete = ({
    currentTarget,
  }: React.MouseEvent<HTMLButtonElement>) => {
    const id = currentTarget.value;
    dispatch(deleteProduct(id));
  };
  const color = colorMode === "dark" ? "#fff" : "#4A5568";
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
            color={color}
            fontSize={"3xl"}
            fontWeight={"600"}
            onChangeSearch={handelChange}
            title="List product"
            placeholder="Search for something..."
            titleBtn="+ Add product"
            onClickBtn={toAddProduct}
          />
        </Box>
        <Box shadow={"2xl"} borderRadius={"10px"} padding={"24px 0"}>
          <TProduct
            data={products}
            status={listProductProps.status}
            filteredProduct={filteredProduct}
            onClickBtn={handleDelete}
          />
        </Box>
      </Box>
    </>
  );
};
export default ListProduct;
