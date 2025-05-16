
import React from 'react';
import { Sidebar } from '@/components/Layout/Sidebar';
import { Header } from '@/components/Layout/Header';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Download, Calendar } from 'lucide-react';

const MemberDashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* Sidebar */}
      <Sidebar />

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
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-gray-600 text-sm">
                  <tr>
                    <th className="py-4 px-6">No</th>
                    <th className="py-4 px-6">Nama Acara</th>
                    <th className="py-4 px-6">Jumlah</th>
                    <th className="py-4 px-6">Tanggal</th>
                    <th className="py-4 px-6">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-4 px-6 text-gray-500">1.</td>
                    <td className="py-4 px-6 font-medium">Musyawarah Besar</td>
                    <td className="py-4 px-6 text-red-500">- IDR2.450.000</td>
                    <td className="py-4 px-6 text-gray-500">27, Jan 2025</td>
                    <td className="py-4 px-6">
                      <span className="px-3 py-1 bg-teal-100 text-teal-500 rounded-full text-sm">Success</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-500">2.</td>
                    <td className="py-4 px-6 font-medium">Makrab</td>
                    <td className="py-4 px-6 text-red-500">- IDR280.000</td>
                    <td className="py-4 px-6 text-gray-500">27, Jan 2025</td>
                    <td className="py-4 px-6">
                      <span className="px-3 py-1 bg-amber-100 text-amber-500 rounded-full text-sm">Pending</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-500">3.</td>
                    <td className="py-4 px-6 font-medium">Sewa Barang</td>
                    <td className="py-4 px-6 text-red-500">- IDR1.525.000</td>
                    <td className="py-4 px-6 text-gray-500">27, Jan 2025</td>
                    <td className="py-4 px-6">
                      <span className="px-3 py-1 bg-red-100 text-red-500 rounded-full text-sm">Canceled</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-500">4.</td>
                    <td className="py-4 px-6 font-medium">Buat PDH Hima</td>
                    <td className="py-4 px-6 text-red-500">- IDR750.000</td>
                    <td className="py-4 px-6 text-gray-500">27, Jan 2025</td>
                    <td className="py-4 px-6">
                      <span className="px-3 py-1 bg-teal-100 text-teal-500 rounded-full text-sm">Success</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Analytics Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
            <div className="flex justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Analitik</h2>
                <div className="text-sm text-gray-500">Total Pendapatan</div>
                <div className="text-2xl font-bold flex items-center gap-2">
                  IDR4,550,000
                  <span className="text-green-500 text-sm">+2.4%</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex items-center gap-1">
                  <Download className="h-4 w-4" />
                  Unduh Laporan
                </Button>
                <select className="rounded-md border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Hari Ini</option>
                  <option>Minggu Ini</option>
                  <option>Bulan Ini</option>
                </select>
              </div>
            </div>

            {/* Chart placeholder */}
            <div className="h-64 bg-gray-50 rounded-md flex items-center justify-center">
              <p className="text-gray-400">Chart visualization would go here</p>
            </div>

            <div className="flex mt-4 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-sm text-gray-600">Pendapatan</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-pink-400"></div>
                <span className="text-sm text-gray-600">Pengeluaran</span>
              </div>
            </div>
          </div>

          {/* Calendar Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-semibold text-gray-800">Januari 2025</h2>
                <div className="flex gap-1">
                  <button className="p-1 rounded border border-gray-200">
                    <ArrowLeft className="h-4 w-4 text-gray-500" />
                  </button>
                  <button className="p-1 rounded border border-gray-200">
                    <ArrowRight className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
              </div>
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 text-center gap-2">
              <div className="text-sm font-medium text-gray-500">Min</div>
              <div className="text-sm font-medium text-gray-500">Sen</div>
              <div className="text-sm font-medium text-gray-500">Sel</div>
              <div className="text-sm font-medium text-gray-500">Rab</div>
              <div className="text-sm font-medium text-gray-500">Kam</div>
              <div className="text-sm font-medium text-gray-500">Jum</div>
              <div className="text-sm font-medium text-gray-500">Sab</div>

              {[...Array(31)].map((_, i) => {
                if (i === 22) {
                  return (
                    <div key={i} className="aspect-square flex items-center justify-center rounded-full bg-blue-600 text-white">
                      23
                    </div>
                  );
                }
                return (
                  <div key={i} className="aspect-square flex items-center justify-center">
                    {i + 1}
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MemberDashboard;
