import Head from "next/head";
import React from "react";

const Products = ({ title, description }: any) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <h1>Products</h1>
    </>
  );
};

export default Products;
export async function getServerSideProps() {
  return {
    props: {
      title: "Title From Props",
      description: "Description from server",
    },
  };
}
