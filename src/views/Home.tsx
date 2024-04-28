import Introduction from '@components/_custom/Introduction';
import StepCard from '@components/_custom/StepCard';

const Home = () => {
  return (
    <div className='flex flex-col gap-8'>
      <Introduction />
      <StepCard />
    </div>
  );
};

export default Home;
