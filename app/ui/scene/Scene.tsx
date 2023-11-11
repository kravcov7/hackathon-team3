import Image from "next/image";
import { units } from "@/app/lib/data";
import styles from "./Scene.module.css";

export default function Scene() {
  return (
    <div className={styles.scene}>
      <div className={styles.item}>
        <button className={`${styles.unit} ${styles.active}`}>
          <Image src={units.orphan.src} width={70} height={70} alt={""} />
        </button>
      </div>

      <div className={styles.item}>
        <button className={`${styles.unit} ${styles.active}`}>
          <Image src={units.betrayal.src} width={70} height={70} alt={""} />
        </button>
      </div>

      <div className={styles.item}>
        <button className={`${styles.unit} ${styles.active}`}>
          <Image src={units.loneliness.src} width={70} height={70} alt={""} />
        </button>
      </div>

      <div className={styles.item}>
        <button className={`${styles.unit} ${styles.active}`}>
          <Image src={units.place.src} width={70} height={70} alt={""} />
        </button>
      </div>

      <div className={styles.item}>
        <button className={`${styles.unit} ${styles.active}`}>
          <Image src={units.loneliness.src} width={70} height={70} alt={""} />
        </button>
      </div>

      <div className={styles.item}>
        <button className={`${styles.unit} ${styles.active}`}>
          <Image src={units.violence.src} width={70} height={70} alt={""} />
        </button>
      </div>

      <div className={styles.item}>
        <button className={`${styles.unit} ${styles.active}`}>
          <Image src={units.betrayal.src} width={70} height={70} alt={""} />
        </button>
      </div>

      <div className={styles.item}>
        <button className={`${styles.unit} ${styles.active}`}>
          <Image src={units.orphan.src} width={70} height={70} alt={""} />
        </button>
      </div>

      <div className={styles.item}>
        <button className={`${styles.unit} ${styles.active}`}>
          <Image src={units.loneliness.src} width={70} height={70} alt={""} />
        </button>
      </div>
    </div>
  );
}
