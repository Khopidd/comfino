import React from 'react';

export const Sidebar: React.FC = () => {
  return (
    <nav className="bg-white flex w-full flex-col overflow-hidden items-stretch whitespace-nowrap mx-auto pt-8 pb-[1033px] max-md:pb-[100px]">
      <div className="self-center flex items-center gap-3 text-[26px] text-[rgba(39,39,66,1)] font-bold tracking-[-0.29px] leading-none">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/a081cd1bc6f9470c93dd0c6e6a2c349a/4a22dc3c0c038afe8591157472d5224dfdd1132b?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[33px] self-stretch shrink-0 my-auto rounded-lg"
          alt="Comfinotes Logo"
        />
        <div className="self-stretch my-auto">Comfinotes</div>
      </div>
      
      <div className="border-slate-100 border shrink-0 h-px mt-[22px] border-solid" />
      
      <div className="text-sm leading-[1.6] mt-12 mx-4 max-md:mt-10 max-md:mx-2.5">
        <div className="bg-slate-50 flex min-h-12 max-w-full w-[218px] items-center gap-4 text-blue-600 font-semibold pr-4 rounded-[0px_12px_12px_0px]">
          <div className="bg-blue-600 self-stretch flex w-1 shrink-0 h-12 my-auto rounded-[0px_4px_4px_0px]" />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a081cd1bc6f9470c93dd0c6e6a2c349a/f3c7745939852ba88efbcd478e177759e0475d70?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
            alt="Dashboard Icon"
          />
          <div className="self-stretch my-auto">Dashboard</div>
        </div>
        
        <div className="flex min-h-12 max-w-full w-[218px] items-center gap-4 text-slate-500 font-medium tracking-[0.2px] mt-2 pr-4 rounded-xl">
          <div className="bg-blue-600 self-stretch flex w-1 shrink-0 h-8 my-auto rounded-[0px_4px_4px_0px]" />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a081cd1bc6f9470c93dd0c6e6a2c349a/c9f51d19b14554b9b2c9f62494b678880f3fd3bc?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
            alt="Community Icon"
          />
          <div className="self-stretch my-auto">Komunitas</div>
        </div>
      </div>
    </nav>
  );
};
