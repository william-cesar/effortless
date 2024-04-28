import BaseLayout from '@/layouts/Base';
import SmallScreenLayout from './layouts/SmallScreen';

const App = () => {
  return (
    <>
      <div className='max-[319px]:hidden'>
        <BaseLayout />
      </div>
      <div className='hidden max-[319px]:block'>
        <SmallScreenLayout />
      </div>
    </>
  );
};

export default App;
