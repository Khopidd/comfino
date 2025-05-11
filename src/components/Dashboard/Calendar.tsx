import React from 'react';

export const Calendar: React.FC = () => {
  return (
    <div className="bg-white shadow-[0px_0px_2px_rgba(0,0,0,0.12)] flex min-h-[387px] grow flex-col items-stretch justify-center w-full px-6 py-[42px] rounded-2xl max-md:mt-6 max-md:px-5">
      <div className="w-full">
        <div className="flex w-full items-center gap-[40px_100px] justify-between">
          <div className="text-[rgba(39,39,66,1)] text-base font-semibold tracking-[0.2px] self-stretch my-auto">
            Januari 2025
          </div>
          <div className="self-stretch flex items-center gap-2 justify-center my-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a081cd1bc6f9470c93dd0c6e6a2c349a/a39a3df1288370445e99488a5dfb74c1ce3866e5?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
              alt="Previous"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a081cd1bc6f9470c93dd0c6e6a2c349a/a35fc1d5c3ff5b8c86a4b74bd49c4045905cb9e8?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
              alt="Next"
            />
          </div>
        </div>
        <div className="border-slate-100 border min-h-px w-full mt-4 border-solid" />
      </div>
      
      <div className="w-full text-xs text-[rgba(39,39,66,1)] font-normal whitespace-nowrap text-center leading-[1.6] mt-6">
        {/* Weekday headers */}
        <div className="flex w-full items-center gap-[3px] font-medium justify-between">
          {['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map((day) => (
            <div key={day} className="self-stretch w-10 my-auto p-2.5 rounded-[1000px]">
              {day}
            </div>
          ))}
        </div>
        
        {/* Calendar grid */}
        {[
          [1, 2, 3, 4, 5, 6, 7],
          [8, 9, 10, 11, 12, 13, 14],
          [15, 16, 17, 18, 19, 20, 21],
          [22, 23, 24, 25, 26, 27, 28],
          [29, 30, 1, 2, 3, 4, 5]
        ].map((week, weekIndex) => (
          <div key={weekIndex} className="flex w-full items-center gap-[5px] justify-between">
            {week.map((day, dayIndex) => (
              <div
                key={`${weekIndex}-${dayIndex}`}
                className={`self-stretch w-10 my-auto p-2.5 rounded-[1000px] ${
                  day === 23 ? 'bg-blue-600 shadow-[4px_8px_18px_rgba(37,99,235,0.3)] text-white font-bold' : ''
                } ${weekIndex === 4 && dayIndex > 1 ? 'text-slate-400' : ''}`}
              >
                {day}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
