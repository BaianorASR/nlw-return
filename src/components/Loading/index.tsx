import { CircleNotch } from 'phosphor-react';
import React from 'react';

export const Loading = () => {
  return (
    <div className='flex overflow-hidden justify-center items-center w-6 h-6'>
      <CircleNotch weight='bold' className='w-4 h-4 animate-spin' />
    </div>
  );
};
