import { useState } from "react";
import styles from "./addtask.module.css";
import { addPomodoro } from "../../store/pomodoroSlice";
import { useDispatch } from "react-redux";

export function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  return (
    <form className={styles.addTaskForm}>
      <input
        className={styles.addTaskInput}
        type="text"
        placeholder="Название задачи"
        value={text}
        onChange={(ev) => {
          setText(ev.currentTarget.value);
        }}
      />
      <button
        className={styles.addTaskBtn}
        disabled={!text}
        onClick={(event) => {
          event.preventDefault();
          dispatch(addPomodoro({ text }));
          setText("");
        }}
      >
        Добавить
      </button>
    </form>
  );
}
