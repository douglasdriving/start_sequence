interface IProps {
  label: string;
}

const CheckBox = ({ label }: IProps) => {

  return (
    <div className="inputWithLabel">
      <input type='checkbox' />
      <p>{label}</p>
    </div>
  );

}

export default CheckBox;