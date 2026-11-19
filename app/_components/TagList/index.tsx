import styles from "./index.module.css";

const tags = [
  "Nintendo",
  "Riot Games",
  "The Pokemon Company",
  "基本プレイ無料",
  "アクション",
  "RPG",
];

export default function TagList() {
  return (
    <section className={styles.tags} id="tags" aria-labelledby="tags-title">
      <h2 id="tags-title">タグから探す</h2>
      <div className={styles.tagList}>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </section>
  );
}
