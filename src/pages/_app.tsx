import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Footer, Header } from "../../components";
import "../styles/layout.css";
export default function App({ Component, pageProps }: AppProps) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
