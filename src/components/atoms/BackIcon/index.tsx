import * as S from "./styles";

import { AiOutlineArrowLeft } from "react-icons/ai";

type BackProps = {
  onClick(): void;
};

const BackIcon = ({ onClick }: BackProps) => (
  <S.Container onClick={onClick}>
    <AiOutlineArrowLeft />
  </S.Container>
);

export default BackIcon;
