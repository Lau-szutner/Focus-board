import React from 'react';
import EventCard from '@/app/components/EventCard';

// Creamos un array de horas de 7 AM a 6 PM
const hours = Array.from({ length: 12 }, (_, i) => `${7 + i} AM`);

const Board: React.FC = () => {
  return (
    <section className="w-full max-w-6xl mx-auto p-4 h-full">
      <h1 className="text-3xl font-bold mb-2">Board Dates</h1>
      <p className="text-xl text-neutral-600 mb-4">January</p>

      <div className="grid grid-cols-[0.1fr_1fr] gap-4 h-full">
        {/* Columna de horas */}
        <HoursColumn />

        {/* Columna de eventos */}
        <EventsColumn />
      </div>
    </section>
  );
};

export default Board;

const HoursColumn: React.FC = () => {
  return (
    <div className="bg-neutral-100 rounded-md p-4 text-sm flex flex-col">
      {hours.map((hour) => (
        <div key={hour} className="h-[100px] flex items-start text-neutral-500">
          {hour}
        </div>
      ))}
    </div>
  );
};

// ✅ Columna de eventos (dinámica más adelante)
const EventsColumn: React.FC = () => {
  return (
    <div className="bg-neutral-100 rounded-md p-4 text-sm flex flex-col gap-1">
      <EventCard
        title="Evento"
        description="Lorem LOREMDSADSAS"
        startTime={7}
        endTime={9}
      ></EventCard>
      <EventCard
        title="Evento"
        description="Lorem LOREMDSADSAS"
        startTime={9}
        endTime={10}
      ></EventCard>
    </div>
  );
};
