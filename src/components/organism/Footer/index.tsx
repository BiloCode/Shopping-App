import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import FooterListIcon, {
  ListIconType,
} from "components/molecules/FooterListIcon";
import styles from "./index.module.css";

const icons: ListIconType[] = [
  {
    icon: <AiFillFacebook />,
  },
  {
    icon: <AiFillTwitterSquare />,
  },
];

const Footer = () => (
  <footer className={styles.footer}>
    <div></div>
    <div>
      <FooterListIcon icons={icons} />
    </div>
  </footer>
);

export default Footer;
