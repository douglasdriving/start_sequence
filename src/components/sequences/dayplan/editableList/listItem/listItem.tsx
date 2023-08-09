interface ListItemProps {
  index: number;
  item: string;
  handleInputChange: (index: number, newValue: string) => void;
  setInputRef: (element: HTMLInputElement | null, index: number) => void;
  removeItem: (index: number) => void;
}

function ListItem({ index, item, handleInputChange, setInputRef, removeItem } : ListItemProps) {
  return (<div className="flex flex-row justify-between mb-2 bg-white p-2 rounded ">
    <input className="text-xl w-96 max-w-screen" value={item} onChange={event => handleInputChange(index, event.target.value)} ref={el => setInputRef(el, index)} />
    <button onClick={() => removeItem(index)} className="text-xl rounded hover:bg-red-300">
      🗑️
    </button>
  </div>);
}

export default ListItem;