import Logo from '@/app/assets/logo.png';
import ThemeSelect from './ThemeSelect';

const BaseHeader = () => {
  return (
    <header className='flex justify-between py-4 px-8 bg-secondary h-20 fixed top-0 w-full'>
      <div className='flex gap-2 items-center'>
        <img className='size-8' src={Logo} alt='green head looking right' />
        <h1 className='font-bold text-3xl bg-gradient-to-r from-green-600 from-20% via-green-400 to-green-600 inline-block text-transparent bg-clip-text'>
          Effortless
        </h1>
      </div>
      <ThemeSelect />
    </header>
  );
};

export default BaseHeader;
