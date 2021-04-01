import { GetStaticProps } from "next";

import Head from "next/head";
import styles from "styles/HomePage.module.css";

import Title from "components/atoms/Title";
import ProductList from "components/templates/ProductList";
import SliderImages from "components/organism/SliderImages";
import Footer from "components/organism/Footer";

import GetProductList from "core/GetProductList";
import GetPageInformation from "core/GetPageInformation";
import NavigationBar from "components/organism/NavigationBar";

export default function Home({ list, page_info }) {
  return (
    <main>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavigationBar />
        <div className={styles.slider}>
          <SliderImages images={page_info.banner_images} />
        </div>
        <div className={styles.container}>
          <div className={styles.product_title_container}>
            <Title type="extra-big">Nuestros Productos</Title>
          </div>
          <ProductList products={list} />
        </div>
        <Footer />
      </div>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products = new GetProductList();
  const home_data = new GetPageInformation();

  const list = await products.__invoke();
  const page_info = await home_data.__invoke("home");

  return {
    props: {
      list,
      page_info,
    },
  };
};
