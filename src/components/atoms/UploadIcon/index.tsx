import { ChangeEvent, FC } from "react";
import * as S from "./styles";
import { IconType } from "react-icons/lib";

type UploadIconProps = {
  Icon: IconType;
  onChange?(ev: ChangeEvent<HTMLInputElement>): void;
};

const UploadIcon: FC<UploadIconProps> = ({ Icon, onChange }) => (
  <S.LabelContainer data-testid="upload-icon" htmlFor="img_input">
    <S.IconContainer>
      <Icon />
    </S.IconContainer>
    <S.InputCustom
      type="file"
      id="img_input"
      accept="image/*"
      onChange={onChange}
    />
  </S.LabelContainer>
);

export default UploadIcon;
