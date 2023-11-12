"use client";

import Scene from "@/app/ui/scene/Scene";
import styles from "./Game.module.css";
import { useEffect, useState } from "react";

export default function Game() {
  const [score, setScore] = useState(0);
  const [hit, setHit] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHit(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [hit]);

  function handleClick() {
    setScore((prev) => prev + 1);
    setHit(true);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Shoot Children' Scares Game</h1>
      <Scene isHit={hit} onUnitClick={handleClick} />
    </div>
  );
}
