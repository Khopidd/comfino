
import React from 'react';
import { Sidebar } from '@/components/Layout/Sidebar';
import { Header } from '@/components/Layout/Header';
import { Button } from '@/components/ui/button';
import { Download, ChevronDown } from 'lucide-react';
import { AnalyticsChart } from '@/components/Dashboard/AnalyticsChart'; 
import { Calendar } from '@/components/Dashboard/Calendar';
import { useNavigate } from 'react-router-dom';

const MemberDashboard: React.FC = () => {
  const navigate = useNavigate();

  // Transactions data
  const transactions = [
    {
      id: 1,
      name: "Musyawarah Besar",
      amount: "- IDR2.450.000",
      date: "27, Jan 2025",
      status: "success"
    },
    {
      id: 2,
      name: "Makrab",
      amount: "- IDR280.000",
      date: "27, Jan 2025",
      status: "pending"
    },
    {
      id: 3,
      name: "Sewa Barang",
      amount: "- IDR1.525.000",
      date: "27, Jan 2025",
      status: "canceled"
    },
    {
      id: 4,
      name: "Buat PDH Hima",
      amount: "- IDR750.000",
      date: "27, Jan 2025",
      status: "success"
    }
  ];

  // Render status badge
  const renderStatusBadge = (status: string) => {
    switch (status) {
      case 'success':
        return <div className="bg-[#5BCFC5] text-white rounded-full px-6 py-2 text-center">Success</div>;
      case 'pending':
        return <div className="bg-[#F6A723] text-white rounded-full px-6 py-2 text-center">Pending</div>;
      case 'canceled':
        return <div className="bg-[#F64159] text-white rounded-full px-6 py-2 text-center">Canceled</div>;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      <Sidebar userRole="member" />
      
      <div className="flex-1 flex flex-col pl-64">
        <Header
          title="Member Dashboard"
          description="Kelola keuangan divisi Anda"
          userRole="member"
        />

        <main className="p-8">
          {/* Division Card */}
          <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 to-purple-900 text-white rounded-2xl mb-8">
            <div className="relative z-10 px-8 py-6">
              <div className="flex justify-between">
                <h2 className="text-xl font-medium mb-12">Divisi Mlbb</h2>
                <div className="bg-white/20 rounded-full p-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h1 className="text-5xl font-bold mb-2">IDR4.550.000</h1>
              <p className="opacity-80">Pengeluaran Divisi</p>
            </div>
            <img 
              src="/lovable-uploads/61317b3b-9e89-4eaa-b018-344e77dfaf47.png" 
              alt="Division banner" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30 z-0"
            />
          </div>

          {/* Financial Records Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Semua Catatan Keuangan</h2>
                <p className="text-gray-500 text-sm mt-1">Lihat semua riwayat keuangan acara</p>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <span className="mr-2">Pengajuan Baru</span>
                <span className="text-lg">+</span>
              </Button>
            </div>

            {/* Table */}
            <div className="mt-6 bg-white rounded-lg shadow overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left py-4 px-6 font-medium text-gray-800">No</th>
                    <th className="text-left py-4 px-6 font-medium text-gray-800">Nama Acara</th>
                    <th className="text-left py-4 px-6 font-medium text-gray-800">Jumlah</th>
                    <th className="text-left py-4 px-6 font-medium text-gray-800">Tanggal</th>
                    <th className="text-left py-4 px-6 font-medium text-gray-800">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <tr key={transaction.id} className="border-b border-gray-100">
                      <td className="py-4 px-6 text-gray-800">{transaction.id}.</td>
                      <td className="py-4 px-6 font-medium text-gray-800">{transaction.name}</td>
                      <td className="py-4 px-6 text-red-500">{transaction.amount}</td>
                      <td className="py-4 px-6 text-gray-600">{transaction.date}</td>
                      <td className="py-4 px-6">{renderStatusBadge(transaction.status)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Analytics and Calendar Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            {/* Analytics Chart - using the same component as admin dashboard */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl text-[#272742] font-medium">Analitik</h2>
                    <div className="mt-4">
                      <p className="text-gray-500">Total Pengeluaran</p>
                      <div className="flex items-center gap-2">
                        <p className="text-3xl font-bold text-[#272742]">IDR4,550,000</p>
                        <span className="text-sm text-green-500">+2.4%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl">
                      <Download className="h-5 w-5" />
                      <span className="font-semibold">Unduh Laporan</span>
                    </button>
                    <div className="flex items-center border border-slate-200 rounded-xl px-6 py-3 text-slate-600">
                      <span>Hari Ini</span>
                      <ChevronDown className="h-4 w-4 ml-3" />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-6 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                    <span className="text-gray-600">Pendapatan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                    <span className="text-gray-600">Pengeluaran</span>
                  </div>
                </div>

                {/* Use the same AnalyticsChart component as in the admin dashboard */}
                <AnalyticsChart />
              </div>
            </div>

            {/* Calendar - using the same component as admin dashboard */}
            <div>
              <Calendar />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MemberDashboard;
