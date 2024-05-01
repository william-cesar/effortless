import { useEffect, useState } from 'react';

import { CardContent } from '@components/ui/card';
import { Slider } from '@components/ui/slider';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@components/ui/tooltip';

type ContentProps = {
  currentValue: number;
  lowerEndLabel: string;
  upperEndLabel: string;
  onEvent: (event: number) => void;
};

const EstimativeSlider = (props: ContentProps) => {
  const [sliderValue, setSliderValue] = useState(props.currentValue);

  const handleValueChange = (value: number) => {
    props.onEvent(value);
    setSliderValue(() => value);
  };

  useEffect(() => {
    setSliderValue(() => props.currentValue);
  }, [props]);

  return (
    <CardContent className='flex flex-col gap-4 mt-8'>
      <TooltipProvider>
        <Tooltip open>
          <TooltipTrigger>
            <Slider
              id='estimativeSlider'
              value={[sliderValue]}
              min={0}
              max={100}
              step={10}
              onValueChange={(value) => handleValueChange(value[0])}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={sliderValue}
              aria-description='Estimative slider to set the estimative value'
              aria-label='Estimative slider'
              role='slider'
              data-testid='estimative-slider'
            />
          </TooltipTrigger>
          <TooltipContent
            className='mb-1'
            data-testid='estimative-slider-tooltip'
            aria-valuenow={sliderValue}
          >
            <p>{sliderValue}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <div className='flex justify-between items-center text-center text-sm text-muted-foreground'>
        <span
          className='break-words max-w-24'
          data-testid='estimative-slider-lower-end-label'
        >
          {props.upperEndLabel}
        </span>
        <span
          className='break-words max-w-24'
          data-testid='estimative-slider-upper-end-label'
        >
          {props.lowerEndLabel}
        </span>
      </div>
    </CardContent>
  );
};

export default EstimativeSlider;
