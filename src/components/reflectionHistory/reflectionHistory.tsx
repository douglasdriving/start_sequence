import ReflectionI from "../../interfaces/reflection";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReflectionHistory = () => {

  const reflections: ReflectionI[] = JSON.parse(localStorage.getItem('reflections') || '[]');
  const [reflectionIndex, setReflectionIndex] = useState<number>(0);
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center w-screen h-screen p-16">
      <div className="flex flex-col w-1/2 h-full">

        <h1 className="text-3xl font-bold mb-4">💭 Reflection History</h1>

        <div className="flex flex-row flex-1 h-5/6 border-2 border-black rounded">

          <div className="overflow-y-auto direction-rtl">
            {reflections.map((reflection, index) => (
              <div key={index}>
                <button onClick={() => setReflectionIndex(index)}
                  className={
                    reflectionIndex === index ?
                      'p-2 bg-gray-500 text-white font-bold' :
                      'p-2 hover:bg-gray-300 font-bold'
                  }
                >
                  {reflection.date}
                </button>
              </div>
            ))}
          </div>

          {reflectionIndex !== null &&
            <p
              className="overflow-y-auto p-4 text-left bg-gray-500 text-white flex-1">
              {reflections[reflectionIndex].text.split('\n').map((line, index) => (
                <span key={index}>{line}<br /></span>
              ))}
            </p>
          }

        </div>

        <button
          onClick={() => navigate('/start_sequence')}
          className="w-max bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-3 rounded text-center mt-4"
        >
          🏠 Home
        </button>

      </div>
    </div>
  );
}

export default ReflectionHistory;
