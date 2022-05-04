import html2canvas from 'html2canvas';
import { Camera, Trash } from 'phosphor-react';
import React, { FC, useState } from 'react';

import { Loading } from '../../Loading';

type ScreenshotButtonProps = {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string | null) => void;
};

export const ScreenshotButton: FC<ScreenshotButtonProps> = ({
  onScreenshotTook,
  screenshot,
}) => {
  const [isTakeScreenshot, setIsTakeScreenshot] = useState(false);

  const handleTakeScreenshot = async () => {
    setIsTakeScreenshot(true);
    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');
    onScreenshotTook(base64image);
    setIsTakeScreenshot(false);
  };

  if (screenshot) {
    return (
      <button
        type='button'
        className='text-zinc-400 hover:text-zinc-100 flex justify-end items-end p-1 w-10 rounded-md border-transparent transition-colors'
        style={{
          backgroundImage: `url(${screenshot})`,
        }}
        onClick={() => onScreenshotTook(null)}
      >
        <Trash weight='fill' />
      </button>
    );
  }

  return (
    <button
      type='button'
      className='bg-zinc-800 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 p-2 rounded-md border-transparent transition-colors'
      onClick={handleTakeScreenshot}
    >
      {isTakeScreenshot ? <Loading /> : <Camera className='text-zinc-100 w-6 h-6' />}
    </button>
  );
};
