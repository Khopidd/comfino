
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Sidebar } from '@/components/Layout/Sidebar';
import { Header } from '@/components/Layout/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Pencil, Trash2, Eye } from 'lucide-react';
import { toast } from 'sonner';

interface FinancialRecord {
  id: number;
  eventName: string;
  amount: string;
  date: string;
}

// Mock data for the groups
const groupsData = [
  {
    id: 1,
    name: 'Divisi Mlbb',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    amount: 'IDR4.550.000'
  },
  {
    id: 2,
    name: 'Divisi Eksternal',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
    amount: 'IDR10.300.000'
  },
  {
    id: 3,
    name: 'Divisi Internal',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    amount: 'IDR7.200.000'
  }
];

// Mock financial records for each group
const financialRecords: Record<string, FinancialRecord[]> = {
  'divisi-mlbb': [
    { id: 1, eventName: 'Biaya Tourney', amount: 'IDR2.450.000', date: '27, Jan 2025' },
    { id: 2, eventName: 'Scream', amount: 'IDR280.000', date: '27, Jan 2025' },
    { id: 3, eventName: 'Jearsey', amount: 'IDR1.525.000', date: '27, Jan 2025' },
    { id: 4, eventName: 'Jearsey', amount: 'IDR750.000', date: '27, Jan 2025' },
  ],
  'divisi-eksternal': [
    { id: 1, eventName: 'Workshop', amount: 'IDR5.200.000', date: '27, Jan 2025' },
    { id: 2, eventName: 'Hosting Event', amount: 'IDR3.100.000', date: '27, Jan 2025' },
    { id: 3, eventName: 'Marketing', amount: 'IDR2.000.000', date: '27, Jan 2025' },
  ],
  'divisi-internal': [
    { id: 1, eventName: 'Team Building', amount: 'IDR3.500.000', date: '27, Jan 2025' },
    { id: 2, eventName: 'Office Supplies', amount: 'IDR1.200.000', date: '27, Jan 2025' },
    { id: 3, eventName: 'Training', amount: 'IDR2.500.000', date: '27, Jan 2025' },
  ]
};

const GrupDetail: React.FC = () => {
  const { groupId } = useParams<{ groupId: string }>();
  const navigate = useNavigate();
  const [groupName, setGroupName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Find the group based on the URL parameter
  const normalizedGroupId = groupId?.toLowerCase().replace(/\s+/g, '-');
  const currentGroup = groupsData.find(group => 
    group.name.toLowerCase().replace(/\s+/g, '-') === normalizedGroupId
  );

  // Get the financial records for this group
  const records = financialRecords[normalizedGroupId || ''] || [];

  // Initialize form fields with current group data
  React.useEffect(() => {
    if (currentGroup) {
      setGroupName(currentGroup.name);
      setUsername(currentGroup.name.toLowerCase().replace(/\s+/g, '-'));
    }
  }, [currentGroup]);

  const handleDeleteGroup = () => {
    toast.success(`Grup ${currentGroup?.name} berhasil dihapus`);
    navigate('/komunitas');
  };

  const breadcrumbTitle = "Komunitas / Semua Grup / " + (currentGroup?.name || "");

  if (!currentGroup) {
    return (
      <div className="min-h-screen bg-slate-50 flex">
        <Sidebar />
        <div className="flex-1 flex flex-col pl-64">
          <div className="p-8">
            <h1 className="text-2xl font-medium">Grup Tidak Ditemukan</h1>
            <p className="text-slate-500 mb-4">Grup yang Anda cari tidak tersedia</p>
            <Button onClick={() => navigate('/komunitas')}>
              Kembali ke Komunitas
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      <Sidebar />
      <div className="flex-1 flex flex-col pl-64">
        <Header title="Komunitas" description={breadcrumbTitle} />
        <main className="flex-1 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Group Info Card - Left Side */}
            <div className="space-y-6">
              {/* Group Header Card */}
              <div className="rounded-2xl overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={currentGroup.image} 
                    alt={currentGroup.name} 
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white">
                    <h1 className="text-2xl font-semibold mb-1">{currentGroup.name}</h1>
                    <div className="text-4xl font-bold mb-2">{currentGroup.amount}</div>
                    <div className="text-lg">Pengeluaran Divisi</div>
                  </div>
                </div>
              </div>

              {/* Group Settings Form */}
              <div className="bg-white rounded-2xl p-6">
                {/* Group Name Field */}
                <div className="mb-6">
                  <Label htmlFor="groupName" className="block mb-1 font-medium text-[#272742]">
                    Nama Grup<span className="text-red-500">*</span>
                  </Label>
                  <p className="text-xs text-slate-500 mb-2">Sertakan min. 10 karakter</p>
                  <Input 
                    id="groupName" 
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                    className="w-full"
                    minLength={10}
                    required
                  />
                </div>
                
                {/* Username Field */}
                <div className="mb-6">
                  <Label htmlFor="username" className="block mb-1 font-medium text-[#272742]">
                    Username<span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    id="username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full"
                    required
                  />
                </div>
                
                {/* Password Field */}
                <div className="mb-8">
                  <Label htmlFor="password" className="block mb-1 font-medium text-[#272742]">
                    Password
                  </Label>
                  <div className="relative">
                    <Input 
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pr-10"
                    />
                    <Eye 
                      className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 cursor-pointer" 
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  </div>
                </div>
                
                {/* Delete Group Button */}
                <Button 
                  variant="outline" 
                  className="w-full py-3 border-red-300 text-red-500 hover:bg-red-50 font-medium"
                  onClick={handleDeleteGroup}
                >
                  Hapus Grup
                </Button>
              </div>
            </div>

            {/* Financial Records Table - Right Side */}
            <div className="bg-white rounded-2xl p-6">
              <div className="mb-6">
                <h2 className="text-xl font-medium text-[#272742]">Semua Catatan Keuangan</h2>
                <p className="text-slate-500 text-xs mt-1">Lihat semua riwayat keuangan acara</p>
              </div>

              <div className="bg-slate-50 rounded-lg">
                <div className="grid grid-cols-5 gap-2 text-left text-[#272742] font-medium p-4">
                  <div className="px-4">No</div>
                  <div className="px-4">Nama Acara</div>
                  <div className="px-4">Jumlah</div>
                  <div className="px-4">Tanggal</div>
                  <div className="px-4">Status</div>
                </div>
              </div>

              <div className="bg-white">
                {records.map((record) => (
                  <div key={record.id} className="grid grid-cols-5 gap-2 border-b border-slate-50 py-4">
                    <div className="px-4">{record.id}.</div>
                    <div className="px-4">{record.eventName}</div>
                    <div className="px-4 text-[#F64159]">- {record.amount}</div>
                    <div className="px-4">{record.date}</div>
                    <div className="px-4">
                      <div className="flex space-x-2">
                        <Button size="icon" variant="outline" className="h-8 w-8 p-1.5 bg-blue-500 text-white hover:bg-blue-600 border-none rounded-lg">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="outline" className="h-8 w-8 p-1.5 bg-red-500 text-white hover:bg-red-600 border-none rounded-lg">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GrupDetail;
