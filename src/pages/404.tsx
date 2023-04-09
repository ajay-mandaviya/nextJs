import { Footer } from "../../components";
const PageNotFound = ({ title, description }: any) => {
  return (
    <>
      <h1>Page Not Found</h1>
    </>
  );
};

export default PageNotFound;

// remove header from the layout

PageNotFound.getLayout = function PageNotFound(page: any) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
// https://next-auth.js.org/v3/configuration/providers
