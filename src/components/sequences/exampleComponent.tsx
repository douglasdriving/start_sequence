interface IProps {
  handleClick: () => void;
}

const WelcomeMessage = ({ handleClick }: IProps) => {
  return (
    <div>
      <h1>Sequence X</h1>
    </div>
  );
}

export default WelcomeMessage;
