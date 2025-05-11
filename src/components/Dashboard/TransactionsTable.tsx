
import React from 'react';
import { TransactionProps } from '@/types/dashboard';
import { ChevronDown } from 'lucide-react';

const transactions: TransactionProps[] = [
  {
    id: 1,
    group: 'Divisi Logistik',
    amount: '- IDR2.450.000',
    eventName: 'Musyawarah Besar',
    date: '27, Jan 2025',
    status: 'success'
  },
  {
    id: 2,
    group: 'Divisi Eksternal',
    amount: '- IDR280.000',
    eventName: 'Makrab',
    date: '27, Jan 2025',
    status: 'pending'
  },
  {
    id: 3,
    group: 'Divisi Internal',
    amount: '- IDR1.525.000',
    eventName: 'Sewa Barang',
    date: '27, Jan 2025',
    status: 'canceled'
  },
  {
    id: 4,
    group: 'Divisi Logistik',
    amount: '- IDR750.000',
    eventName: 'Buat PDH Hima',
    date: '27, Jan 2025',
    status: 'success'
  }
];

const StatusBadge: React.FC<{ status: TransactionProps['status'] }> = ({ status }) => {
  const statusConfig = {
    success: {
      bg: 'bg-[#5BCFC5]',
      text: 'Success'
    },
    pending: {
      bg: 'bg-[#F6A723]',
      text: 'Pending'
    },
    canceled: {
      bg: 'bg-[#F64159]',
      text: 'Canceled'
    }
  };

  return (
    <div className={`${statusConfig[status].bg} text-white text-xs font-medium px-4 py-1.5 rounded-full w-24 text-center`}>
      {statusConfig[status].text}
    </div>
  );
};

export const TransactionsTable: React.FC = () => {
  return (
    <div className="bg-white shadow-sm rounded-2xl p-6 mt-8">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2 className="text-xl text-[#272742] font-medium">Semua Catatan Keuangan</h2>
          <p className="text-slate-500 text-xs mt-1">Lihat semua riwayat keuangan acara</p>
        </div>
        
        <div className="flex items-center border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-500">
          <span>Hari Ini</span>
          <ChevronDown className="h-4 w-4 ml-2" />
        </div>
      </div>

      <div className="mt-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-50 text-left text-[#272742] font-medium">
              <th className="py-4 px-4 rounded-tl-lg">No</th>
              <th className="py-4 px-4">Grup</th>
              <th className="py-4 px-4">Jumlah</th>
              <th className="py-4 px-4">Nama Acara</th>
              <th className="py-4 px-4">Tanggal</th>
              <th className="py-4 px-4 rounded-tr-lg">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-b border-slate-50">
                <td className="py-4 px-4">{transaction.id}.</td>
                <td className="py-4 px-4">{transaction.group}</td>
                <td className="py-4 px-4 text-[#F64159]">{transaction.amount}</td>
                <td className="py-4 px-4">{transaction.eventName}</td>
                <td className="py-4 px-4">{transaction.date}</td>
                <td className="py-4 px-4">
                  <StatusBadge status={transaction.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
