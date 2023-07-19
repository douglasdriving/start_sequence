interface IProps {
  label: string;
}

const CheckBox = ({ label }: IProps) => {

  return (
    <div className="flex row mb-2">
      <input type='checkbox' className="mr-2"/>
      <p className="text-xl">{label}</p>
    </div>
  );

}

export default CheckBox;