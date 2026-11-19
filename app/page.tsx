import styles from "./page.module.css";
import GameList from "./_components/GameList";
import TagList from "./_components/TagList";
import { TOP_GAMES_LIMIT } from "./_components/_constants";
import { games } from "./_libs/games";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>My favorite games</p>
        <h1>ゲーム紹介サイト</h1>
        <p className={styles.description}>
          今までに遊んで楽しかったゲームや、今後やりたいゲーム
        </p>
        <a className={styles.primaryButton} href="#latest">
          ゲームを見る
        </a>
      </section>

      <section className={styles.latest} id="latest" aria-labelledby="latest-title">
        <div className={styles.sectionHeading}>
          <h2 id="latest-title">おすすめゲーム</h2>
          <span>Favorites</span>
        </div>
        <GameList games={games.slice(0, TOP_GAMES_LIMIT)} />
      </section>

      <TagList />
    </main>
  );
}
