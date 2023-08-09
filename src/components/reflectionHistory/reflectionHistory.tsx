import ReflectionI from "../../interfaces/reflection";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex flex-col">

        <h1 className="text-3xl font-bold mb-1">Reflections</h1>

        <div className="flex flex-row">

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
            <p 
            className="p-2 m-2 text-left bg-gray-500 text-white w-96 mt-0">
              {reflections[reflectionIndex].text.split('\n').map((line, index) => (
                <span key={index}>{line}<br /></span>
              ))}
            </p>
          }

        </div>

        <button onClick={() => navigate('/start_sequence')}>Home</button>

      </div>
    </div>
  );
}

export default ReflectionHistory;
