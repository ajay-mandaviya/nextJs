import React from "react";
import { GetServerSideProps } from "next";

const Blogs = ({ data }: any) => {
  console.log("data", data);
  return (
    <div>
      <p>Blogs</p>
    </div>
  );
};

export default Blogs;
// run server side , not run client side , code not include in js bundle
export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("http://localhost:3001/news");
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};
