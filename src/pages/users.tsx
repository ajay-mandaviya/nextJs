const UserList = (props: any) => {
  const { users } = props;
  console.log("props", users);

  return (
    <div>
      {users.map((ele: any) => {
        return (
          <div key={ele.id}>
            <p>{ele.name}</p>
          </div>
        );
      })}
    </div>
  );
};
export default UserList;

// run only server side , only for pre-rendering , must return object and should contain a props key
// won't include the js bundle file , run in build time

export async function getStaticProps() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return {
      props: {
        users: data,
      },
    };
  } catch (error) {
    return {
      props: { error: "not get data" },
    };
  }
}
