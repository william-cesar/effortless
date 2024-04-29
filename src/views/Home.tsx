import { useState } from 'react';

import { Factors } from '@core/domain/usecases/Factor';
import { StoryPoints } from '@core/domain/usecases/StoryPoints';
import { FactorsResults } from '@core/types/Factor';
import { FactorsValues } from '@core/types/StoryPoints';

import FactorCard from '@components/_custom/FactorCard';
import GetResults from '@components/_custom/GetResults';
import Introduction from '@components/_custom/Introduction';
import StoryPointsCard from '@components/_custom/StoryPointsCard';

const factors = new Factors();

const Home = () => {
  const [factorsResults, setFactorsResults] = useState<FactorsResults | null>();
  const [showStoryPoints, setShowStoryPoints] = useState(false);

  const showResultsComputed = !!factorsResults?.showResults && !showStoryPoints;

  const handleGetResults = (evt: FactorsResults): void => {
    setFactorsResults(() => evt);
  };

  const showStoryPointResults = () => {
    setShowStoryPoints(() => true);
  };

  const tryAgain = () => {
    setShowStoryPoints(() => false);
    setFactorsResults(() => null);
  };

  const getFactorsValues = (): FactorsValues => {
    const {
      1: complexity,
      2: uncertainty,
      3: effort
    } = factorsResults!.factors;

    return {
      complexity: complexity.currentValue!,
      uncertainty: uncertainty.currentValue!,
      effort: effort.currentValue!
    };
  };

  return (
    <div className='flex flex-col gap-8'>
      <Introduction />
      {!showStoryPoints ? (
        <FactorCard
          onFactorChange={(evt) => handleGetResults(evt)}
          factors={factors}
        />
      ) : (
        <StoryPointsCard
          storyPoints={new StoryPoints(getFactorsValues())}
          onTryAgain={() => tryAgain()}
        />
      )}
      <GetResults
        showResults={showResultsComputed}
        onGetResults={() => showStoryPointResults()}
      />
    </div>
  );
};

export default Home;
