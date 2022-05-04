import { Popover } from '@headlessui/react';
import { X } from 'phosphor-react';
import React from 'react';

export const CloseButton = () => {
  return (
    <Popover.Button
      className='text-zinc-400 hover:text-zinc-100 absolute top-5 right-5'
      title='Fecha formulário de feedback'
    >
      <X weight='bold' className='w-4 h-4' />
    </Popover.Button>
  );
};
