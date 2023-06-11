import { useState } from "react";

export const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName);
    setNewTaskName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center mt-4 mb-5">
        <div>
          <input
          type="text"
          id="first_name"
          placeholder="Enter a new Task"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-l-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-100 dark:border-gray-500 dark:text-gray-400 h-10"
        />
        </div>
        
        <div>
          <button class="py-3 px-4 inline-flex flex-shrink-0 justify-center items-center gap-2 rounded-r-md border border-transparent font-semibold bg-[#00A2FF] text-white hover:bg-feedz-dark focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm h-10">
          Save Task
          <svg
            aria-hidden="true"
            class="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        </div>
        
      </div>
    </form>
  );
};
