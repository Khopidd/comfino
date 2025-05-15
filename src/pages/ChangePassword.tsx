
import React, { useState } from 'react';
import { Sidebar } from '@/components/Layout/Sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Eye, EyeOff } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from '@/components/ui/card';

const ChangePassword: React.FC = () => {
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      toast.error('Kata sandi baru tidak cocok dengan konfirmasi');
      return;
    }
    
    // Here we would typically make an API call to update the password
    toast.success('Kata sandi berhasil diperbarui');
    navigate('/profile');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col pl-64">
        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Profile Card (Left) */}
              <Card className="bg-white rounded-lg p-8 shadow-sm h-fit">
                <h2 className="text-xl font-semibold mb-6 text-[#272742]">Gambar Profil</h2>
                
                <div className="flex flex-col items-center">
                  <div className="w-40 h-40 relative mb-6">
                    <Avatar className="w-full h-full">
                      <AvatarImage 
                        src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                        className="object-cover"
                        alt="Profile Picture" 
                      />
                      <AvatarFallback>MK</AvatarFallback>
                    </Avatar>
                  </div>
                  <h3 className="text-xl font-medium text-[#272742]">Mochamad Khopid</h3>
                  <p className="text-gray-500 mt-1">Admin</p>
                </div>
              </Card>

              {/* Change Password Form (Right) */}
              <Card className="bg-white rounded-lg shadow-sm col-span-2">
                <Tabs defaultValue="password" className="w-full">
                  <div className="flex items-center justify-between px-8 pt-6 pb-4 border-b">
                    <TabsList className="grid w-full max-w-[400px] grid-cols-2">
                      <TabsTrigger value="edit" onClick={() => navigate('/profile')}>
                        Edit Profil
                      </TabsTrigger>
                      <TabsTrigger value="password" className="text-blue-600">
                        Ubah Kata Sandi
                      </TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <TabsContent value="password" className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Current Password */}
                      <div>
                        <Label htmlFor="currentPassword" className="block mb-1 font-medium text-[#272742]">
                          Kata Sandi Saat Ini
                        </Label>
                        <div className="relative">
                          <Input 
                            id="currentPassword"
                            type={showCurrentPassword ? "text" : "password"}
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            className="w-full pr-10"
                            placeholder="Kata Sandi Saat Ini"
                          />
                          <button 
                            type="button"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                          >
                            {showCurrentPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>
                      </div>

                      {/* New Password */}
                      <div>
                        <Label htmlFor="newPassword" className="block mb-1 font-medium text-[#272742]">
                          Kata Sandi Baru
                        </Label>
                        <div className="relative">
                          <Input 
                            id="newPassword"
                            type={showNewPassword ? "text" : "password"}
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full pr-10"
                            placeholder="Kata Sandi Baru"
                          />
                          <button 
                            type="button"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                          >
                            {showNewPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>
                      </div>

                      {/* Confirm New Password */}
                      <div>
                        <Label htmlFor="confirmPassword" className="block mb-1 font-medium text-[#272742]">
                          Masukkan kembali Kata Sandi Baru
                        </Label>
                        <div className="relative">
                          <Input 
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full pr-10"
                            placeholder="Masukkan kembali Kata Sandi Baru"
                          />
                          <button 
                            type="button"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-6">
                        <Button 
                          type="submit" 
                          className="w-full bg-blue-600 hover:bg-blue-700 py-6 text-lg"
                        >
                          Ubah Kata Sandi
                        </Button>
                      </div>
                    </form>
                  </TabsContent>
                </Tabs>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ChangePassword;
