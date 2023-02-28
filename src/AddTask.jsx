import styles from "./AddTask.module.css";

export function AddTask() {
  return (
    <div className={styles.AddTask}>
      <input type="text" />
      <button type="submit">Add task</button>
    </div>
  );
}
