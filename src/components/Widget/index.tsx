import { Popover } from '@headlessui/react';
import { ChatTeardropDots } from 'phosphor-react';
import React, { useState } from 'react';

import { WidgetForm } from '../WidgetForm';

export const Widget = () => {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  const toggleWidgetVisibility = () => setIsWidgetOpen(!isWidgetOpen);

  return (
    <Popover className='md:bottom-8 md:right-8 flex absolute right-4 bottom-4 flex-col items-end'>
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>
      <Popover.Button
        onClick={toggleWidgetVisibility}
        className='bg-brand-500 group flex items-center px-3 h-12 text-white rounded-full'
      >
        <ChatTeardropDots className='w-6 h-6' />
        <span className='group-hover:max-w-xs overflow-hidden max-w-0 transition-all duration-500 ease-linear'>
          <span>Feedback</span>
        </span>
      </Popover.Button>
    </Popover>
  );
};
