import { useState, useEffect } from "react";

interface IProps {
  initialList: string[];
  saveList: (list: string[]) => void;
}

const EditableList = ({ initialList, saveList }: IProps) => {

  const [items, setItems] = useState<string[]>(initialList);
  const [inputWidth, setInputWidth] = useState<number>(10);

  const removeItem = (indexToRemove: number) => {
    const newItemList = items.filter((_, index) => index !== indexToRemove);
    setItems(newItemList);
  };

  const handleInputChange = (index: number, newValue: string) => {
    setItems(items.map((item, itemIndex) => itemIndex === index ? newValue : item));
    if (newValue.length > inputWidth) {
      setInputWidth(newValue.length);
    }
  };


  useEffect(() => {

    //update width of input
    let newInputWidth = 0;
    items.forEach((item) => {
      if (item.length > newInputWidth) {
        newInputWidth = item.length;
      }
    }
    );
    setInputWidth(newInputWidth);

    //focus on last input
    if (items.length > initialList.length) {
      const lastItemIndex = items.length - 1;
      const lastItemInput = document.getElementById(`item-${lastItemIndex}`);
      lastItemInput?.focus();
    }
  }, [items, initialList.length]);

  return (
    <>
      <div className="bg-gray-300 rounded p-4">

        {items.map((item, index) => (
          <div className="flex flex-row justify-between mb-2 bg-white p-2 rounded " key={index}>
            <input
              className="text-xl max-w-sm flex-1"
              size={inputWidth + 2}
              value={item}
              onChange={(event) => handleInputChange(index, event.target.value)}
              id={`item-${index}`}
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
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold p-4 rounded text-center flex-1"
        >
          ➕ Add Task
        </button>
        <button
          onClick={() => { saveList(items) }}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold p-4 rounded text-center flex-1"
        >
          💾 Save
        </button>
      </div>

    </>
  );
};

export default EditableList;
