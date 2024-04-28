import { useState } from 'react';

import { Factors } from '@/core/domain/Factor';
import { FactorInfo } from '@/core/types/Factor';
import { StepEvent } from '@core/types/Step';

import { Card } from '@components/ui/card';
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

  const handleValueChange = (value: number) => {
    factors.updateFactorInfoValue(value);
  };

  return (
    <Card className='max-w-2xl mx-auto'>
      <FactorDescription factorInfo={factorInfo} />
      <EstimativeSlider
        currentValue={factorInfo.currentValue!}
        lowerEndLabel={factorInfo.lowerEndLabel!}
        upperEndLabel={factorInfo.upperEndLabel!}
        onEvent={(evt) => handleValueChange(evt)}
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
