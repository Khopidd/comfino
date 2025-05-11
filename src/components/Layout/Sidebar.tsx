
import React from 'react';
import { LayoutGrid, Briefcase, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  
  const handleSignOut = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("username");
    toast.success("Signed out successfully");
    navigate("/signin");
  };

  return (
    <nav className="bg-blue-600 flex w-full flex-col items-stretch h-screen pt-8 pb-8">
      <div className="flex items-center gap-3 px-6">
        <div className="bg-white rounded-lg w-[33px] h-[33px] flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="text-[26px] text-white font-medium">Comfinotes</div>
      </div>
      
      <div className="border-b border-blue-500 my-6" />
      
      <div className="flex flex-col space-y-2 px-6">
        <div className="flex items-center gap-3 py-3 px-4 bg-blue-700 text-white font-medium rounded-lg">
          <LayoutGrid className="h-5 w-5" />
          Dashboard
        </div>
        
        <div className="flex items-center gap-3 py-3 px-4 text-blue-100 hover:bg-blue-500 hover:text-white transition-colors rounded-lg font-medium">
          <Briefcase className="h-5 w-5" />
          Komunitas
        </div>
      </div>

      <div className="mt-auto px-6">
        <button
          onClick={handleSignOut}
          className="flex items-center gap-3 py-3 px-4 text-blue-100 hover:bg-blue-500 hover:text-white transition-colors rounded-lg w-full font-medium"
        >
          <LogOut className="h-5 w-5" />
          Sign Out
        </button>
      </div>
    </nav>
  );
};
