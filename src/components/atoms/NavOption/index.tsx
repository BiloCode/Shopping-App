import { FC } from "react";

type NavOptionProps = {
  icon: JSX.Element;
  text: string;
};

const NavOption: FC<NavOptionProps> = ({ icon, text }) => (
  <li>
    <span>{icon}</span>
    <span>{text}</span>
  </li>
);

export default NavOption;
