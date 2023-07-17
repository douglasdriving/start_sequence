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
    <div className="mantra">
      <h1>Mantra</h1>
      <p contentEditable onBlur={handleMantraChange} dangerouslySetInnerHTML={convertNewlinesToBreaks(mantra)}></p>
      <button onClick={() => navigate(nextPage)}>Next</button>
      <p style={{ position: 'fixed', bottom: '0', left: '50%', transform: 'translateX(-50%)' }}>
        <i>Tip: Press the mantra to edit it!</i>
      </p>
    </div>
  );
}

export default Mantra;