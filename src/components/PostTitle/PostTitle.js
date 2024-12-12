import { Lora } from "next/font/google";
import Image from "next/image";
import styles from "./PostTitle.module.scss";

const lora = Lora({ subsets: ["latin"], display: "swap" });

const PostTitle = ({ post }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.tag}>{post.tag}</div>
      <h1 className={`${lora.className} ${styles.title}`}>{post.title}</h1>
      <div className={styles.content}>
        <div className={styles.data}>
          <div className={styles.author}>
            <Image src={post.avatar_link} alt="author" className={styles.img} width={40} height={40} priority />
            <span className={styles.name}>{post.author}</span>
          </div>
          <span className={styles.date}>{post.date}</span>
        </div>
        <Image src={post.image} alt="image" className={styles.postImg} width={680} height={320} priority />
      </div>
    </div>
  );
};

export default PostTitle;
