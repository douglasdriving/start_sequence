import React, { useState, useEffect } from 'react';
import Mantra from './sequences/mantra/mantra';

const Sequencer: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(-1);

  const incrementStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const resetStep = () => {
    setCurrentStep(-1);
  };

  const steps = [Mantra];

  const sequenceComponents = React.useMemo(
    () => steps.map((StepComponent) => (
      <StepComponent handleClick={incrementStep} />
    )),
    [incrementStep]
  );

  useEffect(() => {
    if (currentStep > sequenceComponents.length) {
      resetStep();
    }
  }, [currentStep, sequenceComponents.length]);

  let content;

  if (currentStep === -1) {
    content = (
      <>
        <p>Sequencer</p>
        <button onClick={incrementStep}>Start</button>
      </>
    );
  } else if (currentStep < sequenceComponents.length) {
    content = sequenceComponents[currentStep];
  } else {
    content = (
      <>
        <p>Done!</p>
        <button onClick={resetStep}>Restart</button>
      </>
    );
  }

  return <div>{content}</div>;
};

export default Sequencer;
