import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.modal}>
          <h1 className={styles.title}>Shoot Children Scares</h1>
          <p className={styles.text}>
            Shoot Children Scares – браузерная мини-игра в стиле pick-and-point,
            в которой маленькие герои используют щелчок мыши, чтобы одолеть свои
            детские страхи!
          </p>

          <div className={styles.wrapper}>
            <Link href="/game" className={styles.button}>
              Играть
            </Link>

            <Link href="/legends" className={styles.button}>
              Легенды о страхах
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
