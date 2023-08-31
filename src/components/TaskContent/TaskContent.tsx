import styles from "./taskcontent.module.css";
import { TaskTime } from "../TaskTime";
import { TaskDescription } from "../TaskDescription";
import { TaskControls } from "../TaskControls";
import { TaskAddTimeBtn } from "../TaskAddTimeBtn";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removePomodoro, setCompletePomodoro } from "../../store/pomodoroSlice";

interface ITaskContent {
  id: string;
  descr: string;
}

export function TaskContent({ id, descr }: ITaskContent) {
  const [seconds, setSeconds] = useState(5);
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();

  function start() {
    setIsActive(true);
    setSeconds(5);
  }

  function stop() {
    setIsActive(false);
  }

  useEffect(() => {
    let interval: NodeJS.Timer = setInterval(() => {}, 0);

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      if (!isActive) return;
      clearInterval(interval);
      setIsActive(false);
      dispatch(setCompletePomodoro(id));
      setTimeout(() => {
        alert(`Помидорка "${descr}" зачтена.`);
      }, 1000);
      setTimeout(() => {
        dispatch(removePomodoro({ id }));
      }, 2000);
    }

    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [isActive, seconds, dispatch]);

  return (
    <div className={styles.taskContent}>
      <div className={styles.taskTimeBlock}>
        <TaskTime minutes={Math.trunc(seconds / 60)} seconds={seconds % 60} />
        <TaskAddTimeBtn />
      </div>
      <TaskDescription descr={descr} />
      <TaskControls start={start} stop={stop} />
    </div>
  );
}
