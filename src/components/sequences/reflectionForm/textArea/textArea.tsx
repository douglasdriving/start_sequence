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
      <textarea onChange={e => setValue(e.target.value)} value={value} />
    </>
  );
};

export default TextArea;