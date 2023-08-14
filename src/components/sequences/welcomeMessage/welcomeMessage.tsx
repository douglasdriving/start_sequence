import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextareaAutosize from "react-textarea-autosize";

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

  const handleHeaderChange = (newHeader: string) => {
    setHeader(newHeader);
    localStorage.setItem('welcomeHeader', newHeader);
  };

  const handleMessageChange = (newMessage: string) => {
    setMessage(newMessage);
    localStorage.setItem('welcomeMessage', newMessage);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      
      <div className="max-w-lg">
        <TextareaAutosize
          onChange={e => handleHeaderChange(e.target.value)}
          value={header}
          minRows={1}
          className="w-full text-3xl font-bold text-gray-800 mb-5 text-center leading-10 resize-none"
        />

        <TextareaAutosize
          onChange={e => handleMessageChange(e.target.value)}
          value={message}
          minRows={1}
          className="w-full text-gray-500 mb-5 text-center resize-none"
        />

        <div className="flex justify-center space-x-4">
          <button
            className="w-48 bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-2 rounded"
            onClick={goToNextPage}
          >
            🔥 Start
          </button>
          <button
            className="w-48 bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-2 rounded"
            onClick={() => navigate('/reflection-history')}
          >
            💭 Reflection History
          </button>
        </div>
      </div>

      <p className="fixed bottom-0 left-1/2 -translate-x-1/2 mb-5 font-serif text-gray-500">
        Tip: Press the message or header to edit your welcome message
      </p>

    </div>
  );
}

export default WelcomeMessage;
