import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaTwitter />
        </li>
      </ul>

      <p className={styles.copy_right}>
        <span>Minerva</span> &copy; 2022 todos os direitos reservados by RECODE
      </p>
    </footer>
  );
}

export default Footer;
