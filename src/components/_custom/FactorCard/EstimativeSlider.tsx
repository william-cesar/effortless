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
              value={[sliderValue]}
              min={0}
              max={100}
              step={10}
              onValueChange={(value) => handleValueChange(value[0])}
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>{sliderValue}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <div className='flex justify-between items-center text-center text-sm text-muted-foreground'>
        <span className='break-words max-w-24'>{props.upperEndLabel}</span>
        <span className='break-words max-w-24'>{props.lowerEndLabel}</span>
      </div>
    </CardContent>
  );
};

export default EstimativeSlider;
