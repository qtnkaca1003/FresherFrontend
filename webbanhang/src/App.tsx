import axios from "axios";
import React, { FC, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout";
import { useAppDispatch } from "./hook";
import { addProduct } from "./redux/reducer/ProductReducer";
import Router from "./router";
const App:FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getProduct = async () => {
      axios.get("https://fakestoreapi.com/products").then((res) => {
        dispatch(addProduct(res.data))
      });
    };
    getProduct();
  }, [dispatch]);
  return (
    <Layout>
     <Router/>
    </Layout>
  );
};
export default App;