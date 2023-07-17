import { useState } from "react";

interface IProps {
  handleClick: () => void;
}

const EndMessage = ({ handleClick }: IProps) => {
  const [message, setMessage] = useState<string>(localStorage.getItem('endMessage') || "Startup sequence completed!");

  const handleMessageChange = (e: React.ChangeEvent<HTMLParagraphElement>) => {
    setMessage(e.target.innerText);
    localStorage.setItem('endMessage', e.target.innerText);
  };

  return (
    <div>
      <p contentEditable onBlur={handleMessageChange}>{message}</p>
      <button onClick={handleClick}>Restart Sequence</button>
      <p style={{ position: 'fixed', bottom: '0', left: '50%', transform: 'translateX(-50%)' }}>
        <i>Tip: Press the message to edit your final message</i>
      </p>
    </div>
  );
}

export default EndMessage;
