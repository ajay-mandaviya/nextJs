import { useRouter } from "next/router";
import React from "react";

const ProductDetails = () => {
  const id = useRouter();

  const productID = id.query.productId;

  return <div>Product Details {JSON.stringify(productID)} </div>;
};
export default ProductDetails;
