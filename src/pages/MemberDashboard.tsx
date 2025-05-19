
import React from 'react';
import { Sidebar } from '@/components/Layout/Sidebar';
import { Header } from '@/components/Layout/Header';
import { Button } from '@/components/ui/button';
import { Download, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MemberDashboard: React.FC = () => {
  const navigate = useNavigate();
  const currentMonth = 'Januari 2025';

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

  // Calendar data
  const daysOfWeek = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
  const days = Array.from({ length: 35 }, (_, i) => {
    const day = i + 1;
    return { day: day <= 31 ? day : null };
  });

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
          <div className="flex space-x-8">
            {/* Analytics */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Analitik</h2>

              <div className="bg-white p-6 rounded-xl shadow">
                <div className="mb-6">
                  <p className="text-gray-500">Total Pendapatan</p>
                  <div className="flex items-center mt-1">
                    <p className="text-3xl font-bold text-gray-800">IDR4,550,000</p>
                    <span className="ml-2 text-sm text-green-500">+2.4%</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div className="flex space-x-5">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                      <span className="text-gray-600">Pendapatan</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <span className="text-gray-600">Pengeluaran</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
                      <Download className="h-4 w-4" />
                      <span>Unduh Laporan</span>
                    </button>
                    <div className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-lg">
                      <span>Hari Ini</span>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                {/* Chart */}
                <div className="h-64 relative">
                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
                    <span>1M</span>
                    <span>500K</span>
                    <span>300K</span>
                    <span>200K</span>
                    <span>100K</span>
                  </div>
                  
                  {/* Chart area */}
                  <div className="pl-10 h-full relative">
                    <svg className="w-full h-full" viewBox="0 0 1000 200">
                      {/* Blue line (revenue) */}
                      <path 
                        d="M0,100 C50,80 100,120 150,70 S250,140 300,90 S400,150 450,50 S550,100 600,70 S700,140 750,90 S850,90 900,110"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="3"
                      />
                      {/* Area under blue line */}
                      <path 
                        d="M0,100 C50,80 100,120 150,70 S250,140 300,90 S400,150 450,50 S550,100 600,70 S700,140 750,90 S850,90 900,110 L900,200 L0,200 Z"
                        fill="url(#blueGradient)"
                        fillOpacity="0.1"
                      />
                      <defs>
                        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    {/* X-axis labels */}
                    <div className="flex justify-between text-xs text-gray-500 absolute bottom-0 left-0 right-0">
                      <span>Jun</span>
                      <span>Jul</span>
                      <span>Aug</span>
                      <span>Sep</span>
                      <span>Oct</span>
                      <span>Nov</span>
                      <span>Dec</span>
                    </div>

                    {/* Data points */}
                    <div className="absolute left-[30%] top-[35%] bg-gray-700 text-white p-2 rounded text-xs">
                      IDR 520,000<br/>Jul, 15
                    </div>
                    <div className="absolute left-[55%] top-[55%] bg-gray-700 text-white p-2 rounded text-xs">
                      - IDR250,000<br/>Sep, 04
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendar */}
            <div className="w-80">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">{currentMonth}</h2>
                <div className="flex space-x-2">
                  <button className="p-1 rounded border border-gray-200">
                    <ChevronLeft className="h-4 w-4 text-gray-500" />
                  </button>
                  <button className="p-1 rounded border border-gray-200">
                    <ChevronRight className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-2">
                  {/* Days of week */}
                  {daysOfWeek.map(day => (
                    <div key={day} className="text-center text-sm font-medium text-gray-600 mb-4">{day}</div>
                  ))}
                  
                  {/* Days */}
                  {days.map(({ day }, index) => (
                    <div 
                      key={index} 
                      className={`
                        h-8 w-8 flex items-center justify-center text-sm
                        ${day === 23 ? 'bg-blue-600 text-white rounded-full' : ''}
                        ${!day ? 'invisible' : ''}
                      `}
                    >
                      {day}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MemberDashboard;
