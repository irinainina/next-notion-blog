import Link from "next/link";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <Link href="/" aria-label="finden">
          <div className={styles.logo}></div>
        </Link>
        <p className={styles.footerInfo}>Next13 AppRouter Blog</p>
        <p className={styles.github}>GitHub</p>
      </div>
    </footer>
  );
};

export default Footer;
