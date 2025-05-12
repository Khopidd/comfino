
import React, { useState } from 'react';
import { format } from "date-fns";
import { CalendarIcon, Wallet } from "lucide-react";
import { Sidebar } from '@/components/Layout/Sidebar';
import { Header } from '@/components/Layout/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';

const SimpanUang: React.FC = () => {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState<Date>(new Date());
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!amount) {
      toast({
        description: "Silakan masukkan jumlah uang",
        variant: "destructive",
      });
      return;
    }

    // Here would be the API call to save the money
    toast({
      title: "Berhasil",
      description: `IDR${amount} berhasil disimpan`,
    });
    
    // Navigate back to dashboard
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col pl-64">
        <Header
          title="Simpan Uang"
          description="Tambahkan pendapatan baru ke dalam sistem"
        />

        <main className="flex-1 p-8">
          <div className="max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-sm space-y-6">
              {/* Amount Input */}
              <div className="space-y-2">
                <Label htmlFor="amount" className="text-base font-medium">
                  Jumlah* <span className="text-sm text-gray-500 ml-1">IDR</span>
                </Label>
                <Input
                  id="amount"
                  placeholder="1.234.567"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="text-base py-6"
                />
              </div>

              {/* Date Input */}
              <div className="space-y-2">
                <Label htmlFor="date" className="text-base font-medium">
                  Tanggal*
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="date"
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal py-6",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "dd/MM/yyyy") : <span>Pilih tanggal</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={(date) => date && setDate(date)}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 py-6 text-base"
              >
                Tambahkan Uang
              </Button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SimpanUang;
