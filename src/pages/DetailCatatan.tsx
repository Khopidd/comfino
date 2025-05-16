
import React from 'react';
import { Header } from '@/components/Layout/Header';
import { Button } from '@/components/ui/button';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const DetailCatatan = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header title="Detail Catatan" description="Grup catatan informasi detail" />
      
      <main className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/komunitas">Komunitas</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Detail Catatan</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Form Details */}
          <div className="col-span-2 bg-white rounded-lg p-6 shadow-sm">
            <h1 className="text-xl font-semibold mb-6">Detail Catatan</h1>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Acara<span className="text-red-500">*</span></label>
                <p className="border border-gray-200 rounded-md px-4 py-3 bg-gray-50">Tournament Mlbb</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Masukkan Jumlah<span className="text-red-500">*</span> <span className="text-xs text-gray-500">IDR</span>
                </label>
                <div className="flex items-center">
                  <p className="border border-gray-200 rounded-md px-4 py-3 bg-gray-50 w-full">2.450.000</p>
                  <button className="ml-2 text-blue-500">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.7167 7.51667L12.4833 8.28333L4.93333 15.8333H4.16667V15.0667L11.7167 7.51667ZM14.7167 2.5C14.5083 2.5 14.2917 2.58333 14.1333 2.74167L12.6083 4.26667L15.7333 7.39167L17.2583 5.86667C17.5833 5.54167 17.5833 5.01667 17.2583 4.69167L15.3083 2.74167C15.1417 2.575 14.9333 2.5 14.7167 2.5ZM11.7167 5.15833L2.5 14.375V17.5H5.625L14.8417 8.28333L11.7167 5.15833Z" fill="#3377FF"/>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Detail Acara<span className="text-red-500">*</span></label>
                <p className="text-xs text-gray-500 mb-2">Setidaknya min. 50 karakter untuk detail acara</p>
                <div className="border border-gray-200 rounded-md p-4 bg-gray-50 min-h-[120px]">
                  <p>Acara ini menjadi wadah bagi seluruh anggota untuk menyampaikan aspirasi, berdiskusi, serta mengambil keputusan strategis secara demokratis.</p>
                  <br />
                  <p>Rangkaian Kegiatan:</p>
                  <ul className="list-none space-y-2 mt-2">
                    <li className="flex">
                      <span className="text-blue-500 mr-2">◆</span>
                      <span>Pembukaan – Sambutan dari panitia dan pimpinan organisasi.</span>
                    </li>
                    <li className="flex">
                      <span className="text-blue-500 mr-2">◆</span>
                      <span>Laporan Pertanggungjawaban – Evaluasi kinerja kepengurusan sebelumnya.</span>
                    </li>
                    <li className="flex">
                      <span className="text-blue-500 mr-2">◆</span>
                      <span>Pembahasan AD/ART – Revisi dan pengesahan Anggaran Dasar dan Anggaran Rumah Tangga organisasi.</span>
                    </li>
                    <li className="flex">
                      <span className="text-blue-500 mr-2">◆</span>
                      <span>Penyusunan Program Kerja – Perencanaan kegiatan dan strategi organisasi untuk periode mendatang.</span>
                    </li>
                    <li className="flex">
                      <span className="text-blue-500 mr-2">◆</span>
                      <span>Pemilihan Kepengurusan Baru – Pemilihan ketua dan pengurus baru melalui mekanisme yang telah ditetapkan.</span>
                    </li>
                    <li className="flex">
                      <span className="text-blue-500 mr-2">◆</span>
                      <span>Penutupan – Pernyataan resmi penutupan musyawarah dan serah terima kepengurusan.</span>
                    </li>
                  </ul>
                  <br />
                  <p>Musyawarah Besar ini diharapkan dapat menjadi momentum bagi seluruh anggota untuk berpartisipasi aktif dalam pembangunan organisasi yang lebih baik, serta menciptakan kepemimpinan yang visioner dan berintegritas. Mari bersama-sama berkontribusi untuk masa depan organisasi yang lebih maju!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - File Upload and Date */}
          <div className="col-span-1 space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-medium mb-2">File Pendukung<span className="text-red-500">*</span></h2>
              <p className="text-sm text-gray-500 mb-4">Seperti: tanda terima, foto rencana acara, dll.</p>
              
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/b711622a-e4e1-4c68-b80f-efc5a5abae49.png" 
                  alt="Tournament banner" 
                  className="w-full rounded-md mb-2 h-auto object-cover"
                />
                
                <div className="flex gap-2 mt-2">
                  <div className="w-24 h-16 rounded overflow-hidden">
                    <img 
                      src="/lovable-uploads/b711622a-e4e1-4c68-b80f-efc5a5abae49.png" 
                      alt="Mobile legends logo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-24 h-16 rounded overflow-hidden">
                    <img 
                      src="/lovable-uploads/b711622a-e4e1-4c68-b80f-efc5a5abae49.png" 
                      alt="Tournament details" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="mb-4">
                <h2 className="text-lg font-medium mb-4">Tanggal</h2>
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <div className="border border-gray-200 rounded-md px-4 py-3 text-center">
                      <p className="text-gray-600 text-sm">Hari</p>
                      <p className="font-medium">7</p>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="border border-gray-200 rounded-md px-4 py-3 text-center">
                      <p className="text-gray-600 text-sm">Tanggal kustom</p>
                      <p className="font-medium">29/01/2025</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Catatan<span className="text-red-500">*</span></label>
                <div className="border border-gray-200 rounded-md px-4 py-3 bg-gray-50 min-h-[80px] flex items-center justify-center text-gray-400 text-sm">
                  Masukkan catatan disini*
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" className="w-1/2">Tolak</Button>
              <Button className="w-1/2 bg-blue-500 hover:bg-blue-600">Disetujui</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DetailCatatan;
