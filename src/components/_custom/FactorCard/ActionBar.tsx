import { StepEvent } from '@core/types/Step';

import { Button } from '@components/ui/button';
import { CardFooter } from '@components/ui/card';

type ActionBarProps = {
  hasNext: boolean;
  hasPrevious: boolean;
  onEvent: (event: StepEvent) => void;
};

const ActionBar = (props: ActionBarProps) => {
  return (
    <CardFooter className='flex gap-4 sm:justify-end max-sm:flex-col'>
      {props.hasPrevious ? (
        <Button
          id='nextStep'
          aria-pressed='false'
          aria-description='A button to go to the previous step'
          type='button'
          className='max-sm:w-full'
          variant='outline'
          data-testid='action-bar-prev-btn'
          onClick={() => props.onEvent('prev')}
        >
          Previous
        </Button>
      ) : null}
      {props.hasNext ? (
        <Button
          id='nextStep'
          aria-pressed='false'
          aria-description='A button to go to the next step'
          type='button'
          data-testid='action-bar-next-btn'
          className='max-sm:w-full'
          onClick={() => props.onEvent('next')}
        >
          Next
        </Button>
      ) : null}
    </CardFooter>
  );
};

export default ActionBar;
