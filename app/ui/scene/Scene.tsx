import Image from "next/image";
import { units } from "@/app/lib/data";
import GameBlock from "../block/GameBlock";
import styles from "./Scene.module.css";

type SceneProps = {
  isHit: boolean;
  onUnitClick: () => void;
};

export default function Scene({ isHit, onUnitClick }: SceneProps) {
  return (
    <div className={styles.scene}>
      <GameBlock>
        <Image
          onClick={onUnitClick}
          className={
            isHit
              ? `${styles.unit} ${styles.disabled}`
              : `${styles.unit} ${styles.active}`
          }
          src={units[0].src}
          width={70}
          height={70}
          alt={""}
        />
      </GameBlock>

      <GameBlock>
        <Image
          onClick={onUnitClick}
          className={
            isHit
              ? `${styles.unit} ${styles.disabled}`
              : `${styles.unit} ${styles.active}`
          }
          src={units[2].src}
          width={70}
          height={70}
          alt={""}
        />
      </GameBlock>

      <GameBlock>
        <Image
          onClick={onUnitClick}
          className={
            isHit
              ? `${styles.unit} ${styles.disabled}`
              : `${styles.unit} ${styles.active}`
          }
          src={units[1].src}
          width={70}
          height={70}
          alt={""}
        />
      </GameBlock>

      <GameBlock>
        <Image
          onClick={onUnitClick}
          className={
            isHit
              ? `${styles.unit} ${styles.disabled}`
              : `${styles.unit} ${styles.active}`
          }
          src={units[3].src}
          width={70}
          height={70}
          alt={""}
        />
      </GameBlock>

      <GameBlock>
        <Image
          onClick={onUnitClick}
          className={
            isHit
              ? `${styles.unit} ${styles.disabled}`
              : `${styles.unit} ${styles.active}`
          }
          src={units[1].src}
          width={70}
          height={70}
          alt={""}
        />
      </GameBlock>

      <GameBlock>
        <Image
          onClick={onUnitClick}
          className={
            isHit
              ? `${styles.unit} ${styles.disabled}`
              : `${styles.unit} ${styles.active}`
          }
          src={units[4].src}
          width={70}
          height={70}
          alt={""}
        />
      </GameBlock>

      <GameBlock>
        <Image
          onClick={onUnitClick}
          className={
            isHit
              ? `${styles.unit} ${styles.disabled}`
              : `${styles.unit} ${styles.active}`
          }
          src={units[0].src}
          width={70}
          height={70}
          alt={""}
        />
      </GameBlock>

      <GameBlock>
        <Image
          onClick={onUnitClick}
          className={
            isHit
              ? `${styles.unit} ${styles.disabled}`
              : `${styles.unit} ${styles.active}`
          }
          src={units[3].src}
          width={70}
          height={70}
          alt={""}
        />
      </GameBlock>

      <GameBlock>
        <Image
          onClick={onUnitClick}
          className={
            isHit
              ? `${styles.unit} ${styles.disabled}`
              : `${styles.unit} ${styles.active}`
          }
          src={units[4].src}
          width={70}
          height={70}
          alt={""}
        />
      </GameBlock>
    </div>
  );
}
