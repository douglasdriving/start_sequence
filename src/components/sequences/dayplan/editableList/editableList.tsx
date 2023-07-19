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
          <div style={{ display: 'flex', flexDirection: 'row' }} key={index}>
            <input
              value={item}
              onChange={(event) => handleInputChange(index, event.target.value)}
              style={{ width: '100%' }}
            />
            <button onClick={() => removeItem(index)}>🗑️</button>
          </div>
        ))}

      </div>

      <div>
        <button onClick={() => setItems([...items, ''])}>➕</button>
      </div>
      <button onClick={() => { saveList(items) }}>Save</button>
    </>
  );
};

export default EditableList;

