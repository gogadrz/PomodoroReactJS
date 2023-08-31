// import React, { useState } from "react";
import styles from "./timetask.module.css";
import { TaskContent } from "../TaskContent";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
// import { IPomodoro } from "../../models/IPomodoro";

export function TimeTask() {
  // const [curPomodoro, setCurPomodoro] = useState<IPomodoro>({
  //   completed: false,
  //   id: "",
  //   pomodoroCnt: 0,
  //   text: "",
  // });

  const pomodoros = useSelector(
    (state: RootState) => state.pomodoros.pomodoros
  );
  // const curPomodoro = pomodoros[0];

  if (pomodoros.length === 0) {
    return (
      <div className={styles.emptyBlock}>
        <h2 className={styles.title}>Здесь пока пусто</h2>
        <p className={styles.descr}>Добавьте первый помидор</p>
      </div>
    );
  } else {
    const curPomodoro = pomodoros[0];

    return (
      <div className={styles.showTask}>
        <div className={styles.taskHeader}>
          <div className={styles.taskName}>{curPomodoro.text}</div>
          <div className={styles.pomodoroNumber}>
            Помидор {curPomodoro.pomodoroCnt}
          </div>
        </div>
        <TaskContent id={curPomodoro.id} descr={curPomodoro.text} />
      </div>
    );
  }
}
