import React from "react";
import styles from "./rightblock.module.css";
import { TimeTask } from "../TimeTask";
// import { PomodoroDone } from "../PomodoroDone";

export function RightBlock() {
  return (
    <div className={styles.rightBlock}>
      <TimeTask />
      {/* <PomodoroDone text={"Помидорка выполнена."} /> */}
    </div>
  );
}
