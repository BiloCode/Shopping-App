import { FC } from "react";

import BoldText from "components/atoms/Title";

type TextInBlockProps = {
  title: string;
  description: string;
};

const TextInBlock: FC<TextInBlockProps> = ({ title, description }) => (
  <div>
    <BoldText>{title}</BoldText>
    <p>{description}</p>
  </div>
);

export default TextInBlock;
