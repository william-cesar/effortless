import { MessageTypeValue } from '@/core/types/StoryPoints';
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

  const textColorClass = (type: MessageTypeValue): string => {
    const options = {
      success: 'text-primary',
      warning: 'text-warning',
      error: 'text-destructive'
    };

    return options[type];
  };

  return (
    <Card className='max-w-2xl mx-auto'>
      <CardHeader>
        <CardTitle className={textColorClass(results.message.type)}>
          {results.message.title}
        </CardTitle>
        <CardDescription>
          <span className='my-2'>{results.message.description}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p
          className={`font-bold text-center text-5xl ${textColorClass(
            results.message.type
          )}`}
        >
          {results.storyPoints}
        </p>
      </CardContent>
      <CardFooter>
        <Button
          id='tryAgain'
          aria-pressed='false'
          aria-description='A button to try again'
          type='button'
          className='w-full'
          variant='outline'
          onClick={onTryAgain}
        >
          Try Again
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StoryPointsCard;
