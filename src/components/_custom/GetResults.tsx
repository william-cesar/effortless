import { Button } from '@components/ui/button';

type PropsTypes = {
  showResults: boolean;
  onGetResults: () => void;
};

const GetResults = ({ showResults, onGetResults }: PropsTypes) => {
  return (
    <Button
      id='getResults'
      aria-pressed='false'
      aria-description='A button to get the results'
      type='button'
      className={showResults ? 'w-full' : 'hidden'}
      onClick={onGetResults}
    >
      Get Results
    </Button>
  );
};

export default GetResults;
