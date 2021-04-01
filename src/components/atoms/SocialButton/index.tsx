import { FC } from "react";
import styles from "./index.module.css";

type SocialButtonProps = {
  text: string;
  icon: JSX.Element;
  onClick?(): void;
  textColor?: string;
  backgroundColor?: string;
};

const SocialButton: FC<SocialButtonProps> = ({
  icon,
  text,
  onClick,
  textColor,
  backgroundColor,
}) => (
  <button
    onClick={onClick}
    style={{ backgroundColor }}
    className={styles.social_button}
  >
    <span className={styles.icon}>{icon}</span>
    <span className={styles.text} style={{ color: textColor }}>
      {text}
    </span>
  </button>
);

SocialButton.defaultProps = {
  textColor: "#000",
};

export default SocialButton;
