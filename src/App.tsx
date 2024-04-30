import BaseLayout from '@layouts/Base';
import SmallScreenLayout from '@layouts/SmallScreen';

import { ThemeProvider } from '@components/providers/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div className='max-[319px]:hidden'>
        <BaseLayout />
      </div>
      <div className='hidden max-[319px]:block'>
        <SmallScreenLayout />
      </div>
    </ThemeProvider>
  );
};

export default App;
