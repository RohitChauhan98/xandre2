'use client'
import React, { useState, useRef, useEffect } from "react";
import checkIn from '/public/assets/icons/checkInOut.png'
import arrowLeft from '/public/assets/arrowLeft.png'
import arrowRight from '/public/assets/arrowRight.png'
import calendar from '/public/assets/calendar.png'



const getDaysInMonth = (month: number, year: number) => {
  return new Array(31)
    .fill("")
    .map((_, i) => new Date(year, month, i + 1))
    .filter((date) => date.getMonth() === month);
};

const CustomDatePicker: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<"calendar" | "flexible">("calendar");

  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [secondCalendarYear, setSecondCalendarYear] = useState(new Date().getFullYear());


  const [stayDuration, setStayDuration] = useState<'weekend' | 'week' | 'month' | 'other'>('weekend');



  const datePickerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (datePickerRef.current && !(datePickerRef.current as HTMLElement).contains(event.target as Node)) {
        setIsOpen(false); // Close the dropdown if clicked outside
      }
    }

    // Attach the event listener when the dropdown is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleDateClick = (selectedDate: Date) => {
    if (!checkInDate || (checkInDate && checkOutDate)) {
      setCheckInDate(selectedDate);
      setCheckOutDate(null);
    } else if (checkInDate && !checkOutDate && selectedDate > checkInDate) {
      setCheckOutDate(selectedDate);
    }
  };

  const toggleCalendar = () => {
    setIsOpen(!isOpen);
  };

  const getNextSixMonths = (): { month: string; year: number }[] => {
    const currentDate = new Date();
    const nextSixMonths: { month: string; year: number }[] = [];

    for (let i = 0; i < 12; i++) {
      const futureDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + i);
      const monthName = futureDate.toLocaleString('default', { month: 'long' });
      const year = futureDate.getFullYear();

      nextSixMonths.push({ month: monthName, year });
    }

    return nextSixMonths;
  };

  const months = getNextSixMonths();


  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const daysInNextMonth = getDaysInMonth((currentMonth + 1) % 12, currentMonth >= 11 ? currentYear + 1 : currentYear);

  const firstDayInFirstMonth = new Array(daysInMonth[0]?.getDay()).fill(0);
  const firstDayInSecondMonth = new Array(daysInNextMonth[0]?.getDay()).fill(0);


  const nextMonth = () => {
    console.log("---->>>", currentMonth)
    setCurrentMonth((prevMonth) => (prevMonth + 1) % 12);
    if (currentMonth === 11) setCurrentYear((prevYear) => prevYear + 1);

  };



  const prevMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    if (currentMonth === 0) setCurrentYear((prevYear) => prevYear - 1);
  };

  return (
    <div className="flex items-center border p-2 rounded cursor-pointer relative" ref={datePickerRef}>
      <div className='flex gap-2 items-center cursor-pointer' onClick={toggleCalendar}>
        <img className='h-5' src={checkIn.src} alt="" />
        <input
          type="text"
          placeholder="Select check-in"
          readOnly
          value={checkInDate && checkOutDate ? checkInDate.toLocaleDateString("en-GB", { weekday: 'short', day: 'numeric', month: 'short' }) + " - " + checkOutDate.toLocaleDateString("en-GB", { weekday: 'short', day: 'numeric', month: 'short' }) : ""}
          className="outline-none cursor-pointer w-[180px]"
        />
      </div>

      {isOpen && (
        <div className="absolute top-[100%] bg-white shadow-lg border w-[700px]">
          <div className="relative" style={{ zIndex: 100 }}>
            <div className="flex justify-evenly py-4">
              <button onClick={() => setMode("calendar")} className={`${mode === "calendar" ? "bg-black text-white" : "border border-glass-400 text-glass-400"} rounded-full px-8 py-[6px] font-light`}>Calendar</button>
              <button onClick={() => setMode("flexible")} className={`${mode === "flexible" ? "bg-black text-white" : "border border-glass-400 text-glass-400"} rounded-full  px-8 py-[6px] font-light`}>I'm Flexible</button>
            </div>
            <div className=" flex gap-6 border-t border-gold-200 mx-5 pt-2">

              {mode === "calendar" ? <>
                <div className=" bg-white mt-2 rounded  z-50 w-full">
                  <div className="flex justify-between mb-2 bg-button-gradient p-2 rounded-t-md">
                    <button onClick={prevMonth}><img className="h-2" src={arrowLeft.src} alt="" /></button>
                    <span className="font-semibold text-oxford-blue">{`${new Date(currentYear, currentMonth).toLocaleString("default", {
                      month: "long",
                    })} ${currentYear}`}</span>
                    <button></button>
                  </div>

                  <div className="grid grid-cols-7 gap-2">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                      <div key={day} className="text-center font-semibold text-sm text-lion-200">
                        {day}
                      </div>
                    ))}

                    {firstDayInFirstMonth.map(() => {
                      return <div>

                      </div>
                    })}


                    {daysInMonth.map((date) => (
                      <div
                        key={date.toDateString()}
                        onClick={() => handleDateClick(date)}
                        className={`text-center cursor-pointer p-2 rounded ${checkInDate &&
                          date.toDateString() === checkInDate.toDateString()
                          ? "bg-blue-500 text-white"
                          : checkOutDate &&
                            date.toDateString() === checkOutDate.toDateString()
                            ? "bg-green-500 text-white"
                            : "hover:bg-gray-200"
                          }`}
                      >
                        {date.getDate()}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white mt-2 rounded z-50 w-full">
                  <div className="flex justify-between mb-2 bg-button-gradient p-2 rounded-t-md">
                    <button ></button>
                    <span className="font-semibold text-oxford-blue">{`${new Date(currentYear, currentMonth + 1).toLocaleString("default", {
                      month: "long",
                      year: "numeric",
                    })}`}</span>
                    <button onClick={nextMonth}><img className="h-2" src={arrowRight.src} alt="" /></button>
                  </div>

                  <div className="grid grid-cols-7 gap-2">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                      <div key={day} className="text-center font-semibold text-sm text-lion-200">
                        {day}
                      </div>
                    ))}

                    {firstDayInSecondMonth.map(() => {
                      return <div>

                      </div>
                    })}

                    {daysInNextMonth.map((date) => (
                      <div
                        key={date.toDateString()}
                        onClick={() => handleDateClick(date)}
                        className={`text-center cursor-pointer p-2 rounded ${checkInDate &&
                          date.toDateString() === checkInDate.toDateString()
                          ? "bg-blue-500 text-white"
                          : checkOutDate &&
                            date.toDateString() === checkOutDate.toDateString()
                            ? "bg-green-500 text-white"
                            : "hover:bg-gray-200"
                          }`}
                      >
                        {date.getDate()}
                      </div>
                    ))}
                  </div>
                </div>
              </> : <div className="w-full pb-5">
                <p className="font-medium my-2">How long do you stay?</p>
                <div className="flex gap-4 mb-5">
                  <button onClick={() => setStayDuration('weekend')} className={`${stayDuration === "weekend" ? "bg-black text-white" : "border border-glass-400 text-glass-400"} rounded-full text-sm  px-5 py-[4px] font-light`}>A weekend</button>
                  <button onClick={() => setStayDuration('week')} className={`${stayDuration === "week" ? "bg-black text-white" : "border border-glass-400 text-glass-400"} rounded-full text-sm  px-5 py-[4px] font-light`}>A week</button>
                  <button onClick={() => setStayDuration('month')} className={`${stayDuration === "month" ? "bg-black text-white" : "border border-glass-400 text-glass-400"} rounded-full text-sm  px-5 py-[4px] font-light`}>A month</button>
                  <button onClick={() => setStayDuration('other')} className={`${stayDuration === "other" ? "bg-black text-white" : "border border-glass-400 text-glass-400"} rounded-full text-sm  px-5 py-[4px] font-light`}>Other</button>
                </div>

                <p className="font-medium my-2">When do you want to go?</p>
                <div className="overflow-x-scroll no-scrollbar">
                  <div className="flex gap-2 w-fit">
                    {
                      months.map((data, index) => {
                        return <div key={index} className={`${"" === "" ? "bg-black text-white" : "border border-glass-400 text-glass-400"} rounded-lg text-xs p-2 h-[80px] w-[80px] text-center font-light`}>
                          <img className="h-4 m-1 mx-auto" src={calendar.src} alt="" />
                          <p className="text-sm">{data.month}</p>
                          <p>{data.year}</p>
                        </div>
                      })
                    }
                  </div>

                </div>
              </div>}

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;
