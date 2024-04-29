/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import { FactorInfo, FactorsResults } from '@/core/types/Factor';
import { Factors } from '@/core/usecases/Factor';
import { StepEvent } from '@core/types/Step';

import { Card } from '@components/ui/card';
import ActionBar from './ActionBar';
import EstimativeSlider from './EstimativeSlider';
import FactorDescription from './FactorDescription';

const factors = new Factors();

type PropTypes = {
  onFactorChange: (evt: FactorsResults) => void;
};

const FactorCard = ({ onFactorChange }: PropTypes) => {
  const [factorInfo, setFactorInfo] = useState<FactorInfo>(factors.factorInfo);

  const handleFactorChange = (event: StepEvent) => {
    factors.handleStepChange(event);
    setFactorInfo(() => factors.factorInfo);
  };

  useEffect(() => {
    return () => {
      onFactorChange({
        factors: { ...factors.factors },
        showResults: false
      });
      factors.resetFactors();
      setFactorInfo(() => factors.factorInfo);
    };
  }, []);

  useEffect(() => {
    onFactorChange({
      factors: factors.factors,
      showResults: !factorInfo.hasNext
    });
  }, [factorInfo]);

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
