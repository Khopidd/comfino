
import React from 'react';
import { Sidebar } from '@/components/Layout/Sidebar';
import { Header } from '@/components/Layout/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Trash2 } from 'lucide-react';

const Komunitas: React.FC = () => {
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
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      date: '27 Januari 2025',
      amount: 'IDR10.300.000'
    },
    {
      id: 3,
      name: 'Divisi Internal',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
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
                <h2 className="text-xl font-semibold">Semua Grup</h2>
                <p className="text-sm text-gray-500">Lihat daftar semua grup</p>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="mr-2 h-4 w-4" /> Grup Baru
              </Button>
            </div>

            {/* Group Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
              {groups.map(group => (
                <Card key={group.id} className="overflow-hidden">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={group.image} 
                      alt={group.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-gray-500 mb-1">Dibuat: {group.date}</p>
                    <h3 className="font-medium text-lg mb-1">{group.name}</h3>
                    <p className="font-semibold text-gray-800 mb-4">{group.amount}</p>
                    <Button variant="outline" className="w-full">
                      Lihat Grup
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            
            {/* Pagination Controls */}
            <div className="flex justify-center mt-6">
              <div className="flex items-center">
                <button className="p-2 rounded-md border">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div className="mx-2 h-2 bg-gray-200 rounded-full w-72"></div>
                <button className="p-2 rounded-md border">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
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
                        <img src={user.photo} alt={user.name} className="w-full h-full object-cover" />
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
    </div>
  );
};

export default Komunitas;
