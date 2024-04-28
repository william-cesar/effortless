import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type StepInfoType = {
  [key: number]: {
    title: string;
    subtitle: string;
    info: string;
  };
};

const StepInfo = ({ currentStep }: { currentStep: number }) => {
  const getStepInfo = (
    currentStep: number
  ): StepInfoType[keyof StepInfoType] => {
    const steps: StepInfoType = {
      1: {
        title: 'Complexity',
        subtitle: 'How big is the issue?',
        info: 'It refers to the level of difficulty and intricacy involved in a task or feature. It can be influenced by factors such as size, dependencies, and technical challenges.'
      },
      2: {
        title: 'Uncertainty',
        subtitle: 'How clear is the problem?',
        info: 'It relates to the lack of clarity or information about a task or feature. It can stem from changing requirements, limited knowledge, or external factors.'
      },
      3: {
        title: 'Effort',
        subtitle: 'How hard is it to solve?',
        info: 'It represents the amount of work or resources required to complete a task or feature. It includes time, skills, and resources needed to deliver the desired outcome.'
      }
    };

    return steps[currentStep];
  };

  return (
    <CardHeader>
      <CardTitle>{getStepInfo(currentStep).title}</CardTitle>
      <CardDescription>
        <span className='font-bold block my-2'>
          {getStepInfo(currentStep).subtitle}
        </span>
        {getStepInfo(currentStep).info}
      </CardDescription>
    </CardHeader>
  );
};

export default StepInfo;
