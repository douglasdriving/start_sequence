import ReflectionI from "../../interfaces/reflection";
import { useState } from "react";

const ReflectionHistory = () => {

  const reflections: ReflectionI[] = JSON.parse(localStorage.getItem('reflections') || '[]');
  const [reflectionIndex, setReflectionIndex] = useState<number | null>(null);

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

      <div style={{ display: 'flex', flexDirection: 'row' }}>

        <div>
          {reflections.map((reflection, index) => (
            <div key={index}>
              <button onClick={() => handleClick(index)}
                style={{
                  backgroundColor: reflectionIndex === index ? 'black' : 'white',
                  color: reflectionIndex === index ? 'white' : 'black',
                }}>
                {reflection.date}
              </button>
            </div>
          ))}
        </div>

        {reflectionIndex !== null &&
          <p style={{ border: '2px solid black', padding: 10, margin: 10 }}>
            {reflections[reflectionIndex].text}
          </p>
        }

      </div>

    </div>
  );
}

export default ReflectionHistory;
