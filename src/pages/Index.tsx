import React from 'react';
import { Sidebar } from '@/components/Layout/Sidebar';
import { Header } from '@/components/Layout/Header';
import { StatsCard } from '@/components/Dashboard/StatsCard';
import { Calendar } from '@/components/Dashboard/Calendar';
import { TransactionsTable } from '@/components/Dashboard/TransactionsTable';

const Index: React.FC = () => {
  return (
    <div className="bg-slate-50 overflow-hidden">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        {/* Sidebar */}
        <div className="w-[17%] max-md:w-full max-md:ml-0">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="w-[83%] ml-5 max-md:w-full max-md:ml-0">
          <div className="w-full max-md:max-w-full">
            <Header
              title="Dashboard"
              description="Informasi terperinci tentang keuangan komunitas Anda"
            />

            <div className="flex mt-[-88px] items-start gap-[31px] flex-wrap mr-8 max-md:mr-2.5">
              <div className="border-slate-100 border w-px shrink-0 h-[900px] border-solid" />
              
              <div className="grow shrink-0 basis-0 w-fit mt-[120px] max-md:max-w-full max-md:mt-10">
                {/* Stats Cards */}
                <div className="flex items-center gap-7 flex-wrap max-md:max-w-full">
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
                <div className="mt-8 max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                    {/* Analytics Chart */}
                    <div className="w-[67%] max-md:w-full max-md:ml-0">
                      <div className="shadow-[0px_0px_2px_rgba(0,0,0,0.12)] grow tracking-[0.2px] max-md:max-w-full max-md:mt-6">
                        <div className="bg-white w-full pt-[18px] pb-[33px] px-[25px] rounded-2xl max-md:max-w-full max-md:px-5">
                          <div className="flex w-full items-stretch gap-5 flex-wrap justify-between max-md:max-w-full">
                            <div className="text-lg text-[rgba(39,39,66,1)] font-medium whitespace-nowrap leading-[1.4] mt-1.5">
                              Analitik
                            </div>
                            <div className="flex gap-[18px] justify-center">
                              <button className="bg-blue-600 flex items-center gap-2 text-xs text-white font-bold leading-[1.4] justify-center p-3 rounded-xl">
                                <img
                                  src="https://cdn.builder.io/api/v1/image/assets/a081cd1bc6f9470c93dd0c6e6a2c349a/ed29f3609a7c28ef6b113e42f7f354fa53c6a021?placeholderIfAbsent=true"
                                  className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                                  alt="Download"
                                />
                                <span>Unduh Laporan</span>
                              </button>
                              <div className="bg-white border-slate-200 border flex min-h-12 items-center gap-8 text-sm text-slate-500 font-medium leading-[1.6] w-[120px] pl-4 pr-2.5 py-[13px] rounded-xl border-solid">
                                <span>Hari Ini</span>
                                <img
                                  src="https://cdn.builder.io/api/v1/image/assets/a081cd1bc6f9470c93dd0c6e6a2c349a/5cd480b6e102571b53f0845b3f6a360e7d4e6bf6?placeholderIfAbsent=true"
                                  className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                                  alt="Dropdown"
                                />
                              </div>
                            </div>
                          </div>
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/a081cd1bc6f9470c93dd0c6e6a2c349a/88e7a9fc7f6123d5c93382e97dcb241943dd5600?placeholderIfAbsent=true"
                            className="aspect-[2.47] object-contain w-full mt-[7px] rounded-[0px_0px_0px_0px] max-md:max-w-full"
                            alt="Analytics Chart"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Calendar */}
                    <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
                      <Calendar />
                    </div>
                  </div>
                </div>

                {/* Transactions Table */}
                <TransactionsTable />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
