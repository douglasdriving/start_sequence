import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextareaAutosize from "react-textarea-autosize";

const EndMessage = () => {
  const [message, setMessage] = useState<string>(localStorage.getItem('endMessage') || "Startup sequence completed!");

  const handleMessageChange = (newMessage: string) => {
    setMessage(newMessage);
    localStorage.setItem('endMessage', newMessage);
  };

  const navigate = useNavigate();

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center min-h-screen items-center">

        <TextareaAutosize
          onChange={e => handleMessageChange(e.target.value)}
          value={message}
          minRows={1}
          className="w-full text-2xl font-bold text-center resize-none"
        />

        <button
          className="w-max bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-3 rounded text-center mt-8"
          onClick={() => navigate('/start_sequence')}>
          🔄 Restart
        </button>

        <p className="fixed bottom-5 left-1/2 transform -translate-x-1/2 text-center text-gray-500">
          <i>Tip: Press the message to edit your final message</i>
        </p>
      </div>
    </div>
  );
}

export default EndMessage;
