import React from "react";
import styles from "./pomodoroscounter.module.css";

interface IPomodorosCounter {
  counter: number;
}

export function PomodorosCounter({ counter }: IPomodorosCounter) {
  return (
    <div className={styles.mainLayer}>
      <div className={styles.pomodoroCounter}>{counter}</div>
      <svg
        className={styles.icon}
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12.5" cy="12.5" r="12" stroke="#C4C4C4" />
      </svg>
    </div>
  );
}
