import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface IProps {
  nextPage: string;
}

const WelcomeMessage = ({ nextPage }: IProps) => {
  const [header, setHeader] = useState<string>(localStorage.getItem('welcomeHeader') || "Startup Sequence");
  const [message, setMessage] = useState<string>(localStorage.getItem('welcomeMessage') || "Welcome to a new day!");

  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate(nextPage);
  };

  const handleHeaderChange = (e: React.ChangeEvent<HTMLHeadingElement>) => {
    setHeader(e.target.innerText);
    localStorage.setItem('welcomeHeader', e.target.innerText);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLParagraphElement>) => {
    setMessage(e.target.innerText);
    localStorage.setItem('welcomeMessage', e.target.innerText);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 contentEditable onBlur={handleHeaderChange} className="text-3xl font-bold text-gray-800 mb-5">{header}</h1>
      <p contentEditable onBlur={handleMessageChange} className="text-gray-500 mb-5">{message}</p>

      <div className="flex justify-center space-x-4">
        <button
          className="w-48 bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-2 rounded"
          onClick={goToNextPage}
        >
          Start
        </button>
        <button
          className="w-48 bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-2 rounded"
          onClick={() => navigate('/reflection-history')}
        >
          Reflection History
        </button>
      </div>

      <p className="fixed bottom-0 left-1/2 -translate-x-1/2 mb-5 font-serif text-gray-500">
        Tip: Press the message or header to edit your welcome message
      </p>
    </div>
  );
}

export default WelcomeMessage;
