import React from "react";
import styles from "./taskdescription.module.css";

interface ITaskDescription {
  descr: string;
}

export function TaskDescription({ descr }: ITaskDescription) {
  return (
    <div className={styles.taskDescription}>
      Задача 1 - <span>{descr}</span>
    </div>
  );
}
