import { useNavigate } from "react-router-dom";

const EndMessage = () => {

  const navigate = useNavigate();

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center min-h-screen items-center">

        <h1 className="w-full text-3xl font-bold text-center resize-none">
          ⭐ Day Completed ⭐
        </h1>

        <p className="text-xl mt-5">
          Now it's time to let go of the day and relax.
          Make sure to enjoy your free time.
          Be proud of your accomplishments today.
        </p>

        <button
          className="w-max bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-3 rounded text-center mt-8"
          onClick={() => navigate('/start_sequence')}>
          🏠 Back to Frontpage
        </button>

        <p className="fixed bottom-5 left-1/2 transform -translate-x-1/2 text-center text-gray-500">
          <i>Tip: Press the message to edit your final message</i>
        </p>
      </div>
    </div>
  );
}

export default EndMessage;
