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

// issue once build is generated data is not update even passing fallback to true
// sol : Incremental Static Regeneration(ISR)  its allows update static  pages after you built
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data.slice(0, 10),
    },
    revalidate: 10,
  };
}
// ISR : Update only those pages which needed a change without having rebuild the entire app
// how : add another props key , revalidate key , it is number of second after page re-generation

// Stale while revalidate
// inital request  page render
//within 30 second page render
// after 30 second stale page , page regeneration
//after 30 sec  regenerated page render
