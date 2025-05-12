
import React from 'react';
import { LayoutGrid, Users } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="bg-white flex w-64 flex-col items-stretch h-screen pt-8 pb-8 shadow-sm fixed">
      <div className="flex items-center gap-3 px-6">
        <div className="bg-blue-600 rounded-lg w-[33px] h-[33px] flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="text-[26px] text-gray-800 font-medium">Comfinotes</div>
      </div>
      
      <div className="border-b border-gray-100 my-6" />
      
      <div className="flex flex-col space-y-2 px-6">
        <div 
          className={`flex items-center gap-3 py-3 px-4 ${location.pathname === '/' ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'} transition-colors rounded-lg font-medium cursor-pointer`}
          onClick={() => navigate('/')}
        >
          <LayoutGrid className="h-5 w-5" />
          Dashboard
        </div>
        
        <div 
          className={`flex items-center gap-3 py-3 px-4 ${location.pathname === '/komunitas' ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'} transition-colors rounded-lg font-medium cursor-pointer`}
          onClick={() => navigate('/komunitas')}
        >
          <Users className="h-5 w-5" />
          Komunitas
        </div>
      </div>
    </nav>
  );
};
