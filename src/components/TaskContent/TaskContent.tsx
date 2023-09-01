import styles from "./taskcontent.module.css";
import { TaskTime } from "../TaskTime";
import { TaskDescription } from "../TaskDescription";
import { TaskControls } from "../TaskControls";
import { TaskAddTimeBtn } from "../TaskAddTimeBtn";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removePomodoro, setCompletePomodoro } from "../../store/pomodoroSlice";
import { PomodoroDone } from "../PomodoroDone";

const DEFAULT_TIMER = 5;

interface ITaskContent {
  id: string;
  descr: string;
}

export function TaskContent({ id, descr }: ITaskContent) {
  const [seconds, setSeconds] = useState(DEFAULT_TIMER);
  const [isActive, setIsActive] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  function start() {
    setIsActive(true);
    setSeconds(DEFAULT_TIMER);
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
      setShowModal(true);
      setTimeout(() => {
        dispatch(removePomodoro({ id }));
        setShowModal(false);
        // document.body.style.overflow = "auto";
        setSeconds(DEFAULT_TIMER);
      }, 3000);
    }

    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [isActive, seconds, dispatch]);

  return (
    <div className={styles.taskContent}>
      {showModal && <PomodoroDone text="Помидорка зачтена." />}
      <div className={styles.taskTimeBlock}>
        <TaskTime minutes={Math.trunc(seconds / 60)} seconds={seconds % 60} />
        <TaskAddTimeBtn />
      </div>
      <TaskDescription descr={descr} />
      <TaskControls disabled={isActive} start={start} stop={stop} />
    </div>
  );
}
