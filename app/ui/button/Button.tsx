import { MouseEventHandler, ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  onClick: MouseEventHandler;
  children: ReactNode;
};

export default function Button({ children, onClick, ...rest }: ButtonProps) {
  return (
    <button onClick={onClick} {...rest} className={styles.button}>
      {children}
    </button>
  );
}
