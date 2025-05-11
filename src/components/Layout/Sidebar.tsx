
import React from 'react';

export const Sidebar: React.FC = () => {
  return (
    <nav className="bg-white flex w-full flex-col items-stretch h-screen pt-8 pb-8">
      <div className="flex items-center gap-3 px-6">
        <div className="bg-blue-600 rounded-lg w-[33px] h-[33px] flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="text-[26px] text-[#272742] font-bold">Comfinotes</div>
      </div>
      
      <div className="border-b border-slate-100 my-6" />
      
      <div className="flex flex-col space-y-2 px-6">
        <div className="flex items-center gap-3 py-3 px-4 bg-blue-50 text-blue-600 font-medium rounded-lg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="7" height="9" rx="1" transform="matrix(1 0 0 -1 4 20)" stroke="#2563EB" strokeWidth="2"/>
            <rect width="7" height="12" rx="1" transform="matrix(1 0 0 -1 13 20)" stroke="#2563EB" strokeWidth="2"/>
          </svg>
          Dashboard
        </div>
        
        <div className="flex items-center gap-3 py-3 px-4 text-slate-500 font-medium">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="8" r="4" stroke="#64748B" strokeWidth="2"/>
            <path d="M5 20C5 16.6863 8.13401 14 12 14C15.866 14 19 16.6863 19 20" stroke="#64748B" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Komunitas
        </div>
      </div>
    </nav>
  );
};
