import { ArrowLeft, Camera } from 'phosphor-react';
import React, { FC, FormEvent, useState } from 'react';

import { feedbackTypes } from '../../../../constants';
import { FeedbackType } from '../../../../types';
import { CloseButton } from '../../../CloseButton';
import { ScreenshotButton } from '../../ScreenshotButton';

type FeedbackContentStepProps = {
  onFeedbackSent: () => void;
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
};

export const FeedbackContentStep: FC<FeedbackContentStepProps> = ({
  onFeedbackSent,
  feedbackType,
  onFeedbackRestartRequested,
}) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState<string>('');

  const feedbackInfo = feedbackTypes[feedbackType];

  const handleSubmitFeedback = (e: FormEvent) => {
    e.preventDefault();
    console.log({
      screenshot,
      comment,
    });
    onFeedbackSent();
  };

  return (
    <>
      <header>
        <button
          className='text-zinc-400 hover:text-zinc-100 absolute top-5 left-5'
          type='button'
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight='bold' className='w-4 h-4' />
        </button>
        <span className='flex gap-2 items-center text-xl leading-6'>
          <img
            className='w-6 h-6'
            src={feedbackInfo.image.source}
            alt={feedbackInfo.image.alt}
          />
          {feedbackInfo.title}
        </span>
        <CloseButton />
      </header>
      <form className='my-4 w-full' onSubmit={handleSubmitFeedback}>
        <textarea
          className='min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin'
          placeholder='Conte com detalhes oque está acontecendo...'
          onChange={event => setComment(event.target.value)}
        />
        <footer className='flex gap-2 mt-2'>
          <ScreenshotButton onScreenshotTook={setScreenshot} screenshot={screenshot} />
          <button
            className='bg-brand-500 hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500 flex flex-1 justify-center items-center p-2 text-sm rounded-md border-transparent transition-colors'
            type='submit'
            disabled={!comment}
          >
            send FeedbackType
          </button>
        </footer>
      </form>
    </>
  );
};
