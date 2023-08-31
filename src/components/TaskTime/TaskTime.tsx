import styles from "./tasktime.module.css";

interface ITaskTime {
  minutes: number;
  seconds: number;
}

export function TaskTime({ minutes, seconds }: ITaskTime) {
  const strMinutes = minutes.toString().padStart(2, "0");
  const strSeconds = seconds.toString().padStart(2, "0");

  return (
    <div className={styles.taskTime}>
      {strMinutes}:{strSeconds}
    </div>
  );
}
