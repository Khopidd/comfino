import React from 'react';
import { StatsCardProps } from '@/types/dashboard';

export const StatsCard: React.FC<StatsCardProps> = ({ icon, title, value, hasAddButton }) => {
  return (
    <div className="bg-white shadow-[0px_0px_2px_rgba(0,0,0,0.12)] self-stretch relative flex min-w-60 min-h-[205px] flex-col grow shrink w-52 my-auto pt-6 pb-[55px] px-6 rounded-2xl max-md:px-5">
      <img
        src={icon}
        className="aspect-[1] object-contain w-[42px] z-0"
        alt={`${title} icon`}
      />
      
      <div className="z-0 mt-[13px]">
        <div>
          <div className="text-slate-500 text-lg font-normal leading-8 tracking-[0.18px]">
            {title}
          </div>
          <div className="text-[#272742] text-2xl font-semibold leading-[1.3] mt-2">
            {value}
          </div>
        </div>
      </div>
      
      {hasAddButton && (
        <div className="bg-[rgba(91,207,197,1)] absolute z-0 flex w-[42px] items-center gap-2 justify-center px-3 py-2 rounded-lg right-[18px] top-[18px]">
          <div className="self-stretch flex min-h-[18px] w-[18px] my-auto" />
        </div>
      )}
    </div>
  );
};
