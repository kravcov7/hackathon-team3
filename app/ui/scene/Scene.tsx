
import { units } from "@/app/lib/data";
import GameBlock from "../block/GameBlock";
import styles from "./Scene.module.css";

type SceneProps = {
  isHit: boolean;
  onUnitClick: () => void;
};

export default function Scene({ isHit, onUnitClick }: SceneProps) {

  const newUnits = units.slice(2)

  return (
    <div className={styles.scene}>
      {newUnits.map((unit, index) => (
        <GameBlock key={index} onClick={onUnitClick} isHit={isHit}>
        </GameBlock>
      ))}
    
    </div>
  );
}
