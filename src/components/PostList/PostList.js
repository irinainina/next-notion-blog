import PostItem from "../PostItem/PostItem";
import styles from "./PostList.module.scss";

const PostList = ({ data }) => {
  return (
    <div className={styles.postContainer}>
      {data.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
