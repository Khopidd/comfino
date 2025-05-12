
import React, { useState } from 'react';
import { Sidebar } from '@/components/Layout/Sidebar';
import { Header } from '@/components/Layout/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Trash2, ArrowLeft, ArrowRight, Upload, Eye, X } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Komunitas: React.FC = () => {
  // State for the new group dialog
  const [groupDialogOpen, setGroupDialogOpen] = useState(false);
  
  // Mock data for groups
  const groups = [
    {
      id: 1,
      name: 'Divisi Mlbb',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
      date: '27 Januari 2025',
      amount: 'IDR4.550.000'
    },
    {
      id: 2,
      name: 'Divisi Eksternal',
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
      date: '27 Januari 2025',
      amount: 'IDR10.300.000'
    },
    {
      id: 3,
      name: 'Divisi Internal',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
      date: '27 Januari 2025',
      amount: 'IDR7.200.000'
    }
  ];

  // Mock data for admin users
  const adminUsers = [
    {
      id: 1,
      name: 'Ajis Maulana S',
      photo: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
      role: 'Admin'
    },
    {
      id: 2,
      name: 'Mochamad Khopid',
      photo: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
      role: 'Admin'
    },
    {
      id: 3,
      name: 'Moch Azka',
      photo: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
      role: 'Admin'
    },
    {
      id: 4,
      name: 'Elsa',
      photo: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      role: 'Admin'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col pl-64">
        <Header
          title="Komunitas"
          description="Informasi terperinci tentang grup dan akun Anda"
        />

        <main className="flex-1 p-8">
          {/* Groups Section */}
          <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Semua Grup</h2>
                <p className="text-sm text-gray-500">Lihat daftar semua grup</p>
              </div>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 gap-2 rounded-lg"
                onClick={() => setGroupDialogOpen(true)}
              >
                <Plus className="h-5 w-5" /> Grup Baru
              </Button>
            </div>

            {/* Group Cards - Optimized Carousel with fewer moving parts */}
            <div className="overflow-hidden relative">
              <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
                {groups.map(group => (
                  <div key={group.id} className="min-w-[300px] flex-shrink-0">
                    <Card className="overflow-hidden border rounded-lg h-full">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={group.image} 
                          alt={group.name} 
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-gray-500 mb-1">Dibuat: {group.date}</p>
                        <h3 className="font-medium text-xl text-gray-800 mb-1">{group.name}</h3>
                        <p className="font-semibold text-gray-800 text-lg mb-4">{group.amount}</p>
                        <Button variant="outline" className="w-full text-blue-600 border-blue-200 hover:bg-blue-50">
                          Lihat Grup
                        </Button>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Admin Users Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-semibold">Daftar Akun Admin</h2>
                <p className="text-sm text-gray-500">Lihat semua akun admin di bawah ini</p>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="mr-2 h-4 w-4" /> Akun Baru
              </Button>
            </div>

            {/* Admin Users Table */}
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-28">Foto</TableHead>
                  <TableHead>Akun</TableHead>
                  <TableHead>Jenis Pengguna</TableHead>
                  <TableHead className="text-right">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {adminUsers.map(user => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="w-12 h-12 rounded-lg overflow-hidden">
                        <img 
                          src={user.photo} 
                          alt={user.name} 
                          className="w-full h-full object-cover"
                          loading="lazy" 
                        />
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="icon" className="text-red-500 border-red-100 hover:bg-red-50 hover:text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </main>
      </div>

      {/* New Group Dialog */}
      <Dialog open={groupDialogOpen} onOpenChange={setGroupDialogOpen}>
        <DialogContent className="sm:max-w-md bg-white p-0 rounded-lg overflow-hidden">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-xl font-semibold">Grup Baru</DialogTitle>
          </DialogHeader>
          
          <div className="p-6">
            {/* Profile Group Upload */}
            <div className="mb-6">
              <Label htmlFor="groupPhoto" className="block mb-1 font-medium">
                Profile Group<span className="text-red-500">*</span>
              </Label>
              <p className="text-sm text-gray-500 mb-3">
                Format yang didukung: PNG/JPG, Resolusi maksimal 500 x 250, Ukuran file maksimal 5.0 MB
              </p>
              
              <div className="border-2 border-dashed border-blue-200 rounded-md bg-blue-50/50 p-8 flex flex-col items-center justify-center">
                <Upload className="h-8 w-8 text-blue-600 mb-2" />
                <p className="text-blue-600 text-sm text-center">
                  Seret dan Jatuhkan di sini, Atau Pilih dari File
                </p>
              </div>
            </div>
            
            {/* Group Name */}
            <div className="mb-6">
              <Label htmlFor="groupName" className="block mb-1 font-medium">
                Group Name<span className="text-red-500">*</span>
              </Label>
              <Input 
                id="groupName" 
                placeholder="Nama grup" 
                className="w-full"
              />
            </div>
            
            {/* Username */}
            <div className="mb-6">
              <Label htmlFor="username" className="block mb-1 font-medium">
                Username<span className="text-red-500">*</span>
              </Label>
              <Input 
                id="username" 
                placeholder="Username" 
                className="w-full"
              />
            </div>
            
            {/* Password */}
            <div className="mb-8">
              <Label htmlFor="password" className="block mb-1 font-medium">
                Password
              </Label>
              <div className="relative">
                <Input 
                  id="password"
                  type="password"
                  placeholder="Password" 
                  className="w-full pr-10"
                />
                <Eye className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            {/* Action Buttons */}
            <DialogFooter className="flex space-x-4 pb-2">
              <Button variant="outline" className="flex-1 py-6" onClick={() => setGroupDialogOpen(false)}>
                Batal
              </Button>
              <Button className="flex-1 py-6 bg-blue-600 hover:bg-blue-700">
                Buat Grup
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Komunitas;
