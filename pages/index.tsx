import { GetStaticProps, NextPage } from "next";

import Head from "next/head";
import styles from "styles/HomePage.module.css";

import Title from "components/atoms/Title";
import Footer from "components/organism/Footer";
import ProductList from "components/templates/ProductList";
import SliderImages from "components/organism/SliderImages";
import NavigationBar from "components/organism/NavigationBar";

import { ProductCardType } from "types/ProductCardType";
import { PageInformation } from "types/PageInformation";

import GetProductList from "core/GetProductList";
import GetPageInformation from "core/GetPageInformation";

type HomeProps = {
  list: ProductCardType[];
  page_info: PageInformation;
};

const Home: NextPage<HomeProps> = ({ list, page_info }) => {
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
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
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

export default Home;
