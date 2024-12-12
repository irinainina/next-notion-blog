const normalizeDataItem = (item) => {
  const { id, title, tag, author, avatar_link, image, post, date } = item.properties;
  return {
    id: id.number,
    title: title.title[0].plain_text,
    tag: tag.rich_text[0].plain_text,
    author: author.rich_text[0].plain_text,
    avatar_link: avatar_link.rich_text[0].plain_text,
    image: image.rich_text[0].plain_text,
    post: post.rich_text[0].plain_text,
    date: new Date(date.date.start).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
};

export default normalizeDataItem;
