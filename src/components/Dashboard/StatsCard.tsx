
import React from 'react';
import { StatsCardProps } from '@/types/dashboard';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const StatsCard: React.FC<StatsCardProps> = ({ icon, title, value, hasAddButton }) => {
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate('/simpan-uang');
  };

  return (
    <div className="bg-white shadow-sm rounded-2xl p-6 relative flex flex-col">
      <div className="rounded-md w-10 h-10 flex items-center justify-center">
        <img
          src={icon}
          className="w-8 h-8"
          alt={`${title} icon`}
        />
      </div>
      
      <div className="mt-4">
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-[#272742] text-2xl font-semibold mt-1">{value}</p>
      </div>
      
      {hasAddButton && (
        <button 
          className="absolute top-4 right-4 bg-[#5BCFC5] rounded-md p-1.5"
          onClick={handleAddClick}
        >
          <Plus className="h-5 w-5 text-white" />
        </button>
      )}
    </div>
  );
};
