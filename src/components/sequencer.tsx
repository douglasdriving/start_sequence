import React, { useState } from 'react';
import Mantra from './sequences/mantra/mantra';
import ReflectionForm from './sequences/reflectionForm/reflectionForm';
import DayPlan from './sequences/dayplan/dayplan';
import WelcomeMessage from './sequences/welcomeMessage/welcomeMessage';
import EndMessage from './sequences/endMessage/endMessage';

const Sequencer: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const incrementStep = () => {
    setCurrentStep(currentStep + 1);
    if (currentStep >= steps.length - 1) {
      setCurrentStep(0);
    }
  };

  const steps = [WelcomeMessage, Mantra, ReflectionForm, DayPlan, EndMessage];

  const sequenceComponents = React.useMemo(
    () => steps.map((StepComponent) => (
      <StepComponent handleClick={incrementStep} />
    )),
    [incrementStep]
  );

  return (
    <div>{sequenceComponents[currentStep]}</div>
  );
};

export default Sequencer;
