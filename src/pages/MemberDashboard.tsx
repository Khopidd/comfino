
import React from 'react';
import { Sidebar } from '@/components/Layout/Sidebar';
import { Header } from '@/components/Layout/Header';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Download, Calendar } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

const MemberDashboard: React.FC = () => {
  const navigate = useNavigate();

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

  const renderStatusBadge = (status: string) => {
    switch(status) {
      case 'success':
        return <span className="px-3 py-1 bg-teal-100 text-teal-500 rounded-full text-sm">Success</span>;
      case 'pending':
        return <span className="px-3 py-1 bg-amber-100 text-amber-500 rounded-full text-sm">Pending</span>;
      case 'canceled':
        return <span className="px-3 py-1 bg-red-100 text-red-500 rounded-full text-sm">Canceled</span>;
      default:
        return <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-sm">{status}</span>;
    }
  };

  // Current month calendar days
  const daysOfWeek = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
  const currentDate = new Date();
  
  // Generate calendar dates (simplified for the UI)
  const calendarDates = Array.from({ length: 35 }, (_, i) => {
    return i + 1;
  });

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* Sidebar */}
      <Sidebar userRole="member" />

      {/* Main content */}
      <div className="flex-1 ml-64">
        <Header title="Dashboard" description="Informasi terperinci tentang keuangan komunitas Anda" />

        <main className="p-8">
          {/* Division Card */}
          <div className="relative overflow-hidden bg-blue-600 text-white rounded-lg mb-8">
            <div className="p-8 flex flex-col h-[200px] justify-between">
              <div className="flex items-start justify-between">
                <h2 className="text-xl font-semibold">Divisi Mlbb</h2>
                <button className="bg-white/20 rounded-full p-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              <div>
                <h1 className="text-4xl font-bold mb-2">IDR4.550.000</h1>
                <p className="opacity-80">Pengeluaran Divisi</p>
              </div>
            </div>
            {/* Background image */}
            <img 
              src="/lovable-uploads/b711622a-e4e1-4c68-b80f-efc5a5abae49.png" 
              alt="Division background" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40 z-0"
            />
          </div>

          {/* Financial Records Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Semua Catatan Keuangan</h2>
              <Button variant="default" className="bg-blue-600">
                <span className="mr-2">Pengajuan Baru</span>
                <span className="text-lg">+</span>
              </Button>
            </div>
            <p className="text-gray-500 mb-4">Lihat semua riwayat keuangan acara</p>

            {/* Financial Records Table */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <Table>
                <TableHeader className="bg-slate-50">
                  <TableRow>
                    <TableHead>No</TableHead>
                    <TableHead>Nama Acara</TableHead>
                    <TableHead>Jumlah</TableHead>
                    <TableHead>Tanggal</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="text-gray-500">{transaction.id}.</TableCell>
                      <TableCell className="font-medium">{transaction.name}</TableCell>
                      <TableCell className="text-red-500">{transaction.amount}</TableCell>
                      <TableCell className="text-gray-500">{transaction.date}</TableCell>
                      <TableCell>{renderStatusBadge(transaction.status)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Analytics Section */}
          <div className="mb-8">
            <div className="flex items-start">
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Analitik</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="mb-6">
                    <div className="text-sm text-gray-500">Total Pendapatan</div>
                    <div className="text-2xl font-bold flex items-center gap-2">
                      IDR4,550,000
                      <span className="text-green-500 text-sm">+2.4%</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <span className="text-sm text-gray-600">Pendapatan</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-pink-400"></div>
                        <span className="text-sm text-gray-600">Pengeluaran</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        Unduh Laporan
                      </Button>
                      <select className="rounded-md border border-gray-200 px-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Hari Ini</option>
                        <option>Minggu Ini</option>
                        <option>Bulan Ini</option>
                      </select>
                    </div>
                  </div>

                  {/* Chart placeholder */}
                  <div className="h-64 bg-gray-50 rounded-md flex flex-col items-center justify-center relative">
                    {/* Line chart visualization - simplified for this example */}
                    <div className="w-full h-full relative">
                      <div className="absolute left-10 bottom-0 text-xs text-gray-500">Jun</div>
                      <div className="absolute left-[20%] bottom-0 text-xs text-gray-500">Jul</div>
                      <div className="absolute left-[35%] bottom-0 text-xs text-gray-500">Aug</div>
                      <div className="absolute left-[50%] bottom-0 text-xs text-gray-500">Sep</div>
                      <div className="absolute left-[65%] bottom-0 text-xs text-gray-500">Oct</div>
                      <div className="absolute left-[80%] bottom-0 text-xs text-gray-500">Nov</div>
                      <div className="absolute right-10 bottom-0 text-xs text-gray-500">Dec</div>
                      
                      <div className="absolute left-0 top-3 text-xs text-gray-500">1M</div>
                      <div className="absolute left-0 top-[25%] text-xs text-gray-500">500K</div>
                      <div className="absolute left-0 top-[45%] text-xs text-gray-500">300K</div>
                      <div className="absolute left-0 top-[65%] text-xs text-gray-500">200K</div>
                      <div className="absolute left-0 bottom-5 text-xs text-gray-500">100K</div>
                      
                      {/* The actual chart line would be implemented with a library like recharts */}
                      <svg className="w-full h-[80%] mt-5" viewBox="0 0 1000 200">
                        <path 
                          d="M50,100 C100,80 150,120 200,70 S300,140 350,90 S450,150 500,50 S600,100 650,70 S750,140 800,90 S900,90 950,110" 
                          fill="none" 
                          stroke="#3B82F6" 
                          strokeWidth="3"
                        />
                      </svg>
                      
                      {/* Sample data points */}
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
              <div className="ml-8 w-80">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Januari 2025</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1 rounded border border-gray-200">
                        <ArrowLeft className="h-4 w-4 text-gray-500" />
                      </button>
                      <button className="p-1 rounded border border-gray-200">
                        <ArrowRight className="h-4 w-4 text-gray-500" />
                      </button>
                    </div>
                  </div>

                  {/* Calendar grid */}
                  <div className="grid grid-cols-7 text-center gap-2">
                    {daysOfWeek.map((day, index) => (
                      <div key={index} className="text-sm font-medium text-gray-500">{day}</div>
                    ))}

                    {calendarDates.map((date, index) => {
                      if (date === 23) {
                        return (
                          <div key={index} className="aspect-square flex items-center justify-center rounded-full bg-blue-600 text-white">
                            {date}
                          </div>
                        );
                      }
                      return (
                        <div key={index} className="aspect-square flex items-center justify-center">
                          {date <= 31 ? date : ''}
                        </div>
                      );
                    })}
                  </div>
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
