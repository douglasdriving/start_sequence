import { useState, useCallback } from 'react';
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
  const navigate = useNavigate();

  const saveReflection = useCallback(() => {

    if (!gratitudeText || !accomplishmentText || !problemText) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    const today: string = new Date().toLocaleDateString();

    const textToSave: string = (
      `Gratitude:
    ${gratitudeText}
    
    Accomplishments:
    ${accomplishmentText}
    
    Problems:
    ${problemText}
            `);

    const reflections: ReflectionI[] = JSON.parse(localStorage.getItem('reflections') || '[]');
    reflections.push({ date: today, text: textToSave });
    localStorage.setItem('reflections', JSON.stringify(reflections));

    navigate(nextPage);

  }, [gratitudeText, accomplishmentText, problemText, navigate, nextPage]);

  return (
    <form className="flex flex-col justify-center min-h-screen px-80">

      <h1 className="text-3xl font-bold text-gray-800 mb-5 text-left">Daily Reflection</h1>

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

      <div className="space-x-4">

        <button
          onClick={saveReflection}
          type='submit'
          className="w-48 bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-2 rounded text-center mt-5"
        >
          ✅ Submit
        </button>

        <button
          onClick={() => navigate(nextPage)}
          type='submit'
          className="w-48 bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-2 rounded text-center mt-5"
        >
          ❌ Skip
        </button>

      </div>

    </form>
  );
}

export default ReflectionForm;
