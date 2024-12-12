import Link from 'next/link';
import Image from "next/image";
import styles from "./PostItem.module.scss";

const PostItem = ({post}) => {
  return (
    <Link href={`/post/${post.post}`} className={styles.post}>
      <Image src={post.image} alt="post-image" className={styles.postImage} width={368} height={219} priority />
      <div className={styles.postContent}>
        <span className={styles.postTag}>{post.tag}</span>
        <h3 className={styles.postTitle}>{post.title}</h3>
        <div className={styles.postInfo}>
          <div className={styles.author}>{post.author}</div>
          <time className={styles.time}>{post.date}</time>
        </div>
      </div>
    </Link>
  );
};

export default PostItem;
