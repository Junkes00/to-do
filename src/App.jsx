import { AddTask } from "./AddTask";
import styles from "./App.module.css";
import { Tasks } from "./Tasks";

function App() {
  const tasks = [
    {
      id: 1,
      title: "Do the dishes",
      completed: false,
    },
    {
      id: 2,
      title: "Make dinner",
      completed: false,
    },
  ];

  function handleAddNewTask() {}

  return (
    <div className={styles.App}>
      <AddTask />
      {tasks.map((task) => {
        return <Tasks task={task} />;
      })}
    </div>
  );
}

export default App;
