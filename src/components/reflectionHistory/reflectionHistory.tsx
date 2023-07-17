import ReflectionI from "../../interfaces/reflection";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

const ReflectionHistory = () => {

  const reflections: ReflectionI[] = JSON.parse(localStorage.getItem('reflections') || '[]');
  const [reflectionIndex, setReflectionIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleClick = (index: number) => {
    if (index === reflectionIndex) {
      setReflectionIndex(null);
      return;
    }
    setReflectionIndex(index);
  };

  return (
    <div>

      <h1>Reflections</h1>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>

        <div>
          {reflections.map((reflection, index) => (
            <div key={index}>
              <button onClick={() => handleClick(index)}
                style={{
                  backgroundColor: reflectionIndex === index ? 'gray' : 'white',
                  color: reflectionIndex === index ? 'white' : 'black',
                }}>
                {reflection.date}
              </button>
            </div>
          ))}
        </div>

        {reflectionIndex !== null &&
          <p style={{ border: '2px solid black', padding: 10, margin: 10, textAlign: 'left' }}>
            {reflections[reflectionIndex].text.split('\n').map((line, index) => (
              <span key={index}>{line}<br /></span>
            ))}
          </p>
        }

      </div>

      <button onClick={() => navigate('/')}>Home</button>

    </div>
  );
}

export default ReflectionHistory;
