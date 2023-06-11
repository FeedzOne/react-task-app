import { TaskRow } from "./TaskRow";
export const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {
  const taskTableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
      ));
  };

  return (
    <div class="overflow-x-auto shadow-md sm:rounded-lg my-5">
      <table className="w-full">
        <thead className="text-xs text-gray-700 uppercase bg-feedz dark:bg-feedz dark:text-white h-10">
          <tr>
            <th>Task Name</th>
            <th>Is completed?</th>
          </tr>
        </thead>
        <tbody className="bg-white border-b dark:bg-gray-100 dark:border-gray-700">
          {taskTableRows(showCompleted)}
        </tbody>
      </table>
    </div>
  );
};
