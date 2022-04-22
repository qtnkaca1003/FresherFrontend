import { Text } from "@chakra-ui/react";
import React from "react";
import ListProducts from "../components/home/ListProducts";
import {  useAppSelector } from "../hook";
const HomePage = () => {
<<<<<<< HEAD
  const listProduct = useAppSelector((state) => state.listProduct.productList);
  const allProduct = Object.assign([], ...listProduct);
=======
  const dispatch = useAppDispatch();
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const getProduct = async () => {
      axios.get("https://fakestoreapi.com/products").then((res) => {
        dispatch(addProduct(res.data))
        setProducts(res.data);
      });
    };
    getProduct();
  }, [dispatch]);
>>>>>>> d3480e0068ac4d87d13458b3f3f01b51179321be
  return (
    <>
      <Text fontSize="4xl" fontWeight={"bold"} align={"center"}>
        Danh sách sản phẩm
      </Text>
      <ListProducts products={allProduct} />
    </>
  );
};
export default HomePage;
