interface IProps {
  handleClick: () => void;
}

const ExampleComponent: React.FC<IProps> = ({ handleClick }) => {
  return (
    <div style={{ border: '2px solid red', width: 200, height: 200 }}>
      <p>This is an example component</p>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default ExampleComponent;
