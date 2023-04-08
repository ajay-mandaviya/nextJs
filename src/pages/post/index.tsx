import Link from "next/link";
export default function PostList(props: any) {
  return (
    <div>
      <h1>PostList</h1>
      {props.posts.map((post: any) => {
        return (
          <div key={post.id}>
            <Link href={`post/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data.slice(0, 10),
    },
  };
}
