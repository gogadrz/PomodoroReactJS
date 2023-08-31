import React from "react";
import styles from "./main.module.css";

interface prors {
  children?: React.ReactNode;
}

export function Main({ children }: prors) {
  return <main className={styles.main}>{children}</main>;
}
