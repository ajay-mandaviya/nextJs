import { GetServerSideProps } from "next";
const Category = (props: any) => {
  return (
    <div>
      <h1>Showing category {props.category}</h1>
    </div>
  );
};
export default Category;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params, req, res } = context;
  console.log("req", req.headers.cookie);
  res.setHeader("Set-Cookie", ["token-df"]);

  const { category } = params as { category: string };
  const response = await fetch(
    `http://localhost:3001/news?category=${category}`
  );
  const data = await response.json();
  return {
    props: {
      data,
      category,
    },
  };
};
