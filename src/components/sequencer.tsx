import React from 'react';
import ExampleComponent from './exampleComponent';

const Sequencer: React.FC = () => {


  const [currentStep, setCurrentStep] = React.useState<number>(-1);

  const incrementStep = () => {
    setCurrentStep(currentStep + 1);
  }

  const resetStep = () => {
    setCurrentStep(-1);
  }

  const sequenceComponents: Array<React.ReactElement> = [
    <ExampleComponent handleClick={incrementStep} />,
  ];

  return (
    <div>

      {currentStep === -1 &&
        <>
          <p>Sequencer</p>
          <button onClick={incrementStep}>Start</button>
        </>
      }

      {(currentStep > -1) && (currentStep < sequenceComponents.length) &&
        <>
          {sequenceComponents[currentStep]}
        </>
      }

      {(currentStep === sequenceComponents.length) &&
        <>
          <p>Done!</p>
          <button onClick={resetStep}>Restart</button>
        </>
      }

    </div>
  );
}

export default Sequencer;
