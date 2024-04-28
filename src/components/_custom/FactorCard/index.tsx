import { Factors } from '@/core/domain/Factor';
import { FactorInfo } from '@/core/types/Factor';
import { Card } from '@components/ui/card';
import { StepEvent } from '@core/types/Step';
import { useState } from 'react';
import ActionBar from './ActionBar';
import EstimativeSlider from './EstimativeSlider';
import FactorDescription from './FactorDescription';

const factors = new Factors();

const FactorCard = () => {
  const [factorInfo, setFactorInfo] = useState<FactorInfo>(factors.factorInfo);

  const handleFactorChange = (event: StepEvent) => {
    factors.handleStepChange(event);
    setFactorInfo(() => factors.factorInfo);
  };

  return (
    <Card className='max-w-2xl mx-auto'>
      <FactorDescription factorInfo={factorInfo} />
      <EstimativeSlider
        currentValue={factorInfo.currentValue!}
        lowerEndLabel={factorInfo.lowerEndLabel!}
        upperEndLabel={factorInfo.upperEndLabel!}
      />
      <ActionBar
        hasNext={factorInfo.hasNext!}
        hasPrevious={factorInfo.hasPrev!}
        onEvent={(evt) => handleFactorChange(evt)}
      />
    </Card>
  );
};

export default FactorCard;
