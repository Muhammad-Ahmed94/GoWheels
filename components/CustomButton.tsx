'use client'

import { CustomButtonProps } from '@/types'
import React, { MouseEventHandler } from 'react'

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
}: {
  title: string;
  containerStyles: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      disabled={false}
      type="button"
      className={`flex flex-row justify-center items-center py-3 px-5 outline-none ${containerStyles}`}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
};

export default CustomButton