
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Calendar: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[#272742] font-medium">Januari 2025</h2>
        <div className="flex items-center gap-2">
          <button className="p-1">
            <ChevronLeft className="h-4 w-4 text-gray-600" />
          </button>
          <button className="p-1">
            <ChevronRight className="h-4 w-4 text-gray-600" />
          </button>
        </div>
      </div>
      
      <div className="border-t border-slate-100 pt-4">
        <div className="grid grid-cols-7 gap-1 text-center text-sm text-gray-600 mb-2">
          {['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-1 text-center">
          {[
            [1, 2, 3, 4, 5, 6, 7],
            [8, 9, 10, 11, 12, 13, 14],
            [15, 16, 17, 18, 19, 20, 21],
            [22, 23, 24, 25, 26, 27, 28],
            [29, 30, 1, 2, 3, 4, 5]
          ].map((week, weekIndex) => (
            <React.Fragment key={weekIndex}>
              {week.map((day, dayIndex) => (
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  className={`p-2 rounded-full ${
                    day === 23 ? 'bg-blue-600 text-white font-medium' : ''
                  } ${weekIndex === 4 && dayIndex > 1 ? 'text-slate-300' : ''}`}
                >
                  {day}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
