interface SaveButtonProps {
  saveList: (list: string[]) => void;
  items: string[];
}

function SaveButton({ saveList, items }: SaveButtonProps) {
  return (<button onClick={() => {
    saveList(items);
  }} className="bg-gray-500 hover:bg-gray-700 text-white font-bold p-4 rounded text-center flex-1">
    💾 Save
  </button>);
}

export default SaveButton;