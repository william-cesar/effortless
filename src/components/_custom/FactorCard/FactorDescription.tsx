import { FactorInfo } from '@/core/types/Factor';

import { CardDescription, CardHeader, CardTitle } from '@components/ui/card';

const FactorDescription = ({ factorInfo }: { factorInfo: FactorInfo }) => {
  return (
    <CardHeader>
      <CardTitle>{factorInfo.title}</CardTitle>
      <CardDescription>
        <span className='font-bold block my-2'>{factorInfo.subtitle}</span>
        {factorInfo.info}
      </CardDescription>
    </CardHeader>
  );
};

export default FactorDescription;
