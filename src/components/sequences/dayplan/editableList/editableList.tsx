import { useState } from "react";

interface IProps {
  initialList: string[];
  saveList: (list: string[]) => void;
}

const EditableList = ({ initialList, saveList }: IProps) => {
  const [items, setItems] = useState<string[]>(initialList);

  const removeItem = (indexToRemove: number) => {
    const newItemList = items.filter((_, index) => index !== indexToRemove);
    setItems(newItemList);
  };

  const handleInputChange = (index: number, newValue: string) => {
    setItems(items.map((item, itemIndex) => itemIndex === index ? newValue : item));
  };

  return (
    <>
      <div className="bg-gray-300 p-4 rounded">

        {items.map((item, index) => (
          <div className="flex flex-row justify-between mb-2 bg-white p-2 rounded" key={index}>
            <input
              className="w-auto text-xl"
              size={item.length > 0 ? item.length : 1}
              value={item}
              onChange={(event) => handleInputChange(index, event.target.value)}
            />
            <button
              onClick={() => removeItem(index)}
              className="text-xl rounded hover:bg-red-300"
            >
              🗑️
            </button>
          </div>
        ))}

      </div>

      <div className="flex flex-row justify-center space-x-4 mt-4">
        <button
          onClick={() => setItems([...items, ''])}
          className="text-xl bg-gray-300 p-4 rounded hover:bg-gray-400 flex-1 font-bold"
        >
          ➕ Add Task
        </button>
        <button
          onClick={() => { saveList(items) }}
          className="text-xl bg-gray-300 p-4 rounded hover:bg-gray-400 flex-1 font-bold"
        >
          💾 Save
        </button>
      </div>

    </>
  );
};

export default EditableList;

