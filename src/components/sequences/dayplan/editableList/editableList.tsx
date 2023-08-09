import { useState, useEffect, useRef } from "react";
import ListItem from "./listItem/listItem";
import AddTaskButton from "./addTaskButton/addTaskButton";
import SaveButton from "./saveButton/saveButton";

interface IProps {
  initialList: string[];
  saveList: (list: string[]) => void;
}

const EditableList = ({ initialList, saveList }: IProps) => {

  const [items, setItems] = useState<string[]>(initialList);
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const setInputRef = (element: HTMLInputElement | null, index: number) => {
    if (!element) return;
    inputRefs.current[index] = element;
  };

  const removeItem = (indexToRemove: number) => {
    const newItemList = items.filter((_, index) => index !== indexToRemove);
    setItems(newItemList);
  };

  const handleInputChange = (index: number, newValue: string) => {
    setItems(items.map((item, itemIndex) => itemIndex === index ? newValue : item));
  };

  useEffect(() => {

    // Focus on the last input field if items length changes
    const lastInputRef = inputRefs.current[items.length - 1];
    if (lastInputRef) {
      lastInputRef.focus();
    }

  }, [items.length]);

  return (
    <>
      <div className="bg-gray-300 rounded p-4">
        {items.map((item, index) => (
          <ListItem
            index={index}
            item={item}
            handleInputChange={handleInputChange}
            setInputRef={setInputRef}
            removeItem={removeItem}
            key={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-center space-x-4 mt-4">
        <AddTaskButton setItems={setItems} items={items} />
        <SaveButton saveList={saveList} items={items} />
      </div>
    </>
  );
};

export default EditableList;
