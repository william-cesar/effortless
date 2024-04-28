import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger
} from '@/components/ui/select';
import { GearIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

const THEMES = [
  { name: 'Light', value: 'light', icon: <SunIcon /> },
  { name: 'Dark', value: 'dark', icon: <MoonIcon /> },
  { name: 'System', value: 'system', icon: <GearIcon /> }
];

const ThemeSelect = () => {
  const [theme, setTheme] = useState(THEMES[0].value);
  const selectedTheme = THEMES.find((t) => t.value === theme);

  return (
    <>
      <Select value={theme} onValueChange={setTheme}>
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
