import React from 'react';
import { HeaderProps } from '@/types/dashboard';

export const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <header className="bg-white border-slate-100 z-10 flex w-full items-stretch gap-5 flex-wrap justify-between px-[46px] py-[18px] border-b max-md:max-w-full max-md:px-5">
      <div>
        <h1 className="text-[rgba(39,39,66,1)] text-2xl font-medium leading-none tracking-[0.2px]">
          {title}
        </h1>
        <p className="text-slate-500 text-xs font-normal leading-[1.6] mt-1">
          {description}
        </p>
      </div>
      
      <div className="flex items-stretch gap-[34px] my-auto">
        <div className="bg-[rgba(237,79,157,1)] border flex w-2 shrink-0 h-2 mt-2.5 rounded-[50%] border-white border-solid" />
        <div className="flex min-h-10 items-center gap-3">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a081cd1bc6f9470c93dd0c6e6a2c349a/61e59f0ca95338d78e1ce26e0250055f4b0b1862?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-10 self-stretch my-auto"
            alt="User Avatar"
          />
        </div>
      </div>
    </header>
  );
};
