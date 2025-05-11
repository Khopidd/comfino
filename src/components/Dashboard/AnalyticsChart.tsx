
import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ChevronDown, Download } from 'lucide-react';

const data = [
  { month: 'Jun', pendapatan: 2000000, pengeluaran: 1000000 },
  { month: 'Jul', pendapatan: 5020000, pengeluaran: 2000000 },
  { month: 'Aug', pendapatan: 1500000, pengeluaran: 2650000 },
  { month: 'Sep', pendapatan: 3000000, pengeluaran: 1500000 },
  { month: 'Oct', pendapatan: 8000000, pengeluaran: 1800000 },
  { month: 'Nov', pendapatan: 4500000, pengeluaran: 2000000 },
  { month: 'Dec', pendapatan: 3000000, pengeluaran: 1700000 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const isExpense = payload[0].dataKey === 'pengeluaran';
    const value = payload[0].value;
    const formattedValue = isExpense ? `- IDR${(value).toLocaleString('id-ID')}` : `IDR${(value).toLocaleString('id-ID')}`;
    
    return (
      <div className="bg-[#4F5562] text-white p-4 rounded-lg shadow-lg">
        <p className="text-lg font-bold">{formattedValue}</p>
        <p className="text-sm text-gray-300">{label}, {isExpense ? '04' : '15'}</p>
      </div>
    );
  }

  return null;
};

const CustomizedDot = (props: any) => {
  const { cx, cy, payload, dataKey } = props;
  
  // Only show dots for specific points (July and September in this case)
  if ((payload.month === 'Jul' && dataKey === 'pendapatan') || 
      (payload.month === 'Sep' && dataKey === 'pengeluaran')) {
    return (
      <circle 
        cx={cx} 
        cy={cy} 
        r={5} 
        fill={dataKey === 'pendapatan' ? "#3377FF" : "#F64159"} 
        stroke="white" 
        strokeWidth={2}
      />
    );
  }
  
  return null;
};

export const AnalyticsChart: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl text-[#272742] font-medium">Analitik</h2>
          <div className="mt-4">
            <p className="text-gray-500">Total Pendapatan</p>
            <div className="flex items-center gap-2">
              <p className="text-3xl font-bold text-[#272742]">IDR25,500,000</p>
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

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorPendapatan" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3377FF" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#3377FF" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#f5f5f5" />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9CA3AF' }}
            />
            <YAxis 
              tickFormatter={(value) => `${value / 1000000}M`} 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: '#9CA3AF' }}
              domain={[0, 'dataMax + 2000000']}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="pendapatan" 
              stroke="#3377FF" 
              fillOpacity={1}
              fill="url(#colorPendapatan)" 
              strokeWidth={2}
              dot={<CustomizedDot />}
              activeDot={{ r: 8, fill: "#3377FF", stroke: "white", strokeWidth: 2 }}
            />
            <Area 
              type="monotone" 
              dataKey="pengeluaran" 
              stroke="#F64159" 
              fill="transparent"
              strokeWidth={2} 
              dot={<CustomizedDot />}
              activeDot={{ r: 8, fill: "#F64159", stroke: "white", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
