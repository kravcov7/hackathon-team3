import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Shoot Childrens Scares</h1>
      <p className={styles.subtitle}>
        Point-and-click-игрушка, где надо отстреливать страхи детей.
      </p>

      <div className={styles.buttons}>
        <Link
          href="/game"
          className={
            styles.button + " py-2 px-5 rounded-lg bg-indigo-600 text-white"
          }
        >
          Играть
        </Link>

        <Link
          href="/legends"
          className={
            styles.button + " py-2 px-5 rounded-lg bg-indigo-600 text-white"
          }
        >
          Легенды о страхах
        </Link>
      </div>
    </main>
  );
}
