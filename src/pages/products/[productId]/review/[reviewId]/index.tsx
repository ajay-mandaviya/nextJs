import { useRouter } from "next/router";
import React from "react";

const ProductDetails = () => {
  const id = useRouter();
  console.log("id", id);

  const productID = id.query.reviewId;

  return <div>review Details {JSON.stringify(productID)} </div>;
};
export default ProductDetails;
