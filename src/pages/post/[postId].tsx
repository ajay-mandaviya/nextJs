import React from "react";
import { ParsedUrlQuery } from "querystring";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
interface IParams extends ParsedUrlQuery {
  postId: string;
}

function SinglePost({ post }: any) {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h2>{post?.title}</h2>
      <h3>{post?.body}</h3>
    </div>
  );
}

export default SinglePost;

// generating  pages
export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const paths = data.map((post: any) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });
  return {
    paths,
    //any paths not return by getpath will in 404
    // if true , getpath will not in 404 , in backgroud it will generate request path html and json
    // first time return fall back once served return page
    fallback: false,
    // "blocking" : path that not generating build time not redirect 404 , first request  it will render page on server and return html
  };
};

// issue once build is generated data is not update even passing fallback to true
// sol : Incremental Static Regeneration(ISR)  its allows update static  pages after you built
export const getStaticProps: GetStaticProps = async (args) => {
  console.log("args===", args);
  const { postId } = args.params as IParams;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  const data = await response.json();

  // if id is 101 or consider not avaible in our path , can rediret 404
  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
  };
};
