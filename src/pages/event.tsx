import { GetServerSideProps } from "next";
import { useState } from "react";
import { useRouter } from "next/router";
const Events = ({ data }: any) => {
  const [list, setList] = useState(data);
  const router = useRouter();
  const fetchSport = async () => {
    const response = await fetch(`http://localhost:3001/news?category=sport`);
    const data = await response.json();
    setList(data);
    router.push("/event/category=sport", undefined, { shallow: true });
  };

  return (
    <div>
      <h1>List of news </h1>
      <button onClick={fetchSport}>Only sport</button>
      {data.map((e: any) => {
        return (
          <div>
            <h3>{e.title}</h3>
            <h4>{e.body}</h4>
            <h6>{e.category}</h6>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Events;

// Pre rendering + Client Side data Fetching
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=sport" : "";
  const response = await fetch(`http://localhost:3001/news?${queryString}`);
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};

// static generation :  pre-render where the html pages are generated build time , page built one cached by cdn
// server side :  fetch data at request time , pre-rendering + client side data fetch
// shallow routing- routing without calling getStaticprops / serverside
