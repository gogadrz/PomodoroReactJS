import styles from "./taskcontrols.module.css";

interface ITaskControls {
  start: () => void;
  stop: () => void;
}

export function TaskControls({ start, stop }: ITaskControls) {
  return (
    <div className={styles.taskControls}>
      <button
        onClick={() => {
          start();
        }}
        className={styles.taskStartBtn}
      >
        Старт
      </button>
      <button
        onClick={() => {
          stop();
        }}
        className={styles.taskStopBtn}
      >
        Стоп
      </button>
    </div>
  );
}
