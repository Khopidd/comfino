import React from 'react';
import { TransactionProps } from '@/types/dashboard';

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
  const statusStyles = {
    success: 'bg-[rgba(91,207,197,1)]',
    pending: 'bg-[rgba(246,167,35,1)]',
    canceled: 'bg-[rgba(246,65,89,1)]'
  };

  return (
    <div className={`self-stretch flex-1 shrink basis-[0%] ${statusStyles[status]} w-[93px] gap-2.5 my-auto py-1.5 rounded-[100px] text-white text-center`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </div>
  );
};

export const TransactionsTable: React.FC = () => {
  return (
    <div className="bg-white shadow-[0px_0px_2px_rgba(0,0,0,0.12)] relative w-full mt-8 pb-6 px-6 rounded-2xl max-md:max-w-full max-md:px-5">
      <div className="z-0 flex w-full flex-col pt-6 max-md:max-w-full max-md:pr-5">
        <div className="w-[618px] max-w-full pb-0.5">
          <h2 className="w-full text-xl text-[rgba(39,39,66,1)] font-medium max-md:max-w-full">
            Semua Catatan Keuangan
          </h2>
          <p className="text-slate-500 text-xs font-normal mt-2.5">
            Lihat semua riwayat keuangan acara
          </p>
        </div>
      </div>

      <div className="bg-white z-0 flex w-full items-center text-base text-[rgba(39,39,66,1)] font-normal tracking-[0.2px] justify-between flex-wrap mt-6 pb-6 rounded-2xl max-md:max-w-full">
        {/* Table Header */}
        <div className="w-full flex">
          <div className="w-[69px] bg-slate-50 min-h-14 font-semibold px-6 py-4 rounded-[16px_0px_0px_0px]">No</div>
          <div className="w-[210px] bg-slate-50 min-h-14 font-semibold px-6 py-4">Grup</div>
          <div className="w-[187px] bg-slate-50 min-h-14 font-semibold px-6 py-4">Jumlah</div>
          <div className="w-[275px] bg-slate-50 min-h-14 font-semibold px-6 py-4">Nama Acara</div>
          <div className="w-[165px] bg-slate-50 min-h-14 font-semibold px-6 py-4">Tanggal</div>
          <div className="w-[175px] bg-slate-50 min-h-14 font-semibold px-6 py-4 rounded-[0px_16px_0px_0px]">Status</div>
        </div>

        {/* Table Body */}
        {transactions.map((transaction) => (
          <div key={transaction.id} className="w-full flex">
            <div className="w-[69px] bg-white min-h-14 px-6 py-4">{transaction.id}.</div>
            <div className="w-[210px] bg-white min-h-14 px-6 py-4">{transaction.group}</div>
            <div className="w-[187px] bg-white min-h-14 px-6 py-4 text-[rgba(246,65,89,1)]">{transaction.amount}</div>
            <div className="w-[275px] bg-white min-h-14 px-6 py-4">{transaction.eventName}</div>
            <div className="w-[165px] bg-white min-h-14 px-6 py-4">{transaction.date}</div>
            <div className="w-[175px] bg-white min-h-14 flex items-center justify-center p-3">
              <StatusBadge status={transaction.status} />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border-slate-200 border absolute z-0 flex min-h-12 w-[120px] max-w-full items-center gap-8 text-sm text-slate-500 font-medium tracking-[0.2px] leading-[1.6] h-12 pl-4 pr-2.5 py-[13px] rounded-xl border-solid right-[25px] top-[35px]">
        <div className="self-stretch my-auto">Hari Ini</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/a081cd1bc6f9470c93dd0c6e6a2c349a/5cd480b6e102571b53f0845b3f6a360e7d4e6bf6?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
          alt="Dropdown"
        />
      </div>
    </div>
  );
};
