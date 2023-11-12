"use client";

import Scene from "@/app/ui/scene/Scene";
import styles from "./Game.module.css";
import { useEffect, useState } from "react";
import Button from "@/app/ui/button/Button";

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

  function handleRestartClick() {
    setScore(0);
  }

  return (
    <div className={styles.container}>
      <Button onClick={handleRestartClick}>Начать заново</Button>
      <Scene isHit={hit} onUnitClick={handleClick} />
    </div>
  );
}
