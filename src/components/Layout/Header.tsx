
import React, { useState } from 'react';
import { HeaderProps } from '@/types/dashboard';
import { Bell, User, LogOut } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export const Header: React.FC<HeaderProps> = ({ title, description }) => {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();
  
  const handleSignOut = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("username");
    toast.success("Signed out successfully");
    navigate("/signin");
    setIsProfileOpen(false);
  };

  const navigateToProfile = () => {
    navigate("/profile");
    setIsProfileOpen(false);
  };

  return (
    <header className="bg-white flex items-center justify-between px-8 py-4 border-b border-slate-100">
      <div>
        <h1 className="text-[#272742] text-2xl font-medium">{title}</h1>
        <p className="text-slate-500 text-sm">{description}</p>
      </div>
      
      <div className="flex items-center gap-6">
        <Popover open={isNotificationsOpen} onOpenChange={setIsNotificationsOpen}>
          <PopoverTrigger asChild>
            <button className="relative">
              <Bell className="h-6 w-6 text-gray-400" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-pink-500 rounded-full"></span>
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-0 rounded-xl mr-16">
            <div className="p-4 border-b border-slate-100">
              <h2 className="text-xl font-semibold text-[#272742]">Notifikasi</h2>
            </div>
            <div className="divide-y divide-slate-100">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-4 flex gap-3 hover:bg-slate-50">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="text-blue-600">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.2678 9.06113L13.0024 12.4954C12.1952 13.1283 11.0636 13.1283 10.2564 12.4954L5.95435 9.06113" stroke="#3377FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.88787 3H16.3158C17.6752 3.01525 18.969 3.58993 19.896 4.5902C20.823 5.59048 21.3022 6.92903 21.222 8.29412V14.822C21.3022 16.1871 20.823 17.5256 19.896 18.5259C18.969 19.5262 17.6752 20.1009 16.3158 20.1161H6.88787C3.96796 20.1161 2 17.7407 2 14.822V8.29412C2 5.37545 3.96796 3 6.88787 3Z" stroke="#3377FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div>
                      <span className="font-semibold text-[#272742]">Divisi Mlbb</span>
                      <span className="text-gray-500"> menunggu catatan keuangan yang disetujui</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-gray-400 text-sm">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="7" stroke="#B0B0B0" strokeWidth="1.5"/>
                        <path d="M11 8H8V5" stroke="#B0B0B0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>40 Minutes ago</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
        
        <Popover open={isProfileOpen} onOpenChange={setIsProfileOpen}>
          <PopoverTrigger asChild>
            <Avatar className="w-10 h-10 cursor-pointer">
              <AvatarImage 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
                className="object-cover"
                alt="User Avatar" 
              />
              <AvatarFallback>MK</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="w-60 p-0 rounded-xl mr-16">
            <div className="p-5 border-b border-slate-100">
              <h2 className="text-xl font-semibold text-[#272742]">Mochamad Khopid</h2>
              <p className="text-gray-500">Admin</p>
            </div>
            <div className="p-1">
              <button 
                onClick={navigateToProfile}
                className="w-full flex items-center gap-3 p-4 text-gray-500 hover:bg-slate-50 rounded-lg"
              >
                <User className="w-5 h-5" />
                <span>Profil Saya</span>
              </button>
              <button 
                onClick={handleSignOut}
                className="w-full flex items-center gap-3 p-4 text-red-500 hover:bg-slate-50 rounded-lg"
              >
                <LogOut className="w-5 h-5" />
                <span>Keluar</span>
              </button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};
