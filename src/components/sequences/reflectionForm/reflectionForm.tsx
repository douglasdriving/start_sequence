import { useState, useRef, useCallback } from 'react';
import TextArea from './textArea/textArea';

interface IProps {
  handleClick: () => void;
};

const ReflectionForm = ({ handleClick }: IProps) => {
  const [gratitudeText, setGratitudeText] = useState<string>("");
  const [accomplishmentText, setAccomplishmentText] = useState<string>("");
  const [problemText, setProblemText] = useState<string>("");
  const downloadLink = useRef<HTMLAnchorElement | null>(null);

  const handleDownload = useCallback(() => {

    if (!gratitudeText || !accomplishmentText || !problemText) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    const today: string = new Date().toLocaleDateString();
    const file = new Blob(
      [
        `Daily Reflection
${today}

Gratitude:
${gratitudeText}

Accomplishments:
${accomplishmentText}

Problems:
${problemText}
        `
      ]
      ,
      { type: 'text/plain' }
    );

    if (downloadLink.current === null) {
      alert("Something went wrong while preparing your download.");
      return;
    }

    downloadLink.current.href = URL.createObjectURL(file);
    downloadLink.current.download = 'reflection' + today + ".txt";
    handleClick();

  }, [gratitudeText, accomplishmentText, problemText, handleClick]);

  return (
    <form className="reflectionForm">

      <h1>Daily Reflection</h1>

      <TextArea label="Gratitude" hint="What are you grateful for today?" value={gratitudeText} setValue={setGratitudeText} />
      <TextArea label="Accomplishments" hint="What have you accomplished recently?" value={accomplishmentText} setValue={setAccomplishmentText} />
      <TextArea label="Problems" hint="What problems have you encountered recently?" value={problemText} setValue={setProblemText} />

      <hr />

      <a
        href="#"
        onClick={handleDownload}
        ref={downloadLink}
        role='button'
        type='submit'
      >
        Submit
      </a>
    </form>
  );
}

export default ReflectionForm;
