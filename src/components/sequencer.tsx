import React, { useState, useEffect } from 'react';
import Mantra from './sequences/mantra/mantra';
import ReflectionForm from './sequences/reflectionForm/reflectionForm';
import DayPlan from './sequences/dayplan/dayplan';

const Sequencer: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(-1);

  const incrementStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const resetStep = () => {
    setCurrentStep(-1);
  };

  const steps = [Mantra, ReflectionForm, DayPlan];

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
        <h1>Startup Sequence</h1>
        <p>Welcome to a new day! Get yourself ready by running through the startup sequence</p>
        <button onClick={incrementStep}>Start</button>
      </>
    );
  } else if (currentStep < sequenceComponents.length) {
    content = sequenceComponents[currentStep];
  } else {
    content = (
      <>
        <p>Startup sequence complete! Your day has been initiated</p>
        <button onClick={resetStep}>Start a new sequence</button>
      </>
    );
  }

  return <div>{content}</div>;
};

export default Sequencer;
