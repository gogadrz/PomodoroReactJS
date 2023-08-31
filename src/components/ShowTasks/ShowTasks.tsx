import { useSelector } from "react-redux";
import styles from "./showtasks.module.css";
import { RootState } from "../../store";
import { PomodorosCounter } from "../PomodorosCounter";
import { CheckedIcon } from "../icons/CheckedIcon";

export function ShowTasks() {
  const pomodoros = useSelector(
    (state: RootState) => state.pomodoros.pomodoros
  );

  return (
    <ul className={styles.list}>
      {pomodoros.map((item) => (
        <li className={styles.listItem} key={item.id}>
          <PomodorosCounter counter={item.pomodoroCnt} />
          <div className={styles.pomodoroDescr}>{item.text}</div>
          {item.completed && <CheckedIcon />}
        </li>
      ))}
    </ul>
  );
}
