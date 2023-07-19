import { useState } from 'react';
import { useNavigate } from 'react-router';

interface IProps {
  nextPage: string;
}

const Mantra = ({ nextPage }: IProps) => {
  const [mantra, setMantra] = useState<string>(localStorage.getItem('mantra') || "Your Mantra");

  const convertNewlinesToBreaks = (text: string) => {
    return { __html: text.replace(/\n/g, '<br/>') };
  }

  const handleMantraChange = (e: React.ChangeEvent<HTMLParagraphElement>) => {
    setMantra(e.target.innerText);
    localStorage.setItem('mantra', e.target.innerText);
  };

  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center min-h-screen px-64">
      <h1 className="text-3xl font-bold text-gray-800 mb-5 text-left">Mantra</h1>
      <p className="text-gray-700 mb-5" contentEditable onBlur={handleMantraChange} dangerouslySetInnerHTML={convertNewlinesToBreaks(mantra)}></p>
      <button
        className="w-48 bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-2 rounded"
        onClick={() => navigate(nextPage)}>
        Next
      </button>
      <p className="fixed bottom-0 left-1/2 -translate-x-1/2 mb-5 font-serif text-gray-500">
        Tip: Press the mantra to edit it!
      </p>
    </div>
  );
}

export default Mantra;