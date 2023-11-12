import { ReactNode } from "react";
import styles from "./GameBlock.module.css";

type GameBlockProps = {
  children: ReactNode;
};

export default function GameBlock({ children, ...rest }: GameBlockProps) {
  return (
    <div {...rest} className={styles.item}>
      {children}
    </div>
  );
}
