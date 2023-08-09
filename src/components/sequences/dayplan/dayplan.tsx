import CheckBox from "./checkBox/checkBox";
import { useState } from "react";
import EditableList from "./editableList/editableList";
import { useNavigate } from "react-router-dom";


interface IProps {
  nextPage: string;
};

const DayPlan = ({ nextPage }: IProps) => {

  const Navigate = useNavigate();

  const [editMode, setEditMode] = useState<boolean>(false);

  const [planningSteps, setPlanningSteps] = useState<string[]>(() => {
    const storedSteps = JSON.parse(localStorage.getItem('planningSteps') || '[]');

    if (storedSteps.length === 0) {
      return [
        "Decide what to do after work",
        "Estimate hours available for work",
        "List today's tasks",
        "Define each of the tasks"
      ];
    } else {
      return storedSteps;
    }
  });

  const saveEditing = (steps: string[]) => {
    setPlanningSteps(steps);
    localStorage.setItem('planningSteps', JSON.stringify(steps));
    setEditMode(false);
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center min-h-screen max-w-lg">

        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-left">Plan Your Day</h1>

        {!editMode ?

          <>
            <div className="bg-gray-300 p-4 rounded">

              {planningSteps.map((step, index) => (
                <CheckBox
                  key={index}
                  label={step}
                />))}

            </div>

            <div className="space-x-4">
              <button onClick={() => Navigate(nextPage)}
                className="w-48 bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-2 rounded text-center mt-5"
              >
                ✅ Next
              </button>
              <button
                onClick={() => setEditMode(true)}
                className="w-48 bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-2 rounded text-center mt-5"
              >
                🖊️ Edit Steps
              </button>
            </div>
          </>

          :

          <EditableList initialList={planningSteps} saveList={saveEditing} />

        }

      </div >
    </div>

  );
}

export default DayPlan;
