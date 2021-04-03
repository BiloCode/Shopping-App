import styles from "./index.module.css";

import Paragraph from "components/atoms/Paragraph";
import Title from "components/atoms/Title";
import { FC } from "react";

type SliderTextProps = {
  title: string;
  description: string;
};

const SliderText: FC<SliderTextProps> = ({ title, description }) => (
  <div className={styles.slider_text}>
    <Title type="ultra-big" color="#fff">
      {title}
    </Title>
    <div className={styles.slider_text__paragraph_limiter}>
      <Paragraph type="big" color="#fff">
        {description}
      </Paragraph>
    </div>
  </div>
);

export default SliderText;
