import CheckBox from "./checkBox/checkBox";
import { useState } from "react";
import EditableList from "./editableList/editableList";

interface IProps {
  handleClick: () => void;
};

const DayPlan = ({ handleClick }: IProps) => {

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
    <div className="reflectionForm">

      <h1>Plan Your Day</h1>

      {!editMode ?

        <>
          {planningSteps.map((step, index) => (
            <CheckBox
              key={index}
              label={step}
            />))}
          <button onClick={handleClick} >Next</button>
          <button onClick={() => setEditMode(true)}>Edit Steps</button>
        </>

        :

        <EditableList initialList={planningSteps} saveList={saveEditing} />

      }

    </div >
  );
}

export default DayPlan;
