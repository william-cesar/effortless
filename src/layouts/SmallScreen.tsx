import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

const SmallScreenLayout = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-8 h-svh'>
      <ExclamationTriangleIcon className='size-8 text-red-500' />
      <h1 className='font-bold text-3xl text-center'>Nothing to see here</h1>
      <p className='text-center text-lg'>
        The application is not optimized for small screen sizes
      </p>
    </div>
  );
};

export default SmallScreenLayout;
