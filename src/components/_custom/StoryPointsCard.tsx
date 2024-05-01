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
    <Card className='max-w-2xl mx-auto' data-testid='story-points-card'>
      <CardHeader data-testid='story-points-card-header'>
        <CardTitle
          className={textColorClass(results.message.type)}
          data-testid='story-points-card-title'
        >
          {results.message.title}
        </CardTitle>
        <CardDescription data-testid='story-points-card-description'>
          <span className='my-2'>{results.message.description}</span>
        </CardDescription>
      </CardHeader>
      <CardContent data-testid='story-points-card-content'>
        <p
          data-testid='story-points-card-text'
          className={`font-bold text-center text-5xl ${textColorClass(
            results.message.type
          )}`}
        >
          {results.storyPoints}
        </p>
      </CardContent>
      <CardFooter data-testid='story-points-card-footer'>
        <Button
          id='tryAgain'
          aria-pressed='false'
          aria-description='A button to try again'
          type='button'
          className='w-full'
          variant='outline'
          data-testid='story-points-card-try-again-btn'
          onClick={onTryAgain}
        >
          Try Again
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StoryPointsCard;
