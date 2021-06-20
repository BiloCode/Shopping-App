import { FC } from "react";
import * as S from "./styles";

type CircleIconProps = {
  onClick?(): void;
};

const CircleIcon: FC<CircleIconProps> = ({ onClick }) => (
  <S.ButtonContainer onClick={onClick}></S.ButtonContainer>
);

export default CircleIcon;
