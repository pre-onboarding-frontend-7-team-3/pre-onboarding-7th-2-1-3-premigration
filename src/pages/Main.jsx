import Header from "../components/Header";
import Layout from "../components/Layout";
import ProductList from "../components/ProductList/ProductList";
import Nav from "../components/Nav";
import { HEADER } from "../constants/constants";

const Main = () => {

  return (
    <Layout>
      <Header title={HEADER.PRODUCT_LIST} redirection={true}/>
      <Nav />
      <ProductList />
    </Layout>
  );
};

export default Main;