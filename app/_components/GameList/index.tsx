import type { Game } from "../../_libs/games";
import styles from "./index.module.css";

type Props = {
  games: Game[];
};

export default function GameList({ games }: Props) {
  if (games.length === 0) {
    return <p>ゲームがありません。</p>;
  }

  return (
    <div className={styles.grid}>
      {games.map((game) => (
        <article className={styles.card} key={game.id}>
          <p className={styles.category}>{game.genre}</p>
          <h3>{game.title}</h3>
          <p>{game.description}</p>
          <time>{game.company}</time>
        </article>
      ))}
    </div>
  );
}
