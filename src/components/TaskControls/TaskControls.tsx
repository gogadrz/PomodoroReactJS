import styles from "./taskcontrols.module.css";

interface ITaskControls {
  disabled: boolean;
  start: () => void;
  stop: () => void;
}

export function TaskControls({ disabled, start, stop }: ITaskControls) {
  return (
    <div className={styles.taskControls}>
      <button
        disabled={disabled}
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
