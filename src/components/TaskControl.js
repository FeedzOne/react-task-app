export const VisibilityControl = ({ isChecked, setShowCompleted, cleanTasks}) => {

    const handleDelete = () => {
        if(window.confirm('Are you sure you want to delete all completed tasks?')){
            cleanTasks()
        }
    }
    return (
        <div>
        <input type="checkbox" checked={isChecked} onChange={(e) => setShowCompleted(e.target.checked)} className="accent-color-[#00A2FF]"/>
          <label className="p-2">Show completed tasks</label>
          <button onClick={handleDelete}
          className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Delete done tasks</button>
      </div>
    )
}