import { useState, useRef, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import TextArea from './textArea/textArea';
import ReflectionI from '../../../interfaces/reflection';

interface IProps {
  nextPage: string;
};

const ReflectionForm = ({ nextPage }: IProps) => {
  const [gratitudeText, setGratitudeText] = useState<string>("");
  const [accomplishmentText, setAccomplishmentText] = useState<string>("");
  const [problemText, setProblemText] = useState<string>("");
  const downloadLink = useRef<HTMLAnchorElement | null>(null);
  const navigate = useNavigate();

  const saveReflection = useCallback(() => {

    if (!gratitudeText || !accomplishmentText || !problemText) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    const today: string = new Date().toLocaleDateString();

    const textToSave: string = (`Daily Reflection
    ${today}
    
    Gratitude:
    ${gratitudeText}
    
    Accomplishments:
    ${accomplishmentText}
    
    Problems:
    ${problemText}
            `);

    //download it
    // const file = new Blob(
    //   [textToSave]
    //   ,
    //   { type: 'text/plain' }
    // );

    // if (downloadLink.current === null) {
    //   alert("Something went wrong while preparing your download.");
    //   return;
    // }

    // downloadLink.current.href = URL.createObjectURL(file);
    // downloadLink.current.download = 'reflection' + today + ".txt";

    const reflections: ReflectionI[] = JSON.parse(localStorage.getItem('reflections') || '[]');
    reflections.push({ date: today, text: textToSave });
    localStorage.setItem('reflections', JSON.stringify(reflections));

    navigate(nextPage);

  }, [gratitudeText, accomplishmentText, problemText, navigate, nextPage]);

  return (
    <form className="reflectionForm">

      <h1>Daily Reflection</h1>

      <TextArea
        label="Gratitude"
        hint="What are you grateful for today?"
        value={gratitudeText}
        setValue={setGratitudeText}
      />
      <TextArea
        label="Accomplishments"
        hint="What have you accomplished recently?"
        value={accomplishmentText}
        setValue={setAccomplishmentText}
      />
      <TextArea
        label="Problems"
        hint="What problems have you encountered recently?"
        value={problemText}
        setValue={setProblemText}
      />

      <hr />

      <a
        href="#"
        onClick={saveReflection}
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
