import BaseFooter from '@components/_custom/BaseFooter';
import BaseHeader from '@components/_custom/BaseHeader';
import Home from '@views/Home';

const BaseLayout = () => {
  return (
    <div className='flex flex-col'>
      <BaseHeader />
      <main className='px-8 py-10 my-20 min-h-area max-w-screen-lg overflow-y-auto mx-auto'>
        <Home />
      </main>
      <BaseFooter />
    </div>
  );
};

export default BaseLayout;
