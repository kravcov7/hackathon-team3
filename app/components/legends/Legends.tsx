import { units } from "@/app/lib/data";
import Image from "next/image";
import styles from "./Legends.module.css";
import Link from "next/link";

export default function Legends() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {units.map((unit) => (
          <li key={unit.id} className={styles.item}>
            <div className={styles.content}>
              <Image
                src={unit.src}
                width={100}
                height={100}
                className={styles.image}
                alt={unit.desc}
              />
              <p>{unit.desc}</p>
            </div>
          </li>
        ))}
      </ul>
      <Link href={"/"} className={styles.button}>
        Назад
      </Link>
    </div>
  );
}
