import { units } from "@/app/lib/data";
import styles from "./Scene.module.css";
import Image from "next/image";

export default function Scene() {
  return (
    <div className={styles.scene}>
      <div className={styles.item}>
        <Image
          src={"/images/house.png"}
          width={100}
          height={100}
          alt={""}
          className={styles.image}
        />
        <div className={styles.unit}>
          <Image src={units.orphan.src} width={70} height={70} alt={""} />
        </div>
      </div>

      <div className={styles.item}>
        <Image
          src={"/images/house.png"}
          width={100}
          height={100}
          alt={""}
          className={styles.image}
        />
        <div className={styles.unit}>
          <Image src={units.betrayal.src} width={70} height={70} alt={""} />
        </div>
      </div>

      <div className={styles.item}>
        <Image
          src={"/images/house.png"}
          width={100}
          height={100}
          alt={""}
          className={styles.image}
        />
        <div className={styles.unit}>
          <Image src={units.loneliness.src} width={70} height={70} alt={""} />
        </div>
      </div>

      <div className={styles.item}>
        <Image
          src={"/images/house.png"}
          width={100}
          height={100}
          alt={""}
          className={styles.image}
        />
        <div className={styles.unit}>
          <Image src={units.place.src} width={70} height={70} alt={""} />
        </div>
      </div>

      <div className={styles.item}>
        <Image
          src={"/images/house.png"}
          width={100}
          height={100}
          alt={""}
          className={styles.image}
        />
        <div className={styles.unit}>
          <Image src={units.loneliness.src} width={70} height={70} alt={""} />
        </div>
      </div>

      <div className={styles.item}>
        <Image
          src={"/images/house.png"}
          width={100}
          height={100}
          alt={""}
          className={styles.image}
        />
        <div className={styles.unit}>
          <Image src={units.violence.src} width={70} height={70} alt={""} />
        </div>
      </div>

      <div className={styles.item}>
        <Image
          src={"/images/house.png"}
          width={100}
          height={100}
          alt={""}
          className={styles.image}
        />
        <div className={styles.unit}>
          <Image src={units.betrayal.src} width={70} height={70} alt={""} />
        </div>
      </div>

      <div className={styles.item}>
        <Image
          src={"/images/house.png"}
          width={100}
          height={100}
          alt={""}
          className={styles.image}
        />
        <div className={styles.unit}>
          <Image src={units.orphan.src} width={70} height={70} alt={""} />
        </div>
      </div>

      <div className={styles.item}>
        <Image
          src={"/images/house.png"}
          width={100}
          height={100}
          alt={""}
          className={styles.image}
        />
        <div className={styles.unit}>
          <Image src={units.loneliness.src} width={70} height={70} alt={""} />
        </div>
      </div>
    </div>
  );
}
