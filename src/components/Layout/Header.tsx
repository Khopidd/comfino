
import React from 'react';
import { HeaderProps } from '@/types/dashboard';
import { Bell } from 'lucide-react';

export const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <header className="bg-white flex items-center justify-between px-8 py-4 border-b border-slate-100">
      <div>
        <h1 className="text-[#272742] text-2xl font-medium">{title}</h1>
        <p className="text-slate-500 text-sm">{description}</p>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="relative">
          <Bell className="h-6 w-6 text-gray-400" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-pink-500 rounded-full"></span>
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a081cd1bc6f9470c93dd0c6e6a2c349a/61e59f0ca95338d78e1ce26e0250055f4b0b1862?placeholderIfAbsent=true"
            className="w-full h-full object-cover"
            alt="User Avatar"
          />
        </div>
      </div>
    </header>
  );
};
