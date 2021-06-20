import { GetStaticProps, NextPage } from "next";
import styles from "styles/HomePage.module.css";

import Title from "components/atoms/Title";
import Footer from "components/organism/Footer";
import ProductList from "components/templates/ProductList";
import SliderImages from "components/organism/SliderImages";
import NavigationBar from "components/organism/NavigationBar";
import PageConfiguration from "components/templates/PageConfiguration";

import { PageModel } from "types/PageModel";
import { simpleFetcher } from "core/CustomFetch";
import { ProductCardType } from "types/ProductCardType";

type HomeProps = {
  page_info: PageModel;
  list: ProductCardType[];
};

const Home: NextPage<HomeProps> = ({ list, page_info }) => (
  <PageConfiguration title="Inicio">
    <NavigationBar />
    <div className={styles.slider}>
      <SliderImages images={page_info.bannerImages} />
    </div>
    <div className={styles.container}>
      <div className={styles.product_title_container}>
        <Title type="extra-big">Nuestros Productos</Title>
      </div>
      <ProductList products={list} />
    </div>
    <Footer />
  </PageConfiguration>
);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const list = await simpleFetcher("/product");
  const info = await simpleFetcher("/page/home");

  return {
    props: {
      list: list.products,
      page_info: info.page,
    },
  };
};

export default Home;
