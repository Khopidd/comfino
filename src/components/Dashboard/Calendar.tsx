
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format, addMonths, subMonths } from "date-fns";

export const Calendar: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  
  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[#272742] text-2xl font-medium">
          {format(currentMonth, 'MMMM yyyy')}
        </h2>
        <div className="flex items-center gap-2">
          <button 
            className="p-1 text-gray-400 hover:text-gray-600"
            onClick={prevMonth}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            className="p-1 text-blue-600 hover:text-blue-700"
            onClick={nextMonth}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
      
      <div className="border-t border-slate-100 pt-6">
        <CalendarComponent
          mode="single"
          selected={date}
          onSelect={setDate}
          month={currentMonth}
          onMonthChange={setCurrentMonth}
          className="p-0 pointer-events-auto"
          classNames={{
            months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
            month: "space-y-4",
            caption: "hidden", // Hide the default caption since we have our own header
            caption_label: "text-sm font-medium",
            nav: "hidden", // Hide default navigation
            table: "w-full border-collapse space-y-1",
            head_row: "grid grid-cols-7 gap-5 text-center mb-6",
            head_cell: "text-[#272742] font-medium",
            row: "grid grid-cols-7 gap-5 text-center",
            cell: "h-10 w-10 text-center text-sm p-0 relative",
            day: "h-10 w-10 flex items-center justify-center rounded-full mx-auto hover:bg-blue-50",
            day_selected: "bg-blue-600 text-white font-bold shadow-lg shadow-blue-300/30",
            day_today: "bg-white text-[#272742]",
            day_outside: "text-slate-300",
            day_disabled: "text-slate-300"
          }}
        />
      </div>
    </div>
  );
};
