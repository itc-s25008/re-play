import Link from "next/link";
import styles from "./index.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        Re-play
      </Link>
      <nav className={styles.nav} aria-label="メインナビゲーション">
        <Link href="/#latest">おすすめゲーム</Link>
        <Link href="/#tags">タグから探す</Link>
      </nav>
    </header>
  );
}
