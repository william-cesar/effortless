import { useState } from 'react';

import { useTheme } from '@components/providers/ThemeProvider';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger
} from '@components/ui/select';
import { GearIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';

const THEMES = [
  { name: 'Light', value: 'light', icon: <SunIcon /> },
  { name: 'Dark', value: 'dark', icon: <MoonIcon /> },
  { name: 'System', value: 'system', icon: <GearIcon /> }
];

type Theme = 'light' | 'dark' | 'system';

const storedTheme: string = localStorage.getItem('vite-ui-theme') || 'dark';

const ThemeSelect = () => {
  const [theme, setTheme] = useState(storedTheme);
  const selectedTheme = THEMES.find((t) => t.value === theme);

  const { setTheme: setGlobalTheme } = useTheme();

  const updateTheme = (newTheme: Theme) => {
    setGlobalTheme(newTheme);
    setTheme(() => newTheme);
  };
  return (
    <>
      <Select value={theme} onValueChange={updateTheme}>
        <SelectTrigger className='sm:w-28 w-fit'>
          <div className='flex items-center gap-2 w-fit max-xsm:hidden'>
            {selectedTheme?.icon}
            {selectedTheme?.name}
          </div>
          <div className='flex items-center gap-2 w-fit xsm:hidden'>
            {selectedTheme?.icon}
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {THEMES.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                <span className='flex items-center gap-2'>
                  {option.icon}
                  {option.name}
                </span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export default ThemeSelect;
