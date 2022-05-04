import React, { Dispatch, FC, SetStateAction } from 'react';

import { feedbackTypes } from '../../../../constants';
import { FeedbackType } from '../../../../types';
import { CloseButton } from '../../../CloseButton';

type FeedbackTypeStepProps = {
  onFeedbackTypeChange: (param: FeedbackType) => void;
};

export const FeedbackTypeStep: FC<FeedbackTypeStepProps> = ({ onFeedbackTypeChange }) => {
  return (
    <>
      <header>
        <span className='text-xl leading-6'>Deixe seu feedback</span>
        <CloseButton />
      </header>
      <div className='flex gap-2 py-8 w-full'>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <button
            key={key}
            type='button'
            onClick={() => onFeedbackTypeChange(key as FeedbackType)}
            className='bg-zinc-800 hover:border-brand-500 focus:outline-none focus:border-brand-500 flex flex-col flex-1 gap-2 items-center py-5 w-24 rounded-lg border-2 border-transparent'
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        ))}
      </div>
    </>
  );
};
