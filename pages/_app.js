import "@/styles/globals.scss";
import Layout from "@/components/Layout";

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
