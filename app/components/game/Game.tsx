import Scene from "@/app/ui/scene/Scene";
import styles from "./Game.module.css";

export default function Game() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Shoot Children' Scares Game</h1>
      <Scene />
    </div>
  );
}
