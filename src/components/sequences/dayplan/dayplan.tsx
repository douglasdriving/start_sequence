import CheckBox from "./checkBox/checkBox";

interface IProps {
  handleClick: () => void;
};

const DayPlan = ({ handleClick }: IProps) => {
  return (
    <form onSubmit={handleClick} className="reflectionForm">
      <h1>Plan Your Day</h1>
      <CheckBox label="Decide what to do after work" />
      <CheckBox label="Estimate hours available for work" />
      <CheckBox label="List today's tasks" />
      <CheckBox label="Define each of the tasks" />
      <button type="submit" >Next</button>
    </form >
  );
}

export default DayPlan;
