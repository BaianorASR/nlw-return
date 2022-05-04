import React, { useState } from 'react';

import { FeedbackType } from '../../types';
import { CloseButton } from '../CloseButton';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState<boolean>(false);

  const handleResetFeedback = () => {
    setFeedbackSent(false);
    setFeedbackType(null);
  };

  return (
    <div className='bg-zinc-900 flex relative flex-col items-center p-4 mb-4 rounded-2xl shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleResetFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              onFeedbackSent={() => setFeedbackSent(true)}
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleResetFeedback}
            />
          )}
        </>
      )}

      <footer className='text-neutral-400 text-xs'>
        Feito com ♥ pela{' '}
        <a className='underline-offset-2 underline' href='https://rocketseat.com.br'>
          Rocketseat
        </a>
      </footer>
    </div>
  );
};
