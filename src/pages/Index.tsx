
import React from 'react';
import { Sidebar } from '@/components/Layout/Sidebar';
import { Header } from '@/components/Layout/Header';
import { StatsCard } from '@/components/Dashboard/StatsCard';
import { Calendar } from '@/components/Dashboard/Calendar';
import { TransactionsTable } from '@/components/Dashboard/TransactionsTable';
import { AnalyticsChart } from '@/components/Dashboard/AnalyticsChart';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <div className="w-64 flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-64">
        <Header
          title="Dashboard"
          description="Informasi terperinci tentang keuangan komunitas Anda"
        />

        <main className="flex-1 p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              icon="https://cdn.builder.io/api/v1/image/assets/a081cd1bc6f9470c93dd0c6e6a2c349a/9252ac5c27dfe7849a17601ef90302c362174e4d?placeholderIfAbsent=true"
              title="Total Pendapatan"
              value="IDR25.500.000"
              hasAddButton
            />
            <StatsCard
              icon="https://cdn.builder.io/api/v1/image/assets/a081cd1bc6f9470c93dd0c6e6a2c349a/0d444ab2fc27f763b1d9335dda1a46cd9a09402c?placeholderIfAbsent=true"
              title="Total Pengajuan"
              value="250"
            />
            <StatsCard
              icon="https://cdn.builder.io/api/v1/image/assets/a081cd1bc6f9470c93dd0c6e6a2c349a/330c339a597575f7d5e63fea7b570c993e3ef815?placeholderIfAbsent=true"
              title="Pendapatan"
              value="IDR34.150.000"
            />
            <StatsCard
              icon="https://cdn.builder.io/api/v1/image/assets/a081cd1bc6f9470c93dd0c6e6a2c349a/7f30762852841ee2380846f0150831e87272d270?placeholderIfAbsent=true"
              title="Pengeluaran"
              value="IDR8.650.000"
            />
          </div>

          {/* Analytics and Calendar Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            {/* Analytics Chart */}
            <div className="lg:col-span-2">
              <AnalyticsChart />
            </div>

            {/* Calendar */}
            <div>
              <Calendar />
            </div>
          </div>

          {/* Transactions Table */}
          <TransactionsTable />
        </main>
      </div>
    </div>
  );
};

export default Index;
