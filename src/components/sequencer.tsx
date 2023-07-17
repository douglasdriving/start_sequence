import React, { useState, useEffect } from 'react';
import Mantra from './sequences/mantra/mantra';
import ReflectionForm from './sequences/reflectionForm/reflectionForm';
import DayPlan from './sequences/dayplan/dayplan';
import WelcomeMessage from './sequences/welcomeMessage/welcomeMessage';

const Sequencer: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const incrementStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const resetStep = () => {
    setCurrentStep(0);
  };

  const steps = [WelcomeMessage, Mantra, ReflectionForm, DayPlan];

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

  if (currentStep < sequenceComponents.length) {
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
