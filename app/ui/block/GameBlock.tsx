import { ReactNode } from "react";
import styles from "./GameBlock.module.css";
import Image from "next/image";
import { units } from "@/app/lib/data";
import { useEffect, useState } from "react";

type GameBlockProps = {
  children: ReactNode;
  onClick: () => void;
  isHit: boolean;
};

export default function GameBlock({ children, onClick, ...rest }: GameBlockProps) {
  const [runtime, setRuntime] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRuntime((prev) => !prev);
    },  Math.floor(Math.random() * 5000));

    return () => clearTimeout(timeout);
  }, [runtime]);
  
  return (
    <div {...rest} className={styles.item}>
      <Image
            onClick={onClick}
            className={
              // isHit && runtime
              runtime
                ? `${styles.unit} ${styles.disabled}`
                : `${styles.unit} ${styles.active}`
            }
            src={units[Math.floor(Math.random() * units.length)].src}
            width={70}
            height={70}
            alt={""}
          />
    </div>
  );
}
