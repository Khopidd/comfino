
import React, { useState } from 'react';
import { Sidebar } from '@/components/Layout/Sidebar';
import { Header } from '@/components/Layout/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Upload, Trash } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('Mochamad Khopid');
  const [about, setAbout] = useState('Admin dari komunitas Honor of Kings Bandung');
  const [email, setEmail] = useState('hopidmoha@gmail.com');
  const [phone, setPhone] = useState('6285846051072');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here we would typically make an API call to update the profile
    toast.success('Profil berhasil diperbarui');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col pl-64">
        <Header
          title="Profil"
          description="Perbarui foto dan detail pribadi Anda di sini"
        />

        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col space-y-8">
              {/* Profile Card (Left) */}
              <div className="bg-white rounded-lg p-8 shadow-sm w-full">
                <h2 className="text-xl font-semibold mb-6">Gambar Profil</h2>
                
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 relative mb-4">
                    <Avatar className="w-full h-full">
                      <AvatarImage 
                        src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                        className="object-cover"
                        alt="Profile Picture" 
                      />
                      <AvatarFallback>MK</AvatarFallback>
                    </Avatar>
                  </div>
                  <h3 className="text-xl font-medium">Mochamad Khopid</h3>
                  <p className="text-gray-500 mb-4">Admin</p>
                </div>
              </div>

              {/* Edit Profile Form (Right) */}
              <div className="bg-white rounded-lg p-8 shadow-sm w-full">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-blue-600">Edit Profil</h2>
                  <Button variant="outline" className="text-gray-600 border-gray-300">
                    Ubah Kata Sandi
                  </Button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Profile Image */}
                  <div className="mb-6">
                    <Label className="block mb-1 font-medium">
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
                          <Trash className="mr-2 h-4 w-4" />
                          Hapus
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Full Name */}
                  <div>
                    <Label htmlFor="name" className="block mb-1 font-medium">
                      Nama lengkap
                    </Label>
                    <Input 
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full"
                    />
                  </div>

                  {/* About */}
                  <div>
                    <Label htmlFor="about" className="block mb-1 font-medium">
                      Tentang<span className="text-red-500">*</span>
                    </Label>
                    <Textarea 
                      id="about"
                      value={about}
                      onChange={(e) => setAbout(e.target.value)}
                      className="w-full min-h-[100px]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="block mb-1 font-medium">
                      Email<span className="text-red-500">*</span>
                    </Label>
                    <Input 
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <Label htmlFor="phone" className="block mb-1 font-medium">
                      Telepon<span className="text-red-500">*</span>
                    </Label>
                    <Input 
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-end gap-4 pt-4">
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="px-8 py-6"
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
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;
