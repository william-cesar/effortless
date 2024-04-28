import { CardDescription, CardHeader, CardTitle } from '@components/ui/card';
import { StepInfo as StepInfoType } from '@core/types/Steps';

const StepInfo = ({ stepInfo }: { stepInfo: StepInfoType }) => {
  return (
    <CardHeader>
      <CardTitle>{stepInfo.title}</CardTitle>
      <CardDescription>
        <span className='font-bold block my-2'>{stepInfo.subtitle}</span>
        {stepInfo.info}
      </CardDescription>
    </CardHeader>
  );
};

export default StepInfo;
