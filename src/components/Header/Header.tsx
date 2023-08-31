import React from "react";
import styles from "./header.module.css";
import { PomodoroIcon } from "../PomodoroIcon";
import { StatisticIcon } from "../StatisticIcon";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <PomodoroIcon />
        <a href="#"  className={styles.pomodoroLink}>pomodoro_box</a>
      </div>
      <div className={styles.statistic}>
        <StatisticIcon />
        <a href="#" className={styles.statisticLink}>Статистика</a>
      </div>
    </header>
  );
}
