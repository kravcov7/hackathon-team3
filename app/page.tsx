import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
   <main className={styles.main}>
      <h1 className={styles.title}>Shoot Children's Scares</h1>
      <p className={styles.subtitle}>
        Point-and-click-игрушка, где надо "отстреливать" страхи детей.
      </p>

      <div className={styles.buttons}>
        <Link
          href="/second"
          className={styles.button + " py-2 px-5 rounded-lg bg-indigo-600 text-white"}
        >
          Играть
        </Link>
        <Link
          href="/form/signup"
          className={styles.button + " py-2 px-5 rounded-lg bg-indigo-600 text-white"}
        >
          Регистрация
        </Link>

        <Link
          href="/form"
          className={styles.button + " py-2 px-5 rounded-lg bg-indigo-600 text-white"}
        >
          Войти в аккаунт
        </Link>
        
      </div>
    </main>
  );
}
