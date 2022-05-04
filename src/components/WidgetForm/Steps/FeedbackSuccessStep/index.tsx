import React, { FC } from 'react';

import { CloseButton } from '../../../CloseButton';

type FeedbackSuccessStepProps = {
  onFeedbackRestartRequested: () => void;
};

export const FeedbackSuccessStep: FC<FeedbackSuccessStepProps> = ({
  onFeedbackRestartRequested,
}) => {
  return (
    <>
      <header>
        <CloseButton />
      </header>
      <div className='flex flex-col items-center py-10 2-[304px]'>
        <svg
          width='26'
          height='26'
          viewBox='0 0 26 26'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M24.28 1.36202C23.124 0.61102 21.576 0.94002 20.822 2.09802L9.93603 18.877L4.90703 14.227C3.89303 13.289 2.31103 13.352 1.37403 14.365C0.437027 15.379 0.499026 16.961 1.51303 17.898L8.72203 24.564C9.20203 25.009 9.81203 25.229 10.418 25.229C11.091 25.229 11.952 24.947 12.517 24.09C12.849 23.584 25.017 4.82002 25.017 4.82002C25.768 3.66102 25.438 2.11302 24.28 1.36202V1.36202Z'
            fill='white'
          />
        </svg>
        <span className='mt-2 text-xl'>Agradecemos o feedback!</span>
        <button
          className='bg-zinc-800 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 px-6 py-2 mt-6 text-sm leading-6 rounded-md border-transparent transition-colors'
          type='button'
          onClick={onFeedbackRestartRequested}
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
};
