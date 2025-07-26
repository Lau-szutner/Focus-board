import React, { useState, useEffect } from 'react';

interface TimePickerProps {
  label?: string;
  value?: string; // formato "HH:mm"
  onChange?: (value: string) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({
  label,
  value = '12:00',
  onChange,
}) => {
  const [hour, minute] = value.split(':').map(Number);

  const handleHourChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newHour = e.target.value.padStart(2, '0');
    onChange && onChange(`${newHour}:${String(minute).padStart(2, '0')}`);
  };

  const handleMinuteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMinute = e.target.value.padStart(2, '0');
    onChange && onChange(`${String(hour).padStart(2, '0')}:${newMinute}`);
  };

  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  return (
    <div className="flex flex-col gap-1 w-40">
      {label && <label className="text-sm font-semibold">{label}</label>}
      <div className="flex gap-2 items-center">
        <select
          aria-label="Hour"
          value={hour}
          onChange={handleHourChange}
          className="border border-gray-300 rounded p-2 cursor-pointer bg-[#323232]"
        >
          {hours.map((h) => (
            <option key={h} value={h}>
              {String(h).padStart(2, '0')}
            </option>
          ))}
        </select>
        <span>:</span>
        <select
          aria-label="Minute"
          value={minute}
          onChange={handleMinuteChange}
          className="border border-gray-300 rounded p-2 cursor-pointer bg-[#323232]"
        >
          {minutes.map((m) => (
            <option key={m} value={m}>
              {String(m).padStart(2, '0')}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TimePicker;
