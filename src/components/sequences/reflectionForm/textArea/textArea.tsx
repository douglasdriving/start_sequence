import TextareaAutosize from "react-textarea-autosize";

interface ITextareaProps {
  label: string,
  hint: string,
  value: string,
  setValue: (value: string) => void,
};

const TextArea = ({ label, hint, value, setValue }: ITextareaProps) => {

  return (
    <>
      <h2 className="text-xl font-bold text-gray-800 mb-1 text-left">{label}</h2>
      <p>{hint}</p>
      <TextareaAutosize
        onChange={e => setValue(e.target.value)}
        value={value}
        minRows={3}
        style={{ width: "100%", resize: "none" }}
        className="w-full rounded bg-gray-300 mt-2 mb-6 p-2"
      />
    </>
  );
};

export default TextArea;