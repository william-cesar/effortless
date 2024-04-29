import { IStoryPoints } from '@core/domain/protocols/StryPoints';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

type PropTypes = {
  storyPoints: IStoryPoints;
  onTryAgain: () => void;
};

const StoryPointsCard = ({ storyPoints, onTryAgain }: PropTypes) => {
  const results = storyPoints.getResults();

  return (
    <Card className='max-w-2xl mx-auto'>
      <CardHeader>
        <CardTitle>{results.message.title}</CardTitle>
        <CardDescription>
          <span className='my-2'>{results.message.description}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className='font-bold text-center text-2xl text-primary'>
          {results.storyPoints}
        </p>
      </CardContent>
      <CardFooter>
        <Button className='w-full' variant='outline' onClick={onTryAgain}>
          Try Again
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StoryPointsCard;
