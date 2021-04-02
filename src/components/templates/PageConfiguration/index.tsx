import Head from "next/head";
import { FC } from "react";

type PageConfigurationProps = {
  title: string;
};

const PageConfiguration: FC<PageConfigurationProps> = ({ title, children }) => (
  <main>
    <Head>
      <title>{title} - Clothes Shop</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>{children}</div>
  </main>
);

export default PageConfiguration;
