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
      <h2>{label}</h2>
      <p>{hint}</p>
      <TextareaAutosize
        onChange={e => setValue(e.target.value)}
        value={value}
        minRows={3}
        style={{ width: "100%", resize: "none" }}
      />
    </>
  );
};

export default TextArea;