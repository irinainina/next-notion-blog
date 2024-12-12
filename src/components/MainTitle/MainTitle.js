import { Lora } from "next/font/google";
import styles from "./MainTitle.module.scss";

const lora = Lora({ subsets: ["latin"], display: "swap" });

const MainTitle = () => {
  return (
    <div className={styles.container}>
      <h2 className={`${lora.className} ${styles.title}`}>Learn more about the product and its benefits</h2>
      <p className={styles.subtitle}>
        Check out our blog, where you will find a lot of useful information. Explore our guide on how to use the app.
      </p>
    </div>
  );
};

export default MainTitle;
