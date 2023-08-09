interface AddTaskButtonProps {
  setItems: (items: string[]) => void;
  items: string[];
}

function AddTaskButton({ setItems, items }: AddTaskButtonProps) {
  return (<button onClick={() => setItems([...items, ''])} className="bg-gray-500 hover:bg-gray-700 text-white font-bold p-4 rounded text-center flex-1">
    ➕ Add Task
  </button>);
}

export default AddTaskButton;