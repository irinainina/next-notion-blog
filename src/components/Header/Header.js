import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href="/" aria-label="finden">
          <h1 className={styles.logo}></h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
