import React from 'react';

interface TimePickerProps {
  // Declaracion de tipado
  label?: string; // Label opcional para mostrar una leyenda
  value?: string; // Muestro el value en formato "HH:mm"
  onChange?: (value: string) => void; // Callback llamado cada vez que cambia el valor del timepicker
}

const TimePicker: React.FC<TimePickerProps> = ({
  label,
  value = '12:00',
  onChange,
}) => {
  const [hour, minute] = value.split(':').map(Number); // Tomo el valor de value, lo separo a partir del ':', y lo mapeo para tener hour y minute separado, ademas los cambio de string a number

  const handleHourChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newHour = e.target.value.padStart(2, '0'); // tomo el evento que disparo el onchange, el valor de su target, y le agrego al inicio un 0 si es que no tiene otro valor, ya que es solo 24hs

    onChange && onChange(`${newHour}:${String(minute).padStart(2, '0')}`);
    // Llamo al callback (si existe) y le paso un string en formato 'HH:mm'.
    // El minuto lo convierto con padStart para que tenga siempre dos dígitos
  };

  const handleMinuteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMinute = e.target.value.padStart(2, '0');
    onChange && onChange(`${String(hour).padStart(2, '0')}:${newMinute}`);
  };

  const hours = Array.from({ length: 24 }, (_, i) => i); // Creo un array de 24 posiciones y lo lleno con los números del 0 al 23 usando el índice de cada posición

  const minutes = Array.from({ length: 60 }, (_, i) => i);
  // Creo un array de 59 posiciones y lo lleno con los números del 0 al 59 usando el índice de cada posición

  return (
    <div className="flex flex-col gap-1 w-40">
      {/* Condicional del label */}
      {label && <label className="text-sm font-semibold">{label}</label>}

      <div className="flex gap-2 items-center">
        {/* Seleccionador de hora */}
        <select
          aria-label="Hour"
          value={hour}
          // Llamo a la CB cuando el value cambia, react pasa automaticamente el evento a la funcion
          onChange={handleHourChange}
          className="border border-gray-300 rounded p-2 cursor-pointer bg-[#323232]"
        >
          {/* //Mapeo las horas, creando un <option>, para cada posicion del array, con el valor de su propia posicion, y un string dentro rellenada con cero si es un solo digito */}
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
