import { Card } from '@/components/ui/card';
import { useState } from 'react';
import ActionBar from './ActionBar';
import EstimativeSlider from './EstimativeSlider';
import StepInfo from './StepInfo';

const MIN_STEP = 1;
const MAX_STEP = 3;

const StepCard = () => {
  const [step, setStep] = useState(1);

  const hasPrevious = step > MIN_STEP;
  const hasNext = step < MAX_STEP;

  const handleStepChange = (event: string): void => {
    if (event === 'next') {
      setStep((prev) => ++prev);
      return;
    }

    if (event === 'prev') {
      setStep((prev) => --prev);
      return;
    }
  };

  return (
    <Card className='max-w-2xl mx-auto'>
      <StepInfo currentStep={step} />
      <EstimativeSlider
        currentValue={0}
        lowerEndLabel='Completely unaware'
        upperEndLabel='Completely aware'
      />
      <ActionBar
        hasNext={hasNext}
        hasPrevious={hasPrevious}
        onEvent={(evt) => handleStepChange(evt)}
      />
    </Card>
  );
};

export default StepCard;
