import { useState } from "react";

interface IProps {
  handleClick: () => void;
}

const WelcomeMessage = ({ handleClick }: IProps) => {
  const [header, setHeader] = useState<string>(localStorage.getItem('welcomeHeader') || "Startup Sequence");
  const [message, setMessage] = useState<string>(localStorage.getItem('welcomeMessage') || "Welcome to a new day!");

  const handleHeaderChange = (e: React.ChangeEvent<HTMLHeadingElement>) => {
    setHeader(e.target.innerText);
    localStorage.setItem('welcomeHeader', e.target.innerText);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLParagraphElement>) => {
    setMessage(e.target.innerText);
    localStorage.setItem('welcomeMessage', e.target.innerText);
  };

  return (
    <div>
      <h1 contentEditable onBlur={handleHeaderChange}>{header}</h1>
      <p contentEditable onBlur={handleMessageChange}>{message}</p>
      <button onClick={handleClick}>Start</button>
      <p style={{ position: 'fixed', bottom: '0', left: '50%', transform: 'translateX(-50%)' }}>
        <i>Tip: Press the message or header to edit your welcome message</i>
      </p>
    </div>
  );
}

export default WelcomeMessage;
