import { useState, useEffect } from "react";
import "./App.css";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import { VisibilityControl } from "./components/TaskControl";
import { Footer } from "./components/Footer";

function App() {
  const [tasksItems, setTasksItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  function createNewTask(taskName) {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    }
  }

  const toggleTask = task => {
    setTasksItems(
      tasksItems.map(t => (t.name === task.name) ? {...t, done: !t.done}: t)
    )
  }
  
  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if(data) {
      setTasksItems(JSON.parse(data))
    }
  }, [])

  const cleanTasks = () => {
    setTasksItems(tasksItems.filter(task => !task.done))
    setShowCompleted(false)
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

  return (
    <div className="App container mx-auto flex flex-col justify-center w-[90%] md:w-[70%] lg:w-[60%] xl:w-[55%] 2xl:w-[50%]">
      <p className="text-5xl text-feedz mt-5">Task App using Local Storage and React</p>
      <TaskCreator createNewTask={createNewTask} />
      <TaskTable tasks={tasksItems} toggleTask={toggleTask} />
      <VisibilityControl 
        isChecked={showCompleted}
        setShowCompleted ={(checked) => setShowCompleted(checked)}
        cleanTasks={cleanTasks}
      />
      {
        showCompleted === true ? (
          <TaskTable tasks={tasksItems} toggleTask={toggleTask} showCompleted={showCompleted}/>
        ): null
      }
      <Footer />
    </div>
  );
}

export default App;
