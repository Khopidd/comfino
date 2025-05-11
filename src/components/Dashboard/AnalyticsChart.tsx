
import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ChevronDown, Download } from 'lucide-react';

const data = [
  { month: 'Jun', pendapatan: 2000000, pengeluaran: 1000000 },
  { month: 'Jul', pendapatan: 5020000, pengeluaran: 2000000 },
  { month: 'Aug', pendapatan: 3000000, pengeluaran: 2650000 },
  { month: 'Sep', pendapatan: 4500000, pengeluaran: 1500000 },
  { month: 'Oct', pendapatan: 3700000, pengeluaran: 1800000 },
  { month: 'Nov', pendapatan: 5000000, pengeluaran: 2000000 },
  { month: 'Dec', pendapatan: 4200000, pengeluaran: 1700000 },
];

export const AnalyticsChart: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl text-[#272742] font-medium">Analitik</h2>
          <div className="mt-4 text-[#272742]">
            <p className="text-sm">Total Pendapatan</p>
            <div className="flex items-center gap-2">
              <p className="text-xl font-semibold">IDR25,500,000</p>
              <span className="text-xs text-green-500">+2.4%</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
            <Download className="h-4 w-4" />
            <span>Unduh Laporan</span>
          </button>
          <div className="flex items-center border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-500">
            <span>Hari Ini</span>
            <ChevronDown className="h-4 w-4 ml-2" />
          </div>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorPendapatan" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563EB" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis 
              tickFormatter={(value) => `${value / 1000000}M`} 
              axisLine={false} 
              tickLine={false}
              ticks={[0, 1000000, 2000000, 3000000, 4000000, 5000000]}
            />
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f1f1f1" />
            <Tooltip />
            <Area 
              type="monotone" 
              dataKey="pendapatan" 
              stroke="#2563EB" 
              fillOpacity={1}
              fill="url(#colorPendapatan)" 
              strokeWidth={2}
              name="Pendapatan"
            />
            <Area 
              type="monotone" 
              dataKey="pengeluaran" 
              stroke="#F64159" 
              fill="transparent"
              strokeWidth={2} 
              name="Pengeluaran" 
              activeDot={{ r: 6, fill: "#F64159", stroke: "white", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-600"></div>
          <span className="text-xs text-gray-500">Pendapatan</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#F64159]"></div>
          <span className="text-xs text-gray-500">Pengeluaran</span>
        </div>
      </div>
    </div>
  );
};
