import React, { useState, useEffect } from 'react';

interface TimePickerProps {
  label?: string;
  value?: string; // formato "hh:mm AM/PM", ej: "02:30 PM"
  onChange?: (value: string) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({
  label,
  value = '12:00 PM',
  onChange,
}) => {
  // Parseo inicial del valor
  const parseValue = (val: string) => {
    const [time, meridian] = val.split(' ');
    const [h, m] = time.split(':');
    return {
      hour: parseInt(h, 10),
      minute: parseInt(m, 10),
      meridian: meridian as 'AM' | 'PM',
    };
  };

  const initial = parseValue(value);

  const [hour, setHour] = useState<number>(initial.hour);
  const [minute, setMinute] = useState<number>(initial.minute);
  const [meridian, setMeridian] = useState<'AM' | 'PM'>(initial.meridian);

  // Cuando cambia cualquier parte, notificamos al padre con el formato correcto
  useEffect(() => {
    const formatted = `${String(hour).padStart(2, '0')}:${String(
      minute
    ).padStart(2, '0')} ${meridian}`;
    onChange && onChange(formatted);
  }, [hour, minute, meridian, onChange]);

  // Arrays para opciones
  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  return (
    <div className="flex flex-col gap-1 w-40 ">
      {label && <label className="text-sm font-semibold">{label}</label>}
      <div className="flex gap-2 items-center">
        <select
          aria-label="Hour"
          value={hour}
          onChange={(e) => setHour(parseInt(e.target.value, 10))}
          className="border border-gray-300 rounded p-2 cursor-pointer bg-[#323232]"
        >
          {hours.map((h) => (
            <option key={h} value={h} className="">
              {h}
            </option>
          ))}
        </select>
        <span>:</span>
        <select
          aria-label="Minute"
          value={minute}
          onChange={(e) => setMinute(parseInt(e.target.value, 10))}
          className="border border-gray-300 rounded p-2  cursor-pointer bg-[#323232]"
        >
          {minutes.map((m) => (
            <option key={m} value={m}>
              {String(m).padStart(2, '0')}
            </option>
          ))}
        </select>
        <select
          aria-label="AM or PM"
          value={meridian}
          onChange={(e) => setMeridian(e.target.value as 'AM' | 'PM')}
          className="border border-gray-300 rounded p-2  cursor-pointer bg-[#323232]"
        >
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </div>
    </div>
  );
};

export default TimePicker;
