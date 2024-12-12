import styles from "./PostContent.module.scss";

const PostContent = ({ content }) => {
  const contentWithAlt = content.replace(/<img/g, '<img alt="image"');
  return (
    <div className={styles.container}>
      <div dangerouslySetInnerHTML={{ __html: contentWithAlt }} />
    </div>
  );
};

export default PostContent;
