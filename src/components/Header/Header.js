import Link from "next/link";
import SwitchTheme from "../SwitchTheme/SwitchTheme";
import styles from "./Header.module.scss";

const Header = ({ theme }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link
          href="/"
          aria-label="finden"
        >
          <h1 className={`${styles.logo} logo`}></h1>
        </Link>
        <SwitchTheme theme={theme} />
      </div>
    </header>
  );
};

export default Header;
