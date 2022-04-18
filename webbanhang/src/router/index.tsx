import * as React from "react";
import { Route, Routes } from "react-router-dom";
import PostPage from "../pages/ReviewPage";
import DetailReviewPage from "../pages/DetailReviewPage";


const Home = React.lazy(() => import("../pages/HomePage"));
const Cart = React.lazy(()=> import("../pages/CartPage"))
const Router = () => {
  return (
    <React.Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="post" element={<PostPage />} />
        <Route path="post/:category/:id" element={<DetailReviewPage />} />
      </Routes>
    </React.Suspense>
  );
};
export default Router;
