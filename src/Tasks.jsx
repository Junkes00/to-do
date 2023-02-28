import { Trash } from "phosphor-react";
import styles from "./Tasks.module.css";

export function Tasks({ task }) {
  return (
    <div className={styles.content}>
      <strong>{task.title}</strong>
      <Trash />
    </div>
  );
}
