import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EndMessage = () => {
  const [message, setMessage] = useState<string>(localStorage.getItem('endMessage') || "Startup sequence completed!");

  const handleMessageChange = (e: React.ChangeEvent<HTMLParagraphElement>) => {
    setMessage(e.target.innerText);
    localStorage.setItem('endMessage', e.target.innerText);
  };

  const navigate = useNavigate();

  return (
    <div>
      <p contentEditable onBlur={handleMessageChange}>{message}</p>
      <button onClick={() => navigate('/start_sequence')}>Restart Sequence</button>
      <p style={{ position: 'fixed', bottom: '0', left: '50%', transform: 'translateX(-50%)' }}>
        <i>Tip: Press the message to edit your final message</i>
      </p>
    </div>
  );
}

export default EndMessage;
