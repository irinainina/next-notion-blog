import classNames from "classnames";
import tags from "@/utils/tags";
import styles from "./Filter.module.scss";

const Filter = ({ tagActive, setTagActive }) => {
  const toogleTag = (tag) => {
    setTagActive(tag);
  };

  return (
    <div className={styles.tags}>
      {tags.map((tag) => (
        <button
          className={classNames(styles.tag, { [styles.tagActive]: tag === tagActive })}
          onClick={() => toogleTag(tag)}
          key={tag}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default Filter;
