import { Button } from '@components/ui/button';

type PropsTypes = {
  showResults: boolean;
  onGetResults: () => void;
};

const GetResults = ({ showResults, onGetResults }: PropsTypes) => {
  return (
    <Button
      className={showResults ? 'w-full' : 'hidden'}
      onClick={onGetResults}
    >
      Get Results
    </Button>
  );
};

export default GetResults;
