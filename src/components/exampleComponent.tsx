interface IProps {
  handleClick: () => void;
}

const ExampleComponent = ({ handleClick }: IProps) => {
  return (
    <div>
      <h1>Sequence X</h1>
    </div>
  );
}

export default ExampleComponent;
