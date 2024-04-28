import FactorCard from '@/components/_custom/FactorCard';
import Introduction from '@components/_custom/Introduction';

const Home = () => {
  return (
    <div className='flex flex-col gap-8'>
      <Introduction />
      <FactorCard />
    </div>
  );
};

export default Home;
