import { CardContent } from '@components/ui/card';
import { Slider } from '@components/ui/slider';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@components/ui/tooltip';
import { useState } from 'react';

type ContentProps = {
  currentValue: number;
  lowerEndLabel: string;
  upperEndLabel: string;
};

const EstimativeSlider = (props: ContentProps) => {
  const [sliderValue, setSliderValue] = useState(props.currentValue);

  const handleValueChange = (value: number) => {
    setSliderValue(() => value);
  };
  return (
    <CardContent className='flex flex-col gap-4 mt-8'>
      <TooltipProvider>
        <Tooltip open>
          <TooltipTrigger>
            <Slider
              defaultValue={[props.currentValue]}
              min={0}
              max={100}
              step={10}
              onValueCommit={(value) => handleValueChange(value[0])}
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>{sliderValue}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <div className='flex justify-between items-center text-center text-sm text-muted-foreground'>
        <span className='break-words max-w-24'>{props.lowerEndLabel}</span>
        <span className='break-words max-w-24'>{props.upperEndLabel}</span>
      </div>
    </CardContent>
  );
};

export default EstimativeSlider;
