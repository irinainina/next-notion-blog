import PostTitle from "@/components/PostTitle/PostTitle";
import PostContent from "@/components/PostContent/PostContent";

const PostPage = ({ post, content }) => {
  return (
    <article>
      <PostTitle post={post} />
      <PostContent content={content} />
    </article>
  );
};

export default PostPage;
