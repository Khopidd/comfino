
import React, { useState } from 'react';
import { Sidebar } from '@/components/Layout/Sidebar';
import { Header } from '@/components/Layout/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Upload, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from '@/components/ui/card';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('Mochamad Khopid');
  const [about, setAbout] = useState('Admin dari komunitas Honor of Kings Bandung');
  const [email, setEmail] = useState('hopidmoha@gmail.com');
  const [phone, setPhone] = useState('6285846051072');
  const [activeTab, setActiveTab] = useState('edit');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Profil berhasil diperbarui');
  };

  const handleChangePassword = () => {
    navigate('/change-password');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col pl-64">
        <Header 
          title="Profile" 
          description="Perbarui foto dan detail pribadi Anda di sini" 
        />
        
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

              {/* Edit Profile & Change Password Tabs (Right) */}
              <Card className="bg-white rounded-lg shadow-sm col-span-2">
                <Tabs defaultValue="edit" className="w-full" onValueChange={setActiveTab}>
                  <div className="flex items-center justify-between px-8 pt-6 pb-4 border-b">
                    <TabsList className="grid w-full max-w-[400px] grid-cols-2">
                      <TabsTrigger value="edit" className={activeTab === "edit" ? "text-blue-600" : ""}>
                        Edit Profil
                      </TabsTrigger>
                      <TabsTrigger value="password" 
                        className={activeTab === "password" ? "text-blue-600" : ""}
                        onClick={handleChangePassword}>
                        Ubah Kata Sandi
                      </TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <TabsContent value="edit" className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Profile Image */}
                      <div className="mb-6">
                        <Label className="block mb-1 font-medium text-[#272742]">
                          Gambar Profil<span className="text-red-500">*</span>
                        </Label>
                        
                        <div className="flex mt-4">
                          <div className="w-32 h-32 relative">
                            <Avatar className="w-full h-full">
                              <AvatarImage 
                                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                                className="object-cover"
                                alt="Profile Picture" 
                              />
                              <AvatarFallback>MK</AvatarFallback>
                            </Avatar>
                          </div>
                          
                          <div className="flex gap-2 ml-6 self-center">
                            <Button type="button" variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">
                              <Upload className="mr-2 h-4 w-4" />
                              Upload
                            </Button>
                            <Button type="button" variant="outline" className="bg-red-50 text-red-600 border-red-200">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Hapus
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Full Name */}
                      <div>
                        <Label htmlFor="name" className="block mb-1 font-medium text-[#272742]">
                          Nama lengkap
                        </Label>
                        <Input 
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full"
                          placeholder="Masukkan nama lengkap"
                        />
                      </div>

                      {/* About */}
                      <div>
                        <Label htmlFor="about" className="block mb-1 font-medium text-[#272742]">
                          Tentang<span className="text-red-500">*</span>
                        </Label>
                        <Textarea 
                          id="about"
                          value={about}
                          onChange={(e) => setAbout(e.target.value)}
                          className="w-full min-h-[100px]"
                          placeholder="Ceritakan tentang diri Anda"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <Label htmlFor="email" className="block mb-1 font-medium text-[#272742]">
                          Email<span className="text-red-500">*</span>
                        </Label>
                        <Input 
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full"
                          placeholder="contoh@email.com"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <Label htmlFor="phone" className="block mb-1 font-medium text-[#272742]">
                          Telepon<span className="text-red-500">*</span>
                        </Label>
                        <Input 
                          id="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full"
                          placeholder="6281234567890"
                        />
                      </div>

                      {/* Action Buttons */}
                      <div className="flex justify-end gap-4 pt-4">
                        <Button 
                          type="button" 
                          variant="outline" 
                          className="px-8 py-6 border-gray-200 text-gray-700"
                          onClick={() => navigate('/')}
                        >
                          Batal
                        </Button>
                        <Button 
                          type="submit" 
                          className="bg-blue-600 hover:bg-blue-700 px-8 py-6"
                        >
                          Simpan Perubahan
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

export default ProfilePage;
